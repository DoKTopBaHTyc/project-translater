const  LanguageService  = require('../services/language.service');

class LanguageController {
  static async getAllLanguage(req, res) {
    try {
      const language = await LanguageService.getAllLanguage();
      res.status(200).json(language);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}


module.exports = LanguageController