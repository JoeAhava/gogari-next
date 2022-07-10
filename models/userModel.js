import Mongoose from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = Mongoose.Schema(
	{
		username: {
			type: Mongoose.SchemaTypes.String,
			unique: true,
			required: true,
		},
		password: {
			type: Mongoose.SchemaTypes.String,
			required: true,
		},
		email: {
			type: Mongoose.SchemaTypes.String,
			required: true,
		},
		isAdmin: {
			type: Mongoose.SchemaTypes.Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

UserSchema.methods.matchPassword = async function (hash) {
	return bcrypt.compare(hash, this.password);
};

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});
const User = Mongoose.models.User || Mongoose.model("User", UserSchema);

export default User;
