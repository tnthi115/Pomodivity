var sessionLength = 1500000;
var breakLength = 300000;
var time = sessionLength;
var paused = true;
var isSessionInterval = true;
var notificationSound = document.getElementById('notificationAudio');

function countdown() {
  document.getElementById('pomodoroClock').innerHTML = document.getElementById('sessionLength').innerHTML
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  if (seconds < 10) {
      document.getElementById('pomodoroClock').innerHTML = minutes + ':' + '0' + seconds.toString();
  } else {
      document.getElementById('pomodoroClock').innerHTML = minutes + ':' + seconds;
  }
  if (paused === false && time > 0) {
    time = time - 1000;
  } else if (paused === false && time <= 0) { // session ends, want to begin break
    notificationSound.play();
    reset(isSessionInterval);
  }
}

function timerInterval() {
  setInterval(countdown, 1000);
}

function startCountdown() {
  paused = false;
}

function pauseCountdown() {
  paused = true;
}

function clearCountdown() {
  pauseCountdown();
  reset(!isSessionInterval);
}

function reset(interval) {
  if (interval) {
    time = breakLength;
    document.getElementById('whichSession').innerHTML = "Break Time!";
    document.body.style.backgroundImage = "url('https://cdn.glitch.com/c28e7605-7e71-4193-b3e8-c8cdb3dde127%2Fmartin-adams-YA-DFlSzXBE-unsplash.jpg?v=1590278932000')";
  } else {
    document.getElementById('whichSession').innerHTML = "Work Session!";
    document.body.style.backgroundImage = "url('https://cdn.glitch.com/c28e7605-7e71-4193-b3e8-c8cdb3dde127%2Fmartin-adams-YA-DFlSzXBE-unsplash.jpg?v=1590278932000')";
    time = sessionLength;
  }
  isSessionInterval = !interval;
  notificationSound.play();
}

function incrementSessionLength() {
  // if (sessionLength > 0 && sessionLength < 3540000) {
    document.getElementById('sessionLength').innerHTML = parseInt(document.getElementById('sessionLength').innerHTML) + 1
    var sessionLengthText = parseInt(document.getElementById('sessionLength').innerHTML);
    if (sessionLengthText > 59) {
      document.getElementById('sessionLength').innerHTML = 59;
    }
    sessionLength = parseInt(document.getElementById('sessionLength').innerHTML) * 60000;
    document.getElementById('whichSession').innerHTML = "Work Session!";
    document.body.style.backgroundImage = "url('https://cdn.glitch.com/0ce6487d-8cb6-4e19-95ae-4eeabfb1504a%2Fchloe-leis-Q1Ka2cD9XSY-unsplash.jpg?v=1590274103052')";
    time = sessionLength;
  // }
}

function decrementSessionLength() {
  // if (sessionLength > 0 && sessionLength < 3540000) {
  //   if(sessionLength != 1) {
    document.getElementById('sessionLength').innerHTML = parseInt(document.getElementById('sessionLength').innerHTML) - 1
    var sessionLengthText = parseInt(document.getElementById('sessionLength').innerHTML);
    if (sessionLengthText < 0) {
      document.getElementById('sessionLength').innerHTML = 0;
    }
    sessionLength = parseInt(document.getElementById('sessionLength').innerHTML) * 60000;
    document.getElementById('whichSession').innerHTML = "Work Session!";
    document.body.style.backgroundImage = "url('https://cdn.glitch.com/0ce6487d-8cb6-4e19-95ae-4eeabfb1504a%2Fchloe-leis-Q1Ka2cD9XSY-unsplash.jpg?v=1590274103052')";
    time = sessionLength; 
//     }
    
//   }
}  

function incrementBreakLength() {
  // if (breakLength > 0 && breakLength < 3540000 ||) {
    document.getElementById('breakLength').innerHTML = parseInt(document.getElementById('breakLength').innerHTML) + 1;
    var breakLengthText = parseInt(document.getElementById('breakLength').innerHTML);
    if (breakLengthText > 59) {
      document.getElementById('breakLength').innerHTML = 59;
    }
    breakLength = parseInt(document.getElementById('breakLength').innerHTML) * 60000;
    document.getElementById('whichSession').innerHTML = "Break Time!";
    document.body.style.backgroundImage = "url('https://cdn.glitch.com/c28e7605-7e71-4193-b3e8-c8cdb3dde127%2Fmartin-adams-YA-DFlSzXBE-unsplash.jpg?v=1590278932000')";
    time = breakLength;
  // }
}

function decrementBreakLength() {
  // if (breakLength > 0 && breakLength < 3540000 || breakLength === 0) {
    document.getElementById('breakLength').innerHTML = parseInt(document.getElementById('breakLength').innerHTML) - 1;
    var breakLengthText = parseInt(document.getElementById('breakLength').innerHTML);
    if (breakLengthText < 0) {
      document.getElementById('breakLength').innerHTML = 0;
    }
    breakLength = parseInt(document.getElementById('breakLength').innerHTML) * 60000; 
    document.getElementById('whichSession').innerHTML = "Break Time!";
    document.body.style.backgroundImage = "url('https://cdn.glitch.com/c28e7605-7e71-4193-b3e8-c8cdb3dde127%2Fmartin-adams-YA-DFlSzXBE-unsplash.jpg?v=1590278932000')";
    time = breakLength;
  // }
}