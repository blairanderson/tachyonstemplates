function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 / 60 / 60)) % 24);
  var days = Math.floor(t / (1000 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(clock, endtime) {
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// example 15 days out
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// example 1 day out = new Date(Date.parse(new Date()) + 1 _ 24 _ 60 _ 60 _ 1000);

if (new Date() > deadline) {
  alert("COUNTDOWN COMPLETE! \n Some Call to Action!!!");
}

initializeClock(document.getElementById("clockdiv"), deadline);
