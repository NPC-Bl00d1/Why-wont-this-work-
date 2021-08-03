function byebutalsohi(){

var name1 = document.getElementById("player1name").value;
var name2 = document.getElementById("player2name").value;

localStorage.setItem("name1", name1);
localStorage.setItem("name2", name2);

window.location="game_page.html";

}