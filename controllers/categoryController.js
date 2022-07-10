import asyncHandler from "express-async-handler";
import { Category, SubCategory } from "../models/categoryModel.js";
import Product from "../models/productModel.js";

// @desc Register Category
const registerCategory = asyncHandler(async (req, res) => {
	try {
		const { name, image } = req.body;
		console.log(req.body);
		console.log(image)
		const created = await Category.create({
			name,
			image: image.url,
		});
		res.status(201).json({ created });
	} catch (error) {
		res.status(400);
		throw new Error("Category Creating Failed");
	}
});

// @desc Register SubCategory
const registerSubCategory = asyncHandler(async (req, res) => {
	/* try {
		const { name } = req.body;
		const category = await Category.findById(req.params.id);
		if (category) {
			const created = await SubCategory.create({
				name,
				category: categoryId,
				unit
			});
			res.status(201).json({ created });
		} else {
			res.status(404);
			throw new Error("Category Not Found");
		}
		} catch (error) {
			res.status(400);
			throw new error();
	} */
	console.log(req.body);
	try {
		const { name, categoryId, unit, image } = req.body;
		console.log(image);
		const created = await SubCategory.create({
			name,
			category: categoryId,
			unit,
			image: image.url,
		});
		res.status(201).json({ created });
	} catch (error) {
		res.status(400);
		throw new error();
	}
});

// @desc Get all categories
const getCategories = asyncHandler(async (req, res) => {
	const limit = Number(req.query.limit) || 10;
	const page = Number(req.query.page);
	const skipIndex = limit * (page <= 0 ? 0 : page - 1);
	const categories = await Category.find({}).limit(limit).skip(skipIndex);
	console.log(categories);
	res.json(categories);
});

const getCategory = asyncHandler(async (req, res) => {
	console.log(req.params.id)
	const category = await Category.findById(req.params.id);
	res.json(category);
});

const getCategoryName = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id);
	console.log(category.name);
	res.json(category.name);
});

// const getSubCategory = asyncHandler(async (req, res) => {
// 	const subCategory = await SubCategory.findById(req.params.id);
// 	res.json(subCategory);
// });

// @desc Get all sub categories

// @desc Get all sub categories based on a category

const getSubCategoriesByCategory = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id);
	if (category) {
		const limit = Number(req.query.limit) || 10;
		const page = Number(req.query.page);
		const skipIndex = limit * (page <= 0 ? 0 : page - 1);
		const categories = await SubCategory.where({ category: req.params.id })
			.limit(limit)
			.skip(skipIndex);
		res.json(categories);
		console.log(categories);
	} else {
		res.status(404);
		throw new Error("Category Not Found");
	}
});

const getProductsByCategory = asyncHandler(async (req, res) => {
	const limit = Number(req.query.limit) || 20;
	const page = Number(req.query.page);
	const skipIndex = (page <= 0 ? 0 : page - 1) * limit;
	const products = await Product.where({
		category: req.params.id,
	})
		.limit(limit)
		.skip(skipIndex);
	res.json(products);
});

const getProductsBySubCategory = asyncHandler(async (req, res) => {
	const limit = Number(req.query.limit) || 20;
	const page = Number(req.query.page);
	const skipIndex = (page <= 0 ? 0 : page - 1) * limit;
	const products = await Product.where({
		subCategory: req.params.id,
	})
		.limit(limit)
		.skip(skipIndex);
	res.json(products);
});
// @desc Get all sub categories
const getAllSubCategories = asyncHandler(async (req, res) => {
	try {
		const limit = Number(req.query.limit) || 10;
		const page = Number(req.query.page);
		const skipIndex = limit * (page <= 0 ? 0 : page - 1);
		const subCategories = await SubCategory.find({})
			.limit(limit)
			.skip(skipIndex);
		console.log(subCategories);
		res.json(subCategories);
	} catch (error) {
		res.status(400);
		throw new error();
	}
});

// @desc Get sub category by ID
const getSubCategory = asyncHandler(async (req, res) => {
	console.log(req.params.sub_id);
	try {
		const limit = Number(req.query.limit) || 10;
		const page = Number(req.query.page);
		const skipIndex = limit * (page <= 0 ? 0 : page - 1);
		const categories = await SubCategory.findById(req.params.sub_id)
			.limit(limit)
			.skip(skipIndex);
		res.json(categories);
	} catch (error) {
		res.status(400);
		throw new error();
	}
});

// @desc Update category
const updateCategory = asyncHandler(async (req, res) => {
	const { name, image } = req.body;
	const category = await Category.findById(req.params.id);
	if (category) {
		category.name = name || category.name;
		category.image = image.url || category.image;
		const updatedCategory = await category.save();
		res.status(201);
		res.json(updatedCategory);
	} else {
		res.status(400);
		throw new Error("Category Not Found");
	}
});

// @desc Update category
const updateSubCategory = asyncHandler(async (req, res) => {
	const { name, categoryId, unit, image } = req.body;
	try {
		const subCategory = await SubCategory.findById(req.params.sub_id);
		if (subCategory) {
			subCategory.name = name || subCategory.name;
			subCategory.categoryId = categoryId || subCategory.categoryId;
			subCategory.unit = unit || subCategory.unit;
			subCategory.image = image.url || subCategory.image;
			const updatedSubCategory = await subCategory.save();
			res.status(201);
			res.json(updatedSubCategory);
		} else {
			res.status(400);
			throw new Error("Sub Category Not Found");
		}
	} catch (error) {
		res.status(400);
		throw new error();
	}
});

export {
	registerCategory,
	registerSubCategory,
	getCategory,
	getSubCategory,
	getCategories,
	getProductsByCategory,
	getProductsBySubCategory,
	updateCategory,
	updateSubCategory,
	getAllSubCategories,
	getSubCategoriesByCategory,
	getCategoryName,
	//getSubCategories,
};
