import mongoose from "mongoose";

const eventRSVPSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Event"
    },
}, { timestamps: true });

const EventRSVP = mongoose.model("EventRSVP", eventRSVPSchema);

export default EventRSVP;
