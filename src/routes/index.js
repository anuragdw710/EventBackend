const express = require('express');

const eventController = require('../controller/event-controller');
const userController = require('../controller/user-controller');
const bookingController = require('../controller/booking-controller');

const router = express.Router();

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getSelectedEventDesc);
router.get('/event', eventController.getById);

router.post('/user/register', userController.addUser);

router.post('/booking', bookingController.addBooking);


module.exports = router;