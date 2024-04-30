let counter = 0;
let autoClicks = 0;

const clickButton = () => {
    counter++;
    updateCounter();
};

const buyAutoClick = () => {
    if (counter >= 10) {
        counter -= 10;
        autoClicks++;
        updateCounter();
        setInterval(() => {
            counter += autoClicks;
            updateCounter();
        }, 1000);
    } else {
        alert("Not enough clicks to buy auto click!");
    }
};

const updateCounter = () => {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.textContent = counter;
};

const clickArea = document.getElementById('clickButton');

clickArea.addEventListener('click', () => {
    clickButton();
    clickArea.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        clickArea.style.backgroundColor = "";
    }, 100);
});

