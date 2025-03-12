const { Category } = require('../../db/models');

class CategoryService {
  static async getAllCategory() {
    const categories = await Category.findAll();
    return categories;
  }
}

module.exports = CategoryService;
