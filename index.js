const start = document.querySelector(".start");
const timeScreen = document.querySelector(".screen");
const stop2 = document.querySelector(".stop");
const clear = document.querySelector(".clear");
let fo = "";
let seconds = 0;
let minutes = 0;
let hours = 0;
start.addEventListener("click", startTimer);
stop2.addEventListener("click", stopTimer);
clear.addEventListener("click", clearTime);
function startTimer() {
  clear.style.display = "flex";

  fo = setInterval(() => {
    if (localStorage.getItem("Time") !== null) {
      const array = localStorage.getItem("Time").split(":");
      seconds = array[2];
      minutes = array[1];
      hours = array[0];
    }
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      seconds++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    timeScreen.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )}`;
    localStorage.setItem("Time", `${hours}:${minutes}:${seconds}`);
  }, 1000);
}
function stopTimer() {
  clearInterval(fo);
}
function clearTime() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  localStorage.removeItem("Time");
  clearInterval(fo);
  timeScreen.textContent = `${hours}:${minutes}:${seconds}`;
}
function addZero(ele) {
  if (ele < 10) {
    return `0${ele}`;
  }
  return ele;
}
