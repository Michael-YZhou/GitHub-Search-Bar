const express = require("express");
const app = express();

// Middleware function that logs a message to the console
app.use((req, res, next) => {
  console.log("Request received at server 2");
  next();
});

// Route that sends an array of student objects as a response
app.get("/cars", (req, res) => {
  const cars = [
    { id: 1, name: "Audi" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Mercedes" },
  ];
  res.send(cars);
});

app.listen(5002, () => {
  console.log("Server 2 listening on: http://localhost:5002/cars");
});
