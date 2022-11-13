import mongoose from "mongoose";

const SceneSchema = new mongoose.Schema({
	channel: String,
	name: String,
});

const SceneModel = mongoose.model("Scene", SceneSchema);
export default SceneModel;