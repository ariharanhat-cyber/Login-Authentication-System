import express from "express";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const DB_FILE = "./database.json";
const SECRET = "supersecretjwtkey";

// Load DB
function loadDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_FILE));
}

// Save DB
function saveDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Register
app.post("/register", (req, res) => {
  const {name, email, password } = req.body;
  const db = loadDB();

  const userExists = db.users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = bcrypt.hashSync(password, 8);
  db.users.push({ name, email, password: hashedPassword });
  saveDB(db);

  res.json({ message: "Registration successful" });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const db = loadDB();

  const user = db.users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPass = bcrypt.compareSync(password, user.password);
  if (!validPass) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

// Protected route
app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.json({ message: `Welcome ${decoded.email}, you are authorized!` });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
