// ---------- DATOS ----------

let puntos = 0;
let nivel = 1;
let actual = 0;

// ---------- ELEMENTOS ----------

const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");

const boton = document.getElementById("btnJugar");

const emoji = document.getElementById("emoji");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

const txtPuntos = document.getElementById("puntaje");
const txtNivel = document.getElementById("nivel");
const progreso = document.getElementById("progreso");

// ---------- COMENZAR ----------

boton.onclick = () => {

inicio.style.display = "none";

juego.style.display = "block";

cargarResiduo();

};

// ---------- CARGAR ----------

function cargarResiduo(){

let r = residuos[actual];

emoji.innerHTML = r.icono;

nombre.innerHTML = r.nombre;

mensaje.innerHTML = "";

progreso.style.width = ((actual+1)/residuos.length*100)+"%";

}

// ---------- DRAG ----------

emoji.addEventListener("dragstart",(e)=>{

e.dataTransfer.setData("residuo","ok");

});

function permitir(e){

e.preventDefault();

}

// ---------- SOLTAR ----------

function soltar(e,tacho){

e.preventDefault();

let r = residuos[actual];

if(tacho===r.tipo){

mensaje.innerHTML="✅ ¡Correcto!";

mensaje.style.color="#2E8B57";

puntos+=10;

if(puntos%100===0){

nivel++;

}

}else{

mensaje.innerHTML="❌ Incorrecto";

mensaje.style.color="#d62828";

}

txtPuntos.innerHTML=puntos;

txtNivel.innerHTML=nivel;

setTimeout(siguiente,700);

}

// ---------- SIGUIENTE ----------

function siguiente() {

    actual++;

    if (actual == 10) {
        nivel = 2;
        alert("🎉 ¡Pasaste al Nivel 2!");
    }

    if (actual == 20) {
        nivel = 3;
        alert("🌿 ¡Pasaste al Nivel 3!");
    }

    if (actual >= residuos.length) {

        alert("🏆 ¡Felicitaciones!\n\nPuntaje: " + puntos);

        actual = 0;
        puntos = 0;
        nivel = 1;
    }

    txtPuntos.innerHTML = puntos;
    txtNivel.innerHTML = nivel;

    cargarResiduo();
}
