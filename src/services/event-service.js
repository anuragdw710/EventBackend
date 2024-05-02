const EventRepository = require('../repository/event-repository');

class EventService {
    constructor() {
        this.eventRepository = new EventRepository();
    }
    async create(data) {
        try {
            const response = await this.eventRepository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getEventById(id) {
        try {
            const event = await this.eventRepository.getEventById(id);
            return event;
        } catch (error) {
            throw error;
        }
    }
    async getAllEvent() {
        try {
            const events = await this.eventRepository.getAllEvent();
            return events;
        } catch (error) {
            throw error;
        }
    }
    async getSelectedEventDesc(col) {
        try {
            const events = await this.eventRepository.getSelectedEventDesc(col);
            return events;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventService;