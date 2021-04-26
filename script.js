
// const days1 = document.getElementById('days');

const eventDay = "4 Nov 2021";



function countDown()
{
    const currentDate = new Date();
    const eventDate = new Date(eventDay);

    const totalSec = Math.abs( currentDate - eventDate ) / 1000;
    const day = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const minutes = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec) % 60;

    document.getElementById('days').innerHTML = day;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


}
countDown();

setInterval(countDown, 1000)