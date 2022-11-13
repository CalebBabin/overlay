import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
	name: String,
});

ChannelSchema.index({
	name: 1,
}, {
	unique: true
});

const ChannelModel = mongoose.model("Channel", ChannelSchema);
export default ChannelModel;