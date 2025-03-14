const LikeService = require('../services/like.service');

class LikeController {
  static async wordStuded(req, res) {
    try {
      const boolean = await LikeService.WordStuded(req.body);
      res.status(200).json({ message: boolean });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async createStudedWord(req, res) {
    try {

      const studedword = await LikeService.createStudedWord(req.body);
      res.status(200).json(studedword);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async allStudedWordByCategory(req, res) {
    try {
      const studeвCount = await LikeService.allStudedWordByCategory(req.body);
      res.status(200).json(studeвCount);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = LikeController;
