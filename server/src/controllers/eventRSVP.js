import eventRSVP from "../models/eventRSVP.js";

export const createRSVP = async (req, res) => {
    const { userId, eventId } = req.body;

    try {
        const newRSVP = new eventRSVP({
            userId,
            eventId
        });

        await newRSVP.save();
        res.status(201).json({ message: "RSVP created successfully", rsvp: newRSVP });
    } catch (error) {
        console.error("Error creating RSVP:", error);
        res.status(500).json({ message: "Failed to create RSVP" });
    }
};

export const getRSVPsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const rsvps = await eventRSVP.find({ userId });
        res.status(200).json(rsvps);
    } catch (error) {
        console.error("Error fetching RSVPs:", error);
        res.status(500).json({ message: "Failed to fetch RSVPs" });
    }
};



