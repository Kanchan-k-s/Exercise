

//    SESSION

const express = require("express");
const session = require("express-session");
const PORT = 3000;

const app = express();

app.use(
  session({
    secret: "My secret key",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  req.session.name = "Kanchan"; //Creating a session variable
  return res.send("Session set");
});

app.get("/display", (req, res) => {
  return res.send(req.session.name);
});

app.get("/delete", (req, res) => {
  req.session.destroy(function (err) {
    //destroying a session
    console.log("Session destroyed");
  });
  return res.end();
});

app.listen(PORT, () => {
  console.log("Session running on http://localhost:" + PORT);
});

