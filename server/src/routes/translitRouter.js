const translitRouter = require('express').Router();

const CategoryController = require('../controllers/categoryController');
const LanguageController = require('../controllers/languageController');
const LikeController = require('../controllers/likeController');
const TranslationController = require('../controllers/translationController');
const WordController = require('../controllers/wordController');

translitRouter.get('/lang', LanguageController.getAllLanguage);

translitRouter.get('/category', CategoryController.getAllCategory);

translitRouter.post('/category', CategoryController.createCategory);
translitRouter.put('/category/:id', CategoryController.updateCategory);
translitRouter.delete('/category/:id', CategoryController.deleteCategory);

translitRouter.post('/category/like', LikeController.wordStuded);

translitRouter.post('/lang/:languageId/category/:categoryId', TranslationController.getAllLangWord);

translitRouter.post('/translation/add', TranslationController.createTranslation);
translitRouter.put('/translation/update', TranslationController.updateTranslation);
translitRouter.delete('/translation/deleate', TranslationController.deleateTranslation);

translitRouter.post('/translation/add', WordController.createWord);
translitRouter.put('/translation/update', WordController.updateWord);
translitRouter.delete('/translation/deleate', WordController.deleateWord);

module.exports = translitRouter;
