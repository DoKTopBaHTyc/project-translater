const CategoryService = require('../services/category.service');

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

  static async createCategory(req, res) {
    try {
      const category = await CategoryService.createCategory(req.body);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async updateCategory(req, res) {
    try {
      const category = await CategoryService.updateCategory(req.body);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async deleteCategory(req, res) {
    try {
      const category = await CategoryService.deleateCategory(req.body);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async getCategoryName(req, res) {
    try {
      const name = req.body.name.trim();
      const category = await CategoryService.getCategoryByName(name);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = CategoryController;
