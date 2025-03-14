const translitRouter = require('express').Router();
const { verifyAccessToken } = require('../middlewares/verifyTokens');

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
translitRouter.post('/category/name', CategoryController.getCategoryName);

translitRouter.post('/category/like', LikeController.wordStuded);

translitRouter.post('/category/like/add', verifyAccessToken, LikeController.createStudedWord);

translitRouter.post('/category/like/count', LikeController.allStudedWordByCategory);

translitRouter.get(
  '/lang/:languageId/category/:categoryId',
  TranslationController.getAllLangWord,
);

translitRouter.put('/translation/update', TranslationController.updateTranslation);
translitRouter.delete('/translation/deleate', TranslationController.deleateTranslation);

translitRouter.post('/word/add', WordController.createWord);
translitRouter.put('/word/update', WordController.updateWord);
translitRouter.delete('/word/deleate/', WordController.deleateWord);

module.exports = translitRouter;
