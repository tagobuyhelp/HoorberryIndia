import { Router } from 'express';
import { 
    createProduct, 
    getAllProducts, 
    getProduct, 
    updateProduct, 
    deleteProduct, 
    getProductCategories,
    getProductSubCategories,
    getTopRatedProducts,
    getFeaturedProducts,
    getProductsByBrand,
    getProductsOnSale,
    getProductsByPriceRange,
    getNewArrivals,
    searchProducts,
    getRelatedProducts,
    getProductsByColor,
    getProductsBySize,
    updateProductStock,
    getLowStockProducts,
    bulkUpdateProducts,
    updateProductImages,
    getProductStats
} from '../controllers/product.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';
import { uploadMultiplePhotos } from '../middlewares/photoUpload.middleware.js';

const router = Router();

// Public routes
router.route('/').get(getAllProducts);
router.route('/categories').get(getProductCategories);
router.route('/subcategories/:category').get(getProductSubCategories);
router.route('/top-rated').get(getTopRatedProducts);
router.route('/featured').get(getFeaturedProducts);
router.route('/brand/:brand').get(getProductsByBrand);
router.route('/color/:color').get(getProductsByColor);
router.route('/size/:size').get(getProductsBySize);
router.route('/on-sale').get(getProductsOnSale);
router.route('/price-range').get(getProductsByPriceRange);
router.route('/new-arrivals').get(getNewArrivals);
router.route('/search').get(searchProducts);
router.route('/related/:id').get(getRelatedProducts);
router.route('/:id').get(getProduct);

// Protected routes (Admin only)
router.route('/').post(isAuthenticated, restrictTo('admin','super-admin'), uploadMultiplePhotos, createProduct);
router.route('/:id').put(isAuthenticated, restrictTo('admin','super-admin'), updateProduct);
router.route('/:id').delete(isAuthenticated, restrictTo('admin','super-admin'), deleteProduct);
router.route('/:id/stock').put(isAuthenticated, restrictTo('admin','super-admin'), updateProductStock);
router.route('/low-stock').get(isAuthenticated, restrictTo('admin','super-admin'), getLowStockProducts);
router.route('/bulk-update').put(isAuthenticated, restrictTo('admin','super-admin'), bulkUpdateProducts);
router.route('/:id/images').put(isAuthenticated, restrictTo('admin','super-admin'), uploadMultiplePhotos, updateProductImages);
router.route('/stats').get(isAuthenticated, restrictTo('admin','super-admin'), getProductStats);

export default router;