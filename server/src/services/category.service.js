const { Category } = require('../../db/models');

class CategoryService {
  static async getAllCategory() {
    const categories = await Category.findAll();
    return categories;
  }

  static async createCategory({ name }) {
    const category = await Category.create({ name });
    return category;
  }

  static async updateCategory({ name, id }) {
    const category = await Category.findByPk(id);
    const updatecategory = await category.update({ name });
    return updatecategory;
  }

  static async deleateCategory({ id }) {
    const deletedRows = await Category.destroy({ where: { id } });
    return deletedRows;
  }


}

module.exports = CategoryService;
