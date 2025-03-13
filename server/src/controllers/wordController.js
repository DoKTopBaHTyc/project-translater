const WordService  = require('../services/word.service');

class WordController {
  static async createWord(req, res) {
    try {
      const word = await WordService.createWord(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async updateWord(req, res) {
    try {
      const word = await WordService.updateWord(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async deleateWord(req, res) {
    try {
      const word = await WordService.deleateWord(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = WordController;
