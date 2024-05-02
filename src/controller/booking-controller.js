const BookingService = require('../services/booking-service');

const bookingService = new BookingService();
const addBooking = async (req, res) => {
    try {
        const id = req.body.id;
        const eventId = req.body.eventId;
        const seats = req.body.count;
        if (!eventId.match(/^[0-9a-fA-F]{24}$/)) {
            throw 'Not a valid event';
        }
        const response = await bookingService.create(id, {
            "eventId": eventId,
            "seats": seats
        });
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
    addBooking,
}