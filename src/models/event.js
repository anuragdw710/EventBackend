const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        require: true,
    },
    eventOrganizer: {
        type: String,
        require: true
    },
    eventCityName: {
        type: String,
        require: true
    },
    eventDate: {
        type: Date,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    seats: {
        type: String,
        require: true
    },
    seatsBooked: {
        type: String,
        require: true,
        default: "0",
    },
    eventDescription: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;