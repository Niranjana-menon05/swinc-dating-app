
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
   addUser,
  getUser,
  deleteUser
 } = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8010;

const MONGO_URL =
  "mongodb+srv://niranjanamenon05:XtBz6RvIBIULioqX@cluster0.wczerg1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Mongo DB successfully connected"))
    .catch((err) => console.log("err connecting db",err))

//GET,PUT,POST,DELETE ARE HTTP METHODS
app.post("/signup", addUser);
app.get("/", getUser);
app.delete("/:id", deleteUser);

app.listen(PORT,()=>{
    console.log("Server started :", PORT);
});



