import { registerDiscount } from '../controllers/discountController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import express from 'express'

const router = express.Router()

router
    .route('/')
    .post(protect, admin, registerDiscount)

export default router