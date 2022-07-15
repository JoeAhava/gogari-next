import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	console.log(user);
	if (user && (await user.matchPassword(password))) {
		res.status(200).json({
			id: user._id,
			name: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("User Already exists");
	}
	const user = await User.create({
		username: name,
		email,
		password,
	});
	if (user) {
		res.status(201).json({
			id: user._id,
			name: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
};

const getUser = async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		// console.log('hello', user._id, user.username, user.email, user.isAdmin)
		res.json({
			_id: user._id,
			name: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const updateUser = async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		user.username = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = req.body.password;
		}
		const updatedUser = await user.save();

		res.status(202);
		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser._id),
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const getUsers = async (req, res) => {
	const limit = Number(req.query.limit) || 20;
	const page = Number(req.query.page);
	const skipIndex = (page <= 0 ? 0 : page - 1) * limit;
	const users = await User.find({})
		.sort({ _id: 1 })
		.limit(limit)
		.skip(skipIndex)
		.exec();
	res.json(users);
};

const updateUserAdmin = async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.isAdmin =
			req.body.isAdmin != undefined || req.body.isAdmin != null
				? req.body.isAdmin
				: user.isAdmin;

		const updatedUser = await user.save();

		res.status(202).json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const deleteUser = async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		await user.remove();
		res.json({
			message: "User removed",
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const getUserById = async (req, res) => {
	const user = await User.findById(req.params.id).select("-password");

	if (user) {
		res.json({
			_id: user._id,
			name: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const routes = {
	authUser: {
		method: "post",
		path: "/api/users/auth/login",
		handler: authUser,
	},
	registerUser: {
		method: "post",
		path: "/api/users/",
		handler: registerUser,
	},
	getUser: {
		method: "get",
		path: "/api/users/:id",
		handler: getUser,
	},
	getUsers: {
		method: "get",
		path: "/api/users/",
		handler: getUsers,
	},
	updateUserAdmin: {
		method: "put",
		path: "/api/users/:id",
		handler: updateUserAdmin,
		isAdmin: true,
	},
	updateUser: {
		method: "put",
		path: "/api/users/:id",
		handler: updateUser,
	},
	deleteUser: {
		method: "delete",
		path: "/api/users/:id",
		handler: deleteUser,
	},
	getUserById: {
		method: "get",
		path: "/api/users/:id",
		handler: getUserById,
	},
};
export default routes;
// authUser,
// registerUser,
// getUser,
// getUsers,
// updateUserAdmin,
// updateUser,
// deleteUser,
// getUserById,
