var World = require("./world");
var View = require("./view");
var actionTypes = require("./action-types");


class LifelikeWorld extends World {
  constructor(map, legend, container) {
    super(map, legend, container);
  }

  letAct(critter, vector) {
    var action = critter.act(new View(this, vector));

    var handled = action &&
      action.type in actionTypes &&
      actionTypes[action.type].call(this, critter,
                                    vector, action);
    if (!handled) {
      critter.energy -= 0.2;
      if (critter.energy <= 0)
        this.grid.set(vector, null);
    }
  }
}

module.exports = LifelikeWorld;
