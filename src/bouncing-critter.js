/* jshint esversion: 6 */
import {Vector} from "./vector.js";

class BouncingCritter {
  constructor() {
    this.direction = directionNames.randomElement();
  }

  act(view) {
    if (view.look(this.direction) != " ")
      this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
  }
}

export {BouncingCritter};
