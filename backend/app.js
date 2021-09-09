const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://CHI:ZZqsqgAfs8uXySH5@clustermean.2cwwu.mongodb.net/node-angular?retryWrites=true&w=majority").then(() => {
    console.log('connected!')
})
.catch(() => {
    console.log('connected failed!')
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATH, DELETE, OPTIONS");
    next();
});


app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: "Post added successfully",
            postId: createdPost._id
        });
    });
});
//ZZqsqgAfs8uXySH5
//66.231.159.104
app.get('/api/posts', (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: documents
        });
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted!"});
    });
});

module.exports = app;

