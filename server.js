require("dotenv").config();
var express = require("express");
var cors = require("cors");

const port = 8080;

var app = express();

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req = express.request, res) => {
  const ipaddress = req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  console.log(ipaddress)
  res.json({ ipaddress, language, software });
});

var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
