import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import path from "path";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import discountRoutes from "./routes/discountRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { NotFound, ErrorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", function (erq, res) {
	res.json({ message: "Welcome to gogarry api" });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/discount", discountRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/images", uploadRoutes);
app.get("/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(NotFound);
app.use(ErrorHandler);

app.listen(process.env.SERVER_PORT || 5000, function () {
	console.log(
		`Server api started on PORT -`.yellow +
			` ${process.env.SERVER_PORT || 5000}`.green.bold,
	);
});
