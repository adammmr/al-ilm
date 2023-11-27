const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    photo: String, // Assuming the photo is a URL or file path
    description: {
        type: String,
        required: true
    },
    comments: [
        {
            user: {
                type: String
                // type: mongoose.Schema.Types.ObjectId,
                // ref: 'User'
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
