/**
 * TODO configure wrapper for middleware
 */

const NotFound = function (req, res, next) {
	const error = new Error("Not Found");
	res.status(404);
	next(error);
};

const ErrorHandler = function (err, req, res, next) {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	// throw err
	res.status(statusCode);
	res.json({
		message: err.message,
		error: process.env.NODE_ENV === "production" ? null : err.stack,
	});
};
export { NotFound, ErrorHandler };
