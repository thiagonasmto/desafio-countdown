var day = document.getElementById("marcador-dias");
var hour = document.getElementById("marcador-horas");
var minute = document.getElementById("marcador-minutos");
var second = document.getElementById("marcador-segundos");

const countdown = setInterval(() => {
    const endDate = new Date("Aug 6, 2023 00:00:00");
    const currentDate = new Date();
    const diffDate = endDate - currentDate;

    const days = Math.floor(diffDate / (1000*60*60*24));
    const hours = Math.floor((diffDate % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor(((diffDate % (1000*60*60*24)) % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((((diffDate % (1000*60*60*24)) % (1000*60*60)) % (1000*60)) / 1000);
    
    day.innerHTML = days.toString().padStart(2, '0');
    hour.innerHTML = hours.toString().padStart(2, '0');
    minute.innerHTML = minutes.toString().padStart(2,'0');
    second.innerHTML = seconds.toString().padStart(2,'0');
    
    console.log("Faltam "+days+" dias");
    console.log(hours+" horas");
    console.log(minutes+" minutos");
    console.log("e "+seconds+" segundos para o ano novo!");
}, 1000);