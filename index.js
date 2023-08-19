var min = 1;
var max = 100;
var guess = 0;

var inicioDiv = document.getElementById('inicio');
var juegoDiv = document.getElementById('juego');
var guessText = document.getElementById('guessText');
var startButton = document.getElementById('startButton');
var yesButton = document.getElementById('yesButton');
var moreButton = document.getElementById('moreButton');
var lessButton = document.getElementById('lessButton');
var restartButton = document.getElementById('restartButton');

startButton.addEventListener('click', function() {
    inicioDiv.classList.add('d-none');
    juegoDiv.classList.remove('d-none');
    guess = Math.floor((min + max) / 2);
    guessText.textContent = "¿Es " + guess + " tu número?";
    restartButton.classList.add('d-none');
});

yesButton.addEventListener('click', function() {
    guessText.textContent = "¡Adiviné tu número!" ;
    restartButton.classList.remove('d-none');
});

moreButton.addEventListener('click', function() {
    min = guess + 1;
    guess = Math.floor((min + max) / 2);
    guessText.textContent = "¿Es " + guess + " tu número?";
    intentos++;
});

lessButton.addEventListener('click', function() {
    max = guess - 1;
    guess = Math.floor((min + max) / 2);
    guessText.textContent = "¿Es " + guess + " tu número?";
    intentos++;
});

restartButton.addEventListener('click', function() {
    inicioDiv.classList.remove('d-none');
    juegoDiv.classList.add('d-none');
    min = 1;
    max = 100;
    intentos = 0;
    guess = 0;
    restartButton.classList.add('d-none');
});