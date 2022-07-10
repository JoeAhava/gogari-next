import Mongoose from "mongoose";

// const UnitSchema = Mongoose.Schema({})

const reviewSchema = Mongoose.Schema(
	{
		name: { type: Mongoose.SchemaTypes.String, required: true },
		rating: { type: Mongoose.SchemaTypes.Number, required: true },
		comment: { type: Mongoose.SchemaTypes.String, required: false },
		user: {
			type: Mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

const ProductSchema = Mongoose.Schema(
	{
		name: {
			type: Mongoose.SchemaTypes.String,
			required: true,
		},
		inStock: {
			type: Mongoose.SchemaTypes.Number,
			required: true,
		},
		price: {
			type: Mongoose.SchemaTypes.Number,
			required: true,
		},
		brand: {
			type: Mongoose.SchemaTypes.String,
		},
		image: {
			type: Mongoose.SchemaTypes.String,
		},
		category: {
			type: Mongoose.SchemaTypes.ObjectId,
			ref: "Category",
			// required: true
		},
		subCategory: {
			type: Mongoose.SchemaTypes.ObjectId,
			ref: "SubCategory",
			// required: true
		},
		description: {
			type: Mongoose.SchemaTypes.String,
			// required: true,
		},
		reviews: [reviewSchema],
		review_count: {
			type: Mongoose.SchemaTypes.Number,
			required: true,
			default: 0,
		},
		rating: {
			type: Mongoose.SchemaTypes.Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
);

const Product = Mongoose.model("Product", ProductSchema);

export default Product;
