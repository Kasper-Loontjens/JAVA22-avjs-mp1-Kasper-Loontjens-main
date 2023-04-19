import { getFirebase } from "./htmlRequests.js";
import { patchFirebase } from "./htmlRequests.js";
import _, { forEach } from "underscore";

const scoreBoardDiv = document.createElement("div");
document.body.append(scoreBoardDiv);
scoreBoardDiv.id = "scoreBoard";

uppdateScoreboard(0, "")


export function uppdateScoreboard(playerScore, playeName){


    let allUsers = getFirebase("https://rockpaperscissors-417c0-default-rtdb.europe-west1.firebasedatabase.app/.json");

    allUsers.then(data => checkForNewHighscore(playerScore,playeName,data.users));
    allUsers.then(data => sortMe(data.users));
    // sortedAllUsers.then(data => printScores(data));
}

async function checkForNewHighscore(playerScore, playeName, users){
    let currentLowestUser = _.min(users,"highScore");
    if (playerScore > currentLowestUser.highScore){
        console.log("new highscore");
        preparePatch(playeName, _.findIndex(users, currentLowestUser), playerScore);
    }
}

function sortMe(array){
    const newArray = _.sortBy(array, "highScore").reverse();
    printScores( newArray);
}

function printScores(usersArray){
    scoreBoardDiv.innerHTML = "<h3>Highscores:<h3>";
    usersArray.forEach(user => {
        //console.log(user);
        const userPara = document.createElement("p")
        scoreBoardDiv.append(userPara);
        userPara.innerText = (user.name + ": " + user.highScore);
    });

}
function preparePatch(newName, index, newScore){

    url = ('https://rockpaperscissors-417c0-default-rtdb.europe-west1.firebasedatabase.app/users/'+index+'.json');

    const newValue = {
        name: newName,
        highScore: newScore
    }
    patchFirebase(url, newValue)
}
export function resetFirebaseScores(){
    url = ('https://rockpaperscissors-417c0-default-rtdb.europe-west1.firebasedatabase.app/.json');

    const newValue = {
        users: [
            {
                name: "",
                highScore: 0
            },
            {
                name: "",
                highScore: 0
            },
            {
                name: "",
                highScore: 0
            },
            {
                name: "",
                highScore: 0
            },
            {
                name: "",
                highScore: 0
            },
        ]
    }
    patchFirebase(url, newValue)
}