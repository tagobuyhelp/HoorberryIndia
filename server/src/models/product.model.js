import mongoose from 'mongoose';
import slugify from 'slugify';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A product must have a title'],
        trim: true,
        maxlength: [200, 'A product title cannot be more than 200 characters']
    },
    description: {
        type: String,
        required: [true, 'A product must have a description'],
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    category: {
        type: String,
        required: [true, 'A product must have a category'],
        enum: {
            values: ['cosmetics', 'clothing', 'accessories'],
            message: 'Category must be either: cosmetics, clothing, or accessories'
        }
    },
    subCategory: {
        type: String,
        required: [true, 'A product must have a subcategory'],
        validate: {
            validator: function(value) {
                const validSubCategories = {
                    cosmetics: ['skincare', 'makeup', 'fragrance', 'haircare', 'bodycare'],
                    clothing: ['dresses', 'tops', 'bottoms', 'outerwear', 'lingerie', 'activewear'],
                    accessories: ['jewelry', 'bags', 'shoes', 'watches', 'scarves', 'belts', 'sunglasses']
                };
                return validSubCategories[this.category]?.includes(value);
            },
            message: 'Invalid subcategory for the selected category'
        }
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price'],
        min: [0, 'Price must be positive']
    },
    discountPrice: {
        type: Number,
        min: [0, 'Discount price must be positive'],
        validate: {
            validator: function(value) {
                return !value || value < this.price;
            },
            message: 'Discount price must be less than regular price'
        }
    },
    sku: {
        type: String,
        required: [true, 'A product must have a SKU'],
        unique: true,
        trim: true,
        uppercase: true
    },
    stock: {
        type: Number,
        required: [true, 'A product must have stock information'],
        min: [0, 'Stock cannot be negative'],
        default: 0
    },
    images: {
        type: [String],
        required: [true, 'A product must have at least one image'],
        validate: {
            validator: function(val) {
                return val.length > 0;
            },
            message: 'A product must have at least one image'
        }
    },
    tags: {
        type: [String],
        default: []
    },
    metaTitle: {
        type: String,
        trim: true,
        maxlength: [60, 'Meta title cannot be more than 60 characters']
    },
    metaDescription: {
        type: String,
        trim: true,
        maxlength: [160, 'Meta description cannot be more than 160 characters']
    },
    // Additional luxury e-commerce fields
    brand: {
        type: String,
        trim: true
    },
    material: {
        type: String,
        trim: true
    },
    color: {
        type: [String],
        default: []
    },
    size: {
        type: [String],
        default: []
    },
    weight: {
        type: Number,
        min: [0, 'Weight must be positive']
    },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
        unit: {
            type: String,
            enum: ['cm', 'inch'],
            default: 'cm'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating must be at least 0'],
        max: [5, 'Rating cannot be more than 5'],
        set: val => Math.round(val * 10) / 10 // Round to 1 decimal place
    },
    reviewCount: {
        type: Number,
        default: 0,
        min: [0, 'Reviews count must be positive']
    },
    salesCount: {
        type: Number,
        default: 0,
        min: [0, 'Sales count must be positive']
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Indexes for better query performance
productSchema.index({ title: 'text', description: 'text', tags: 'text' });
productSchema.index({ slug: 1 });
productSchema.index({ category: 1 });
productSchema.index({ subCategory: 1 });
productSchema.index({ price: 1 });
productSchema.index({ rating: -1 });
productSchema.index({ sku: 1 });
productSchema.index({ isActive: 1 });
productSchema.index({ isFeatured: 1 });
productSchema.index({ brand: 1 });

// Pre-save hook to create slug from title
productSchema.pre('save', function (next) {
    if (!this.isModified('title')) return next();
    this.slug = slugify(this.title, { lower: true });
    next();
});

// Pre-save hook to auto-generate meta fields if not provided
productSchema.pre('save', function (next) {
    if (!this.metaTitle && this.title) {
        this.metaTitle = this.title.length > 60 ? this.title.substring(0, 57) + '...' : this.title;
    }
    if (!this.metaDescription && this.description) {
        // Strip HTML tags and truncate
        const plainDescription = this.description.replace(/<[^>]*>/g, '');
        this.metaDescription = plainDescription.length > 160 ? plainDescription.substring(0, 157) + '...' : plainDescription;
    }
    next();
});

// Virtual for formatted price
productSchema.virtual('formattedPrice').get(function () {
    if (typeof this.price === 'number') {
        return `₹${this.price.toFixed(2)}`;
    }
    return '₹0.00';
});

// Virtual for formatted discount price
productSchema.virtual('formattedDiscountPrice').get(function () {
    if (typeof this.discountPrice === 'number') {
        return `₹${this.discountPrice.toFixed(2)}`;
    }
    return null;
});

// Virtual for discount percentage
productSchema.virtual('discountPercentage').get(function () {
    if (this.discountPrice && this.price) {
        return Math.round(((this.price - this.discountPrice) / this.price) * 100);
    }
    return 0;
});

// Virtual for effective price (discount price if available, otherwise regular price)
productSchema.virtual('effectivePrice').get(function () {
    return this.discountPrice || this.price;
});

// Virtual for stock status
productSchema.virtual('stockStatus').get(function () {
    if (this.stock === 0) return 'out-of-stock';
    if (this.stock <= 5) return 'low-stock';
    return 'in-stock';
});

// Virtual for id field (maps _id to id for frontend compatibility)
productSchema.virtual('id').get(function () {
    return this._id ? this._id.toString() : null;
});

// Static method to get product stats
productSchema.statics.getProductStats = async function () {
    return this.aggregate([
        {
            $group: {
                _id: '$category',
                numProducts: { $sum: 1 },
                avgPrice: { $avg: '$price' },
                minPrice: { $min: '$price' },
                maxPrice: { $max: '$price' }
            }
        }
    ]);
};

// Static method to get featured products
productSchema.statics.getFeaturedProducts = function (limit = 10) {
    return this.find({ isFeatured: true, isActive: true })
        .sort({ rating: -1, salesCount: -1 })
        .limit(limit);
};

// Static method to get products by category
productSchema.statics.getByCategory = function (category, limit = 20) {
    return this.find({ category, isActive: true })
        .sort({ rating: -1, salesCount: -1 })
        .limit(limit);
};

// Instance method to check if product is on sale
productSchema.methods.isOnSale = function () {
    return this.discountPrice && this.discountPrice < this.price;
};

const Product = mongoose.model('Product', productSchema);

export default Product;