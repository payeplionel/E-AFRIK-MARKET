const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/front-e-market"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/front-e-market/index.html"));
});

app.listen(process.env.PORT);
