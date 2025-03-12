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
      ],
      {},
    );

    await queryInterface.bulkInsert('Categories', [
      { name: 'en', createdAt: new Date(), updatedAt: new Date() },
      { name: 'fr', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ja', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Words', [
      {
        name: 'Cat',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Computer',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Football',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tree',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Guitar',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 1,
        wordId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(
      'Translations',
      [
        {
          wordId: 1,
          languageId: 1,
          translation: 'Cat',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 1,
          languageId: 2,
          translation: 'Chat',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 1,
          languageId: 3,
          translation: 'ネコ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 1,
          languageId: 4,
          translation: 'Gato',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 1,
          languageId: 5,
          translation: 'Katze',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          wordId: 2,
          languageId: 1,
          translation: 'Computer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 2,
          languageId: 2,
          translation: 'Ordinateur',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 2,
          languageId: 3,
          translation: 'コンピュータ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 2,
          languageId: 1,
          translation: 'Computadora',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 2,
          languageId: 2,
          translation: 'Computer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          wordId: 3,
          languageId: 3,
          translation: 'Pizza',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 3,
          languageId: 1,
          translation: 'Pizza',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 3,
          languageId: 3,
          translation: 'ピザ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 3,
          languageId: 2,
          translation: 'Pizza',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordId: 3,
          languageId: 1,
          translation: 'Pizza',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Words', null, {});
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
