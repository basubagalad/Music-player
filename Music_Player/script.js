window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(230, 60, 8)",
        "rgb(139, 243, 20)",
        "rgb(41, 8, 230)",
        "rgb(215, 230, 8)",
        "rgb(112, 8, 182)",
        "rgb(185, 8, 16)"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    const createBubble = index => {

        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });     
};
});

