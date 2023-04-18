import style from "../styles/Tictactoe.module.css";
export default function tictactoe() {
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <div class="center">
                <div id="tictactoe">
                    <button
                        type="button"
                        class={style.game}
                        id="btn1"
                        onClick={() => clickSquare("btn1")}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        class={style.game}
                        id="btn2"
                        onClick={() => clickSquare("btn2")}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        class={style.game}
                        id="btn3"
                        onClick={() => clickSquare("btn3")}
                    >
                        &nbsp;
                    </button>
                    <br />
                    <button
                        type="button"
                        class={style.game}
                        id="btn4"
                        onClick={() => clickSquare("btn4")}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        class={style.game}
                        id="btn5"
                        onClick={() => clickSquare("btn5")}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        class={style.game}
                        id="btn6"
                        onClick={() => clickSquare("btn6")}
                    >
                        &nbsp;
                    </button>
                    <br />
                    <button
                        type="button"
                        class={style.game}
                        id="btn7"
                        onClick={() => clickSquare("btn7")}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        class={style.game}
                        id="btn8"
                        onClick={() => clickSquare("btn8")}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        class={style.game}
                        id="btn9"
                        onClick={() => clickSquare("btn9")}
                    >
                        &nbsp;
                    </button>
                    <br />
                    <br />
                </div>
                <br />
                <div>
                    <button type="reset" id="reset" onClick={reset}>
                        Reset
                    </button>
                    <br />
                    <br />
                    <p id="winner">It is X's turn</p>
                    <script src="index.js"></script>
                </div>
            </div>
        </>
    );
}

let turn = true; //true = x : false = O
let Xsquares = new Array();
let Osquares = new Array();

function clickSquare(button) {
    if (turn) {
        document.getElementById(button).innerHTML = "X";
        document.getElementById(button).disabled = true;
        Xsquares.push(button);
        document.getElementById("winner").innerHTML = "It is O's Turn";
        checkWin(Xsquares);
        turn = false;
    } else {
        document.getElementById(button).innerHTML = "O";
        document.getElementById(button).disabled = true;
        Osquares.push(button);
        document.getElementById("winner").innerHTML = "It is X's Turn";
        checkWin(Osquares);
        turn = true;
    }
}

function checkWin(squares) {
    if (
        squares.includes("btn1") &&
        squares.includes("btn2") &&
        squares.includes("btn3")
    ) {
        //determine if there's a win
        document.getElementById("btn1").style.backgroundColor = "green";
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn3").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn4") &&
        squares.includes("btn5") &&
        squares.includes("btn6")
    ) {
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn6").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn7") &&
        squares.includes("btn8") &&
        squares.includes("btn9")
    ) {
        document.getElementById("btn7").style.backgroundColor = "green";
        document.getElementById("btn8").style.backgroundColor = "green";
        document.getElementById("btn9").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn1") &&
        squares.includes("btn4") &&
        squares.includes("btn7")
    ) {
        document.getElementById("btn1").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn7").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn2") &&
        squares.includes("btn5") &&
        squares.includes("btn8")
    ) {
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn8").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn3") &&
        squares.includes("btn6") &&
        squares.includes("btn9")
    ) {
        document.getElementById("btn3").style.backgroundColor = "green";
        document.getElementById("btn6").style.backgroundColor = "green";
        document.getElementById("btn9").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn1") &&
        squares.includes("btn5") &&
        squares.includes("btn9")
    ) {
        document.getElementById("btn1").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn9").style.backgroundColor = "green";
        declareWinner();
    } else if (
        squares.includes("btn3") &&
        squares.includes("btn5") &&
        squares.includes("btn7")
    ) {
        document.getElementById("btn3").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn7").style.backgroundColor = "green";
        declareWinner();
    } else if (
        document.getElementById("btn1").disabled == true &&
        document.getElementById("btn2").disabled == true &&
        document.getElementById("btn3").disabled == true &&
        document.getElementById("btn4").disabled == true &&
        document.getElementById("btn5").disabled == true &&
        document.getElementById("btn6").disabled == true &&
        document.getElementById("btn7").disabled == true &&
        document.getElementById("btn8").disabled == true &&
        document.getElementById("btn9").disabled == true
    ) {
        document.getElementById("winner").innerHTML = "Cat's Game!";
    }
}
function reset() {
    let btnstr = "btn";
    for (let i = 1; i <= 9; i++) {
        //loop through all buttons
        btnstr = btnstr.concat(i);
        console.log(btnstr);
        document.getElementById(btnstr).innerHTML = "&nbsp"; //buttons back to default
        document.getElementById(btnstr).disabled = false;
        document.getElementById(btnstr).style.backgroundColor = "#FFFFFF";
        btnstr = "btn";
    }
    Xsquares = []; //empty Xsquares arrays
    Osquares = [];
    turn = true;
    document.getElementById("winner").innerHTML = "It is X's turn";
}

function declareWinner() {
    let btnstr = "btn";
    for (let i = 1; i <= 9; i++) {
        //loop through all buttons
        btnstr = btnstr.concat(i);
        document.getElementById(btnstr).disabled = true;
        btnstr = "btn";
    }
    if (turn) {
        document.getElementById("winner").innerHTML = "X Wins!";
    } else {
        document.getElementById("winner").innerHTML = "O Wins!";
    }
}
