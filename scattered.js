document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.scatter-img');
    var scatteredImages = document.querySelector('.scattered-images');
    var containerWidth = scatteredImages.offsetWidth;
    var containerHeight = scatteredImages.offsetHeight;
    var imgCount = images.length;
    var hiddenCount = 0; // Counter for hidden images

    // Create logo image element
    var logo = document.createElement('img');
    logo.src = 'logo.png'; // Ensure the path is correct
    logo.className = 'logo-img';
    logo.style.display = 'none'; // Initially hide the logo
    scatteredImages.appendChild(logo);

    // Define grid dimensions based on image count
    var gridRows = Math.ceil(Math.sqrt(imgCount));
    var gridCols = Math.ceil(imgCount / gridRows);

    // Increase the vertical spread
    var verticalSpread = Math.max(800, containerHeight);

    images.forEach(function(img, index) {
        var imgWidth = img.offsetWidth;
        var imgHeight = img.offsetHeight;

        // Calculate grid position
        var row = Math.floor(index / gridCols);
        var col = index % gridCols;

        // Calculate base position in grid, but use verticalSpread
        var baseX = (containerWidth / gridCols) * col;
        var baseY = (verticalSpread / gridRows) * row;

        // Add some randomness to the base position
        var randomX = baseX + (Math.random() - 0.5) * (containerWidth / gridCols) * 0.6; // 60% shift max horizontally
        var randomY = baseY + (Math.random() - 0.5) * (verticalSpread / gridRows) * 1.5; // 150% shift max vertically for more spread

        // Ensure images stay within container bounds
        randomX = Math.max(0, Math.min(randomX, containerWidth - imgWidth));
        randomY = Math.max(0, Math.min(randomY, verticalSpread - imgHeight)); // Use verticalSpread instead of containerHeight

        var rotation = Math.random() * 45 - 22.5; // Random rotation between -22.5 to 22.5 degrees
        
        img.style.setProperty('--rotate', rotation);
        img.style.left = `${randomX}px`; 
        img.style.top = `${randomY}px`; 
        img.style.zIndex = imgCount - index; // Higher index, lower z-index to be under all others by default
        img.style.opacity = '1';
        img.style.transition = 'opacity 1s, transform 0.3s'; // Transition for both opacity and transform

        // Add mouseenter event listener for zoom and fade out
        img.addEventListener('mouseenter', function(e) {
            // Zoom effect
            this.style.transform = 'scale(1.1)';
            // Fade out effect
            this.style.transition = 'opacity 1s, transform 0.3s';
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.display = 'none'; // After fade out, hide the image
                this.style.transform = ''; // Reset the scale for next potential use
                hiddenCount++;
                checkAllHidden();
            }, 1000); // Fade out duration set to 1 second
        });

        // Add mouseleave event listener to reset the scale if not faded out yet
        img.addEventListener('mouseleave', function(e) {
            if (this.style.display !== 'none') {
                this.style.transform = '';
            }
        });
    });

    // Function to check if all images are hidden
    function checkAllHidden() {
        if (hiddenCount === imgCount) {
            logo.style.display = 'block';
            logo.style.position = 'absolute';
            logo.style.top = '50%';
            logo.style.left = '50%';
            logo.style.transform = 'translate(-50%, -50%)';
            logo.style.maxWidth = '100%';
            logo.style.maxHeight = '100%';
        }
    }

    // Function to find the max bottom position of all visible images
    function getMaxBottom() {
        var maxBottom = 0;
        images.forEach(function(img) {
            if(img.style.display !== 'none' && parseFloat(img.style.opacity) > 0) {
                var rect = img.getBoundingClientRect();
                var bottom = rect.bottom - scatteredImages.getBoundingClientRect().top;
                if (bottom > maxBottom) maxBottom = bottom;
            }
        });
        return Math.max(maxBottom, 500); // Ensure minimum height of 500 pixels
    }

    // Set initial height
    function setHeight() {
        var heightNeeded = getMaxBottom() + 20; // Adding 20px for padding
        scatteredImages.style.height = `${heightNeeded}px`;
    }

    // Set height initially
    setHeight();

    // Listen for resize events to adjust height and reposition visible images
    window.addEventListener('resize', function() {
        containerWidth = scatteredImages.offsetWidth;
        containerHeight = scatteredImages.offsetHeight;
        verticalSpread = Math.max(500, containerHeight);
        
        images.forEach(function(img, index) {
            if (img.style.display !== 'none' && parseFloat(img.style.opacity) > 0) {
                var imgWidth = img.offsetWidth;
                var imgHeight = img.offsetHeight;
                var row = Math.floor(index / gridCols);
                var col = index % gridCols;
                var baseX = (containerWidth / gridCols) * col;
                var baseY = (verticalSpread / gridRows) * row;
                var randomX = baseX + (Math.random() - 0.5) * (containerWidth / gridCols) * 0.6;
                var randomY = baseY + (Math.random() - 0.5) * (verticalSpread / gridRows) * 1.5;
                randomX = Math.max(0, Math.min(randomX, containerWidth - imgWidth));
                randomY = Math.max(0, Math.min(randomY, verticalSpread - imgHeight));
                img.style.left = `${randomX}px`; 
                img.style.top = `${randomY}px`; 
            }
        });
        
        setHeight(); // Adjust height after repositioning
    });
});