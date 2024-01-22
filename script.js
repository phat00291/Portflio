const text = document.querySelector(".sec-text");

const load = () => {
    setTimeout(() => {
        text.textContent = " Lurnning"
    }, 0);
    setTimeout(() => {
        text.textContent = " Font End"
    }, 2500);
    setTimeout(() => {
        text.textContent = " Back End"
    }, 4500);
    setTimeout(() => {
        text.textContent = " fullstack"
    }, 6500);
}

load();
setInterval(load, 8500);