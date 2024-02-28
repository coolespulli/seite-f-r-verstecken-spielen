let countdownTimer;
let lastSelectedWordIndex = -1;
let words = [ "versteck wechseln", ]; // Hier werden die Wörter festgelegt

function startTimer(minutes) {
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }

    let totalTime = minutes * 60;
    let display = document.getElementById('timerDisplay');
    display.innerHTML = formatTime(totalTime);

    countdownTimer = setInterval(function() {
        totalTime--;
        display.innerHTML = formatTime(totalTime);

        if (totalTime <= 0) {
            clearInterval(countdownTimer);
            display.innerHTML = "Timer abgelaufen!";
            playSound('alarmSound');
            setTimeout(() => {
                display.innerHTML = "";
            }, 10000);
        }
    }, 1000);
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function playSound(soundId) {
    let audio = document.getElementById(soundId);
    audio.play();
}

function selectRandomWord() {
    if (words.length === 0) {
        alert("Es sind keine Wörter verfügbar.");
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * words.length);
    } while (randomIndex === lastSelectedWordIndex);
    lastSelectedWordIndex = randomIndex;

    let randomWord = words[randomIndex];
    let wordDisplay = document.getElementById('randomWordDisplay');
    wordDisplay.textContent = randomWord;
}

