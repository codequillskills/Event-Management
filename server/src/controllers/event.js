import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
    const { title, date, location, description } = req.body;

    try {
        const newEvent = new Event({
            title,
            date,
            location,
            description
        });

        await newEvent.save();
        res.status(201).json({ message: "Event created successfully", event: newEvent });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Failed to create event" });
    }
};

export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, date, location, description } = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, {
            title,
            date,
            location,
            description
        }, { new: true });

        if (!updatedEvent) {
            res.status(404).json({ message: "Event not found" });
        } else {
            res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
        }
    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Failed to update event" });
    }
};

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        await Event.findByIdAndDelete(id);

        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error("Error deleting event:", error);
        res.status(500).json({ message: "Failed to delete event" });
    }
};

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Failed to fetch events" });
    }
};