const firstOfSeptember = new Date(2020, 8, 1);

const getTimeRemaining = (deadline) => {
  const diff             = deadline - Date.now(),
        secondsRemaining = Math.floor((diff / 1000) % 60),
        minutesRemaining = Math.floor((diff / 1000 / 60) % 60),
        hoursRemaining   = Math.floor((diff / 1000 / 60 / 60) % 24),
        daysRemaining    = Math.floor(diff / 1000 / 60 / 60 / 24);

  return {
    total: diff,
    secondsRemaining,
    minutesRemaining,
    hoursRemaining,
    daysRemaining
  };
};

const setTimer = (id) => {
  let timer   = document.getElementById(id),
      days    = timer.querySelector(".days .numbers"),
      hours   = timer.querySelector(".hours .numbers"),
      minutes = timer.querySelector(".minutes .numbers"),
      seconds = timer.querySelector(".seconds .numbers"),
      timerId = setInterval(updateTime, 1000);

  function updateTime() {
    const t = getTimeRemaining(firstOfSeptember);

    seconds.textContent = t.secondsRemaining < 10 ? `0${ t.secondsRemaining }` : t.secondsRemaining;
    minutes.textContent = t.minutesRemaining < 10 ? `0${ t.minutesRemaining }` : t.minutesRemaining;
    hours.textContent = t.hoursRemaining < 10 ? `0${ t.hoursRemaining }` : t.hoursRemaining;
    days.textContent = t.daysRemaining < 10 ? `0${ t.daysRemaining }` : t.daysRemaining;
  };
};

setTimer("timer");