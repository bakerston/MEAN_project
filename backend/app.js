const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");




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
    "GET, POST, PATH, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;

