document.addEventListener('keydown', function(event) {
    // Check if Shift key is pressed along with 'F'
    if (event.shiftKey && event.key === 'F') {
        event.preventDefault(); // Prevent the default behavior of Shift+F

        var easterEgg = document.getElementById('easteregg');
        
        // Show the image
        easterEgg.style.display = 'block';
        
        // Hide the image after 5 seconds
        setTimeout(function() {
            easterEgg.style.display = 'none';
        }, 5000); // 5000 milliseconds = 5 seconds
    }
});