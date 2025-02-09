const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    is_published: Boolean
})


const Post = mongoose.model("Post", PostSchema)

// default export
module.exports = Post