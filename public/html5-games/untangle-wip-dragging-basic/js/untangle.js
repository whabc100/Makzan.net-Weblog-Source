if (untangleGame === undefined) {
  var untangleGame = {};
}

// Entry point
$(function(){
  var canvas = document.getElementById("game");
  untangleGame.ctx = canvas.getContext("2d");

  var width = canvas.width;
  var height = canvas.height;

  untangleGame.createRandomCircles(width, height);

  untangleGame.connectCircles();

  untangleGame.handleInput();

  // setup an interval to loop the game loop
  setInterval(gameloop, 30);


  function gameloop() {

    // clear the canvas before re-drawing.
    untangleGame.clear();

    untangleGame.drawAllLines();

    untangleGame.drawAllCircles();
  }

});
