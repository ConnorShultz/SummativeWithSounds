function Lose() {
  currentScene = 13;
  activeScreen = "Loose";
  draw = function() {
    textSize(50);
    background(26, 226, 0);
    text("YOU LOOSE!", 125, 100);
    text("Enemy scored 5 goals", 0, 200);
    textSize(20);
    text("GAME OVER", 190, 370);
  }
}
