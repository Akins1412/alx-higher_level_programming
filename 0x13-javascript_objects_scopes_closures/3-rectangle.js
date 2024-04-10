#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if ((w && h) > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    for (i = 0; i < this.width; i++) {
      let p = "";
      for (j = 0; j < this.height; j++) {
        p += "X";
      }
      console.log(p);
    }
  }
}

module.exports = Rectangle;
