import express from 'express'
import {
    getOrderById,
    getOrders,
    getOrdersUser,
    registerOrder,
    updateOrderDelivered,
    updateOrderPaid
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router
    .route('/')
    .get(protect, admin, getOrders)
    .post(protect, registerOrder)
router.route('/user').get(protect, getOrdersUser)
router
    .route('/:id/deliver')
    .put(protect, admin, updateOrderDelivered)
router
    .route('/:id/pay')
    .put(protect, updateOrderPaid)
router.route('/:id').get(protect, getOrderById)


export default router