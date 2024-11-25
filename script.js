const $ = (selector) => document.querySelector(selector);
const hour = $('.hour');
const min = $('.min');
const sec = $('.sec');
const dots = document.querySelectorAll('.dot');
const week = $('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    // Toggle dots visibility
    dots.forEach(dot => {
        if (showDot) {
            dot.classList.add('invsible');
        } else {
            dot.classList.remove('invsible');
        }
    });

    // Update time
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    // Highlight the active day
    Array.from(week.children).forEach(ele => ele.classList.remove('active'));
    week.children[now.getDay()].classList.add('active');
};

setInterval(update, 500);