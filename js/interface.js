document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        square.addEventListener('click', handleClick);

    });

});

function handleClick(event) {

    // console.log(event.target);

    let square = event.target;
    let position = square.id;

    yourTurn === 0 ? msg = '1° JOGADOR FOI O CAMPEÃO!\n\nA sequencia ganhadora foi: ' : msg = '2° JODAGOR FOI O CAMPEÃO!\n\nA sequencia ganhadora foi: ';
    
    if (handleMove(position)) {
        setTimeout(()=>{
            alert(msg+winnerSeq);
            document.location.reload(true);
        },10);
    } 
    updateSquare(position);
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;

}
