/* jshint esversion: 6 */
import {LifelikeWorld} from "./life-like-world.js";
import {Wall} from "./wall.js";
import {WallFollower} from "./wall-follower.js";
import {BouncingCritter} from "./bouncing-critter.js";
import {Plant} from "./plant.js";
import {PlantEater} from "./plant-eater.js";

function init () {
  var container = document.getElementById('world');
  var valley = new LifelikeWorld(
                                  ["############################",
                                   "#####                 ######",
                                   "##   ***                **##",
                                   "#   *##**         **  O  *##",
                                   "#    ***     O    ##**    *#",
                                   "#       O         ##***    #",
                                   "#                 ##**     #",
                                   "#   O       #*             #",
                                   "#*          #**       O    #",
                                   "#***        ##**    O    **#",
                                   "##****     ###***       *###",
                                   "############################"],

                                  {
                                    "#": Wall,
                                    "~": WallFollower,
                                    "o": BouncingCritter,
                                    "O": PlantEater,
                                    "*": Plant
                                  },
                                  container
                                );

  (function loop(){
    valley.turn(valley);
    setTimeout(loop, 1000);
  })();
}

init();
