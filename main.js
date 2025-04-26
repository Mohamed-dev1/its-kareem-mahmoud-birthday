const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const targetDate = new Date("April 29, 2025 00:00:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(interval);
        daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}, 1000);


const image = document.getElementById('movingImage');

let posX = 0;
let posY = 0;
let velocityX = 3; // Horizontal speed
let velocityY = 5;  // Vertical speed

function animate() {
    const maxX = window.innerWidth - image.clientWidth;
    const maxY = window.innerHeight - image.clientHeight;

    posX += velocityX;
    posY += velocityY;

    // Bounce off walls
    if (posX <= 0 || posX >= maxX) velocityX *= -1;
    if (posY <= 0 || posY >= maxY) velocityY *= -1;

    image.style.left = `${posX}px`;
    image.style.top = `${posY}px`;

    requestAnimationFrame(animate);
}

// Start animation
animate();