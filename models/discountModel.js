import mongoose from "mongoose";

const DiscountSchema = mongoose.Schema(
	{
		amount: {
			type: mongoose.SchemaTypes.Number,
			required: true,
			default: 0,
		},
		tags: [
			{
				type: mongoose.SchemaTypes.String,
			},
		],
		coupon: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: "Coupon",
			},
		],
		endsAt: {
			type: mongoose.SchemaTypes.Date,
			required: true,
		},
		product: {
			type: mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: "Product",
		},
	},
	{
		timestamps: true,
	},
);

const Discount = mongoose.model("Discount", DiscountSchema);

export default Discount;
