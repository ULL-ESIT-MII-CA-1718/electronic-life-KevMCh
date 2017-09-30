var Vector = require("../src/vector");
var Wall = require("../src/wall");
var WallFollower = require("../src/wall-follower");
var Grid = require("../src/grid");
var BouncingCritter = require("../src/bouncing-critter");
var Plant = require("../src/plant");
var PlantEater = require("../src/plant-eater");

var assert = require('assert');

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
});
