import express from "express";
import {
	getCategory,
	getSubCategory,
	getCategories,
	//getSubCategories,
	registerCategory,
	registerSubCategory,
	updateCategory,
	updateSubCategory,
	getProductsByCategory,
	getProductsBySubCategory,
	getAllSubCategories,
	getSubCategoriesByCategory,
	getCategoryName,
	// getSubCategory,
} from "../controllers/categoryController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router
	.route("/")
	.post(protect, admin, registerCategory)
	.get(getCategories);
router
	.route("/:id")
	.post(protect, admin, registerSubCategory)
	.put(protect, admin, updateCategory)
	.get(getCategory);
router
	.route("/update/:id")
	.get(getCategory)
router
	.route("/name/:id")
	.get(getCategoryName);

router.route("/:id/products").get(getProductsByCategory);

router
	.route("/:id/subcategory/products")
	.get(protect, getProductsBySubCategory);

//router.route("/:id/subcategory").get(protect, getSubCategories);
// router.route("/subcategory/:id").get(protect, getSubCategory);
	// .put(protect, admin, updateCategory);

// .get(protect, getSubCategories);
// router.route("/:id/subcategory").get(protect, getSubCategories);
router.route("/all/subcategories").get(protect, getAllSubCategories);

router
	.route("/subcategory/:sub_id")
	.get(protect, admin, getSubCategory)
	.put(protect, admin, updateSubCategory);
router
	.route("/subcategory/:id/category")
	.get(getSubCategoriesByCategory);
export default router;
