

var COUNT_START = 10*17*60; // tenths * seconds * hours
var count = COUNT_START;
var playing = false;
console.log(localStorage.bmr_time);

if(localStorage.bmr_time !== undefined){
  count = localStorage.bmr_time;
}

var closeButton = document.getElementById('close');




// if (storedTime) {
//   count = storedTime.getItem;
//   console.log('got');
// }

playpause = document.getElementById('playpause');
reset = document.getElementById('reset');

playpause.onclick = function() {
  if (playing) {
    playing = false;
    console.log("Pause!");
    document.getElementById('Start-1').innerHTML = 'Start';
    closeButton.style.opacity = '1';

    var ell5 = document.getElementById('Ellipse_5');
    ell5.classList.toggle('ell5run');
    ell5.classList.toggle('ell5');

    var ell4 = document.getElementById('Ellipse_4');
    ell4.classList.toggle('ell4run');
    ell4.classList.toggle('ell4');

    var body = document.getElementById('bodyayo');
    body.classList.toggle('body2');
    body.classList.remove('body1');



  } else if (!playing) {
    playing = true;
    console.log("Play!");
    document.getElementById('Start-1').innerHTML = 'Stop';
    // localStorage.setItem(localStorage.bmr_time, count);
    closeButton.style.opacity = '.5';

    var ell5 = document.getElementById('Ellipse_5');
    ell5.classList.toggle('ell5run');
    ell5.classList.toggle('ell5');

    var ell4 = document.getElementById('Ellipse_4');
    ell4.classList.toggle('ell4run');
    ell4.classList.toggle('ell4');

    var body = document.getElementById('bodyayo');
    body.classList.toggle('body1');
    body.classList.remove('body2');



  }

}

reset.onclick = function() {
  if (playing) {
    playing = false;
    document.getElementById('Start-1').innerHTML = 'Start';
    localStorage.setItem(storedTime, count);
  }
  console.log("Reset Timer!");
  count = COUNT_START;
  // localStorage.setItem(storedTime, count);
}

function countdown(){
  writeData(count);
  // localStorage.setItem(storedTime, count);
    displayTime();
    if (count == 0) {
      playing = false;


    } else if (playing) {
      setTimeout(countdown, 100);
      count--;

    } else {
      setTimeout(countdown, 100);
    }
}
countdown();

function displayTime() {

  var tenths = count;
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    document.getElementById('time_left').innerHTML = LeadingZero(mins)+':'+LeadingZero(sec);
  }
  else {
    document.getElementById('time_left').innerHTML = hours+':'+LeadingZero(mins)+':'+LeadingZero(sec);
  }
}

function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}


function jmp2LocalPage(whichPage) { //how to change pages

  if (playing) {
    console.log('nope');

  }else {
    location.href = whichPage;
  }

}
