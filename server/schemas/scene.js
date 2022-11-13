import mongoose from "mongoose";

const SceneSchema = new mongoose.Schema({
	channel: String,
	name: String,
});

SceneSchema.index({
	channel: 1,
	name: 1,
}, {
	unique: true
});

const SceneModel = mongoose.model("Scene", SceneSchema);
export default SceneModel;