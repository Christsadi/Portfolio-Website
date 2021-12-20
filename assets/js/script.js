const timer = document.getElementById('timer');
const start = "03-11-2020";
const start_date = new Date(start);
const intNumberFormatter = new Intl.NumberFormat("en-us");

setInterval(() => {
    const currentDate = new Date();
    const difference = Math.floor (
        (now.getTime() - start_date.getTime()) / 1000);

    timer.innerText = intNumberFormatter.format(difference);
}, 1000);
