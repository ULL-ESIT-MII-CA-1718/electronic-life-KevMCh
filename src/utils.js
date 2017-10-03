"use strict";

import {Vector} from "./vector.js";

var directions = {
  "n":  new Vector(0, -1),
  "ne": new Vector(1, -1),
  "e":  new Vector(1, 0),
  "se": new Vector(1, 1),
  "s":  new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w":  new Vector(-1, 0),
  "nw": new Vector(-1, -1)
};

var directionNames = "n ne e se s sw w nw".split(" ");

function elementFromChar(legend, ch) {
  if (ch == " ") {
    return null;
  }

  var element = new legend[ch]();
  element.originChar = ch;

  return element;
}

function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

export {directions, directionNames, elementFromChar, charFromElement};
