(function () {
  const START_DAYS = 9;
  const now = new Date();
  const target = new Date(now.getTime() + START_DAYS * 24 * 60 * 60 * 1000);

  const elDays = document.getElementById("days");
  const elHours = document.getElementById("hours");
  const elMinutes = document.getElementById("minutes");
  const elSeconds = document.getElementById("seconds");

  function pad(n) {
    return n.toString().padStart(2, "0");
  }

  function update() {
    const t = target.getTime() - Date.now();
    if (t <= 0) {
      elDays.textContent = "00";
      elHours.textContent = "00";
      elMinutes.textContent = "00";
      elSeconds.textContent = "00";
      clearInterval(timer);
      return;
    }

    const secondsTotal = Math.floor(t / 1000);
    const days = Math.floor(secondsTotal / (24 * 60 * 60));
    const hours = Math.floor((secondsTotal % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
    const seconds = secondsTotal % 60;

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);
  }

  update();
  const timer = setInterval(update, 1000);
})();
