
let puntos = 0;
let nivel = 1;
let actual = 0;
let respondiendo = false;

// ---------- ELEMENTOS ----------

const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");

const boton = document.getElementById("btnJugar");

const emoji = document.getElementById("emoji");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const informacion = document.getElementById("informacion");
const importancia = document.getElementById("importancia");

const txtPuntos = document.getElementById("puntaje");
const txtNivel = document.getElementById("nivel");
const progreso = document.getElementById("progreso");

// ---------- COMENZAR ----------

boton.onclick = () => {
    inicio.style.display = "none";
    juego.style.display = "block";

    actual = 0;
    puntos = 0;
    nivel = 1;
    respondiendo = false;

    txtPuntos.innerHTML = puntos;
    txtNivel.innerHTML = nivel;

    cargarResiduo();
};

// ---------- CARGAR RESIDUO ----------

function cargarResiduo() {
    if (actual >= residuos.length) {
        return;
    }

    let r = residuos[actual];

    emoji.innerHTML = r.icono;
    nombre.innerHTML = r.nombre;

    informacion.innerHTML = "📚 " + r.informacion;
    importancia.innerHTML = "🌱 " + r.importancia;

    mensaje.innerHTML = "";
    respondiendo = false;

    progreso.style.width =
        ((actual + 1) / residuos.length * 100) + "%";

    // Habilitar los botones para el nuevo residuo
    const botones = document.querySelectorAll(".btn-clasificar");

    botones.forEach(btn => {
        btn.disabled = false;
    });
}

// ---------- CLASIFICAR CON BOTONES ----------

function clasificar(tipo) {
    // Evitar que se responda varias veces al mismo residuo
    if (respondiendo || actual >= residuos.length) {
        return;
    }

    respondiendo = true;

    let r = residuos[actual];

    if (tipo === r.tipo) {
        mensaje.innerHTML = "✅ ¡Correcto!";
        mensaje.style.color = "#2E8B57";

        puntos += 10;

        if (puntos % 100 === 0) {
            nivel++;
        }
    } else {
        mensaje.innerHTML = "❌ Incorrecto. ¡Seguí intentando!";
        mensaje.style.color = "#d62828";
    }

    txtPuntos.innerHTML = puntos;
    txtNivel.innerHTML = nivel;

    // Evitar múltiples respuestas durante la espera
    const botones = document.querySelectorAll(".btn-clasificar");

    botones.forEach(btn => {
        btn.disabled = true;
    });

    setTimeout(siguiente, 700);
}

// ---------- SIGUIENTE RESIDUO ----------

function siguiente() {
    actual++;

    if (actual === 10 && actual < residuos.length) {
        nivel = 2;
        alert("🎉 ¡Pasaste al Nivel 2!");
    }

    if (actual === 20 && actual < residuos.length) {
        nivel = 3;
        alert("🌿 ¡Pasaste al Nivel 3!");
    }

    if (actual >= residuos.length) {
        alert("🏆 ¡Felicitaciones!\n\nPuntaje: " + puntos);

        actual = 0;
        puntos = 0;
        nivel = 1;

        txtPuntos.innerHTML = puntos;
        txtNivel.innerHTML = nivel;

        progreso.style.width = "0%";

        cargarResiduo();
        return;
    }

    txtPuntos.innerHTML = puntos;
    txtNivel.innerHTML = nivel;

    cargarResiduo();
}
