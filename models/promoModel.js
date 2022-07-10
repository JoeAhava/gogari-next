import Mongoose from "mongoose";

const PromoSchema = Mongoose.Schema(
	{
		title: {
			type: Mongoose.SchemaTypes.String,
		},
		image: {
			type: Mongoose.SchemaTypes.String,
			required: true,
		},
		expireDate: {
			type: Mongoose.SchemaTypes.Date,
		},
	},
	{
		timestamps: true,
	},
);

const Promo = Mongoose.model("Promo", PromoSchema);

export default Promo;
