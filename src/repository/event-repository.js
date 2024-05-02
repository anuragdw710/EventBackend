const Event = require('../models/event');
class EventRepository {
    async create(data) {
        try {
            const response = await Event.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getEventById(id) {
        try {
            const event = await Event.findById(id);
            return event;
        } catch (error) {
            throw error;
        }
    }
    async getAllEvent() {
        try {
            const events = await Event.find();
            return events;
        } catch (error) {
            throw error;
        }
    }
    async getSelectedEventDesc(col) {
        try {
            const events = await Event.find({}, col);
            return events;
        } catch (error) {
            throw error;
        }
    }
    async updateBookedSeat(id, seatsBooked) {
        try {
            const event = await Event.findById(id);
            event.seatsBooked = seatsBooked;
            event.save();
        } catch (error) {
            throw error;
        }
    }


}
module.exports = EventRepository;