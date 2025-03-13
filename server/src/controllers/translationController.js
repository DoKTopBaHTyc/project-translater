const { TranslateService } = require('../services/translate.service');

class TranslationController {
  static async getAllLangEn(req, res) {
    try {
      const words = await TranslateService.getAllLangEn(req.body);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async getAllLangFr(req, res) {
    try {
      const words = await TranslateService.getAllLangFr(req.body);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async getAllLangJa(req, res) {
    try {
      const words = await TranslateService.getAllLangJa(req.body);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async createTranslation(req, res) {
    try {
      const word = await TranslateService.createCategory(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async updateTranslation(req, res) {
    try {
      const word = await TranslateService.updateCategory(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async deleateTranslation(req, res) {
    try {
      const word = await TranslateService.deleateCategory(req.body);
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
