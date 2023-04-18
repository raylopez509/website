//import "../styles/TeamRandomizer.css";
import { useState } from "react";

const Title = () => {
    return <h1 className="title">Team Randomizer</h1>;
};

function getRandomTeamArray(teamNumber) {
    let str = document.getElementById("textarea").value.trim();
    let players = str.split("\n");
    let teamarr = [[]];
    let randTeamArray = [];
    for (let i = 0; i < teamNumber; i++) {
        teamarr[i] = [];
    }
    let randNum = Math.floor(Math.random() * players.length);
    let playerLength = players.length;
    let team = 0;
    for (let i = 0; i < playerLength; i++) {
        let removedPlayer = players.splice(randNum, 1);
        teamarr[team].push(removedPlayer);
        team++;
        if (team >= teamNumber) {
            team = 0;
        }
        randNum = Math.floor(Math.random() * players.length);
    }
    let teamsText = "";
    let teamNum = 1;
    for (let i = 0; i < teamNumber; i++) {
        teamsText = teamsText + "Team " + teamNum + ":\n";
        let playerNum = 1;
        for (let j = 0; j < teamarr[i].length; j++) {
            teamsText = teamsText + playerNum + ". " + teamarr[i][j];
            playerNum++;
            if (j !== teamarr[i].length - 1) {
                teamsText = teamsText + "\n";
            }
        }
        randTeamArray.push(teamsText);
        teamNum++;
        teamsText = "";
    }
    return randTeamArray;
}

export default function TeamRandomizer() {
    const [names, setNames] = useState("");
    const [teamQuantity, setTeamQuantity] = useState(2);
    const [teamArray, setTeamArray] = useState([]);

    function TeamQuantity() {
        return (
            <div id="teamQuantity">
                <div>Select number of teams</div>
                <select
                    name="teamDropdown"
                    id="teamDropdown"
                    value={teamQuantity}
                    onChange={(e) => setTeamQuantity(e.target.value)}
                >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
        );
    }

    const TeamButton = () => {
        return (
            <button
                type="button"
                id="btn"
                onClick={() => setTeamArray(getRandomTeamArray(teamQuantity))}
            >
                Get Your Teams!
            </button>
        );
    };

    const TeamUI = () => {
        return (
            <div id="teamUI">
                <TeamQuantity teamQuantity={2} />
                <TeamButton />
            </div>
        );
    };

    const TeamList = (props) => {
        return (
            <div className="teams" id={props.teamNumber}>
                {props.teamText}
            </div>
        );
    };

    function TeamListComponent() {
        var teamData = [];
        var num = 0;
        teamArray.forEach((e) => {
            teamData.push({ id: num, teamlist: e });
            num++;
        });
        const teamLists = teamData.map((team) => {
            return (
                <TeamList
                    key={team.id}
                    className="teams"
                    teamText={team.teamlist}
                />
            );
        });
        return teamLists;
    }

    return (
        <>
            <Title />
            <textarea
                id="textarea"
                name="textarea"
                placeholder="Put list of names here separated by a new line"
                value={names}
                onChange={(e) => setNames(e.target.value)}
            ></textarea>
            <TeamUI />
            <div className="listing">{TeamListComponent()}</div>
        </>
    );
}
