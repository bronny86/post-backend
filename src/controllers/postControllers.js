const Post = require("../models/post")


// get all posts function
async function getPosts() {
    const posts = await Post.find()
    return posts
}
 
// get single post function
async function getPost(postId) {
    const post = await Post.findById(postId)
    return post
}

// create post function
async function createPost(post) {
    const newPost = await Post.create(post)
    return newPost
}

// update post function // updatePost is function updatedPost is object
async function updatePost(postId, post) {
    const updatedPost = await Post.findByIdAndUpdate(postId, post, { new: true })
    return updatedPost
}

// delete post function
async function deletePost(postId) {
    const deletedPost = await Post.findByIdAndDelete(postId)
    return deletedPost
}

// named exports
module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
    
} 