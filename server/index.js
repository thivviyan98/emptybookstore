import express from "express";
import mysql from "mysql";
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

// db.on("error", (err) => {
//   console.error("Database connection error:", err);

//   if (err.code === "PROTOCOL_CONNECTION_LOST") {
//     db.connect();
//   } else {
//     throw err;
//   }
// });

app.get("/", (req, res) => {
  res.json("hello this is the back end😊😊😊😊");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM test.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Server is running");
});
