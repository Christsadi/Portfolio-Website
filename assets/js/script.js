const timerSeconds = document.getElementById("timer-seconds");
const timerDays = document.getElementById("timer-days");
const start = "11-03-2020";
const startDate = new Date(start);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const day = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000*60*60*24)); // for days
  const seconds = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000)); // for seconds

  timerSeconds.innerText = intlNumberFormatter.format(seconds);
  timerDays.innerText = intlNumberFormatter.format(day);

}, 1000);
