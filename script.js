
/* rock --> 1
   paper --> 2
   scissors --> 3
*/
function getComputerSelection() {  //elección de la IA
  let numero = parseInt(Math.random()*100);
  return (numero<=33) ? 1 : 
         (numero<=66) ? 2 :
                        3;
}

function getPlayerSelection() {
  let playerSelection;
  do {
    playerSelection = parseInt(prompt('Write 1 for stone, 2 for paper, or 3 for scissors'));
    if ((playerSelection!==1 && playerSelection!==2 && playerSelection!==3) || playerSelection==='') {
      alert('Your selection is incorrect, choose again');
    }
  }while((playerSelection!==1 && playerSelection!==2 && playerSelection!==3) || playerSelection==='');
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection==1) {
    if (computerSelection==1) {
      alert('Rock and Rock is a tie');
      return 0;  
    }
    else if (computerSelection==2) {
      alert('You Lose! Paper beats Rock');
      return -1;
    }
    else {
      alert('You win! Rock beats Scissors');
      return 1; 
    }
  }
  else if (playerSelection==2) {
    if (computerSelection==1) {
      alert('You win! Paper beats Rock');
      return 1; 
    }
    else if (computerSelection==2) {
      alert('Paper and Paper is a tie');
      return 0;
    } 
    else {
      alert('You Lose! Scissors beats Paper');
      return -1;
    }
  }
  else {
    if (computerSelection==1) {
      alert('You Lose! Rock beats Scissors');
      return -1;
    }
    else if (computerSelection==2) {
      alert('You win! Scissors beats Paper');
      return 1;
    }
    else {
      alert('Scissors and Scissors is a tie');
      return 0;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i=1; i<=5; i++) {
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    let resultadoRonda = playRound(playerSelection, computerSelection);
    if (resultadoRonda===-1) computerScore++;
    else if (resultadoRonda===1) playerScore++;
  }
  alert(`Final result: Player (${playerScore}) - Computer (${computerScore})`);
}

game();


















/*

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

*/