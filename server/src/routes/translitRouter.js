const translitRouter = require('express').Router();
const CategoryController = require('../controllers/categoryController');

translitRouter.get('/', CategoryController.getAllCategory);

module.exports = translitRouter;
