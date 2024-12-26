let userScore= 0;
let compScore= 0;

let choices= document.querySelectorAll("#choice");
let msg= document.querySelector(".msg-container");
let scoreUser= document.querySelector("#user-score");
let scoreComp= document.querySelector("#comp-score");

choices.forEach((choice) => {
choice.addEventListener("click",() => {
const userChoice= choice.getAttribute("class");
playGame(userChoice);
});
}); 

const playGame= (userChoice)=>{
const compChoice= genCompChoice();

if(userChoice === compChoice) {
//draw
drawGame();
}
else{
let userWin = true;
if(userChoice === "rock") {
 //paper, scissor
 userWin = (compChoice === "scissor") ? true :false;
}
else if(userChoice === "paper") {
 //rock, scissor
 userWin = (compChoice === "rock") ? true :false;
}
else {
 //rock, paper
 userWin = (compChoice === "paper") ? true : false;
}
showWinner(userWin);
}
};

const genCompChoice= ()=>{
let list=["rock","paper","scissor"];
const randIdx= Math.floor(Math.random() *3);
return list[randIdx];
};

const drawGame=() =>{
msg.innerText= " DRAW! ";
};

const showWinner=(userWin) =>{
if(userWin) {
msg.innerText= "You WIN 😃";
userScore++;
scoreUser.innerText= userScore;
}
else{
msg.innerText= "You LOOSE 😞";
compScore++;
scoreComp.innerText= compScore;
}
};