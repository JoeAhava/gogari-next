import connectDB from "../../../config/db";
import { getUsers } from "../../../controllers/userController";

const index = getUsers;
export default index;
