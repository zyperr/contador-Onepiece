// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Dec 17, 2022 01:00:00").getTime();

// un tick cada segundo 
let timer = setInterval(tick, 1000);

function tick () {
  // Tomar el tiempo actual
let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
let t = launchDate - now;

  // verificar si esta por arriba de 0
if (t > 0) {
    //  Days, hours, seconds and minutes
    // calculo para days
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + 7; }
    
    // calculo para hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // calculo para  minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // calculo para seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // String para el tiempo 
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // mostrar el contador en document con la clase .coutdown
    document.querySelector('.countdown').innerText = time;
}
}
