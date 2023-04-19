import { gameSetPlay } from "./gameEngine.js";
import { resetScore } from "./gameEngine.js";
import { uppdateScoreboard } from "./scoreBoard.js";
import { resetFirebaseScores } from "./scoreBoard.js";

const params = new URLSearchParams(document.location.search);
const name = params.get("name");

const nameTag = document.getElementById("nameTag");
nameTag.innerText = ("Lets play " + name + "!");

const resetButton = document.getElementById("reset");

buttonContainer.addEventListener("click", event =>{
    const scores = gameSetPlay(event, name);
    if(scores[1] > 0){
        resetScore();
        uppdateScoreboard(scores[0],name);
    }
})
resetButton.addEventListener("click", event =>{
    resetFirebaseScores();
})

