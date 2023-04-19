import anime from "animejs";


const choiceArray = ["Rock", "Paper", "Scissors"];

const playerChoicePara = document.getElementById("playerChoice");
let playerChoice;
let opponentChoice;
let opponentScore = 0
let playerScore = 0;
const pointText = document.getElementById("pointText");
const scoreText = document.getElementById("scoreText");
const opponentChoiceImg = document.getElementById("opponentChoiceImg");
const currentScoreH1 = document.getElementById("currentScore");



const scissorsImgUrl = new URL('../media/scissors.png', import.meta.url);
const stoneImgUrl = new URL('../media/stone.png', import.meta.url);
const paperImgUrl = new URL('../media/toilet-paper.png', import.meta.url);
//img.src = imgUrl.href;

const choiceArrayImgUrl = [
    stoneImgUrl,
    paperImgUrl,
    scissorsImgUrl
]
export function gameSetPlay(event, name){
    playerChoice = event.target.getAttribute("data-choiceNr")
    playerChoicePara.innerHTML = (name + " chose: " + choiceArray[playerChoice]);
    announcement.innerText="";
    opponentChoice = getRandomInt(3);
    playerChoicePara.innerHTML += ("</br>Opponent chose: " + choiceArray[opponentChoice]);
    opponentChoiceImg.src = (choiceArrayImgUrl[opponentChoice]);

    

    anime({
        targets: ['#opponentChoiceImg',("#"+event.target.id)],
        
        width: {
          value: '-=20px', // 28 - 20 = '8px'
          duration: 200,
          easing: 'easeInOutSine'
        },
        height: {
            value: '-=20px', // 28 - 20 = '8px'
            duration: 200,
            easing: 'easeInOutSine'
          },
        direction: 'alternate'
    });

    if(playerChoice == 0 && opponentChoice == 1){
        opponentScore++;
    }else if(playerChoice == 0 && opponentChoice == 2){
        pointText.innerText="One point to you!";
        playerScore++;
    }else if(playerChoice == 1 && opponentChoice == 0){
        pointText.innerText="One point to you!";
        playerScore++;
    }else if(playerChoice == 1 && opponentChoice == 2){
        opponentScore++;
    }else if(playerChoice == 2 && opponentChoice == 0){
        opponentScore++;
    }else if(playerChoice == 2 && opponentChoice == 1){
        pointText.innerText="One point to you!";
        playerScore++;
    }else{
        pointText.innerText="Its a draw!"
    }
    currentScoreH1.innerText =("Score: "+ playerScore)
    
    if(opponentScore > 0){
        announcement.innerText = "Your opponent wins!"
    }

    return [playerScore, opponentScore];

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
export function resetScore(){
    opponentScore=0;
    playerScore=0;
}