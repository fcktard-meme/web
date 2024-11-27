document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        if (event.key === 'F') {
            event.preventDefault();
            activateEasterEgg();
        } else if (event.key === 'D') {
            event.preventDefault();
            startPenisRain();
        }
    }
});

function startPenisRain() {
    const rainContainer = document.createElement('div');
    rainContainer.id = 'penisRain';
    rainContainer.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: none;';
    document.body.appendChild(rainContainer);

    function createPenis() {
        const penis = document.createElement('img');
        penis.src = 'penis.png'; // Make sure 'penis.png' exists in your directory
        penis.style.cssText = 'position: absolute; user-select: none;';
        penis.style.width = penis.style.height = `${Math.random() * 50 + 20}px`; // Random size between 20px and 70px

        // Randomize position
        penis.style.left = `${Math.random() * window.innerWidth}px`;
        penis.style.top = '0px';

        // Apply animation with random duration
        const animationDuration = 3 + Math.random() * 5; // Random between 3 to 8 seconds
        penis.style.animation = `fall ${animationDuration}s linear forwards`;
        
        rainContainer.appendChild(penis);
        
        // Remove the penis after it has fallen
        setTimeout(() => {
            rainContainer.removeChild(penis);
        }, animationDuration * 1000);
    }

    const intervalId = setInterval(createPenis, 100); // Create a penis every 100ms

    // Stop raining after 30 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        const rainEffect = document.getElementById('penisRain');
        if (rainEffect) rainEffect.remove();
    }, 30000);

    addFallAnimation();
}

function activateEasterEgg() {
    const easterEgg = document.getElementById('easteregg');
    if (easterEgg) {
        easterEgg.style.display = 'block';
        setTimeout(function() {
            easterEgg.style.display = 'none';
        }, 5000);
    }
}

function addFallAnimation() {
    if (!document.getElementById('fallAnimationStyle')) {
        const style = document.createElement('style');
        style.id = 'fallAnimationStyle';
        style.textContent = `
            @keyframes fall {
                from { transform: translateY(0) rotate(0deg); }
                to { transform: translateY(${window.innerHeight}px) rotate(720deg); } /* Rotates twice for fun */
            }
        `;
        document.head.appendChild(style);
    }
}