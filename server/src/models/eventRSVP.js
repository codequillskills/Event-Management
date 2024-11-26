import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema({
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

const RSVP = mongoose.model("RSVP", rsvpSchema);

export default RSVP;
