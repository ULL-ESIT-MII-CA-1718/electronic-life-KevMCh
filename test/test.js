import {Vector} from "/src/vector.js";
import {Wall} from "/src/wall.js";
import {WallFollower} from "/src/wall-follower.js";
import {Grid} from "/src/grid.js";
import {World} from "/src/world.js";
import {LifelikeWorld} from "/src/life-like-world.js";
import {BouncingCritter} from "/src/bouncing-critter.js"
import {Plant} from "/src/plant.js";
import {PlantEater} from "/src/plant-eater.js"

var assert = chai.assert;

describe('Electronic life', function() {

  describe('Vector', function() {
    it('Create vector', function() {
      var vector = new Vector(1, 1);

      assert.equal(vector.x, 1);
      assert.equal(vector.y, 1);
    });

    it('Plus vector', function() {
      var vector1 = new Vector(1, 1);
      var vector2 = new Vector(1, 1);

      var vectorPlus = vector1.plus(vector2);

      assert.equal(vectorPlus.x, 2);
      assert.equal(vectorPlus.y, 2);
    });
  });

  describe('Wall', function() {
    it('Create wall', function() {
      var wall = new Wall();
      assert.strictEqual(wall instanceof Wall, true);
    });
  });

  describe('Grid', function() {
    var grid = new Grid(3, 3);

    it('Create grid', function() {
      assert.equal(grid.width, 3);
      assert.equal(grid.height, 3);
    });

    it('Is inside', function() {
      var vector = new Vector(12, 1);
      assert.strictEqual(grid.isInside(vector), false);

      var vector = new Vector(1, 1);
      assert.strictEqual(grid.isInside(vector), true);
    });

    it('Set/Get', function() {
      var vector = new Vector(1, 1);
      grid.set(vector, "content")

      assert.strictEqual(grid.get(vector), "content");
    });
  });

  describe('World', function() {
    var map = ["#####",
               "#  *#",
               "#O *#",
               "#####"];

    var legend = {
      "#": Wall,
      "~": WallFollower,
      "o": BouncingCritter,
      "O": PlantEater,
      "*": Plant
    };

    var container = "<div></div>";

    var world = new World(map, legend, container);

    it('Create world', function() {
      assert.strictEqual(world.grid instanceof Grid, true);
      assert.equal(world.legend, legend);
      assert.strictEqual(world.container, "<div></div>");
    });

    it('String of the world', function() {
      assert.strictEqual(world.toString(), "#####\n#  *#\n#O *#\n#####\n");
    });

    it('World in html', function() {
      assert.strictEqual(world.toHtmlTable(), "<table class='world-map'><tr><td class='wall'>#</td><td class='wall'>#</td><td class='wall'>#</td><td class='wall'>#</td><td class='wall'>#</td></tr><tr><td class='wall'>#</td><td class='undefined'> </td><td class='undefined'> </td><td class='plant'>*</td><td class='wall'>#</td></tr><tr><td class='wall'>#</td><td class='plant-eater'>O</td><td class='undefined'> </td><td class='plant'>*</td><td class='wall'>#</td></tr><tr><td class='wall'>#</td><td class='wall'>#</td><td class='wall'>#</td><td class='wall'>#</td><td class='wall'>#</td></tr></table>");
    });
  });

  describe('LifelikeWorld', function() {
    var map = ["#####",
               "#  *#",
               "#O *#",
               "#####"];

    var legend = {
      "#": Wall,
      "~": WallFollower,
      "o": BouncingCritter,
      "O": PlantEater,
      "*": Plant
    };

    var container = "<div></div>";

    var valley = new LifelikeWorld(map, legend, container);

    it('Create lifelickeworld', function() {

      assert.strictEqual(valley.grid instanceof Grid, true);
      assert.equal(valley.legend, legend);
      assert.strictEqual(valley.container, "<div></div>");
      assert.strictEqual(valley instanceof World, true);
    });
  });

  describe('Plant', function() {
    var plant = new Plant ();

    it('Create plant', function() {
      assert.strictEqual(plant.energy > 3, true);
    });
  });

  describe('Plant eater', function() {
    var plantEater = new PlantEater();

    it('Create plant', function() {
      assert.strictEqual(plantEater.energy, 20);
    });
  });
});
