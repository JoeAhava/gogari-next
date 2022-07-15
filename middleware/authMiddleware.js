import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

/**
 *  TODO configure wrapper for middleware
 */
const middlewareWrapper = async (req, res, fn) => {};

const protect = asyncHandler(async (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		const token = req.headers.authorization.split(" ")[1] || null;

		jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
			if (err) {
				res.status(401);
				throw new Error("Invalid Token");
			}
			const user = await User.findById(decoded.id).select("-password");
			if (user) {
				console.log("USER - ", user);
				req.user = user;
				next();
			} else {
				res.status(401);
				throw new Error("User not found");
			}
		});
	} else {
		res.status(401);
		throw new Error("Invalid Token");
	}
});

const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error("Admin Authorization failed");
	}
};

export { protect, admin };
