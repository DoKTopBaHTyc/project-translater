const TranslateService  = require('../services/translate.service');

class TranslationController {
  static async getAllLangWord(req, res) {
    try {
      const languageId = +req.params.languageId
      const categoryId = +req.params.categoryId
      const words = await TranslateService.getAllLangWord(categoryId,languageId);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }



  static async updateTranslation(req, res) {
    try {
      const word = await TranslateService.updateTranslation(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }


  static async checkTranslit(req, res) {
    try {
      const { translation } = req.body;
      if (translation.trim() === '') {
        res.status(400).send('Поле должно быть заполнено');
      }
      const word = await TranslateService.checkTranslit(req.body);
      res.status(200).json({ message: word });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = TranslationController;
