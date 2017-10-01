var Vector = require("./vector");

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

module.exports = BouncingCritter;
