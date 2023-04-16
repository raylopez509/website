export default function getStartingPlayer() {
    let str = document.getElementById("textarea").value;
    let players = str.split("\n");
    let randNum = Math.floor(Math.random() * players.length);
    let startString = "The starting player is " + players[randNum];
    document.getElementById("start").innerHTML = startString;
}
