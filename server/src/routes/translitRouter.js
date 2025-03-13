const translitRouter = require('express').Router();
const CategoryController = require('../controllers/categoryController');
const LanguageController = require('../controllers/languageController')


translitRouter.get('/lang', LanguageController.getAllLanguage);


translitRouter.get('/category', CategoryController.getAllCategory);
translitRouter.post('/category',CategoryController.createCategory)
translitRouter.put('/category/:id',CategoryController.updateCategory)
translitRouter.delete('/category/:id',CategoryController.deleteCategory)

module.exports = translitRouter;
