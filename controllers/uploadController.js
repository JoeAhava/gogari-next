import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: "uploads/",
	filename: function (req, file, cb) {
		cb(
			null,
			`${Date.now().toLocaleString().replace(/[:,]/g, "-")}_${
				file.fileName
			}${path.extname(file.originalname)}`,
		);
	},
});

const checkFileType = function (file, cb) {
	const accepted = /jpg|jpeg|png/;
	const extAccepted = accepted.test(
		path.extname(file.originalname).toLowerCase(),
	);
	const mimeAccepted = accepted.test(file.mimetype);

	if (mimeAccepted && extAccepted) {
		return cb(null, true);
	} else {
		console.log("File type rejected");
		return cb("File type rejected");
	}
};

const upload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
});

export default upload;
