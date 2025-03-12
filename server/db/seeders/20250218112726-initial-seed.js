'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Denis',
        email: 'Denis@mail.com',
        password: await bcrypt.hash('123456', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);


    await queryInterface.bulkInsert('Languages', [
      { name: 'en', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ru', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ja', createdAt: new Date(), updatedAt: new Date() },
    ]);


    await queryInterface.bulkInsert('Categories', [
      { name: 'Animals', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Technology', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Food', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sports', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Movies', createdAt: new Date(), updatedAt: new Date() },
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
        name: 'Dog',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Elephant',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tiger',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lion',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Horse',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rabbit',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Monkey',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bear',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Giraffe',
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
        name: 'Smartphone',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tablet',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Laptop',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Printer',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Camera',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Router',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Monitor',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Keyboard',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mouse',
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
        name: 'Burger',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pasta',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sushi',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cake',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ice Cream',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salad',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fries',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Steak',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Soup',
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
        name: 'Basketball',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tennis',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baseball',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Soccer',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rugby',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cricket',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Golf',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hockey',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cycling',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Music
      {
        name: 'Guitar',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Piano',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drums',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Violin',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flute',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Trumpet',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Saxophone',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cello',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Clarinet',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Harp',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Movies
      {
        name: 'Action',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Comedy',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drama',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Horror',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sci-Fi',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fantasy',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Romance',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thriller',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mystery',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Documentary',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);


    await queryInterface.bulkInsert('Translations', [

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
        translation: 'Кошка',
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

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Words', null, {});
    await queryInterface.bulkDelete('Likes', null, {});
    await queryInterface.bulkDelete('Translations', null, {});
    await queryInterface.bulkDelete('Languages', null, {});
  },
};
