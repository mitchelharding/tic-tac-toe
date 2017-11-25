//backEnd logic:
player1 = "";
player2 = "";

function Player(turn, square){
  this.turn = turn;
  this.square = square;
  this.playerName;
}

Player.prototype.turn = function(){
  if (("input:checkbox[name=chooseXorO]:checked") === "X"){
    return true;
  } else {
    return false;
  }
}


//frontEnd logic:
$(document).ready(function(){

  $("form#startGame").submit(function(event){
    event.preventDefault();

    player1 = new Player;
    player2 = new Player;

    var player1 = $("input#playerName1").val();
    $(".playerName1").text(player1);

    var player2 = $("input#playerName2").val();
    $(".playerName2").text(player2);

    player1.playerName = player1;
    player2.playerName = player2;
  });

  $(".square").click(function(event){
    if (player1.turn()=== true) {
      $(".XorO1").append("<p>X</p>");
    } else {
      $(".XorO1").append("<p>O</p>");
    }

   });
});
