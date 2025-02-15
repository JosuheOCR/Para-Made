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

    // Aumentar el tamaño del botón "Sí" según los clics en "No"
    siButton.style.fontSize = (20 + noButtonClickCount * 10) + 'px'; // Aumenta el tamaño del texto
    siButton.style.padding = (10 + noButtonClickCount * 5) + 'px ' + (20 + noButtonClickCount * 10) + 'px'; // Aumenta el padding

    // Limitar el tamaño máximo para que no se haga demasiado grande
    if (noButtonClickCount > 5) {
        siButton.style.fontSize = '80px';
        siButton.style.padding = '50px 80px';
    }
});
