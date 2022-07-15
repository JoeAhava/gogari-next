import connectDB from "../../../config/db";
import userController from "../../../controllers/userController";
import defaultHandler from "../../../utils/defaultHandler";

const userRoute = (req, res) => defaultHandler(req, res, true, userController);
export default userRoute;
// export default function userSingle(req, res) {
// 	const { method } = req;
// 	switch (method.toLowerCase()) {
// 		case "GET": {
// 			return userController.getUser.handler;
// 		}
// 		case "PUT": {
// 			/**
// 			 * TODO add admin update
// 			 */
// 			return userController.updateUser.handler;
// 		}
// 		case "DELETE": {
// 			return userController.deleteUser.handler;
// 		}
// 		default: {
// 			res.status(400).json({ message: "Unsupported Operation" });
// 		}
// 	}
// }

/**
 * !Not Implemented
 * TODO handle different http methods
 */
