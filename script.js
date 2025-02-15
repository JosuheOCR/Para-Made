// Generar corazones flotantes
function createHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        // Posición aleatoria de los corazones
        heart.style.left = Math.random() * 100 + 'vw'; // Posición en el eje X (de 0 a 100%)
        heart.style.animationDuration = (Math.random() * 5 + 4) + 's'; // Duración aleatoria de animación

        document.body.appendChild(heart);

        // Eliminar el corazón después de la animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Ejecutar la función de corazones flotantes cada 3 segundos
setInterval(createHearts, 3000);

// Manejo del evento para el botón "Sí"
document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar los botones y el mensaje de selección
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje especial
    document.getElementById('messageContainer').style.display = 'block';
});

// Manejo del evento para el botón "No"
let siButton = document.getElementById('siBtn');
let noButtonClickCount = 0;

document.getElementById('noBtn').addEventListener('click', function() {
    // Incrementar el contador de clics en "No"
    noButtonClickCount++;

    // Manejo del evento para el botón "Sí"
document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar los botones y el mensaje de selección
    document.getElementById('introText').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje especial
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '<h1>Te amo Made</h1><p>Sabía que dirías que sí, puedes escribirme o llamarme cuando quieras, en general puedes hablarme cuando quieras, porque sin importar el tiempo que pase serás para mí, tú y solo tú.</p>';
});
