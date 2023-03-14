import express from 'express';

import {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateUserRole,
    deleteUser,
} from '../controllers/userController.js';
import { isAuthenticatedUser, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/password/forgot', forgotPassword);

router.put('/password/reset/:token', resetPassword);

router.get('/logout', logoutUser);

router.get('/me', isAuthenticatedUser, getUserDetails);

router.put('/password/update', isAuthenticatedUser, updatePassword);

router.put('/me/update', isAuthenticatedUser, updateProfile);

router.get('/admin/users', isAuthenticatedUser, authorizeRoles('admin'), getAllUser);

router.get('/admin/user/:id', isAuthenticatedUser, authorizeRoles('admin'), getSingleUser);

router
    .route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

export default router;
