// DIGITAL CLOCK WITH AM/PM
function updateClock() {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const amPmElement = document.getElementById("am-pm");

  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12

  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  amPmElement.textContent = amPm;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// STOPWATCH
let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchDisplay = document.getElementById("stopwatch-display");

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
  let minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
  let seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start-btn").onclick = () => {
  if (!stopwatchInterval) {
    const startTime = Date.now() - stopwatchTime;

    stopwatchInterval = setInterval(() => {
      stopwatchTime = Date.now() - startTime;
      stopwatchDisplay.textContent = formatTime(stopwatchTime);
    }, 1000);
  }
};

document.getElementById("stop-btn").onclick = () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
};

document.getElementById("reset-btn").onclick = () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  stopwatchDisplay.textContent = "00:00:00";
};

// Set Current Year in Footer
document.getElementById("current-year").textContent = new Date().getFullYear();