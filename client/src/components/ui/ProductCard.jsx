import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

// Star Rating Component
const StarRating = ({ rating = 0, totalStars = 5, showCount = false, reviewCount = 0 }) => {
  const stars = [];
  
  for (let i = 1; i <= totalStars; i++) {
    const isFilled = i <= Math.floor(rating);
    const isHalfFilled = i === Math.ceil(rating) && rating % 1 !== 0;
    
    stars.push(
      <svg
        key={i}
        className="w-3 h-3 sm:w-4 sm:h-4"
        fill={isFilled ? "currentColor" : isHalfFilled ? "url(#half-star)" : "none"}
        stroke="currentColor"
        strokeWidth={1}
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );
  }
  
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <div className="flex items-center text-gold">
        {stars}
      </div>
      {showCount && reviewCount > 0 && (
        <span className="text-gray-400 text-[10px] sm:text-xs">
          ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

const ProductCard = ({ 
  product, 
  showAddToCart = true, 
  showQuickView = false,
  className = "" 
}) => {
  const {
    id,
    name,
    description,
    price,
    originalPrice,
    image,
    category,
    slug,
    inStock = true,
    isNew = false,
    isBestSeller = false,
    rating = 0,
    reviewCount = 0
  } = product;

  const discountPercentage = originalPrice && price 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

 return (
    <div className={`product-card group h-[400px] sm:h-[600px] flex flex-col px-0 sm:px-0  hover:border-2 border-transparent hover:border-gold/60 rounded-lg transition-all duration-300 p-1 m-1 ${className}`}>
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg bg-black mb-2 sm:mb-6 h-1/2">
        <Link href={`/products/${slug || id}`}>
          <div className="relative h-48 sm:h-64 w-full">
            <Image
              src={image || '/product_image.jpg'}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {isNew && (
            <span className="bg-gold text-black text-xs font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
              NEW
            </span>
          )}
          {isBestSeller && (
            <span className="bg-gradient-to-r from-gold to-yellow-400 text-black text-xs font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
              BEST SELLER
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {showQuickView && (
            <button className="bg-black/80 text-gold p-2 rounded-full hover:bg-gold hover:text-black transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          )}
          <button className="bg-black/80 text-gold p-2 rounded-full hover:bg-gold hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1 sm:space-y-3 flex-grow flex flex-col px-1 sm:px-6 py-1 sm:py-4 h-1/2">
        {/* Category */}
        {category && (
          <span className="text-gold text-[10px] sm:text-xs font-medium uppercase tracking-wide">
            {category}
          </span>
        )}

        {/* Product Name */}
        <Link href={`/products/${slug || id}`}>
          <h3 className="font-playfair text-xs sm:text-[16px] font-semibold text-gold hover:text-gold/80 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-[10px] sm:text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Rating */}
        <StarRating 
          rating={rating} 
          showCount={true} 
          reviewCount={reviewCount} 
        />

        {/* Price */}
        <div className="flex items-center gap-1 sm:gap-3">
          <span className="text-gold text-sm sm:text-xl font-bold">
            ₹{price?.toLocaleString('en-IN')}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-gray-500 line-through text-xs sm:text-sm">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Actions */}
        {showAddToCart && (
          <div className="flex gap-1 sm:gap-3 pt-0.5 sm:pt-2 mt-auto">
            <Button 
              variant="luxury" 
              size="sm" 
              className="flex-1 text-[10px] sm:text-sm py-1 sm:py-2.5"
              disabled={!inStock}
            >
              {inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;