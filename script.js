document.addEventListener("DOMContentLoaded", function() {
    const typingText = "priver.info.";
    let index = 0;
    const typingSpeed = 100; // typing speed in milliseconds
    const delayBetweenRepeats = 2000; // delay between typing animations in milliseconds

    function type() {
        if (index < typingText.length) {
            document.getElementById("typingText").innerHTML += typingText.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                document.getElementById("typingText").innerHTML = "";
                index = 0;
                setTimeout(type, typingSpeed);
            }, delayBetweenRepeats);
        }
    }

    type();

    // Create snowflakes
    for (let i = 0; i < 100; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.fontSize = Math.random() * 1.5 + "em";
        snowflake.style.animationDuration = Math.random() * 3 + 5 + "s";
        document.body.appendChild(snowflake);
    }

    // Play audio on user interaction
    document.addEventListener("click", function() {
        const audio = document.getElementById("backgroundAudio");
        audio.play().catch(function(error) {
            console.error("Error playing audio:", error);
        });
    });
});
