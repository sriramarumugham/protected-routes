const app = require("express").Router();
const { registerUser, authUser ,getHomePage , userInfo } = require("../controller/userController");

const protect=require('../middleware/auth');

app.get("/login", (req, res) => {
  res.send("Login page");
});

app.post("/login", authUser);

app.post("/register", registerUser);

app.get("/register", (req, res) => {
  res.send(" register successful");
});

app.get("/home"  ,protect);

app.post("/use-info", userInfo);

module.exports = app;
