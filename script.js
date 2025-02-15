// Generar corazones flotantes en el fondo
const body = document.body;
for (let i = 0; i < 30; i++) {
    let heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    body.appendChild(heart);
    const randomX = Math.random() * window.innerWidth;
    const randomDelay = Math.random() * 5 + 's';  // Generar retraso aleatorio
    heart.style.left = randomX + 'px';
    heart.style.animationDelay = randomDelay;
}

// Evento cuando se haga clic en el botón "Sí"
document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar todo el contenido y mostrar mensaje
    document.getElementById('introText').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Te amo Made, sabía que dirías que sí, puedes escribirme o llamarme cuando quieras, en general puedes hablarme cuando quieras, porque sin importar el tiempo que pase serás para mí tú y solo tú.';
});
