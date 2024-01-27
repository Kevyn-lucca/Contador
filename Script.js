const targetDate = new Date("2025-01-01T00:00:00Z").getTime();

const countdownInterval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("contador").innerHTML = "Feliz Ano Novo!";
    }
}, 1000);
