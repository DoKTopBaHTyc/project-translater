const { WordService } = require('../services/word.service');

class WordController {
  static async getAllWordByCategoryEn(req, res) {
    try {
      const words = await WordService.getAllWordByCategoryEn(req.body);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async getAllWordByCategoryFr(req, res) {
    try {
      const words = await WordService.getAllWordByCategoryFr(req.body);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async getAllWordByCategoryJa(req, res) {
    try {
      const words = await WordService.getAllWordByCategoryJa(req.body);
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async checkTranslit(req, res) {
    try {
      const { name } = req.body;
      if (name.trim() === '') {
        res.status(400).send('Поле должно быть заполнено');
      }
      const word = await WordService.checkTranslit(req.body);
      res.status(200).json({ message: word });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = WordController;
