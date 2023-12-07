const board = document.getElementById('board')
const box = document.getElementsByClassName('box')
const players = ['X', 'O']
let currentPlayer = players[0]
const result = document.createElement('h2')
result.textContent = `X's turn!`
result.style.marginTop = '30px'
result.style.textAlign='center'
board.after(result)

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < box.length; i++){
    box[i].addEventListener('click', () => {
        if(box[i].textContent !== ''){
            return
        }
        box[i].textContent = currentPlayer
        if(checkWin(currentPlayer)) {
            result.textContent=`Game over! ${currentPlayer} wins!`
            return
        }
        if(checkTie()) {
            result.textContent= `Game is tie!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            result.textContent= `X's turn!`
        } else {
            result.textContent= `O's turn!`
        }     
    })   
}

function checkWin(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(box[a].textContent === currentPlayer && box[b].textContent === currentPlayer && box[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}

function checkTie(){
    for(let i = 0; i < box.length; i++) {
        if(box[i].textContent === '') {
            return false;
        }
    }
    return true
}

function restartbtn() {
    for(let i = 0; i < box.length; i++) {
        box[i].textContent = ""
    }
    result.textContent=`X's turn!`
    currentPlayer = players[0]
}