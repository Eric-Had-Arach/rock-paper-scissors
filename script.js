//----------------FUNCIONES----------------

function getComputerChoice() {
    
    let sorteoNumerico = Math.random();
    let sorteoCadena;
    (sorteoNumerico <= 0.3333333333333333) ? sorteoCadena = 'rock'
        : (sorteoNumerico <= 0.6666666666666666) ? sorteoCadena = 'paper'
        : sorteoCadena = 'scissors';
    return sorteoCadena;
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'rock') {
            console.log('Empate');
            return 0;
        }
        else if(computerSelection === 'paper') {
            console.log('Perdiste. Rock pierde frente a Paper');
            return -1;
        }
        else {
            console.log('Ganaste. Rock gana a Scissors');
            return 1;
        }
    }
    else if(playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'rock') {
            console.log('Ganaste. Paper gana a Scissors');
            return 1;
        }
        else if(computerSelection === 'paper') {
            console.log('Empate');
            return 0;
        }
        else {
            console.log('Perdiste. Paper pierde frente a Scissors');
            return -1;
        }
    }
    else {
        if(computerSelection === 'rock') {
            console.log('Perdiste. Scissors pierde frente a Rock');
            return -1;
        }
        else if(computerSelection === 'paper') {
            console.log('Ganaste. Scissors gana a Paper');
            return 1;
        }
        else {
            console.log('Empate');
            return 0;
        }
    }
}

function finalResult(playerPoints, computerPoints) {
    alert(`Resultado final: ${playerPoints} - ${computerPoints}`);
    if(playerPoints > computerPoints) {
        alert('Ganaste el juego');
    }
    else if(playerPoints < computerPoints) {
        alert('Perdiste el juego');
    }
    else {
        alert('Empataste el juego');
    }
}

function game() {
    
    let playerPoints = 0;
    let computerPoints = 0;

    for(let i=1; i<=5; i++) {
        let playerSelection = prompt('Escriba opción');
        let computerSelection = getComputerChoice();
        alert(`${playerSelection.toLowerCase()} - ${computerSelection}`);
        let resultado = playRound(playerSelection, computerSelection);
        if(resultado === 1) {
            playerPoints++;
            alert(`Ganaste ésta ronda. Resultado parcial: ${playerPoints} - ${computerPoints}`);
        }
        else if(resultado === -1) {
            computerPoints++;
            alert(`Perdiste ésta ronda. Resultado parcial: ${playerPoints} - ${computerPoints}`);
        }
        else {
            alert(`Empataste ésta ronda. Resultado parcial: ${playerPoints} - ${computerPoints}`);
        }
    }

    finalResult(playerPoints, computerPoints);
}

//----------------EJECUCIÓN DEL PROGRAMA----------------

game();
