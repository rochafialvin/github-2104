require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const validation = require("./helpers/validation");
const auth = require("./config/auth");

app.get("/", (req, res) => {
  res.send("Welcome home !");
  console.log("Welcome home !");
});

app.post("/login", auth, (req, res) => {
  validation();
  res.send("Login berhasil");
});

app.listen(port, (error) => {
  if (error) return console.error("Api failed to start", error);
  console.log(`API is running at ${port}`);
});
