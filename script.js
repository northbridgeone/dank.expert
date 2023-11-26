const countdown = document.getElementById('countdown');
const launchDate = new Date('June 1, 2024 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.innerHTML = `<p>${days} Days, ${hours} Hours, ${minutes} Minutes, and ${seconds} Seconds</p>`;

    if (timeLeft < 0) {
        clearInterval(interval);
        countdown.innerHTML = `<p>Launched!</p>`;
    }
};

updateCountdown();
const interval = setInterval(updateCountdown, 1000);