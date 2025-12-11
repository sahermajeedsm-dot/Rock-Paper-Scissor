let userScore=0;
let computerScore=0;
let userChoice;
let choices=['rock','paper','scissor'];
let emojis={'rock':'🪨','paper':'📃','scissor':'✂️'}
function game(){
    const computerChoice=choices[Math.floor(Math.random()*3)];
let result='';
if(userChoice===computerChoice){
    result='Its a Tie😊,Try again';
}
else if(userChoice==='rock'&&computerChoice==='scissor' ||userChoice==='paper'&& computerChoice==='rock' ||userChoice==='scissor'&&computerChoice==='paper'){
     result=`you win  you choose ${emojis[userChoice]} and computerchooses${emojis[computerChoice]}`;
     userScore++;
}
else{
  result=`computer wins 🍨computer choose  ${emojis[computerChoice]} and  you choose ${emojis[userChoice]}`
  computerScore++;
 }
     document.getElementById('result').innerHTML=result;
      document.getElementById('score').innerHTML=`Score: You - ${userScore},computer-${computerScore}`;  
}
