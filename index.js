const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

// app.use(bodyParser.json);S

app.use(cors({ origin: "*" }));

app.get("/pushCode", (req, res, next) => {
  console.log("Code was pushed");
  exec("", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).end();
  });
  
});

app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
