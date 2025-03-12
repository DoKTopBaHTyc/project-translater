const eventRouter = require('express').Router();
const eventController = require('../controllers/eventController');


eventRouter.get('/', eventController.getAllEvents);

module.exports = eventRouter;
