let eleccionJugador = '';

let botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        eleccionJugador = boton.id;
        jugar(eleccionJugador);
    });
});

function eleccionPC() {
    let eleccion = parseInt(Math.random() * 3);
    if (eleccion === 0) {
        eleccion = 'piedra';
    }
    else if (eleccion === 1) {
        eleccion = 'papel';
    }
    else {
        eleccion = 'tijera';
    }
    return eleccion;
}

function resultado(jugador, PC) {
    if (jugador === 'piedra' && PC === 'piedra') {
        console.log('Empate');
    }
    else if (jugador === 'piedra' && PC === 'papel') {
        console.log('Perdiste');
    }
    else if (jugador === 'piedra' && PC === 'tijera') {
        console.log('Ganaste');
    }
    else if (jugador === 'papel' && PC === 'piedra') {
        console.log('Ganaste');
    }
    else if (jugador === 'papel' && PC === 'papel') {
        console.log('Empate');
    }
    else if (jugador === 'papel' && PC === 'tijera') {
        console.log('Perdiste');
    }
    else if (jugador === 'tijera' && PC === 'piedra') {
        console.log('Perdiste');
    }
    else if (jugador === 'tijera' && PC === 'papel') {
        console.log('Ganaste');
    }
    else if (jugador === 'tijera' && PC === 'tijera') {
        console.log('Empate');
    }
}

function jugar(eleccionJugador) {
    let jugador = eleccionJugador;
    let PC = eleccionPC();
    console.log(`jugador: ${jugador} - PC: ${PC}`);
    resultado(jugador, PC);
}