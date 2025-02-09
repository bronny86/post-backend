const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    title: String,
    descripton: String
}, {
    collection: "categories"
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category