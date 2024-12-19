const playbtn = document.querySelector(".play");
const resetbtn = document.querySelector(".reset");
const lapbtn = document.querySelector(".lap");
const timeDisplay = document.querySelector(".time-display");
const rects = document.querySelectorAll(".rect");
const clearbtn = document.querySelector(".clear");

let hour = 0;
let minute = 0;
let second = 0;
let timer = false;
let interval;

const togglebtn = () => {
    lapbtn.classList.remove("hidden");
    resetbtn.classList.remove("hidden");
};

let isplay = false;

const play = () => {
    if (!isplay) {
        playbtn.innerHTML = "PAUSE";
        isplay = true;
        timer = true;
        interval = setInterval(stopwatch, 1000);
    } else {
        playbtn.innerHTML = "PLAY";
        isplay = false;
        clearInterval(interval);
    }
    togglebtn();
};

const reset = () => {
    clearInterval(interval);
    isplay = false;
    playbtn.innerHTML = "PLAY";
    lapbtn.classList.add("hidden");
    resetbtn.classList.add("hidden");
    hour = 0;
    minute = 0;
    second = 0;
    timeDisplay.innerHTML = "00:00:00";
    clearLaps();
    hideLaps();
};
const hideLaps = () => {
  rects.forEach(rect => {
      rect.innerHTML = "00:00:00"; // Reset the displayed time
      rect.style.display = "none"; // Hide the rectangles
  });
};

const recordLap = () => {
    const formattedTime = timeDisplay.innerHTML;
    for (let i = 0; i < rects.length; i++) {
        if (rects[i].innerHTML === "00:00:00") {
            rects[i].innerHTML = formattedTime;
            rects[i].style.display = "flex"; 
            break;
        }
    }
};

const clearLaps = () => {
    rects.forEach(rect => {
        rect.innerHTML = "00:00:00";
    });
};

function stopwatch() {
    if (timer) {
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
        const formattedTime =
            (hour < 10 ? "0" : "") + hour + ":" +
            (minute < 10 ? "0" : "") + minute + ":" +
            (second < 10 ? "0" : "") + second;

        timeDisplay.innerHTML = formattedTime;
    }
}

// Event Listeners
resetbtn.addEventListener("click", reset);
playbtn.addEventListener("click", play);
lapbtn.addEventListener("click", recordLap);
clearbtn.addEventListener("click", clearLaps);
