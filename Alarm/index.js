const currTime = () => {
    const now = new Date(); // Get current date and time
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours, pad with 0 if needed
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes, pad with 0 if needed
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Get seconds, pad with 0 if needed// Format the time as HH:MM:SS

    const time = document.querySelector('.curr-time');
    time.textContent = `${hours}:${minutes}:${seconds}`;
};

currTime();
setInterval(currTime, 1000);








// Show Current Time
const showTime = () => {
    hideAll();
    document.getElementById('time').style.display = 'block';
    updateTime();
};

// Update Current Time Every Second
const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateTime, 1000);
};

// Timer Functions
let timerInterval;
const showTimer = () => {
    hideAll();
    document.getElementById('timer').style.display = 'block';
};

const startTimer = () => {
    let minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    let seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
    const timerDisplay = document.getElementById('timer-display');

    const tick = () => {
        if (seconds === 0 && minutes === 0) {
            clearInterval(timerInterval);
            alert("Timer Done!");
            return;
        }
        if (seconds === 0) {
            minutes -= 1;
            seconds = 59;
        } else {
            seconds -= 1;
        }
        timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    clearInterval(timerInterval);
    timerInterval = setInterval(tick, 1000);
};

const resetTimer = () => {
    clearInterval(timerInterval);
    document.getElementById('timer-display').innerText = "00:00";
    document.getElementById('timer-minutes').value = "";
    document.getElementById('timer-seconds').value = "";
};

// Stopwatch Functions
let stopwatchInterval;
let stopwatchSeconds = 0;
const showStopwatch = () => {
    hideAll();
    document.getElementById('stopwatch').style.display = 'block';
};

const startStopwatch = () => {
    clearInterval(stopwatchInterval);
    const stopwatchDisplay = document.getElementById('stopwatch-display');

    stopwatchInterval = setInterval(() => {
        stopwatchSeconds += 1;
        const hours = Math.floor(stopwatchSeconds / 3600);
        const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
        const seconds = stopwatchSeconds % 60;
        stopwatchDisplay.innerText =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
};

const stopStopwatch = () => clearInterval(stopwatchInterval);

const resetStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    document.getElementById('stopwatch-display').innerText = "00:00:00";
};

// Alarm Functions
let alarmTimeout;
const showAlarm = () => {
    hideAll();
    document.getElementById('alarm').style.display = 'block';
};

const setAlarm = () => {
    const alarmTime = document.getElementById('alarm-time').value;
    const alarmStatus = document.getElementById('alarm-status');
    if (!alarmTime) return;
    const now = new Date();
    const alarmDate = new Date(now.toDateString() + ' ' + alarmTime);

    if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1);
    }

    const timeToAlarm = alarmDate - now;
    alarmStatus.innerText = `Alarm set for ${alarmTime}`;

    alarmTimeout = setTimeout(() => {
        alert("Alarm ringing!");
        alarmStatus.innerText = "";
    }, timeToAlarm);
};

const clearAlarm = () => {
    clearTimeout(alarmTimeout);
    document.getElementById('alarm-status').innerText = "Alarm cleared.";
};

// Utility Function to Hide All Content Sections
const hideAll = () => {
    document.querySelectorAll('.content').forEach(el => el.style.display = 'none');
};

// Show the current time by default
showTime();
