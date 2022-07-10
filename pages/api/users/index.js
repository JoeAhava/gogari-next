import connectDB from "../../../config/db";
import User from "../../../models/userModel";
export default async function index(req, res) {
	await connectDB();
	const limit = Number(req.query.limit) || 20;
	const page = Number(req.query.page);
	const skipIndex = (page <= 0 ? 0 : page - 1) * limit;
	const users = await User.find({})
		.sort({ _id: 1 })
		.limit(limit)
		.skip(skipIndex)
		.exec();
	res.json(users);
}
