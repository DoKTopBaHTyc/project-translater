const { Event, User } = require('../../db/models');

class EventService {
  async getAllEvents() {
    const events = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'],
          through: { attributes: [] },
        },
      ],
      order: [['eventDate', 'ASC']],
    });
    return events;
  }
}

module.exports = new EventService();
