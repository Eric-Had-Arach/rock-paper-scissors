function getComputerChoice() {
    let sorteoNumerico = Math.random();
    return (sorteoNumerico <= 0.3333333333333333) ? 'Piedra'
            : (sorteoNumerico <= 0.6666666666666666) ? 'Papel'
            : 'Tijera';
}

console.log(getComputerChoice());