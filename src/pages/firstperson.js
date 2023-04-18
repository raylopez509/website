export default function FirstPerson() {
    return (
        <>
            <h1>Start Player</h1>
            <textarea
                id="textarea"
                name="textarea"
                placeholder="Put list of names here separated by a new line"
                rows="10"
                cols="50"
            ></textarea>
            <br />
            <button type="button" id="btn" onClick={getStartingPlayer}>
                Get Start Player!
            </button>
            <p id="start"></p>
        </>
    );
}

function getStartingPlayer() {
    let str = document.getElementById("textarea").value;
    let players = str.split("\n");
    let randNum = Math.floor(Math.random() * players.length);
    let startString = "The starting player is " + players[randNum];
    document.getElementById("start").innerHTML = startString;
}
