const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email." });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters long." });
  }

  return res.status(200).json({ message: "Login request validated successfully." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});