import express from "express";
import upload from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
	res.json({
		url: `/${req.file.path.replace(/\\/, "/")}`,
	});
});

export default router;
