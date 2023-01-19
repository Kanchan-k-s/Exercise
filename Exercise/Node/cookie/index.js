
// COOKIE

const express = require("express");
const cookies = require("cookie-parser");
//const { application } = require("express");

const app = express();

app.use(cookies());

let user = {
  Name: "Kanchan",
  Username: "Ksiker@123.n",
};

app.get("/", (req, res) => {
  res.send("Cookie Tutorials");
});

app.get("/set_user", (req, res) => {
  res.cookie("userData", user); //set data in cookie
  res.send("User added");
});

app.get("/show_user", (req, res) => {
  res.send(req.cookies); //access data in cookie
});

app.get("/logout", (req, res) => {
  res.clearCookie("userData"); //delete cookie by name
  res.send("User Deleted");
});
app.listen(3000, () => {
  console.log("The server is running on http://localhost:3000");
});
