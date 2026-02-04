require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);
const express = require("express");
const app = express();
const port=5000;
const connectDB = require("./config/db");

console.log("MONGO_URI =", process.env.MONGO_URI);

app.use(express.json());

let users = [
  { id: 1, name: "Jaswanth", email: "user1@gmail.com" },
  { id: 2, name: "Gnaneswar", email: "user2@gmail.com" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users1/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found...😔" });
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Assign correct Name and Mailid ....!" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User can't found" });
  }

  const { name, email } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});


connectDB();

app.listen(port,()=>{
    console.log("Server Open & Connected To Database 🤟")
});



