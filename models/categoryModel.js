import Mongoose from "mongoose";

const SubCategorySchema = Mongoose.Schema({
	name: {
		type: Mongoose.SchemaTypes.String,
		required: true,
	},
	category: {
		type: Mongoose.SchemaTypes.ObjectId,
		ref: "Category",
		required: true,
	},
	unit: {
		type: Mongoose.SchemaTypes.String,
		required: true,
	},
	image: {
		type: Mongoose.SchemaTypes.String,
	},
});

const CategorySchema = Mongoose.Schema(
	{
		name: {
			type: Mongoose.SchemaTypes.String,
			required: true,
		},
		image: {
			type: Mongoose.SchemaTypes.String,
		},
	},
	{
		timestamps: true,
	},
);

export const Category = Mongoose.model("Category", CategorySchema);
export const SubCategory = Mongoose.model("SubCategory", SubCategorySchema);
