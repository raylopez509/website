import "../scripts/randomizer";
import getStartingPlayer from "../scripts/randomizer";

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
            <script src="../scripts/randomizer.js"></script>
        </>
    );
}
