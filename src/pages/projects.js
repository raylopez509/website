import Link from "next/link";
export default function projects() {
    return (
        <>
            <h1>Projects</h1>
            <h2>Calculator</h2>
            <a href="https://github.com/raylopez509/calc">GitHub</a>
            <p>
                A one line basic calculator written in Python. This project
                helped me get back into the mindset of programming
            </p>
            <h2>Tic Tac Toe</h2>
            <a href="https://github.com/raylopez509/tictactoe">GitHub</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/tictactoe">Link</Link>
            <p>
                My very first project to self-learn HTML, Javascript, and CSS. A
                simple application that plays out Tic Tac Toe with an endgame
                state, highlighting squares of the winning move.
            </p>
            <h2>First Person Selector</h2>
            <a href="https://github.com/raylopez509/randomizer">GitHub</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/firstperson">Link</Link>
            <p>
                Another simple application that allows a user to input a list of
                names and the app chooses one person. To be used when needing to
                select a person to go first in a board game. This application
                combined with Tic Tac Toe got my feet wet in web development.
            </p>
            <h2>Team Randomizer</h2>
            <a href="https://github.com/raylopez509/reactteamrandomizer">
                GitHub
            </a>
            <Link href="/teamrandomizer">Link</Link>
            <p>
                An expansion to the First Person Selector that takes an inputted
                list of names and puts them into a selected number of equal
                teams. Originally written in plain{" "}
                <a href="https://github.com/raylopez509/teamrandomizer">
                    Javascript
                </a>
                , I wanted to expand on using popular frameworks, so I
                programmed this web app with React.js.
            </p>
        </>
    );
}
