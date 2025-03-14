const WordService = require('../services/word.service');

class WordController {
  static async createWord(req, res) {
    try {
      const word = await WordService.createWord(req.body);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.status(error.message.includes('внесено') ? 400 : 500).send(error.message);
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
      const id = + req.params.id
      const word = await WordService.deleateWord(id);
      res.status(200).json(word);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = WordController;
