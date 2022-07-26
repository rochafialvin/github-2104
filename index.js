require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome home !");
  console.log("Welcome home !");
});

app.post("/login", (req, res) => {
  res.send("Endpoint login is ready");
});

app.listen(port, (error) => {
  if (error) return console.error("Api failed to start", error);
  console.log(`API is running at ${port}`);
});