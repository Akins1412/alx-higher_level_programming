#!/usr/bin/node
const square = require('./4-rectangle.js')
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

module.exports = Rectangle;
