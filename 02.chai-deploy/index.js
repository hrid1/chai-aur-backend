
require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello vai");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login Your Account </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> Chai Aur Code </h2>");
});

// send data using params | dynamic routes
app.get("/profile/:name", (req, res) => {
    res.send(`hello vai ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
