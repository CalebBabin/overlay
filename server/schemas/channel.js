import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
	name: String,
});

const ChannelModel = mongoose.model("Channel", ChannelSchema);
export default ChannelModel;