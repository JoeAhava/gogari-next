import Discount from "../models/discountModel.js";

const registerDiscount = async (req, res) => {
	const { amount, tags = [], coupon = [], endsAt, product } = req.body;
	const discount = new Discount({
		amount,
		tags,
		coupon,
		endsAt,
		product,
	});

	const createdDiscount = await discount.save();
	res.status(201).json({
		createdDiscount,
	});
};

export { registerDiscount };
