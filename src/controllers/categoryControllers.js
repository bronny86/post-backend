const Category = require("../models/category")

// get all categories function
async function getCategories() {
    const categories = await Category.find()
    return categories
}

// get one category
async function getCategory(categoryId) {
    const category = await Category.findById(categoryId)
    return category}

// create category function
async function createCategory(category) {
    const newCategory = await Category.create(category)
    return newCategory
}

// update category function
async function updateCategory(categoryId, category) {
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, category, { new: true })
    return updatedCategory
}

// delete category function
async function deleteCategory(categoryId) {
    const deletedCategory = await Category.findByIdAndDelete(categoryId)
    return deletedCategory
}

module.exports = {
    getCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}