const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { exec } = require("child_process");
const { spawn } = require("child_process");
const app = express();
// app.use(bodyParser.json);S
app.use(cors({ origin: "*" }));
app.get("/pushCode", (req, res, next) => {
  console.log("Code was pushed");
  const child = spawn("./shell.sh");
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  child.stdout.on("data", (chunk) => {
    // data from the standard output is here as buffers
    console.log(chunk)
  });
  child.stderr.on("data", (chunk) => {
    // data from the standard output is here as buffers
    console.log(chunk)
  });
  // since these are streams, you can pipe them elsewhere
  // child.stderr.pipe(dest);
  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
  res.status(200).end()
});
app.listen(4000, () => {
  console.log("Listening to Port 4000");
});