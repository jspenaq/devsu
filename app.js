const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  console.log("Hello World!");
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  console.log(`Hello ${req.params.name}!`);
  res.send(`Hello ${req.params.name}!`);
});

module.exports = app;
