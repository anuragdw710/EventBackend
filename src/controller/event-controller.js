const EventService = require('../services/event-service');

const eventService = new EventService();

const createEvent = async (req, res) => {
    try {
        const response = await eventService.create(req.body);
        return res.status(200).json({
            "isSuccess": true,
            "response": response
        });
    } catch (error) {
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            "err": error
        })
    }
}
const getById = async (req, res) => {
    try {
        const id = req.query.eventId;
        console.log(id);
        const response = await eventService.getEventById(id);
        return res.status(200).json({
            "isSuccess": true,
            "response": response
        });
    } catch (error) {
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            "err": error
        })
    }
}

const getAllEvent = async (req, res) => {
    try {
        const response = await eventService.getAllEvent();
        return res.status(200).json({
            "isSuccess": true,
            "response": response
        });
    } catch (error) {
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            "err": error
        })
    }
}
const getSelectedEventDesc = async (req, res) => {
    try {
        const response = await eventService.getSelectedEventDesc('eventName eventOrganizer eventCityName eventDate imgUrl seats seatsBooked price');
        return res.status(200).json({
            "isSuccess": true,
            "response": response
        });
    } catch (error) {
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            "err": error
        })
    }
}

module.exports = {
    createEvent,
    getById,
    getAllEvent,
    getSelectedEventDesc
}