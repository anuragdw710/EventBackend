const UserRepository = require('../repository/user-repository');
const EventRepository = require('../repository/event-repository');

class BookingService {
    constructor() {
        this.userRepository = new UserRepository();
        this.eventRepository = new EventRepository();
    }
    async create(id, data) {
        try {
            const event = await this.eventRepository.getEventById(data.eventId);
            if (!event) {
                throw 'There is no event like this';
            }
            const seats = Number(event.seats);
            const seatsBooked = Number(event.seatsBooked);
            const count = Number(data.seats);
            if ((seatsBooked + count) > seats) {
                throw 'Not available that number of seats';
            }
            const response = await this.userRepository.createBooking(id, data);
            await this.eventRepository.updateBookedSeat(event.id, seatsBooked + count);
            return response;

        } catch (error) {
            throw error;
        }
    }
    async getBooking(id) {
        try {
            const data = this.userRepository.getSelected(id, 'pastBooking');
            return data;
        } catch (error) {
            throw data;
        }
    }

}
module.exports = BookingService;