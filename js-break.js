function jmp2LocalPage(whichPage) { //how to change pages
  location.href = whichPage;
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + " " + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var startButton = document.querySelector(".start");

startButton.onclick = function () {
    var seventeenMinutes = 60 * 17,
        display = document.querySelector('#minute');
    startTimer(seventeenMinutes, display);
};
