import { uppdateScoreboard } from "./scoreBoard.js";

export async function getFirebase(url){

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data;
}

export async function patchFirebase(url, newValue){

    const option = {
        method: "PATCH",
        body: JSON.stringify(newValue),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, option);
    const data = await response.json();
    console.log(data);
    uppdateScoreboard(0, "")
}