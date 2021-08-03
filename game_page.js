var name1 = localStorage.getItem("name1");
var name2 = localStorage.getItem("name2");

var score1 = 0;
var score2 = 0;

document.getElementById("player1_name").innerHTML = name1 + ": ";
document.getElementById("player2_name").innerHTML = name2 + ": ";

document.getElementById("1score").innerHTML = score1;
document.getElementById("2score").innerHTML = score2;

document.getElementById("question_turn").innerHTML = "Question Turn - " + name1;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + name2;




function send() {

getWord = document.getElementById("word").value;

word = getWord.toLowerCase();
console.log("the word is " + word);


charAt1 = word.charAt(1);
console.log(charAt1);

lengthdivide2 = Math.floor(word.length/2);

charAt2 = word.charAt(lengthdivide2);
console.log(charAt2);

letterend = word.length-1;

charAt3 = word.charAt(letterend);
console.log(charAt3);

remove1 = word.replace(charAt1, "_");
remove2 = remove1.replace(charAt2, "_");
remove3 = remove2.replace(charAt3, "_");
console.log(remove3);

questionword = "<h4 id='word_display'>Q. " +remove3 +"</h4>";
textinput = "<br>Answer : <input id='input_check_box'>";
check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = questionword + textinput + check_btn;
document.getElementById("output").innerHTML = row;

document.getElementById("word").innerHTML = "";
document.getElementById("word").value = "";

}

function check() {

question_turn = "player 1";
answer_turn = "player 2";

player_answer = document.getElementById("input_check_box").value;
answer = player_answer.toLowerCase();
console.log("the players answer is the word : " + answer);

if(answer == word){

if(answer_turn == "player 1"){

score1 = score1 + 1;
document.getElementById("1score").innerHTML = score1;
console.log(score1);

}
else{

score2 = score2 + 1;
document.getElementById("2score").innerHTML = score2;
console.log(score2);

}

}

if(question_turn == "player 1"){

question_turn = "player 2";

document.getElementById("question_turn").innerHTML = "Question Turn - " + name2;

console.log("Question Turn = " + question_turn);

}

else{

question_turn = "player 1";

document.getElementById("question_turn").innerHTML = "Question Turn - " + name1;

console.log("Question Turn = " + question_turn);

}

if(answer_turn == "player 1" ){

answer_turn = "player 2";

document.getElementById("answer_turn").innerHTML = "Answer Turn - " + name2;

console.log("Answer Turn" + answer_turn);

}

else{

    answer_turn = "player 1";

    document.getElementById("answer_turn").innerHTML = "Answer Turn - " + name1;

    console.log("Answer Turn = " + answer_turn);

}

document.getElementById("output").innerHTML = "";

}