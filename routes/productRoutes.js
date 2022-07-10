import {
    registerProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    updateRating
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import express from 'express'

const router = express.Router()

router.route('/')
    .get(getProducts)
    .post(protect, admin, registerProduct)
router.route('/:id').get(getProduct)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct)
router.route('/:id/review').post(protect, updateRating)


export default router