document.addEventListener('DOMContentLoaded', function() {
    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Get the button and the div elements
    const colorButton = document.getElementById('change-color-btn');
    const colorDisplay = document.getElementById('color-box');

    // Add a click event listener to the button
    colorButton.addEventListener('click', function() {
        // Generate a random color and set it as the background color of the div
        const randomColor = getRandomColor();
        colorDisplay.style.backgroundColor = randomColor;
    });
});