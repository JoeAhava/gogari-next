import mongoose from "mongoose";

const CouponSchema = mongoose.Schema(
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

		endsAt: {
			type: mongoose.SchemaTypes.Date,
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

const Coupon = mongoose.model("Coupon", CouponSchema);

export default Coupon;
