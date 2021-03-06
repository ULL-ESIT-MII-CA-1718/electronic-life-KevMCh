/* jshint esversion: 6 */
import {directions} from "./utils.js";
import {directionNames} from "./utils.js";
import {charFromElement} from "./utils.js";

class View {
  constructor(world, vector) {
    this.world = world;
    this.vector = vector;
  }

  look(dir) {
    var target = this.vector.plus(directions[dir]);

    if (this.world.grid.isInside(target))
      return charFromElement(this.world.grid.get(target));
    else
      return "#";
  }

  findAll(ch) {
    var found = [];

    for (var dir in directions)
      if (this.look(dir) == ch)
        found.push(dir);

    return found;
  }

  find(ch) {
    var found = this.findAll(ch);

    if (found.length == 0) return null;
    return found.randomElement();
  }
}

export {View};
