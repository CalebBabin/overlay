import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: String,
});

UserSchema.index({
	username: 1,
}, {
	unique: true
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;