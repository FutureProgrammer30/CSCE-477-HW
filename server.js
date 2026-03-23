const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to SQLite database");
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});


const validateEmail = (email) => email.includes("@");
const validatePassword = (password) => password.length >= 8;

app.post("/signup", (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Missing Field(s)." });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email." });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ message: "Password must be at least 8 characters long." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  db.get("SELECT email FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      return res.status(500).json({ message: "Server error. Please try again." });
    }

    if (row) {
      return res.status(400).json({ message: "Email already registered." });
    }

    db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password],
      function (err) {
        if (err) {
          return res.status(500).json({ message: "Error registering user." });
        }
        res.status(201).json({ message: "Account created successfully. Please login." });
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing Field(s)." });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email." });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ message: "Password must be at least 8 characters long." });
  }

  db.get("SELECT password FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      return res.status(500).json({ message: "Server error. Please try again." });
    }

    if (!row) {
      return res.status(400).json({ message: "Email or password is incorrect." });
    }

    if (password !== row.password) {
      return res.status(400).json({ message: "Email or password is incorrect." });
    }

    res.status(200).json({ message: `${email} successfully logged in.` });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});