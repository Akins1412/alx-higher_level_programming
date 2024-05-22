#!/usr/bin/node

const arg = process.arg[2];
const fs = require("fs");

fs.readFile(args, "ut8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

