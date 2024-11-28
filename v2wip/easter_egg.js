document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        if (event.key === 'F') {
            event.preventDefault();
            showFeetPicFullscreen();
        } else if (event.key === 'G') {
            event.preventDefault();
            activateEasterEgg();
        } else if (event.key === 'D') {
            event.preventDefault();
            startPenisRain();
        } else if (event.key === 'O') {
            event.preventDefault();
            showVideoPopup();
        } else if (event.key === 'P') {
            event.preventDefault();
            showPunchlinePopup();
        } else if (event.key === 'C') {
            event.preventDefault();
            playRandomFucktardAudio();
        }
    }
});

// First, let's add the CSS animation for the zoom effect
function addZoomAnimation() {
    if (!document.getElementById('zoomAnimationStyle')) {
        const style = document.createElement('style');
        style.id = 'zoomAnimationStyle';
        style.textContent = `
            @keyframes zoomIn {
                from { transform: scale(0); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            @keyframes zoomOut {
                from { transform: scale(1); opacity: 1; }
                to { transform: scale(1.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function showFeetPicFullscreen() {
    addZoomAnimation(); // Add the zoom animation styles if they don't exist

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10001; background: black; display: flex; justify-content: center; align-items: center;';

    const img = document.createElement('img');
    img.src = 'feetpic.jpg'; // Make sure 'feetpic.jpg' exists in your directory
    img.style.cssText = 'max-width: 100%; max-height: 100%; object-fit: contain; animation: zoomIn 1s forwards;';
    
    // Set up the zoom out animation after 4 seconds
    setTimeout(() => {
        img.style.animation = 'zoomOut 1s forwards';
    }, 4000); // Start the zoom out after 4 seconds, so the image stays zoomed in for 4 seconds

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // Remove the overlay after 5 seconds
    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 5000); // Keep the total display time to 5 seconds
}

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

function showVideoPopup() {
    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001; background: black;';

    const video = document.createElement('video');
    video.src = 'ontheverge.mp4'; // Ensure the path is correct
    video.controls = true;
    video.autoplay = true;
    video.style.cssText = 'width: 80vw; height: 80vh; max-width: 100%; max-height: 100%;'; // Adjust size

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = 'position: absolute; top: 10px; right: 10px; z-index: 10002;';
    closeButton.onclick = function() {
        videoContainer.remove();
    };

    videoContainer.appendChild(video);
    videoContainer.appendChild(closeButton);
    document.body.appendChild(videoContainer);

    video.addEventListener('ended', function() {
        videoContainer.remove();
    });
}

function showPunchlinePopup() {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); z-index: 10000; display: flex; justify-content: center; align-items: center; flex-direction: column;';

    const image = document.createElement('img');
    image.src = 'punchline.jpg'; // Ensure the path is correct
    image.style.cssText = 'max-width: 100%; max-height: 80vh;';

    const text = document.createElement('p');
    text.textContent = "Did you know that we have a Punchline bot on our TG?";
    text.style.cssText = 'color: white; font-size: 2em; font-family: Arial, sans-serif; margin: 20px 0; text-align: center;';

    const link = document.createElement('a');
    link.href = 'https://t.me/fcktardportal';
    link.textContent = 'Join our Telegram';
    link.target = '_blank';
    link.style.cssText = 'color: #4CAF50; font-size: 1.2em; text-decoration: none;';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = 'position: absolute; top: 10px; right: 10px; padding: 10px; background: #4CAF50; color: white; border: none; cursor: pointer;';
    closeButton.addEventListener('click', function() {
        overlay.remove();
    });

    overlay.appendChild(image);
    overlay.appendChild(text);
    overlay.appendChild(link);
    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);

    // Adding a fight animation effect
    overlay.style.animation = 'fightEffect 3s ease-out forwards';
    setTimeout(() => {
        overlay.style.animation = ''; // Reset animation after it completes
    }, 3000);

    addFightAnimation();
}

function addFightAnimation() {
    if (!document.getElementById('fightAnimationStyle')) {
        const style = document.createElement('style');
        style.id = 'fightAnimationStyle';
        style.textContent = `
            @keyframes fightEffect {
                0% { transform: scale(1); }
                30% { transform: scale(1.05) rotate(1deg); }
                60% { transform: scale(0.95) rotate(-1deg); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// New function to play random Fucktard audio
function playRandomFucktardAudio() {
    const audios = [
        'fucktard1.mp3',
        'fucktard2.mp3'
    ];

    const randomAudio = audios[Math.floor(Math.random() * audios.length)];
    const audio = new Audio(randomAudio);
    audio.play();
}