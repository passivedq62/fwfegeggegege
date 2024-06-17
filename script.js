function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    document.getElementById('snowflakes-container').appendChild(snowflake);

    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // between 2 to 5 seconds
    snowflake.style.opacity = Math.random();

    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;

    // Remove the snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 50); // Create a new snowflake every 50ms
