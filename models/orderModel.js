import Mongoose from "mongoose";

const OrderSchema = Mongoose.Schema(
	{
		user: {
			type: Mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: "User",
		},
		items: [
			{
				product: {
					type: Mongoose.SchemaTypes.ObjectId,
					required: true,
					ref: "Product",
				},
				quantity: {
					type: Mongoose.SchemaTypes.Number,
					required: true,
					default: 1,
				},
				price: {
					type: Mongoose.SchemaTypes.Number,
					required: true,
				},
				image: {
					type: Mongoose.SchemaTypes.String,
				},
			},
		],
		shippingAddress: {
			address: { type: Mongoose.SchemaTypes.String },
			city: { type: Mongoose.SchemaTypes.String },
			phone: { type: Mongoose.SchemaTypes.String },
			country: { type: Mongoose.SchemaTypes.String },
			localName: { type: Mongoose.SchemaTypes.String },
		},
		shippingPrice: { type: Mongoose.SchemaTypes.Number },
		paymentMethod: { type: Mongoose.SchemaTypes.String },
		itemPrice: { type: Mongoose.SchemaTypes.Number },
		taxPrice: { type: Mongoose.SchemaTypes.Number },
		totalPrice: { type: Mongoose.SchemaTypes.Number },
		isPaid: {
			type: Mongoose.SchemaTypes.Boolean,
			required: true,
			default: false,
		},
		delivered: {
			type: Mongoose.SchemaTypes.Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			type: Mongoose.SchemaTypes.Date,
		},
		deliveredAt: {
			type: Mongoose.SchemaTypes.Date,
		},
	},
	{
		timestamps: true,
	},
);

const Order = Mongoose.model("Order", OrderSchema);

export default Order;
