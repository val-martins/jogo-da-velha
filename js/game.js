// iniciar minhas variaveis
let board = ['', '', '', '', '', '', '', '', ''];
let yourTurn = 0;
let symbols = ['p1', 'p2'];
let gameOver = false;
let winnerSeq = [];
let msg = "";
let winnerStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] === "") {

        board[position] = symbols[yourTurn];

        gameOver = winner();

        if (!gameOver) {

            //se não houve um gameover na jogada ele vai verificar se houve draw
            // antes de alterar a vez do jogador.

            if (draw()) {
                gameOver = true;
                return;
            }

            yourTurn = (yourTurn === 0) ? yourTurn = 1 : yourTurn = 0;

        }
    }
    return gameOver;
}

function winner() {

    for (let i = 0; i < winnerStates.length; i++) {
        let sequel = winnerStates[i];
        let position_1st = sequel[0];
        let position_2nd = sequel[1];
        let position_3rd = sequel[2];

        if (board[position_1st] === board[position_2nd] &&
            board[position_1st] === board[position_3rd] &&
            board[position_1st] != "") {
            winnerSeq = [position_1st, position_2nd, position_3rd]
            return true;
        }
    }
    return false;
}

function draw() {
    //inicio da função
    let full = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] != "") {
            // aqui eu somo o valor atual com 1
            full += 1;
            if (full === board.length) {

                setTimeout(() => {
                    alert("Empatado!\n\nNão houve ganhadores");
                    document.location.reload(true);
                }, 10);
                return true;
            }
        } else {
            // se um deles não for igual a "", ou seja, restam tarefas,
            break;
        }
    }

}
