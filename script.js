// Generar los corazones flotantes
function generarCorazones() {
    const cantidad = 30; // número de corazones
    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.style.left = `${Math.random() * 100}vw`;
        corazon.style.animationDuration = `${Math.random() * 5 + 4}s`;
        document.body.appendChild(corazon);
    }
}

// Acciones al presionar el botón
const botonPropuesta = document.getElementById('propuesta');
botonPropuesta.addEventListener('click', () => {
    document.getElementById('textos').classList.remove('hidden'); // Mostrar el mensaje
    document.querySelector('h1').classList.add('hidden'); // Ocultar el primer mensaje
    document.querySelector('p').classList.add('hidden'); // Ocultar el segundo mensaje
    botonPropuesta.classList.add('hidden'); // Ocultar el botón
});

// Llamar a la función para generar los corazones
generarCorazones();
