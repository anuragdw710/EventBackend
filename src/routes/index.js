const express = require('express');

const eventController = require('../controller/event-controller');

const router = express.Router();

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getSelectedEventDesc);
router.get('/event', eventController.getById);


module.exports = router;