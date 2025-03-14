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
      {
        name: 'en',
        title: 'English',
        img: '/image/England.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fr',
        title: 'French',
        img: '/image/esp.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'es',
        title: 'Spanish',
        img: '/image/fr.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Categories', [
      { name: 'Животные', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Технологии', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Еда', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Спорт', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Музыка', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Кино', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Words', [
      {
        name: 'Кошка',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Собака',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Слон',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тигр',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Лев',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Лошадь',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кролик',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Обезьяна',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Медведь',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Жираф',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Компьютер',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Смартфон',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Планшет',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ноутбук',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Принтер',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Камера',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Роутер',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Монитор',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Клавиатура',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мышь',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Пицца',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бургер',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Паста',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Суши',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Торт',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мороженое',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Салат',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Картофель фри',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Стейк',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Суп',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Футбол',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Баскетбол',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Теннис',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бейсбол',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Футбол (соккер)',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Рэгби',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Крикет',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гольф',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Хоккей',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Велоспорт',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Музыка
      {
        name: 'Гитара',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пианино',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ударные',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Скрипка',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Флейта',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Трубка',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Саксофон',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Виолончель',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кларнет',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Арфа',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Фильмы
      {
        name: 'Экшен',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Комедия',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Драма',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ужасы',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Научная фантастика',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фэнтези',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Романтика',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Триллер',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мистика',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Документальный',
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
        translation: 'Chat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 1,
        languageId: 3,
        translation: 'Gato',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 2,
        languageId: 1,
        translation: 'Dog',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 2,
        languageId: 2,
        translation: 'Chien',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 2,
        languageId: 3,
        translation: 'Perro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 3,
        languageId: 1,
        translation: 'Elephant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 3,
        languageId: 2,
        translation: 'Éléphant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 3,
        languageId: 3,
        translation: 'Elefante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 4,
        languageId: 1,
        translation: 'Tiger',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 4,
        languageId: 2,
        translation: 'Tigre',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 4,
        languageId: 3,
        translation: 'Tigre',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 5,
        languageId: 1,
        translation: 'Lion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 5,
        languageId: 2,
        translation: 'Lion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 5,
        languageId: 3,
        translation: 'León',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 6,
        languageId: 1,
        translation: 'Horse',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 6,
        languageId: 2,
        translation: 'Cheval',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 6,
        languageId: 3,
        translation: 'Caballo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 7,
        languageId: 1,
        translation: 'Rabbit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 7,
        languageId: 2,
        translation: 'Lapin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 7,
        languageId: 3,
        translation: 'Conejo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 8,
        languageId: 1,
        translation: 'Monkey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 8,
        languageId: 2,
        translation: 'Singe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 8,
        languageId: 3,
        translation: 'Mono',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 9,
        languageId: 1,
        translation: 'Bear',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 9,
        languageId: 2,
        translation: 'Ours',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 9,
        languageId: 3,
        translation: 'Oso',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 10,
        languageId: 1,
        translation: 'Giraffe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 10,
        languageId: 2,
        translation: 'Girafe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 10,
        languageId: 3,
        translation: 'Jirafa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 11,
        languageId: 1,
        translation: 'Computer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 11,
        languageId: 2,
        translation: 'Ordinateur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 11,
        languageId: 3,
        translation: 'Computadora',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 12,
        languageId: 1,
        translation: 'Smartphone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 12,
        languageId: 2,
        translation: 'Smartphone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 12,
        languageId: 3,
        translation: 'Teléfono inteligente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 13,
        languageId: 1,
        translation: 'Tablet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 13,
        languageId: 2,
        translation: 'Tablette',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 13,
        languageId: 3,
        translation: 'Tableta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 14,
        languageId: 1,
        translation: 'Laptop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 14,
        languageId: 2,
        translation: 'Ordinateur portable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 14,
        languageId: 3,
        translation: 'Portátil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 15,
        languageId: 1,
        translation: 'Printer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 15,
        languageId: 2,
        translation: 'Imprimante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 15,
        languageId: 3,
        translation: 'Impresora',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 16,
        languageId: 1,
        translation: 'Camera',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 16,
        languageId: 2,
        translation: 'Caméra',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 16,
        languageId: 3,
        translation: 'Cámara',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 17,
        languageId: 1,
        translation: 'Router',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 17,
        languageId: 2,
        translation: 'Routeur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 17,
        languageId: 3,
        translation: 'Enrutador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 18,
        languageId: 1,
        translation: 'Monitor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 18,
        languageId: 2,
        translation: 'Moniteur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 18,
        languageId: 3,
        translation: 'Monitor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 19,
        languageId: 1,
        translation: 'Keyboard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 19,
        languageId: 2,
        translation: 'Clavier',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 19,
        languageId: 3,
        translation: 'Teclado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 20,
        languageId: 1,
        translation: 'Mouse',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 20,
        languageId: 2,
        translation: 'Souris',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 20,
        languageId: 3,
        translation: 'Ratón',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 21,
        languageId: 1,
        translation: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 21,
        languageId: 2,
        translation: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 21,
        languageId: 3,
        translation: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 22,
        languageId: 1,
        translation: 'Burger',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 22,
        languageId: 2,
        translation: 'Burger',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 22,
        languageId: 3,
        translation: 'Hamburguesa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 23,
        languageId: 1,
        translation: 'Pasta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 23,
        languageId: 2,
        translation: 'Pâtes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 23,
        languageId: 3,
        translation: 'Pasta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 24,
        languageId: 1,
        translation: 'Sushi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 24,
        languageId: 2,
        translation: 'Sushi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 24,
        languageId: 3,
        translation: 'Sushi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 25,
        languageId: 1,
        translation: 'Cake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 25,
        languageId: 2,
        translation: 'Gâteau',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 25,
        languageId: 3,
        translation: 'Pastel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 26,
        languageId: 1,
        translation: 'Ice cream',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 26,
        languageId: 2,
        translation: 'Glace',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 26,
        languageId: 3,
        translation: 'Helado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 27,
        languageId: 1,
        translation: 'Salad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 27,
        languageId: 2,
        translation: 'Salade',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 27,
        languageId: 3,
        translation: 'Ensalada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 28,
        languageId: 1,
        translation: 'French fries',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 28,
        languageId: 2,
        translation: 'Frites',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 28,
        languageId: 3,
        translation: 'Papas fritas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 29,
        languageId: 1,
        translation: 'Steak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 29,
        languageId: 2,
        translation: 'Steak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 29,
        languageId: 3,
        translation: 'Filete',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 30,
        languageId: 1,
        translation: 'Soup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 30,
        languageId: 2,
        translation: 'Soupe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 30,
        languageId: 3,
        translation: 'Sopa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 31,
        languageId: 1,
        translation: 'Football',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 31,
        languageId: 2,
        translation: 'Football',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 31,
        languageId: 3,
        translation: 'Fútbol',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 32,
        languageId: 1,
        translation: 'Basketball',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 32,
        languageId: 2,
        translation: 'Basketball',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 32,
        languageId: 3,
        translation: 'Baloncesto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 33,
        languageId: 1,
        translation: 'Tennis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 33,
        languageId: 2,
        translation: 'Tennis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 33,
        languageId: 3,
        translation: 'Tenis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 34,
        languageId: 1,
        translation: 'Baseball',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 34,
        languageId: 2,
        translation: 'Baseball',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 34,
        languageId: 3,
        translation: 'Béisbol',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 35,
        languageId: 1,
        translation: 'Soccer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 35,
        languageId: 2,
        translation: 'Football',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 35,
        languageId: 3,
        translation: 'Fútbol',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 36,
        languageId: 1,
        translation: 'Rugby',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 36,
        languageId: 2,
        translation: 'Rugby',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 36,
        languageId: 3,
        translation: 'Rugby',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 37,
        languageId: 1,
        translation: 'Cricket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 37,
        languageId: 2,
        translation: 'Cricket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 37,
        languageId: 3,
        translation: 'Críquet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 38,
        languageId: 1,
        translation: 'Golf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 38,
        languageId: 2,
        translation: 'Golf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 38,
        languageId: 3,
        translation: 'Golf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 39,
        languageId: 1,
        translation: 'Hockey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 39,
        languageId: 2,
        translation: 'Hockey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 39,
        languageId: 3,
        translation: 'Hockey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 40,
        languageId: 1,
        translation: 'Cycling',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 40,
        languageId: 2,
        translation: 'Cyclisme',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 40,
        languageId: 3,
        translation: 'Ciclismo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 41,
        languageId: 1,
        translation: 'Guitar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 41,
        languageId: 2,
        translation: 'Guitare',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 41,
        languageId: 3,
        translation: 'Guitarra',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 42,
        languageId: 1,
        translation: 'Piano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 42,
        languageId: 2,
        translation: 'Piano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 42,
        languageId: 3,
        translation: 'Piano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 43,
        languageId: 1,
        translation: 'Drums',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 43,
        languageId: 2,
        translation: 'Batterie',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 43,
        languageId: 3,
        translation: 'Batería',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 44,
        languageId: 1,
        translation: 'Violin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 44,
        languageId: 2,
        translation: 'Violon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 44,
        languageId: 3,
        translation: 'Violín',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 45,
        languageId: 1,
        translation: 'Flute',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 45,
        languageId: 2,
        translation: 'Flûte',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 45,
        languageId: 3,
        translation: 'Flauta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 46,
        languageId: 1,
        translation: 'Trumpet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 46,
        languageId: 2,
        translation: 'Trompette',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 46,
        languageId: 3,
        translation: 'Trompeta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 47,
        languageId: 1,
        translation: 'Saxophone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 47,
        languageId: 2,
        translation: 'Saxophone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 47,
        languageId: 3,
        translation: 'Saxofón',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 48,
        languageId: 1,
        translation: 'Cello',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 48,
        languageId: 2,
        translation: 'Violoncelle',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 48,
        languageId: 3,
        translation: 'Violonchelo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 49,
        languageId: 1,
        translation: 'Clarinet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 49,
        languageId: 2,
        translation: 'Clarinette',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 49,
        languageId: 3,
        translation: 'Clarinete',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 50,
        languageId: 1,
        translation: 'Harp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 50,
        languageId: 2,
        translation: 'Harpe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 50,
        languageId: 3,
        translation: 'Arpa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 51,
        languageId: 1,
        translation: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 51,
        languageId: 2,
        translation: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 51,
        languageId: 3,
        translation: 'Acción',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 52,
        languageId: 1,
        translation: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 52,
        languageId: 2,
        translation: 'Comédie',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 52,
        languageId: 3,
        translation: 'Comedia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 53,
        languageId: 1,
        translation: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 53,
        languageId: 2,
        translation: 'Drame',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 53,
        languageId: 3,
        translation: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 54,
        languageId: 1,
        translation: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 54,
        languageId: 2,
        translation: 'Horreur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 54,
        languageId: 3,
        translation: 'Terror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 55,
        languageId: 1,
        translation: 'Science Fiction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 55,
        languageId: 2,
        translation: 'Science-Fiction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 55,
        languageId: 3,
        translation: 'Ciencia ficción',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 56,
        languageId: 1,
        translation: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 56,
        languageId: 2,
        translation: 'Fantaisie',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 56,
        languageId: 3,
        translation: 'Fantasía',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 57,
        languageId: 1,
        translation: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 57,
        languageId: 2,
        translation: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 57,
        languageId: 3,
        translation: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 58,
        languageId: 1,
        translation: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 58,
        languageId: 2,
        translation: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 58,
        languageId: 3,
        translation: 'Suspense',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 59,
        languageId: 1,
        translation: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 59,
        languageId: 2,
        translation: 'Mystère',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 59,
        languageId: 3,
        translation: 'Misterio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 60,
        languageId: 1,
        translation: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 60,
        languageId: 2,
        translation: 'Documentaire',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wordId: 60,
        languageId: 3,
        translation: 'Documental',
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
