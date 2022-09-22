var countDownDate = new Date("Sep 16, 2023 09:00:00").getTime();

setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}, 1000);

setTimeout(function () {
  document.getElementById("preloader").className = "d-none";
  document.getElementById("footer-content").className = "";
  document.getElementById("rvsp-content").className = "";
  document.getElementById("cal-add-content").className = "";
  document.getElementById("wedding-wrapper").style.background = "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06)), url(/wedding/hjxmy1.jpg) center/cover no-repeat";
}, 2000);