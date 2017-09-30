function init () {
  var container = document.getElementById('world');
  var valley = new LifelikeWorld(
                                  ["############################",
                                   "#####       ~         ######",
                                   "##   ***      o         **##",
                                   "#   *##**         **  O  *##",
                                   "#    ***     O    ##**    *#",
                                   "# o     O         ##***    #",
                                   "#                 ##**     #",
                                   "#   O       #*             #",
                                   "#*          #**       O    #",
                                   "#***    ~   ##**    O    **#",
                                   "##****     ###*** o     *###",
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
