const md5 = require("blueimp-md5");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const jsonParser = express.json();

const PORT = process.env.PORT || 8000;
const indexHTML = path.resolve(__dirname, "./build/index.html");

const Schema = mongoose.Schema;
const userScheme = new Schema({login: String, password: String, name: String}, {versionKey: false});
const User = mongoose.model("user",userScheme);

app.use(express.static(__dirname + "/build"));

app.get("/*", (req, res) => {
    res.sendFile(indexHTML);
});
mongoose.connect("mongodb://127.0.0.1/accounts", {useUnifiedTopology: true, useNewUrlParser: true},(err)=>{
    if(err) return console.log(err);
    app.listen(PORT, (err) => {
        if (err) return console.log(err);

        console.log("server started");
    })
});

app.post("/signin",jsonParser, (req,res)=>{
    const {login,password} = req.body;
    User.findOne({login, password: md5(password)},(err, user)=>{
        if(err) return console.log(err);
        console.log(user);
        res.send("You`re logining");
    });
});
app.post("/signup", jsonParser, (req,res)=>{
    const {login,password,name} = req.body;
    
    User.findOne({login: login}, (err,user)=>{
        if(err) return console.log(err);
        if(user) return res.send("User is recently regestered");

        const newUser = new User({login, password: md5(password), name});

        newUser.save((err)=>{
            if(err) return console.log(err);
            res.send("You`re regestered. Have good shopping^_^");
        })
    })
});