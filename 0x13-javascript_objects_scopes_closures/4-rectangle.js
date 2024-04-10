#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if ((w && h) > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let p = "";
      for (let j = 0; j < this.width; j++) {
        p += "X";
      }
      console.log(p);
    }
  }

  rotate() {
    const a = this.width;
    this.width = this.height;
    this.height = a;
  }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;

