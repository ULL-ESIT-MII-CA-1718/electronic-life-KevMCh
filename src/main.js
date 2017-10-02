function init () {
  var container = document.getElementById('world');
  var valley = new LifelikeWorld(
                                  ["#####################",
                                   "#####          ######",
                                   "##               **##",
                                   "##**       **  O  *##",
                                   "#   **  O  ##**    *#",
                                   "#     O    ##***    #",
                                   "#          ##**     #",
                                   "#   O  #*           #",
                                   "#*       #**   O    #",
                                   "#***     ##**  O  **#",
                                   "##***  ###***    *###",
                                   "#####################"],

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
