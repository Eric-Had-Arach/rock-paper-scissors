function getComputerChoice() {
    let sorteoNumerico = Math.random();
    let sorteoCadena;
    (sorteoNumerico <= 0.3333333333333333) ? sorteoCadena = 'rock'
    : (sorteoNumerico <= 0.6666666666666666) ? sorteoCadena = 'paper'
    : sorteoCadena = 'scissors';
    console.log(sorteoCadena);
    return sorteoCadena;
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'rock') {
            console.log('Empate');
        }
        else if(computerSelection === 'paper') {
            console.log('Perdiste. Rock pierde frente a Paper');
        }
        else {
            console.log('Ganaste. Rock gana a Scissors');
        }
    }
    else if(playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'rock') {
            console.log('Ganaste. Paper gana a Scissors');
        }
        else if(computerSelection === 'paper') {
            console.log('Empate');
        }
        else {
            console.log('Perdiste. Paper pierde frente a Scissors');
        }
    }
    else {
        if(computerSelection === 'rock') {
            console.log('Perdiste. Scissors pierde frente a Rock');
        }
        else if(computerSelection === 'paper') {
            console.log('Ganaste. Scissors gana a Paper');
        }
        else {
            console.log('Empate');
        }
    }
}

