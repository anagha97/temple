const express = require('express');
const bodyPaser = require("body-parser");
const mongoose= require('mongoose');

const postsRoutes = require("./routes/posts");

const { createShorthandPropertyAssignment } = require('typescript');

const app = express();

mongoose.connect("mongodb+srv://anagha:YnP04QkjBc1n5w6T@cluster0.kwh1g.mongodb.net/user-details?retryWrites=true&w=majority")
.then(() =>{
  console.log("connected to db");
})
.catch(()=>{
  console.log("connection to db failed");
});
console.log("gets here 1");
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Reqyested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS,PUT");
next();
});

app.use("/api/posts",postsRoutes);

module.exports = app;
