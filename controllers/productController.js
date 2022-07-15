import Product from "../models/productModel.js";
import { Category, SubCategory } from "../models/categoryModel.js";
// import products from '../../frontend/src/products.js'

// @desc Register Product
const registerProduct = async (req, res) => {
	try {
		const {
			name,
			inStock,
			price,
			brand,
			image,
			category,
			subCategory,
			description,
		} = req.body.name;
		// const image = images.url
		console.log("body", name, image.url, req.body);
		console.log(image.url);
		const created = await Product.create({
			name,
			inStock,
			category,
			subCategory,
			description,
			image: image.url,
			price,
			brand,
		});
		res.status(201).json({ created });
	} catch (error) {
		res.status(400);
		throw new error();
	}
};

const updateProduct = async (req, res) => {
	const { name, instock, price, brand, image, category, description } =
		req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name || product.name;
		product.instock = instock || product.instock;
		product.price = price || product.price;
		product.brand = brand || product.brand;
		product.image = image.url || product.image;
		product.category = category || product.category;
		product.description = description || product.description;
		const updated = await product.save();
		res.status(201).json({ updated });
	} else {
		res.status(401);
		throw new Error("Product not found");
	}
};

const updateRating = async (req, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		const isReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString(),
		);
		if (isReviewed) {
			res.status(400);
			throw new Error("Already reviewed product");
		}
		const review = {
			name: req.user.username,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};
		product.reviews.push(review);
		product.review_count = product.reviews.length;
		product.rating = product.reviews.reduce(
			(acc, item) => item.rating + acc,
			0,
		);

		await product.save();
		res.status(201).json({ message: "Review added" });
	} else {
		res.status(401);
		throw new Error("Product not found");
	}
};

const getProducts = async (req, res) => {
	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: "i",
				},
		  }
		: {};
	console.log(keyword);
	const limit = Number(req.query.limit) || 20;
	const page = Number(req.query.page);
	const skipIndex = (page <= 0 ? 0 : page - 1) * limit;

	// const products = await Product.find({}).limit(limit).skip(skipIndex);

	const products = await Product.find({ ...keyword })
		.limit(limit)
		.skip(skipIndex);
	console.log("product multiple sent", products);

	res.json(products);
};

const getProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
};

const deleteProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await product.remove();
		res.json({
			message: "Product succesfully removed",
		});
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
};

export {
	registerProduct,
	getProduct,
	getProducts,
	updateProduct,
	updateRating,
	deleteProduct,
};
