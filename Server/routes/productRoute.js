import express from 'express';

import {
    createProduct,
    getAllProducts,
    updateProduct,
    getProductDetails,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts,
} from '../controllers/productController.js';
import { isAuthenticatedUser, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProductDetails);
router.get('/admin/products', isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles('admin'), createProduct);
router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

router.put('/review', isAuthenticatedUser, createProductReview);

router.route('/reviews').get(getProductReviews).delete(isAuthenticatedUser, deleteReview);

export default router;
