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

var cellStyles = {
  "#": 'wall',
  "*": 'plant',
  "O": 'plant-eater',
  "o": 'bouncing-critter',
  "~": 'wall-follower'
};

function buildCell(char){
  var css = cellStyles[char];
  var output = "<td class='" + css + "'>" +
               char + "</td>";
  return output;
}

class World {
  constructor(map, legend, container) {
    var grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;
    this.container = container;

    map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y),
      elementFromChar(legend, line[x]));
    });
  }

  toString() {
    var output = "";
    for (var y = 0; y < this.grid.height; y++) {
      for (var x = 0; x < this.grid.width; x++) {
        var element = this.grid.get(new Vector(x, y));
        output += charFromElement(element);
      }
      output += "\n";
    }
    return output;
  }

  turn() {
    var acted = [];
    this.grid.forEach(function(critter, vector) {
      if (critter.act && acted.indexOf(critter) == -1) {
        acted.push(critter);
        this.letAct(critter, vector);
      }
    }, this);
    this.draw();
  }

  letAct(critter, vector) {
    var action = critter.act(new View(this, vector));
    if (action && action.type == "move") {
      var dest = this.checkDestination(action, vector);
      if (dest && this.grid.get(dest) == null) {
        this.grid.set(vector, null);
        this.grid.set(dest, critter);
      }
    }
  }

  checkDestination(action, vector) {
    if (directions.hasOwnProperty(action.direction)) {
      var dest = vector.plus(directions[action.direction]);
      if (this.grid.isInside(dest))
        return dest;
    }
  }

  toHtmlTable() {
    var table = "<table class='world-map'>";
    var row = "";
    for (var y = 0; y < this.grid.height; y++) {
      row = "<tr>";
      for (var x = 0; x < this.grid.width; x++) {
        var element = this.grid.get(new Vector(x, y));
        row += buildCell(charFromElement(element));
      }
      row = row + "</tr>";
      table += row;
    }
    table = table + "</table>";
    return table;
  }

  draw() {
    this.container.innerHTML = this.toHtmlTable();
    // console.log(this.toString());
  }
}

module.exports = World;
