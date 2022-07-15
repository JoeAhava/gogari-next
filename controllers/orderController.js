import Order from "../models/orderModel.js";

const registerOrder = async (req, res) => {
	const {
		items,
		shippingAddress,
		paymentMethod,
		shippingPrice,
		itemPrice,
		taxPrice,
		totalPrice,
	} = req.body;
	if (
		typeof items === "undefined" ||
		typeof items === null ||
		items.length === 0
	) {
		res.status(400);
		throw new Error("No order items");
	} else {
		// items = items.map({});
		const order = new Order({
			items,
			shippingPrice: shippingPrice || 0,
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			itemPrice,
			taxPrice,
			totalPrice,
		});

		const createdOrder = await order.save();
		res.status(201).json(createdOrder);
	}
};

const updateOrderPaid = async (req, res) => {
	const order = await Order.findById(req.params.id);
	if (order) {
		order.isPaid = true;
		order.paidAt = Date.now();
		order.paymentResult = {
			id: req.body.id,
			status: req.body.status,
			update_time: req.body.update_time,
			email_address: req.body.payer.email_address,
		};
		const updatedOrder = await order.save();
		res.status(201).json(updatedOrder);
	}
};

const updateOrderDelivered = async (req, res) => {
	const order = await Order.findById(req.params.id);
	if (order) {
		if (
			typeof req.body.delivered === "undefined" ||
			typeof req.body.delivered === null ||
			(req.body.delivered.toString().toLowerCase() !== "true" &&
				req.body.delivered.toString().toLowerCase() !== "false")
		) {
			res.status(400);
			throw new Error("Invalid payload delivered");
		} else {
			order.delivered = req.body.delivered;
			const updatedOrder = await order.save();
			res.status(201).json(updatedOrder);
		}
	}
};

const getOrders = async (req, res) => {
	const limit = Number(req.query.limit) || 20;
	const page = Number(req.query.page);
	const skipIndex = (page - 1) * limit;

	const orders = await Order.find({})
		.populate("items.product", "name inStock category -_id")
		.populate("user", "username email isAdmin -_id")
		.limit(limit)
		.skip(skipIndex);
	res.json(orders);
};

const getOrdersUser = async (req, res) => {
	const orders = await Order.find({ user: req.user._id }).populate(
		"items.product",
		"name inStock category -_id",
	);
	if (orders.length == 0) {
		res.status(404).json({
			message: "No orders",
		});
	} else {
		res.json(orders);
	}
};

const getOrderById = async (req, res) => {
	console.log(req.params.id);
	console.log("user", { user: req.user._id });
	const order = await Order.findById(req.params.id).populate(
		"user",
		"username email",
	);
	if (order) {
		res.json(order);
	} else {
		res.status(404);
		throw new Error("Order not Found");
	}
};

export {
	registerOrder,
	updateOrderDelivered,
	updateOrderPaid,
	getOrdersUser,
	getOrderById,
	getOrders,
};
