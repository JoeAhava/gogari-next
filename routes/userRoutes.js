import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
	authUser,
	getUsers,
	getUser,
	registerUser,
	updateUser,
	updateUserAdmin,
	deleteUser,
	getUserById,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUser).put(protect, updateUser);
router
	.route("/:id")
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUserAdmin)
	.delete(protect, admin, deleteUser);

export default router;
