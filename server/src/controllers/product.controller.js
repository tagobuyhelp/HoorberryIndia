import Product from '../models/product.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import uploadToCloudinary from '../utils/uploadToCloudinary.js';
import slugify from 'slugify';
import mongoose from 'mongoose';

/**
 * @desc    Create a new product
 * @route   POST /api/v1/products
 * @access  Private/Admin
 */
export const createProduct = async (req, res, next) => {
    try {
        const { title, sku } = req.body;
        
        // Check if product with same title exists
        const existingProduct = await Product.findOne({ title });
        if (existingProduct) {
            return next(new ApiError(400, 'Product with this title already exists'));
        }
        
        // Check if SKU already exists
        if (sku) {
            const existingSKU = await Product.findOne({ sku: sku.toUpperCase() });
            if (existingSKU) {
                return next(new ApiError(400, 'Product with this SKU already exists'));
            }
        }
        
        // Generate slug from title (this will be handled by the pre-save hook)
        // req.body.slug = slugify(title, { lower: true });
        
        // Handle image uploads if files are present
        if (req.files && req.files.length > 0) {
            const imagePromises = req.files.map(file => 
                uploadToCloudinary(file, 'products')
            );
            
            const uploadedImages = await Promise.all(imagePromises);
            req.body.images = uploadedImages.map(img => img.url);
        }
        
        const product = await Product.create(req.body);
        
        res.status(201).json(
            new ApiResponse(201, product, 'Product created successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get all products with filtering, sorting, pagination
 * @route   GET /api/v1/products
 * @access  Public
 */
export const getAllProducts = async (req, res, next) => {
    try {
        // BUILD QUERY
        // 1) Filtering
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields', 'search'];
        excludedFields.forEach(field => delete queryObj[field]);
        
        // Advanced filtering for price ranges, etc.
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `${match}`);
        
        let query = Product.find(JSON.parse(queryStr));
        
        // 2) Search functionality
        if (req.query.search) {
            query = query.find({ $text: { $search: req.query.search } });
        }
        
        // 3) Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }
        
        // 4) Field limiting
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }
        
        // 5) Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;
        
        query = query.skip(skip).limit(limit);
        
        // EXECUTE QUERY
        const products = await query;
        
        // Get total count for pagination info
        const totalProducts = await Product.countDocuments(JSON.parse(queryStr));
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit),
                resultsPerPage: limit
            }, 'Products retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get single product by ID or slug
 * @route   GET /api/v1/products/:id
 * @access  Public
 */
export const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        let product;
        
        // Check if id is a valid MongoDB ObjectId
        if (mongoose.Types.ObjectId.isValid(id)) {
            product = await Product.findById(id);
        } else {
            // If not a valid ObjectId, try to find by slug
            product = await Product.findOne({ slug: id });
        }
        
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        res.status(200).json(
            new ApiResponse(200, product, 'Product retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update product
 * @route   PUT /api/v1/products/:id
 * @access  Private/Admin
 */
export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        // If title is being updated, slug will be auto-generated by pre-save hook
        // If SKU is being updated, check for uniqueness
        if (req.body.sku) {
            const existingSKU = await Product.findOne({ 
                sku: req.body.sku.toUpperCase(),
                _id: { $ne: id }
            });
            if (existingSKU) {
                return next(new ApiError(400, 'Product with this SKU already exists'));
            }
        }
        
        // Handle image uploads if files are present
        if (req.files && req.files.length > 0) {
            const imagePromises = req.files.map(file => 
                uploadToCloudinary(file, 'products')
            );
            
            const uploadedImages = await Promise.all(imagePromises);
            req.body.images = uploadedImages.map(img => img.url);
        }
        
        const product = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        res.status(200).json(
            new ApiResponse(200, product, 'Product updated successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete product
 * @route   DELETE /api/v1/products/:id
 * @access  Private/Admin
 */
export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const product = await Product.findByIdAndDelete(id);
        
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        res.status(200).json(
            new ApiResponse(200, null, 'Product deleted successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get product categories
 * @route   GET /api/v1/products/categories
 * @access  Public
 */
export const getProductCategories = async (req, res, next) => {
    try {
        const categories = await Product.distinct('category');
        
        res.status(200).json(
            new ApiResponse(200, categories, 'Product categories retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get product subcategories by category
 * @route   GET /api/v1/products/subcategories/:category
 * @access  Public
 */
export const getProductSubCategories = async (req, res, next) => {
    try {
        const { category } = req.params;
        
        const subCategories = await Product.distinct('subCategory', { category });
        
        res.status(200).json(
            new ApiResponse(200, subCategories, `Subcategories for ${category} retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get top rated products
 * @route   GET /api/v1/products/top-rated
 * @access  Public
 */
export const getTopRatedProducts = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 10;
        const page = parseInt(req.query.page, 10) || 1;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ 
            isActive: true,
            rating: { $gte: 4.0 }
        })
        .sort({ rating: -1, reviewCount: -1 })
        .skip(skip)
        .limit(limit);
        
        const totalProducts = await Product.countDocuments({ 
            isActive: true,
            rating: { $gte: 4.0 }
        });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, 'Top rated products retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get featured products
 * @route   GET /api/v1/products/featured
 * @access  Public
 */
export const getFeaturedProducts = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 10;
        
        const products = await Product.getFeaturedProducts(limit);
        
        res.status(200).json(
            new ApiResponse(200, products, 'Featured products retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get related products
 * @route   GET /api/v1/products/:id/related
 * @access  Public
 */
export const getRelatedProducts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const limit = parseInt(req.query.limit, 10) || 4;
        
        // Find the current product
        const product = await Product.findById(id);
        
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        // Find products with the same category or subCategory, excluding the current product
        const relatedProducts = await Product.find({
            _id: { $ne: id },
            isActive: true,
            $or: [
                { category: product.category },
                { subCategory: product.subCategory },
                { brand: product.brand }
            ]
        })
        .sort({ rating: -1, salesCount: -1 })
        .limit(limit);
        
        res.status(200).json(
            new ApiResponse(200, relatedProducts, 'Related products retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get products by brand
 * @route   GET /api/v1/products/brand/:brand
 * @access  Public
 */
export const getProductsByBrand = async (req, res, next) => {
    try {
        const { brand } = req.params;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ 
            brand: new RegExp(brand, 'i'),
            isActive: true 
        })
        .sort({ rating: -1, salesCount: -1 })
        .skip(skip)
        .limit(limit);
        
        const totalProducts = await Product.countDocuments({ 
            brand: new RegExp(brand, 'i'),
            isActive: true 
        });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, `Products from brand '${brand}' retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get products on sale
 * @route   GET /api/v1/products/on-sale
 * @access  Public
 */
export const getProductsOnSale = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ 
            discountPrice: { $exists: true, $ne: null },
            isActive: true 
        })
        .sort({ discountPercentage: -1, rating: -1 })
        .skip(skip)
        .limit(limit);
        
        const totalProducts = await Product.countDocuments({ 
            discountPrice: { $exists: true, $ne: null },
            isActive: true 
        });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, 'Products on sale retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get products by price range
 * @route   GET /api/v1/products/price-range
 * @access  Public
 */
export const getProductsByPriceRange = async (req, res, next) => {
    try {
        const { min, max } = req.query;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        if (!min || !max) {
            return next(new ApiError(400, 'Please provide both min and max price values'));
        }
        
        const query = {
            $or: [
                { price: { $gte: min, $lte: max } },
                { discountPrice: { $gte: min, $lte: max } }
            ],
            isActive: true
        };
        
        const products = await Product.find(query)
            .sort({ rating: -1, salesCount: -1 })
            .skip(skip)
            .limit(limit);
        
        const totalProducts = await Product.countDocuments(query);
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, `Products in price range ₹${min} - ₹${max} retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get product stats
 * @route   GET /api/v1/products/stats
 * @access  Private/Admin
 */
export const getProductStats = async (req, res, next) => {
    try {
        // Total products count
        const totalProducts = await Product.countDocuments();
        
        // Products by category
        const productsByCategory = await Product.aggregate([
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            }
        ]);
        
        // Products by type
        const productsByType = await Product.aggregate([
            {
                $unwind: '$type'
            },
            {
                $group: {
                    _id: '$type',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            }
        ]);
        
        // Products by region
        const productsByRegion = await Product.aggregate([
            {
                $group: {
                    _id: '$region',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            }
        ]);
        
        // Average product price
        const avgPrice = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    avgPrice: { $avg: '$price' }
                }
            }
        ]);
        
        res.status(200).json(
            new ApiResponse(200, {
                totalProducts,
                productsByCategory,
                productsByType,
                productsByRegion,
                averagePrice: avgPrice.length > 0 ? avgPrice[0].avgPrice : 0
            }, 'Product statistics retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update product images
 * @route   PUT /api/v1/products/:id/images
 * @access  Private/Admin
 */
export const updateProductImages = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        // Check if product exists
        const product = await Product.findById(id);
        
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        // Handle image uploads if files are present
        if (!req.files || req.files.length === 0) {
            return next(new ApiError(400, 'Please upload at least one image'));
        }
        
        const imagePromises = req.files.map(file => 
            uploadToCloudinary(file, 'products')
        );
        
        const uploadedImages = await Promise.all(imagePromises);
        const newImages = uploadedImages.map(img => img.url);
        
        // Update product with new images
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { 
                $push: { 
                    images: { $each: newImages } 
                } 
            },
            { new: true }
        );
        
        res.status(200).json(
            new ApiResponse(200, updatedProduct, 'Product images updated successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Remove product image
 * @route   DELETE /api/v1/products/:id/images/:imageUrl
 * @access  Private/Admin
 */
export const removeProductImage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { imageUrl } = req.body;
        
        if (!imageUrl) {
            return next(new ApiError(400, 'Please provide the image URL to remove'));
        }
        
        // Check if product exists
        const product = await Product.findById(id);
        
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        // Check if image exists in product
        if (!product.images.includes(imageUrl)) {
            return next(new ApiError(404, 'Image not found in product'));
        }
        
        // Remove image from product
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $pull: { images: imageUrl } },
            { new: true }
        );
        
        // TODO: Consider deleting the image from Cloudinary as well
        
        res.status(200).json(
            new ApiResponse(200, updatedProduct, 'Product image removed successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get new arrivals
 * @route   GET /api/v1/products/new-arrivals
 * @access  Public
 */
export const getNewArrivals = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 10;
        const page = parseInt(req.query.page, 10) || 1;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ isActive: true })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        
        const totalProducts = await Product.countDocuments({ isActive: true });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, 'New arrivals retrieved successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Search products by title, description, brand, or tags
 * @route   GET /api/v1/products/search
 * @access  Public
 */
export const searchProducts = async (req, res, next) => {
    try {
        const { q } = req.query;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        if (!q) {
            return next(new ApiError(400, 'Search query is required'));
        }
        
        const searchRegex = new RegExp(q, 'i');
        
        const query = {
            $or: [
                { title: searchRegex },
                { description: searchRegex },
                { brand: searchRegex },
                { tags: { $in: [searchRegex] } }
            ],
            isActive: true
        };
        
        const products = await Product.find(query)
            .sort({ rating: -1, salesCount: -1 })
            .skip(skip)
            .limit(limit);
        
        const totalProducts = await Product.countDocuments(query);
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit),
                searchQuery: q
            }, `Search results for '${q}' retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Bulk update products
 * @route   PATCH /api/v1/products/bulk-update
 * @access  Private/Admin
 */
export const bulkUpdateProducts = async (req, res, next) => {
    try {
        const { products } = req.body;
        
        if (!products || !Array.isArray(products) || products.length === 0) {
            return next(new ApiError(400, 'Please provide an array of products to update'));
        }
        
        const updatePromises = products.map(product => {
            const { id, ...updateData } = product;
            
            // If name is being updated, update slug as well
            if (updateData.name) {
                updateData.slug = slugify(updateData.name, { lower: true });
            }
            
            return Product.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );
        });
        
        const updatedProducts = await Promise.all(updatePromises);
        
        res.status(200).json(
            new ApiResponse(200, updatedProducts, 'Products updated successfully')
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get products by color
 * @route   GET /api/v1/products/color/:color
 * @access  Public
 */
export const getProductsByColor = async (req, res, next) => {
    try {
        const { color } = req.params;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ 
            color: new RegExp(color, 'i'),
            isActive: true 
        })
        .sort({ rating: -1, salesCount: -1 })
        .skip(skip)
        .limit(limit);
        
        const totalProducts = await Product.countDocuments({ 
            color: new RegExp(color, 'i'),
            isActive: true 
        });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, `Products in ${color} color retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get products by size
 * @route   GET /api/v1/products/size/:size
 * @access  Public
 */
export const getProductsBySize = async (req, res, next) => {
    try {
        const { size } = req.params;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ 
            size: new RegExp(size, 'i'),
            isActive: true 
        })
        .sort({ rating: -1, salesCount: -1 })
        .skip(skip)
        .limit(limit);
        
        const totalProducts = await Product.countDocuments({ 
            size: new RegExp(size, 'i'),
            isActive: true 
        });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit)
            }, `Products in ${size} size retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update product stock
 * @route   PUT /api/v1/products/:id/stock
 * @access  Private/Admin
 */
export const updateProductStock = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { stock, operation } = req.body;
        
        if (!stock || !operation) {
            return next(new ApiError(400, 'Stock amount and operation type are required'));
        }
        
        if (!['add', 'subtract', 'set'].includes(operation)) {
            return next(new ApiError(400, 'Operation must be add, subtract, or set'));
        }
        
        const product = await Product.findById(id);
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        
        let newStock;
        switch (operation) {
            case 'add':
                newStock = product.stock + parseInt(stock);
                break;
            case 'subtract':
                newStock = Math.max(0, product.stock - parseInt(stock));
                break;
            case 'set':
                newStock = parseInt(stock);
                break;
        }
        
        product.stock = newStock;
        await product.save();
        
        res.status(200).json(
            new ApiResponse(200, product, `Product stock updated successfully. New stock: ${newStock}`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get low stock products
 * @route   GET /api/v1/products/low-stock
 * @access  Private/Admin
 */
export const getLowStockProducts = async (req, res, next) => {
    try {
        const threshold = parseInt(req.query.threshold, 10) || 10;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 20;
        const skip = (page - 1) * limit;
        
        const products = await Product.find({ 
            stock: { $lte: threshold },
            isActive: true 
        })
        .sort({ stock: 1 })
        .skip(skip)
        .limit(limit);
        
        const totalProducts = await Product.countDocuments({ 
            stock: { $lte: threshold },
            isActive: true 
        });
        
        res.status(200).json(
            new ApiResponse(200, {
                products,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit),
                threshold
            }, `Products with low stock (≤${threshold}) retrieved successfully`)
        );
    } catch (error) {
        next(error);
    }
};