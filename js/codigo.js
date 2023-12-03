//variables de la funcion inicarJuego
const botonPiedra = document.getElementById("boton-piedra")
const botonPapel = document.getElementById("boton-papel")
const sectionBotonReiniciar = document.getElementById("reiniciar")
const botonTijera = document.getElementById("boton-tijera")
const botonReiniciar = document.getElementById("boton-reiniciar")

//variables de la funcion combate 
const spanVictoriasJugador = document.getElementById("victorias-jugador")
const spanDerrotasJugador = document.getElementById("derrotas-jugador")
const spanEmpates = document.getElementById("empates")

//variable de la funcion crearMensaje 
const seccionMensajes = document.getElementById("resultado")

/* variables de la funcion crearMensajeFinal
let seccionMensajes = document.getElementById("resultado")
let botonPiedra = document.getElementById("boton-piedra")
let botonPapel = document.getElementById("boton-papel")
let botonTijera = document.getElementById("boton-tijera")
let sectionBotonReiniciar = document.getElementById("reiniciar") */

const jugadorImagen = document.getElementById("imagen-usuario")
const pcImagen = document.getElementById("imagen-pc")

let ataques = []
let ataqueJugador
let ataqueEnemigo
let victoriasJugador = 0
let derrrotasJugador = 0
let empates = 0

class Opciones {
    constructor(nombre, foto) {
        this.img = new Image()
        this.nombre = nombre
        this.foto = foto        
    }
}

ataques.push(new Opciones("piedra", "imagenes/piedra.png"))
ataques.push(new Opciones("papel", "imagenes/papel.png"))
ataques.push(new Opciones("tijera", "imagenes/tijera.png"))    

function iniciarJuego() {

    sectionBotonReiniciar.style.display = "none"
    
    botonPiedra.addEventListener("click", ataquePiedra)
    botonPapel.addEventListener("click", ataquePapel)
    botonTijera.addEventListener("click", ataqueTijera)

    botonReiniciar.addEventListener("click", reinicarJuego)
}

function ataquePiedra() {
    ataqueJugador = "piedra"
    ataqueAleatorioEnemigo()
    ataqueSeleccionado()
}

function ataquePapel() {
    ataqueJugador = "papel"
    ataqueAleatorioEnemigo()
    ataqueSeleccionado()
}

function ataqueTijera() {
    ataqueJugador = "tijera"
    ataqueAleatorioEnemigo()
    ataqueSeleccionado()
}

function ataqueAleatorioEnemigo() {

    ataqueAleatorio = random(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "piedra"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "papel"
    } else {
        ataqueEnemigo = "tijera"
    }

    combate()
}

function ataqueSeleccionado() {
    jugadorImagen.src = "imagenes/" + ataqueJugador + ".png"
    pcImagen.src = "imagenes/" + ataqueEnemigo + ".png"
}

function combate() {

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate 😴")
        empates++
        spanEmpates.innerHTML = empates
    } else if(ataqueJugador == "piedra" && ataqueEnemigo == "tijera" || ataqueJugador == "papel" && ataqueEnemigo == "piedra" || ataqueJugador == "tijera" && ataqueEnemigo == "papel") {
        crearMensaje("Ganaste 🎉")
        victoriasJugador++
        spanVictoriasJugador.innerHTML = victoriasJugador
    } else {
        crearMensaje("Perdiste 😢")
        derrrotasJugador++
        spanDerrotasJugador.innerHTML = derrrotasJugador
    }

    revisarVictorias()
}

function revisarVictorias() {

    if(victoriasJugador == 5) {
        crearMensajeFinal("La victoria es tuya, prueba suerte de nuevo :)")
    } else if(derrrotasJugador == 5) {
        crearMensajeFinal("Lo siento, perdiste. k noob 😜")
    } 
}

function crearMensaje(resultado) {    
    seccionMensajes.innerHTML = "Elegiste " + ataqueJugador + " Y el pc eligio " + ataqueEnemigo + ". " + resultado 
}

function crearMensajeFinal(resultadoFinal) {
    //let parrafo = document.createElement("p")
    seccionMensajes.innerHTML = resultadoFinal
    //seccionMensajes.appendChild(parrafo)     
    botonPiedra.disabled = true 
    botonPapel.disabled = true
    botonTijera.disabled = true

    sectionBotonReiniciar.style.display = "flex"    
}    

function reinicarJuego() {
    location.reload()
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min)
}

window.addEventListener("load", iniciarJuego)