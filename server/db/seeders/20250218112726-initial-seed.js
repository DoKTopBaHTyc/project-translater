const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Denis',
          email: 'Denis@mail.com',
          password: await bcrypt.hash('123456', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Anna',
          email: 'Anna@mail.com',
          password: await bcrypt.hash('654321', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ivan',
          email: 'Ivan@mail.com',
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Maria',
          email: 'Maria@mail.com',
          password: await bcrypt.hash('qwerty', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alexey',
          email: 'Alexey@mail.com',
          password: await bcrypt.hash('letmein', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert('Events', [
      {
        eventDate: new Date('2024-04-01 15:00:00'),
        title: 'Мастер-класс по JavaScript',
        text: 'Изучаем основы JavaScript и современные фреймворки',
        address: 'ул. Программистов, 42',
        maxParticipants: 20,
        countParticipants: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventDate: new Date('2024-04-05 18:00:00'),
        title: 'React Bootcamp',
        text: 'Интенсивный курс по React.js с практическими заданиями',
        address: 'ул. Разработчиков, 10',
        maxParticipants: 25,
        countParticipants: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventDate: new Date('2024-04-10 14:00:00'),
        title: 'Введение в TypeScript',
        text: 'Разбираем основы TypeScript и типизацию в JavaScript',
        address: 'ул. Кодеров, 15',
        maxParticipants: 30,
        countParticipants: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventDate: new Date('2024-04-15 16:30:00'),
        title: 'Node.js для начинающих',
        text: 'Изучаем основы работы с серверной частью на Node.js',
        address: 'ул. Серверная, 8',
        maxParticipants: 20,
        countParticipants: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventDate: new Date('2024-04-20 17:00:00'),
        title: 'Vue.js: с нуля до профи',
        text: 'Полный разбор Vue.js и его экосистемы',
        address: 'ул. Фронтендеров, 23',
        maxParticipants: 15,
        countParticipants: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventDate: new Date('2024-04-25 19:00:00'),
        title: 'Алгоритмы и структуры данных',
        text: 'Разбираем основные алгоритмы и их применение в коде',
        address: 'ул. Хакеров, 5',
        maxParticipants: 40,
        countParticipants: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Eventusers', [
      { userId: 1, eventId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, eventId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, eventId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, eventId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, eventId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, eventId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, eventId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, eventId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, eventId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, eventId: 3, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Events', null, {});
    await queryInterface.bulkDelete('Eventusers', null, {});
  },
};
