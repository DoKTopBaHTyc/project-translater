const { CategoryService } = require('../services/category.service');

class CategoryController {
  static async getAllCategory(req, res) {
    try {
      const categories = await CategoryService.getAllCategory();
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = CategoryController;
