#!/usr/bin/node
const Square = ('./5-square.js')
class square extends Square {
  charPrint(c) {
    if (c === undefined) {
      c = "X";
    }
    for (let i = 0; i < this.height; i++) {
      console.log("c".repeat(this.width));
    }
  }
}
module.exports = Square;
