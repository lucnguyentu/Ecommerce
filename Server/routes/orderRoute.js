import express from 'express';
import {
    newOrder,
    myOrders,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
} from '../controllers/orderController.js';
import { isAuthenticatedUser, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.post('/order/new', isAuthenticatedUser, newOrder);
router.get('/order/:id', isAuthenticatedUser, getSingleOrder);
router.get('/orders/me', isAuthenticatedUser, myOrders);
router.get('/admin/orders', isAuthenticatedUser, authorizeRoles('admin'), getAllOrders);

router
    .route('/admin/order/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

export default router;
