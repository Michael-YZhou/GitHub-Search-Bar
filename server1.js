const express = require("express");
const app = express();

// Middleware function that logs a message to the console
app.use((req, res, next) => {
  console.log("Request received at server 1");
  next();
});

// Route that sends an array of student objects as a response
app.get("/students", (req, res) => {
  const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.send(students);
});

app.listen(5001, () => {
  console.log("Server 1 listening on: http://localhost:5001/students");
});
