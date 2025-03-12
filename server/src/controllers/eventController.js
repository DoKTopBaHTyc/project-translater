const eventService = require('../services/event.service');

const eventController = {
  async getAllEvents(req, res) {
    try {
      const events = await eventService.getAllEvents();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  },
};

module.exports = eventController;
