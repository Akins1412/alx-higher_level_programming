#!/usr/bin/node
const request = require("request");

request.get(proces.args[2], (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("code: " + response.statusCode);
});
