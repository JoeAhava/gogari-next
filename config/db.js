import mongoose from "mongoose";

const connectDB = async () => {
	try {
		if (mongoose.connections[0].readyState) return;
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.info(
			`MongoDB Connected: ` +
				`${conn.connection.host} - DB - ${conn.connection.name}`,
		);
	} catch (error) {
		console.error(`Error: ` + `${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
