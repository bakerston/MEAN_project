const express = require('express');
const bodyParser = require("body-parser");

const app = express();

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
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

//ZZqsqgAfs8uXySH5
//66.231.159.104
app.use('/api/posts', (req, res, next) => {
    const posts = [
        {id: 'bokerstan', 
        title: "first", 
        content:'coming from server'},
        {id: 'bokerstan2', 
        title: "second", 
        content:'coming from server2'}
    ];
    return res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: posts
    });
});

module.exports = app;

