document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        if (event.key === 'F') {
            event.preventDefault();
            showFeetPicFullscreen();
        } else if (event.key === 'G') {
            event.preventDefault();
            glitchPage();
        } else if (event.key === 'D') {
            event.preventDefault();
            startPenisRain();
        } else if (event.key === 'O') {
            event.preventDefault();
            showVideoPopup();
        } else if (event.key === 'T') {
            event.preventDefault();
            playAsciiPenisGame();
        } else if (event.key === 'C') {
            event.preventDefault();
            playRandomFucktardAudio();
        } else if (event.key.toLowerCase() === 'a') {
            event.preventDefault();
            openFucktardQuiz();
        } else if (event.key.toLowerCase() === 'k') {
            event.preventDefault();
            showAsciiArt();
        } else if (event.key === '') {
            event.preventDefault();
            startLetterCatchGame();
        } else if (event.key === 'Q') {
            event.preventDefault();
            showFucktardQuotesOverlay();
        }  else if (event.key === 'R') {
            event.preventDefault();
            startPenisPong();
        }else if (event.key === '') {
            event.preventDefault();
            startSnakeGame();
        }else if (event.key === '') {
            event.preventDefault();
            sayFucktardInManyWays();
        } else if (event.key === 'U') {
            event.preventDefault();
            showVideoInTheBenin();
        } else if (event.key === 'M') {
            event.preventDefault();
            fucktardCinema();
        } else if (event.key === 'N') {
            event.preventDefault();
            canonNuts();
        }else if (event.key === '') {
            event.preventDefault();
            Treasure();
        }


    }
    });
    function Treasure() {
        // Create overlay for the initial screen
        let overlay = document.createElement('div');
        overlay.style = 'position:fixed; width:100%; height:100%; top:0; left:0; background:black; z-index:1001; display: flex; justify-content: center; align-items: center;';
    
// Create and style the pre element for the centered message
let pre = document.createElement('pre');
pre.style = 'color: #FFD700; font-family: monospace; font-size: 20px;';
overlay.appendChild(pre);

// Using template literal for multi-line text
let text = `Loading Treasure...

                            -#@%%%%%%%%%%%%%-                                             
                           *@%%%%%%%%%%%%%%%%+                                            
                          *%%%%%%%%%%%%%%%%%%%*                                           
                         :%%%%%%%%%%%%%%%%%%%%%%:                                         
                         +%%%%%%%%%%%%%%%%%%%%%%@=                                        
                         %%%%%%%%%%%%%%%%%%%%%%%%@#:                                      
                        -%%%%%%%%%%%%%%%%%%%%%%%%%%@*-::..   ..                           
                        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@%+                         
                       +%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@%%@%%%@#*+=:                    
                      .@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%%@@%%%@@%%@@%#+:                
                      #@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%@@%@%%@%%%%%%@@@%=.             
                     =@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%@@%@@%%%%%%%%%%%@#-           
                     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%@%@@%%%%%%%%%%%%%%@#          
                    -@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%%@%@@%%%%%%%%%%%%%%%%#         
                    +@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%%%@%@@%%%%%%%%%%%%%%%%%#:       
                    -@@@@@@@%@@@%%%%%%%%%%%%%%%%%%%%%%%@@%%@@%%%%%%%%%%%%%%%%%%%%%@#.     
                     #@@@@*-+@@@@@@@@%%%%%%%%%%%%%%%%%%%@%%@@%%%%%%%%%%%%%%%%%%%%%%%@=    
                      *@*:-%@@@@@@@@@@@@@%%%%%%%%%%%%%%%@@%@%%%%%%%%%%%%%%%%%%%%%%%%%%#:  
                   .#%%%##@@@@@@@@@@@@%--+%@%%%%%%%%%%%%@@%@%%%%%%%%%%%%%%%@@%%%%%%%%%%@+ 
                   ##%%####%@@@@@:-==:   :#=#@@%%%%%%%%%@@@@%%%%%%%%%%%%%%%@@%%%%%%%%%%%@*
                  =%*++*#%###%@@@-      =#.-#:%#@%%%%%%%%%@@%%%%%%%%%%%@%%%@%%%%%%%%%%%%%%
                  **=+++++#%###@@:    :#=.#+-#- :*@@%%%%%%@@%%%%%%%%%%@@%%%@%%%%%%%%%%%%%%
*++++====---:..   =#==+++++*%####    **.=#-*+   -%@@@@@%%%@@%%%%%%%%%%@@%%@@%%%%%%%%%%%%%%
++++++++****+++**: #+==+++++*%####.=#-=#+**.  -#@@@@@@@@@%@%%%%%%%%%%%@@%%@@%%%%%%%%%%%%%%
++++++++++++++++*%..#==+====+=#%##%-=#=+#. -*%@@@@@@@@@@@@@%%%%%%%%%%%@@%%@@%%%%%%%%%%%%%%
+++++++++++++++++## .*+==--=++=*%#%*:=%*+#@@@@@@@@@@@@@@@@%%%%%%%%%%%%@@%@@%%%%%%%%%%%%%%%
+++++++++++++++++*#+  =*==--+++=%#%*#+::=#@@@@@@@@@@@@@@%%%%%%%%%%%%%%%@@@@%%%%%%%%%%%%%%%
++++++++++++++++++*%:  .+*+=++-=*%%@:     @%@@@@@@@@@@@%%%%%%%%%%%%%%%%%@@@%%%%%%%%%%%%%%%
+++++++++++++++++++*%    @%*+===*@@@.     -@%@%%%@@@@@%%%%%%%%%%%%%%%%%%%@@%%%%%%%%%%%%%%%
+++++++++++++++++++*#=   *@@@%##%@%%@+     %%@@%%%%%%@%%%%%%%%%%%%%%%%%%%@@%%%%%%%%%%%%%%%
++++++++++++++++++++*#.   @@@@%@@@@%%@@#+. %%%@@%%%%%@@%%%%%%%%%%%%%%%%%%%@%%%%%%%%%%%%%%%
+++++++++++++++++++++*#  -@@@@@@@@@%%@@@%@%@@%%@%%%%%@@%%%%%%%%%%%%%%%%%%%@@%%%%%%%%%%%%%%
+++++++++++++++++++++*#+  #@@@@@@@@%%%@@%%%%%@@@@%%%%@@%%%%%%%%%%%%%%%%%%%@@%%%%%%%%%@@@@@
**++++++++++++++++++++*%: =@@@@@@@@%%%%@%%%%%%%@@%%%%%@@%%%%%%%%%%%%%%%%%%%@@%%%%%@@@@@%%%
*****++++++++++++++++++*%  #@@@@@@@%%@@@%%%%%%%@@%%%%%@@@@@@@@@@%@@@@%%%%@@@@@@@@@@@@@@%%%
%*******+++++++++++++++*#+ -@@@@@@@@@@@@%%%%%%%%@@@@@@@@@%%%%%@@%%%%%%@@%%%%%%%%@@@@@@@@@%
@%#******+*+++++++++++++*%: @@@@@@@@@@@%%%%%@@@@@@%%%%%%%%%%%%@@@%%%%%%%%@@%%%%%%@@%%%%%%%
@@%#********+++++++++++++*%=@@@@%@@@@@%%%@@@@@%%%%@@@@@%%%%%%%%@@%%%%%%%%%@@%%%%%%@@%%%%%%
@@@%#********++++++++++++*%@#*****#%%%@@@@@@@%@%%%@@@@@@%%%%%%@@@%%%%%%%%%%@@%%%%%%@@@%%%%
+%%@%#***********+++++++++*%*+++++***#@@@@@@@@@%%%%%@@@@@%%%%@@@@%%%%%%%%%%%@@%%%%%%%@@%%%
+#%%@%#***********+*++++++*##*+++++*%@@@@@@@@%%@@@%%%@@%@@@@@@@@@%%%%%%%%%%%%@@%%%%%%@@@%@
%%%%%@%##***********+++++++*%#*+++*%@@@@@@@%%@@@@%%%%%%@@@%%@@@@%%%%%%%%%%%%%%@@@@@@%%@@@@
@%%%@@@%%###*********++++++*#%*+++*@@%@@@%%@@@@%%%@@@%%%##%%@@@@%%%%%%%%%%%%%%%%@@@@@@@@@@
@@%%%@%%@@%%##*******+++++++*#%*+++#%%@@@@@@@@%%%%%###****#@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@%%%%%#%%%%%#*****+++++++*%#*++****#%%##%##*****##%%%%%*..=++*%#++**#####*+++==-::=*#%
`;

let i = 0;

// Function to simulate typewriter effect
function typeWriter() {
    if (i < text.length) {
        pre.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 5); // Speed of typing (5ms for very fast typing)
    } else {
        // Once typing is done, wait 5 seconds before explosion
        setTimeout(explode, 5000);
    }
}

// Function to simulate explosion (you might want to use CSS animations or add visual effects)
function explode() {
    pre.textContent = "💥 EXPLOSION! 💥";
    pre.style.transition = 'all 0.5s ease';
    pre.style.color = 'red';
    pre.style.fontSize = '40px';
    pre.style.transform = 'scale(1.5)'; // Scale up for explosion effect
}

// Start the typewriter effect
typeWriter();
pre.style = 'color: #FFD700; font-family: monospace; font-size: 20px;';
overlay.appendChild(pre);
        // Add overlay to the document
        document.body.appendChild(overlay);
    
        // Remove overlay after 5 seconds
        setTimeout(function() {
            document.body.removeChild(overlay);
    
            // Here we continue with the original Treasure function
            overlay = document.createElement('div');
            overlay.style = 'position:fixed; width:100%; height:100%; top:0; left:0; background:black; z-index:1000;';
            
            
            
            // Create ASCII art for treasure chest
            let treasureChest = `
                             ______
                          ,-' ;  ! \`-. 
                         / :  !  :  . \\
                        |_ ;   __:  ;  |
                        )| .  :)(.  !  |
                        |"    (##)  _  |
                        |  :  ;\`'  (_) (
                        |  :  :  .     |
                        )_ !  ,  ;  ;  |
                        || .  .  :  :  |
                        |" .  |  :  .  |
                        |____;----.____|
            `;
            
            
            // Create and style the pre element for ASCII art
            let preArt = document.createElement('pre');
            preArt.innerHTML = `
            <pre>
            8b    d8 88b 88 888888 Yb        dP 88""Yb 88 .dP"Y8   888888 88""Yb 888888    db    .dP"Y8 88   88 88""Yb 888888 
            88b  d88 88Yb88 88__    Yb  db  dP  88__dP 88 \`Ybo."     88   88__dP 88__     dPYb   \`Ybo." 88   88 88__dP 88__   
            88YbdP88 88 Y88 88""     YbdPYbdP   88""Yb 88 o.\`Y8b     88   88"Yb  88""    dP__Yb  o.\`Y8b Y8   8P 88"Yb  88""   
            88 YY 88 88  Y8 888888    YP  YP    88oodP 88 8bodP'     88   88  Yb 888888 dP""""Yb 8bodP' \`YbodP' 88  Yb 888888 
            </pre>
            `;
            preArt.style = 'color: #FFD700; font-family: monospace; font-size: 16px; max-width: 800px; white-space: pre-wrap; word-wrap: break-word; position: absolute; top: 0; left: 0;';
            overlay.appendChild(preArt);
        
            // Create text input with transparent border and placeholder
            let input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'enter the code';
            input.style = 'width: 100px; color: #FFF; background: black; border: 0; padding: 5px; text-align: center; position: absolute; top: 370px; left: 255px;';
            
            // Append the input field
            overlay.appendChild(input);
        
            // Add overlay to the document
            document.body.appendChild(overlay);
        
            // Event listener for input change or keyup (for real-time checking)
            input.addEventListener('input', function() {
                if (this.value === '2021') {
                    animateBookOpening(overlay, preArt.offsetWidth);  
                    this.style.display = 'none';  
                }
            });
        
            // Function to make the pre element blink with different colors
            function blinkColors() {
                const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
                let colorIndex = 0;
                setInterval(() => {
                    preArt.style.color = colors[colorIndex];
                    colorIndex = (colorIndex + 1) % colors.length;
                }, 500); // Change color every 500ms
            }
        
            // Function to gradually reveal the treasure chest as if coming out of shadow
            function revealTreasure() {
                let lines = treasureChest.split('\n');
                let revealInterval = setInterval(() => {
                    if (lines.length > 0) {
                        let line = lines.shift();
                        preArt.innerHTML += line + '\n';
                    } else {
                        clearInterval(revealInterval);
                    }
                }, 100); // Reveal each line every 100ms
            }
        
            // Start blinking colors
            blinkColors();
        
            // Start revealing the treasure chest
            revealTreasure();
        }, 25000); // 5000 milliseconds = 5 seconds
    }
    
    // Keep the animateBookOpening function as it was before
    function animateBookOpening(element, preWidth) {
        // ... (existing code for animateBookOpening)
    }
    
    function animateBookOpening(element, preWidth) {
        let story = "In the digital age of memecoins, where every new token could either be a treasure or a trap, there was one that stood out with its audacious name: Fucktard, created by the mysterious mnewbis.\n\nOne evening, as the city lights began to twinkle, a young investor named Mia sat in her apartment, the feel of her day's work still lingering. She had just received a letter from mnewbis, an unusual communication that came directly to her inbox. It was a notice about an upcoming event for Fucktard, hinting at a possible \"pump\" or a \"dump.\"\n\nDeciding to take a break from the screen, Mia went for a walk. The night was cool, and as she walked, she felt the need to pull over to the side of the road, where she noticed something peculiar - a snake, slithering away from her path. It reminded her of mnewbis's cryptic messages, always full of hidden meanings.\n\nBack at home, her phone buzzed with notifications. The crypto world was in chaos; a bullet-like drop had occurred in Fucktard's value. Mia's heart raced as she saw the charts plummet, her investment now in jeopardy. She knew this was the nature of the game, where people could either rise to the stars or fall into oblivion.\n\nShe moved to her high window, looking out over the city, pondering her next move. In her room, surrounded by charts and tech gadgets, she felt the weight of her decisions. The fabric of this digital society was thin, woven with threads of speculation and hope.\n\nThen came an unexpected turn of events. A new update from mnewbis suggested there might be a benefit to holding onto Fucktard. It was a wild claim, but in this game, wild was the norm. Mia, with a newfound resolve, decided to hold, trusting in the community's strength.\n\nAs she sat back down, her eyes caught a patch on her jacket - a small emblem of a coin with wings, a symbol of her journey in the crypto world. It was a reminder of why she loved this chaotic, exhilarating space.\n\nThe night deepened, and Mia felt a mix of anticipation and caution. The journey with Fucktard was unpredictable, like navigating through a maze with each turn more surprising than the last. But for now, she was in it, for better or worse, with every decision a step towards understanding this wild, digital frontier.\n\nThis tale captures the essence of the crypto world's volatility, the community spirit, and the personal journey of an investor, all while adhering to the sequence of words you've specified.";
        
        let i = 0;
        let storyPre = document.createElement('pre');
        storyPre.style = `
            max-width: 830px; 
            color: white; 
            font-family: Arial, sans-serif; 
            font-size: 16px; 
            white-space: pre-wrap; 
            word-wrap: break-word; 
            position: absolute; 
            top: 230px;
            left: 450px;
        `;
        element.appendChild(storyPre);
    
        let interval = setInterval(function() {
            if (i < story.length) {
                storyPre.textContent += story[i];  
                i++;
            } else {
                clearInterval(interval);
            }
        }, 20); // Speed of typing
    }

    function fucktardCinema() {
        let currentVideoIndex = 0;
        const videos = ['vhs.mp4', 'vhs2.mp4', 'vhs3.mp4', 'vhs4.mp4', 'vhs5.mp4', 'vhs6.mp4', 'vhs7.mp4', 'vhs8.mp4', 'vhs.mp4'];
        let videoPlaying = false;
        let overlay, videoPlayer;
        let countdownTimer;
    
        function createOverlay() {
            overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: black;
                z-index: 9999;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
    
            // Ajout d'un effet statique à l'arrière-plan
            const staticEffect = document.createElement('div');
            staticEffect.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('static.gif'); /* Assurez-vous d'avoir un GIF statique */
                opacity: 0.1;
                animation: staticBlink 1s infinite;
            `;
    
            // Animation d'ouverture des rideaux
            const curtains = document.createElement('div');
            curtains.innerHTML = `
                <div class="curtain left" style="width: 50%; background: black; transition: all 2s;"></div>
                <div class="curtain right" style="width: 50%; background: black; transition: all 2s;"></div>
            `;
            curtains.style.cssText = 'width: 100%; height: 100%; display: flex; position: absolute;';
    
            // Vidéo principale centrée
            videoPlayer = document.createElement('video');
            videoPlayer.src = videos[currentVideoIndex];
            videoPlayer.controls = false;
            videoPlayer.style.maxHeight = '80%';
            videoPlayer.style.maxWidth = '80%';
            videoPlayer.style.position = 'relative';
            videoPlayer.style.zIndex = '1'; // Pour passer au-dessus de l'effet statique
    
            // Interface graphique old school
            const playerUI = document.createElement('div');
            playerUI.style.cssText = `
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 200px;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2; // Pour passer au-dessus de la vidéo
            `;
    
            // Boutons avec style DivX - sans le bouton Download
            const controls = document.createElement('div');
            controls.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                color: #00ff00;
                font-family: 'Courier New', monospace;
                text-shadow: 0 0 5px #00ff00;
            `;
            controls.innerHTML = `
                <button style="background: black; border: 2px solid #00ff00; color: #00ff00; padding: 5px 10px; margin: 0 5px;" onclick="playPause()">Play/Pause</button>
                <button style="background: black; border: 2px solid #00ff00; color: #00ff00; padding: 5px 10px; margin: 0 5px;" onclick="changeVideo()">Change Video</button>
                <button style="background: black; border: 2px solid #00ff00; color: #00ff00; padding: 5px 10px; margin: 0 5px;" onclick="closeCinema()">Close</button>
            `;
    
            playerUI.appendChild(controls);
            overlay.appendChild(staticEffect);
            overlay.appendChild(curtains);
            overlay.appendChild(videoPlayer);
            overlay.appendChild(playerUI);
            document.body.appendChild(overlay);
    
            // Compte à rebours en ASCII
            startCountdown();
    
            // Écouteur d'événement pour passer à la vidéo suivante
            videoPlayer.addEventListener('ended', nextVideo);
        }
    
        function playPause() {
            if (videoPlaying) {
                videoPlayer.pause();
            } else {
                videoPlayer.play();
            }
            videoPlaying = !videoPlaying;
        }
    
        function changeVideo() {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            videoPlayer.src = videos[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
            videoPlaying = true;
    
            // Effet de scan line lors du changement de vidéo
            const scanLine = document.createElement('div');
            scanLine.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 4px,
                    rgba(255, 255, 255, 0.05) 4px,
                    rgba(255, 255, 255, 0.05) 5px
                );
                animation: scanLineMove 3s linear forwards;
            `;
            overlay.appendChild(scanLine);
            setTimeout(() => overlay.removeChild(scanLine), 3000);
        }
    
        function closeCinema() {
            clearInterval(countdownTimer);
            overlay.style.display = 'none';
            document.body.removeChild(overlay);
        }
    
        function startCountdown() {
            let countdown = 5; // Compte à rebours de 5 secondes
            const asciiNumbers = [
                "░▒▓████████▓▒░\n" +
                "░▒▓█▓▒░       \n" +
                "░▒▓█▓▒░       \n" +
                "░▒▓███████▓▒░ \n" +
                "       ░▒▓█▓▒░\n" +
                "       ░▒▓█▓▒░\n" +
                "░▒▓███████▓▒░ \n",
            
                "░▒▓█▓▒░░▒▓█▓▒░\n" +
                "░▒▓█▓▒░░▒▓█▓▒░\n" +
                "░▒▓█▓▒░░▒▓█▓▒░\n" +
                "░▒▓████████▓▒░\n" +
                "       ░▒▓█▓▒░\n" +
                "       ░▒▓█▓▒░\n" +
                "       ░▒▓█▓▒░\n",
            
                "░▒▓███████▓▒░ \n" +
                "       ░▒▓█▓▒░\n" +
                "       ░▒▓█▓▒░\n" +
                "░▒▓███████▓▒░ \n" +
                "       ░▒▓█▓▒░\n" +
                "       ░▒▓█▓▒░\n" +
                "░▒▓███████▓▒░ \n",
            
                "░▒▓███████▓▒░ \n" +
                "       ░▒▓█▓▒░\n" +
                "       ░▒▓█▓▒░\n" +
                " ░▒▓██████▓▒░ \n" +
                "░▒▓█▓▒░       \n" +
                "░▒▓█▓▒░       \n" +
                "░▒▓████████▓▒░\n",
            
                "░▒▓█▓▒░       \n" +
                "░▒▓████▓▒░    \n" +
                "   ░▒▓█▓▒░    \n" +
                "   ░▒▓█▓▒░    \n" +
                "   ░▒▓█▓▒░    \n" +
                "   ░▒▓█▓▒░    \n" +
                "   ░▒▓█▓▒░    \n"
            ];
            
            const countdownElement = document.createElement('pre');
            countdownElement.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #00ff00;
                font-size: 12px;
                font-family: 'Courier New', monospace;
                text-shadow: 0 0 5px #ff0000;
                line-height: 1;
                white-space: pre;
                z-index: 3;
            `;
            overlay.appendChild(countdownElement);
            
            countdownTimer = setInterval(() => {
                // Afficher le chiffre de la position inverse
                countdownElement.textContent = asciiNumbers[asciiNumbers.length - countdown];
                if (countdown <= 0) {
                    clearInterval(countdownTimer);
                    overlay.removeChild(countdownElement);
                    document.querySelector('.curtain.left').style.transform = 'translateX(-100%)';
                    document.querySelector('.curtain.right').style.transform = 'translateX(100%)';
                    videoPlayer.play();
                    videoPlaying = true;
                } else {
                    countdown--;
                }
            }, 1000);
        }
    
        function nextVideo() {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            videoPlayer.src = videos[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
            videoPlaying = true;
    
            // Effet de scan line lors du changement de vidéo
            const scanLine = document.createElement('div');
            scanLine.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 4px,
                    rgba(255, 255, 255, 0.05) 4px,
                    rgba(255, 255, 255, 0.05) 5px
                );
                animation: scanLineMove 3s linear forwards;
            `;
            overlay.appendChild(scanLine);
            setTimeout(() => overlay.removeChild(scanLine), 3000);
        }
    
        // Animation pour l'effet statique et scan line
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes staticBlink {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
                @keyframes scanLineMove {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(100%); opacity: 0; }
                }
            </style>
        `);
    
        createOverlay();
        window.playPause = playPause;
        window.changeVideo = changeVideo;
        window.closeCinema = closeCinema;
    }
// VIDS
function showVideoInTheBenin() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: rgba(0, 0, 0, 0.5); 
    `;

    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);

    const effects = ['none', 'grayscale(100%)', 'sepia(100%)', 'hue-rotate(180deg)', 'invert(100%)', 'blur(5px)', 'brightness(50%)', 'contrast(200%)', 'saturate(3)', 'opacity(0.5)'];

    for (let i = 0; i < 10; i++) {
        const video = document.createElement('video');
        video.src = 'inthebeni.mp4';
        video.loop = true;
        video.muted = i > 0;

        // Initial size and position
        let size = Math.random() * 300 + 100; // Random size between 100px and 400px
        video.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: auto;
            left: ${Math.random() * (window.innerWidth - size)}px;
            top: ${Math.random() * (window.innerHeight - size)}px;
            filter: ${effects[i % effects.length]};
            z-index: ${10001 + i};
            transition: all 1s ease-in-out;
        `;

        video.addEventListener('loadedmetadata', function() {
            this.play().catch(e => console.error('Video play failed:', e));
            
            // Function to animate the video
            function animate() {
                setTimeout(() => {
                    // Random behaviors
                    const behaviors = ['zoom', 'dezoom', 'move', 'flip', 'halfScreen'];
                    const behavior = behaviors[Math.floor(Math.random() * behaviors.length)];

                    switch(behavior) {
                        case 'zoom':
                            size = Math.min(size * 1.5, Math.min(window.innerWidth, window.innerHeight));
                            break;
                        case 'dezoom':
                            size = Math.max(size / 1.5, 100);
                            break;
                        case 'move':
                            video.style.left = Math.random() * (window.innerWidth - size) + 'px';
                            video.style.top = Math.random() * (window.innerHeight - size) + 'px';
                            break;
                        case 'flip':
                            video.style.transform = `scaleX(${Math.random() < 0.5 ? -1 : 1})`;
                            break;
                        case 'halfScreen':
                            if(Math.random() < 0.5) {
                                size = window.innerHeight / 2;
                                video.style.width = size + 'px';
                                video.style.height = 'auto';
                                video.style.left = Math.random() < 0.5 ? '0' : (window.innerWidth - size) + 'px';
                                video.style.top = '0';
                            } else {
                                size = window.innerWidth / 2;
                                video.style.width = 'auto';
                                video.style.height = size + 'px';
                                video.style.left = '0';
                                video.style.top = Math.random() < 0.5 ? '0' : (window.innerHeight - size) + 'px';
                            }
                            break;
                    }
                    video.style.width = size + 'px';
                    
                    // Continue animation unless overlay is removed
                    if (document.body.contains(overlay)) {
                        animate();
                    }
                }, Math.random() * 3000 + 500); // Random delay between 500ms and 3500ms
            }

            animate();
        });

        overlay.appendChild(video);
    }
}
// ONTHEVERGE
function startSnakeGame() {
    console.log("Game starting...");
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
        background-color: black; z-index: 10001;
    `;

    const gameContainer = document.createElement('div');
    gameContainer.style.cssText = `
        width: 90%; height: 90%; border: none;
        background-color: #000000; position: relative;
    `;
    overlay.appendChild(gameContainer);

    // Game state variables
    let snake = [{x: 15, y: 15}];
    let food = {x: 10, y: 10};
    let boobs = {x: 0, y: 0, visible: false};
    let dx = 0;
    let dy = 0;
    const gridSize = 20;
    let speed = 100;
    let foodCount = 0;
    let gameStarted = false;

    function drawGame() {
        console.log("Drawing game...");
        gameContainer.innerHTML = '';
        snake.forEach((segment, index) => {
            const snakePart = document.createElement('div');
            snakePart.style.cssText = `
                position: absolute;
                width: ${gridSize}px;
                height: ${gridSize}px;
                line-height: ${gridSize}px;
                text-align: center;
                font-size: ${gridSize - 5}px;
                left: ${segment.x * gridSize}px;
                top: ${segment.y * gridSize}px;
                color: #FF69B4;
            `;
            if (index === 0) {
                snakePart.textContent = 'D';
            } else if (index === snake.length - 1) {
                snakePart.textContent = '8';
            } else {
                snakePart.textContent = '=';
            }
            gameContainer.appendChild(snakePart);
        });

        // Draw food
        const foodElement = document.createElement('div');
        foodElement.style.cssText = `
            position: absolute;
            width: ${gridSize}px;
            height: ${gridSize}px;
            left: ${food.x * gridSize}px;
            top: ${food.y * gridSize}px;
            background-color: #FFFFFF;
        `;
        gameContainer.appendChild(foodElement);

        // Draw boobs if visible
        if (boobs.visible) {
            console.log("Drawing boobs at:", boobs.x, boobs.y);
            const boobsElement = document.createElement('pre');
            boobsElement.style.cssText = `
                position: absolute;
                color: #FFD700;
                left: ${boobs.x * gridSize}px;
                top: ${boobs.y * gridSize}px;
                font-size: ${gridSize}px;
                line-height: ${gridSize}px;
            `;
            boobsElement.innerHTML = "(.人.)";
            gameContainer.appendChild(boobsElement);
        }

        if (!document.getElementById('foodBlinkStyle')) {
            const style = document.createElement('style');
            style.id = 'foodBlinkStyle';
            style.innerHTML = `
                @keyframes foodBlink {
                    0%, 100% { background-color: red; }
                    25% { background-color: blue; }
                    50% { background-color: yellow; }
                    75% { background-color: green; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    function spawnBoobs() {
        console.log("Spawning boobs...");
        if (!boobs.visible) {
            boobs.x = Math.floor(Math.random() * Math.floor(window.innerWidth / gridSize));
            boobs.y = Math.floor(Math.random() * Math.floor(window.innerHeight / gridSize));
            boobs.visible = true;
            console.log("Boobs spawned at:", boobs.x, boobs.y);
            setTimeout(() => {
                console.log("Hiding boobs...");
                boobs.visible = false;
                spawnBoobs();
            }, 10000);
        }
    }

    function updateGame() {
        console.log("Updating game...");
        if (!gameStarted) {
            console.log("Game not started yet.");
            return;
        }

        const head = {
            x: snake[0].x + dx,
            y: snake[0].y + dy
        };

        // Collision check
        if (head.x < 0 || head.x >= Math.floor(window.innerWidth / gridSize) || head.y < 0 || head.y >= Math.floor(window.innerHeight / gridSize) || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            console.log("Collision detected: Game over!");
            gameContainer.innerHTML = '<h2 style="color: white; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">REKT FUCKTARD, BUY THE DIP !</h2>';
            setTimeout(() => {
                overlay.remove();
                document.removeEventListener('keydown', handleKeydown);
            }, 3000);
            return;
        }

        snake.unshift(head);

        // Check for food collision
        if (head.x === food.x && head.y === food.y) {
            console.log("Food eaten!");
            foodCount++;
            speed = Math.max(50, Math.floor(100 - snake.length * 2));
            food = {
                x: Math.floor(Math.random() * Math.floor(window.innerWidth / gridSize)),
                y: Math.floor(Math.random() * Math.floor(window.innerHeight / gridSize))
            };
        } 
        // Check for boobs collision
        else if (boobs.visible && head.x === boobs.x && head.y === boobs.y) {
            console.log("Collision with boobs! Before:", snake.length);
            for (let i = 0; i < 3; i++) {
                snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
            }
            console.log("Collision with boobs! After:", snake.length);
            boobs.visible = false;
        } else {
            snake.pop();
        }

        drawGame();
        setTimeout(updateGame, speed);
    }

    function handleKeydown(event) {
        console.log("Key pressed:", event.key);
        if (!gameStarted && (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
            gameStarted = true;
            switch (event.key) {
                case 'ArrowUp':    dy = -1; dx = 0; break;
                case 'ArrowDown':  dy = 1;  dx = 0; break;
                case 'ArrowLeft':  dx = -1; dy = 0; break;
                case 'ArrowRight': dx = 1;  dy = 0; break;
            }
            console.log("Game started. Direction set to:", dx, dy);
            updateGame();
            spawnBoobs();
        } else if (gameStarted) {
            // Prevent immediate direction reversal
            switch (event.key) {
                case 'ArrowUp':    if (dy === 0) { dy = -1; dx = 0; } break;
                case 'ArrowDown':  if (dy === 0) { dy = 1; dx = 0; } break;
                case 'ArrowLeft':  if (dx === 0) { dx = -1; dy = 0; } break;
                case 'ArrowRight': if (dx === 0) { dx = 1; dy = 0; } break;
            }
            console.log("Direction changed:", dx, dy);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    // Close the game on any click on the overlay
    overlay.addEventListener('click', function() {
        console.log("Overlay clicked. Removing game...");
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', handleKeydown);
    });

    document.body.appendChild(overlay);
    drawGame();

    gameContainer.innerHTML = `
        <pre style="color: white; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
         ##   #  #        ###   #  #  ####        #  #  ####  ###    ##   ####  
        #  #  ## #         #    #  #  #           #  #  #     #  #  #  #  #     
        #  #  ## #         #    ####  ###         #  #  ###   #  #  #     ###   
        #  #  # ##         #    #  #  #           #  #  #     ###   # ##  #     
        #  #  # ##         #    #  #  #            ##   #     # #   #  #  #     
         ##   #  #         #    #  #  ####         ##   ####  #  #   ###  ####  
                                                                                
        </pre>`;

}
// VERGE PONG
function startPenisPong() {
    // Créer un overlay temporaire pour l'ASCII art
    const tempOverlay = document.createElement('div');
    tempOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: black; z-index: 1000; display: flex; justify-content: center; align-items: center; font-family: monospace;';

    const artElement = document.createElement('pre');
    artElement.textContent = `
                                                                            
                        .=-=                                                                 
                        .* =--                            :                                  
              .:--:=+=:..-==:::---.                 ::*--::::.                            
           .--.       ...         :-:        :-:::::-:::::-. .:--                         
          =-                        .=     --                    --                       
        :=                            +  :=                        =.                     
       =:                              ==:                          =:                    
      =.                                *                            +                    
     +                                  -.                           .=                   
    +                                   :-                            +                   
   .=                                    +                            +                   
   ::                                    -                           .-                   
   -:                                                               .=                    
   =.                                                              :=                     
   =.                                                             :-                      
   .=                                                            --                       
    +                                                           -:                        
    .=                                                         =:                         
     -:                                                       -:                          
      +.                                                     --                           
       +                                                     +                            
       +                                                     +                            
       =                                                     -.                           
       =                                            .-:-***=  +                           
       =                                           -:--: %%:=.:-                          
       =                                                    :. +                          
      .-                                             .::::-++ .-                          
       =        .--::--                               -==::   -.                          
       +    .-:-::+*=:-*                       :              +                           
       =   -+-:-:*@%:                     .=   =.             +                           
       -.  ::     :   :-                   +    =.           -:                           
        =           :-*=                  :-     =.         .=                            
        =    .*=++**=-.                   +       +         +                             
        =      ..                        ::       +        -.                             
        ::                               =.      :=        =                              
         =                                :-:-  .:        .-                              
         =                                  .             +                               
        ::                                               =.                               
        .-                                              -:                                
         -                          .-:  -----:.       =.                                 
         =                         --  --      .::--:--=::::=-:--:                        
         -:                       +.  .=                   :-    .---                     
          :-.                    -:   +                              +                    
            .--.                 +    +                               =:                  
               :-:               :=  .+                                 =:                
                  :-::.           =. .=--:::.   .             :          +                
                      .--:                 .=*=:.::------:----=-         +                
                          :-:           :--:                    ----:::--:                
                             -::::::::::                                                  
                                                                                          
                                                              
 ##   ##                                               ######                             
 ##   ##                                               ##   ##                            
 ##   ##   #####   ## ###    ######   #####            ##   ##   #####   ## ###    ###### 
  ## ##   ##   ##  ###      ##   ##  ##   ##           ######   ##   ##  ###  ##  ##   ## 
  ## ##   #######  ##       ##   ##  #######           ##       ##   ##  ##   ##  ##   ## 
   ###    ##       ##        ######  ##                ##       ##   ##  ##   ##   ###### 
   ###     #####   ##            ##   #####            ##        #####   ##   ##       ## 
                             #####                                                 #####  
    
    `;
    // Fonction pour changer la couleur aléatoirement
    function changeColor() {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#FFA500', '#800080', '#008000'];
        artElement.style.color = colors[Math.floor(Math.random() * colors.length)];
    }

    tempOverlay.appendChild(artElement);
    document.body.appendChild(tempOverlay);

    // Démarrer le clignotement de couleur
    const colorChangeInterval = setInterval(changeColor, 250); // Change color every 250ms

    // Fonction pour initier le jeu après le délai
    function startGame() {
        clearInterval(colorChangeInterval); // Arrêter le changement de couleur
        tempOverlay.remove(); // Supprimer l'overlay temporaire

        // Créer l'overlay pour le jeu en plein écran
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: black; z-index: 1000;';
        const gameArea = document.createElement('div');
        gameArea.style.cssText = 'width: 100%; height: 100%; box-sizing: border-box; background-color: #000; position: relative;';
        overlay.appendChild(gameArea);

        // Ajouter le filet central
        const net = document.createElement('div');
        net.style.cssText = 'position: absolute; top: 50%; left: 0; width: 100%; height: 1px; background-color: transparent;';
        gameArea.appendChild(net);

        // Scores
        let playerScore = 0;
        let robotScore = 0;
        const scorePlayer = document.createElement('div');
        scorePlayer.style.cssText = 'position: absolute; top: 10px; right: 50px; font-size: 20px; color: #FFF;';
        const scoreRobot = document.createElement('div');
        scoreRobot.style.cssText = 'position: absolute; bottom: 10px; left: 50px; font-size: 20px; color: #FFF;';
        gameArea.appendChild(scorePlayer);
        gameArea.appendChild(scoreRobot);

        // Joueur 
        const player = document.createElement('img');
        player.src = 'penis.png';
        player.style.cssText = 'position: absolute; top: 10px; left: 100%; transform: translateX(-50%); width: 140px; height: auto;';
        gameArea.appendChild(player);
        
        // Robot (en bas)
        const robot = document.createElement('img');
        robot.src = 'penis.png';
        robot.style.cssText = 'position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); width: 140px; height: auto;';
        gameArea.appendChild(robot);

        // La balle
        const ball = document.createElement('div');
        ball.style.cssText = 'position: absolute; width: 10px; height: 10px; background-color: #FFFFFF; border-radius: 50%; left: 50%; top: 50%;';
        gameArea.appendChild(ball);

        document.body.appendChild(overlay);

        // Variables pour le jeu
        let playerPosX = gameArea.offsetWidth / 2 - player.offsetWidth / 2;
        let robotPosX = gameArea.offsetWidth / 2 - robot.offsetWidth / 2;
        let ballPosX = gameArea.offsetWidth / 2;
        let ballPosY = gameArea.offsetHeight / 2;
        let ballSpeedX = 5 * (Math.random() > 0.5 ? 1 : -1);
        let ballSpeedY = 5;

        // Fonction pour jouer un son aléatoire
        function playRandomSound() {
            const sounds = [
                'fucktard1.mp3',
                'fucktard2.mp3',
                'fucktard3.mp3',
                'fucktard4.mp3'
            ];
            const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
            audio.play().catch(e => console.log('Audio play failed:', e));
        }

        // Fonction pour mettre à jour la position de la balle et des joueurs
        function updateGame() {
            ballPosX += ballSpeedX;
            ballPosY += ballSpeedY;

            // Rébond sur les murs gauche et droit
            if (ballPosX <= 0 || ballPosX >= gameArea.offsetWidth - 10) {
                ballSpeedX *= -1;
            }

            // Rébond sur les joueurs avec son
            if (ballPosY <= player.offsetHeight && ballPosX > playerPosX && ballPosX < playerPosX + player.offsetWidth) {
                playRandomSound();
                ballSpeedY *= -1;
            }
            if (ballPosY >= gameArea.offsetHeight - robot.offsetHeight - 10 && ballPosX > robotPosX && ballPosX < robotPosX + robot.offsetWidth) {
                playRandomSound();
                ballSpeedY *= -1;
            }

            // Score
            if (ballPosY <= 0) {
                robotScore++;
                resetBall();
                if (robotScore === 5) {
                    showVergePongImage();
                }
            }
            if (ballPosY >= gameArea.offsetHeight) {
                playerScore++;
                resetBall();
            }

            // Mise à jour des scores
            scorePlayer.textContent = playerScore;
            scoreRobot.textContent = robotScore;

            // Déplacement du robot (simplifié)
            robotPosX = ballPosX - robot.offsetWidth / 2;
            robotPosX = Math.max(0, Math.min(gameArea.offsetWidth - robot.offsetWidth, robotPosX));

            // Mise à jour des positions des éléments dans le DOM
            ball.style.left = `${ballPosX}px`;
            ball.style.top = `${ballPosY}px`;
            player.style.left = `${playerPosX}px`;
            robot.style.left = `${robotPosX}px`;

            requestAnimationFrame(updateGame);
        }

        function resetBall() {
            ballPosX = gameArea.offsetWidth / 2;
            ballPosY = gameArea.offsetHeight / 2;
            ballSpeedX = 5 * (Math.random() > 0.5 ? 1 : -1);
            ballSpeedY = 5;
        }

        // Fonction pour afficher l'image vergepong.png pendant 2 secondes
        function showVergePongImage() {
            const imageOverlay = document.createElement('div');
            imageOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: black; z-index: 1001; display: flex; justify-content: center; align-items: center;';
            const image = document.createElement('img');
            image.src = 'vergepong.png';
            image.style.cssText = 'max-width: 100%; max-height: 100%;';
            imageOverlay.appendChild(image);
            overlay.appendChild(imageOverlay);

            setTimeout(() => {
                overlay.removeChild(imageOverlay);
            }, 2000);
        }

        // Contrôle du joueur
        const playerMovementHandler = (e) => {
            const moveSpeed = 10;
            switch(e.key) {
                case 'ArrowLeft':
                    playerPosX = Math.max(0, playerPosX - moveSpeed);
                    break;
                case 'ArrowRight':
                    playerPosX = Math.min(gameArea.offsetWidth - player.offsetWidth, playerPosX + moveSpeed);
                    break;
            }
            player.style.left = `${playerPosX}px`; // Update player position immediately
        };

        // Ajouter l'écouteur d'événements pour le mouvement du joueur
        document.addEventListener('keydown', playerMovementHandler);

        // Écouteur d'événements pour fermer le jeu
        overlay.addEventListener('click', function() {
            this.remove();
            document.removeEventListener('keydown', playerMovementHandler);
        });

        // Démarrer le jeu
        updateGame();
    }

    // Supprimer l'overlay temporaire après 3 secondes et démarrer le jeu
    setTimeout(startGame, 3000);
}
const fucktardQuotes = [
    "Just called customer service and got transferred to the department of fucktards.",
    "If ignorance was a sport, you'd be a fucktard champion.",
    "He's not just a fucktard, he's the fucktard Olympics gold medalist.",
    "Stepped into the room, and the fucktard aroma was overwhelming.",
    "When fucktards unite, stupidity multiplies.",
    "You're not just a fucktard, you're a fucktard with tenure.",
    "Ever met a fucktard? You're looking at the self-appointed king.",
    "Being a fucktard isn't just a state of mind; it's a lifestyle.",
    "Fucktards: Making the world a stupider place, one act at a time.",
    "I'd explain it to you, but talking to a fucktard is like explaining algebra to a cat.",
    "The fucktard parade just marched through town; you were leading it.",
    "If there's an award for fucktard of the year, you're the perennial winner.",
    "You're not just any fucktard, you're a deluxe edition.",
    "Fucktards: They're not just for breakfast anymore.",
    "He's not a fucktard, he's the fucktard's fucktard.",
    "When fucktards fly, they'll still land on their face.",
    "You're like a fucktard magnet; they just gravitate towards you.",
    "Fucktardery level: Expert.",
    "I've seen smarter behavior in a bucket of fucktards.",
    "You're not just a fucktard, you're a PhD in fucktardology.",
    "Fucktards: They're the reason we have warning labels.",
    "I bet you could write a book on being a fucktard. It'd be a bestseller in the stupidity genre.",
    "You managed to make 'fucktard' sound like a compliment. That's a skill.",
    "If there was a fucktard festival, you'd be the main attraction.",
    "I didn't know fucktard was an Olympic event, but you're clearly going for gold.",
    "Some people are just born fucktards, and then there's you.",
    "Fucktards like you are the reason we can't have nice things.",
    "You're not just a fucktard, you're a fucktard with a mission statement.",
    "I've seen less fucktardery in a clown car.",
    "Fucktards: The gift that keeps on giving... headaches.",
    "If being a fucktard was a superpower, you'd be the most powerful hero in the universe.",
    "You're the fucktard that fucktards look up to.",
    "Calling you a fucktard is an understatement; you're the fucktard's fucktard.",
    "I thought I had seen it all until I met you, the fucktard supreme.",
    "Fucktards: Making idiocy an art form since forever.",
    "You're not just a fucktard, you're a fucktard with benefits.",
    "If there was a fucktard hall of fame, you'd have your own wing.",
    "You're the kind of fucktard that makes other fucktards look smart.",
    "Fucktardation at its finest.",
    "You're not just a fucktard, you're the director of fucktard operations.",
    "It's not just a phase; being a fucktard is your life's work.",
    "Fucktards: Proving that the gene pool could use a lifeguard.",
    "If fucktardery were an ocean, you'd be the Mariana Trench.",
    "You're the reason we need more than one word for 'fucktard'.",
    "Fucktards: The eternal source of comic relief.",
    "You've elevated fucktard to an art form.",
    "I didn't believe in fucktards until I met you.",
    "You're not just a fucktard, you're an ambassador for fucktardkind.",
    "Congratulations, you've just been upgraded to fucktard pro status.",
    "If there's a fucktard merit badge, you're wearing a sash full of them.",
    "Fucktards make 'common sense' sound like an oxymoron.",
    "You're not just a fucktard; you're a walking argument for population control.",
    "Your fucktardery is so advanced, it should be studied in universities.",
    "Fucktards: The only species evolving backward.",
    "You're the human equivalent of a 'user error'.",
    "Fucktards: Because 'moron' was too mainstream.",
    "If there's a fucktard convention, you're the keynote speaker.",
    "You're not just a fucktard; you're a fucktard with benefits like a bad internet plan.",
    "Fucktards: Turning social media into a 24/7 comedy show.",
    "You're the fucktard that other fucktards dream of becoming.",
    "Fucktard: It's not just what you do, it's who you are."
];

function showFucktardQuotesOverlay() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0, 0, 0, 0.9); z-index: 10007; color: #fff; 
        overflow: hidden; padding: 20px; box-sizing: border-box;
        display: flex; flex-direction: column;
    `;

    let quoteContainer = document.createElement('div');
    quoteContainer.style.cssText = "overflow-y: auto; height: 100%; cursor: pointer;";

    // Function to generate random styles with more colors and fonts
    function getRandomStyle() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900', '#9900ff', '#0099ff', '#ff6666'];
        const fonts = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier', 'Georgia', 'Comic Sans MS', 'Impact', 'Lucida Console', 'Papyrus'];
        const fontSize = Math.floor(Math.random() * (30 - 16 + 1)) + 16; // Random size between 16 and 30

        return {
            color: colors[Math.floor(Math.random() * colors.length)],
            fontSize: `${fontSize}px`,
            fontFamily: fonts[Math.floor(Math.random() * fonts.length)]
        };
    }

    // Function with typewriter and silly effects
    function typeWriterEffect(element, text, i, speed) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            if (text[i] === ' ' && Math.random() > 0.7) { // 30% chance for an "extra" space
                element.innerHTML += '&nbsp;';
            }
            
            // Apply a random silly effect
            if (i === text.length - 1) {
                const effects = [
                    () => element.style.textShadow = '2px 2px 4px #ff0000',
                    () => element.style.transform = 'rotate(5deg)',
                    () => element.style.letterSpacing = `${Math.random() * 5}px`,
                    () => element.style.textDecoration = 'underline wavy',
                    () => element.style.animation = 'shake 0.5s infinite'
                ];
                effects[Math.floor(Math.random() * effects.length)]();
            }

            setTimeout(() => typeWriterEffect(element, text, i + 1, speed), speed);
        }
    }

    function displayQuotes() {
        function addQuote() {
            if (fucktardQuotes.length > 0) {
                let quote = fucktardQuotes[Math.floor(Math.random() * fucktardQuotes.length)];
                let quoteElement = document.createElement('p');
                quoteElement.style.opacity = '0'; // Start with opacity 0 for smooth fade-in
                quoteElement.style.transition = 'opacity 0.5s ease-in-out';
                
                // Apply random styles
                let style = getRandomStyle();
                Object.assign(quoteElement.style, style);

                quoteContainer.appendChild(quoteElement);

                setTimeout(() => {
                    quoteElement.style.opacity = '1'; // Fade in the quote
                    typeWriterEffect(quoteElement, quote, 0, 30); // Faster typing at 30ms per character
                }, 100);

                // Schedule the next quote faster
                setTimeout(addQuote, (quote.length + 1) * 30 + 500); // Wait for this quote to finish typing plus 0.5 seconds
            }
        }

        addQuote();  // Start adding quotes
    }

    overlay.appendChild(quoteContainer);
    document.body.appendChild(overlay);

    // Start displaying the quotes
    displayQuotes();

    // Close the overlay when clicked
    overlay.addEventListener('click', function() {
        this.remove();
    });

    // Add CSS for animations

    document.head.appendChild(style);
}

// LetterCatchGame
function startLetterCatchGame() {
    const sequence = ['F', 'U', 'C', 'K', 'T', 'A', 'R', 'D'];
    let currentIndex = 0;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(0,0,0,0.8); 
        color: rgb(0, 255, 0); 
        font-family: monospace; 
        font-size: 20px; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        z-index: 10006;
    `;

    // Instructions paragraph, but hidden
    const instruction = document.createElement('p');
    instruction.textContent = " " + sequence.join(' ');
    instruction.style.cssText = 'visibility: hidden;'; // Make this paragraph invisible
    overlay.appendChild(instruction);

    // Display for the current state of the game
    const display = document.createElement('h1');
    display.style.cssText = 'font-size: 4em; margin: 0;';
    display.textContent = sequence.map((letter, idx) => idx === currentIndex ? letter : '_').join(' ');
    overlay.appendChild(display);

    document.body.appendChild(overlay);

    document.addEventListener('keydown', handleKeyPress);

    // Handle key press events
    function handleKeyPress(e) {
        if (e.key === sequence[currentIndex]) {
            currentIndex++;
            if (currentIndex === sequence.length) {
                gameOver();
            } else {
                display.textContent = sequence.map((letter, idx) => idx < currentIndex ? letter : idx === currentIndex ? letter : '_').join(' ');
            }
        }
    }

    // End the game
    function gameOver() {
        display.textContent = "GREAT JOB FUCKTARD!";
        document.removeEventListener('keydown', handleKeyPress);
        setTimeout(() => {
            overlay.remove();
        }, 3000);  // Display "GREAT JOB FUCKTARD!" for 3 seconds before closing
    }
}


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
    
    setTimeout(() => {
        img.style.animation = 'zoomOut 1s forwards';
    }, 4000);

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 5000);
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

        penis.style.left = `${Math.random() * window.innerWidth}px`;
        penis.style.top = '0px';

        const animationDuration = 3 + Math.random() * 5;
        penis.style.animation = `fall ${animationDuration}s linear forwards`;
        
        rainContainer.appendChild(penis);
        
        setTimeout(() => {
            rainContainer.removeChild(penis);
        }, animationDuration * 1000);
    }

    const intervalId = setInterval(createPenis, 100);

    setTimeout(() => {
        clearInterval(intervalId);
        const rainEffect = document.getElementById('penisRain');
        if (rainEffect) rainEffect.remove();
    }, 10000);

    addFallAnimation();
}

function addFallAnimation() {
    if (!document.getElementById('fallAnimationStyle')) {
        const style = document.createElement('style');
        style.id = 'fallAnimationStyle';
        style.textContent = `
            @keyframes fall {
                from { transform: translateY(0) rotate(0deg); }
                to { transform: translateY(${window.innerHeight}px) rotate(720deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

function showVideoPopup() {
    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001; background: black;';

    const video = document.createElement('video');
    video.src = 'ontheverge.mp4'; 
    video.controls = true;
    video.autoplay = true;
    video.style.cssText = 'width: 80vw; height: 80vh; max-width: 100%; max-height: 100%;';

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
    image.src = 'punchline.jpg';
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

    overlay.style.animation = 'fightEffect 3s ease-out forwards';
    setTimeout(() => {
        overlay.style.animation = ''; 
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
        'fucktard2.mp3',
        'fucktard3.mp3',
        'fucktard4.mp3',

    ];

    const randomAudio = audios[Math.floor(Math.random() * audios.length)];
    const audio = new Audio(randomAudio);
    audio.play();
}

// Updated function for the Fucktard AI with random question selection
function openFucktardQuiz() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: #000; color: #0f0; font-family: 'Courier New', monospace; 
        padding: 20px; box-sizing: border-box; z-index: 10002; overflow: auto;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        animation: terminalFadeIn 0.5s ease-out forwards;
    `;

    const terminalContent = document.createElement('div');
    terminalContent.style.cssText = `
        font-size: 16px; text-align: left; width: 80%; max-width: 900px; margin-top: 100px;
        background: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 5px; 
    `;

    // ASCII art header for the quiz
    const header = document.createElement('pre');
    header.textContent = `
   ....#                                                                                                                 #####     
  # #   #####  ######    #   #  ####  #    #      ##      ###### #    #  ####  #    # #####   ##   #####  #####     #     #    
 #   #  #    # #          # #  #    # #    #     #  #     #      #    # #    # #   #    #    #  #  #    # #    #          #    
#     # #    # #####       #   #    # #    #    #    #    #####  #    # #      ####     #   #    # #    # #    #       ###     
####### #####  #           #   #    # #    #    ######    #      #    # #      #  #     #   ###### #####  #    #       #       
#     # #   #  #           #   #    # #    #    #    #    #      #    # #    # #   #    #   #    # #   #  #    #               
#     # #    # ######      #    ####   ####     #    #    #       ####   ####  #    #   #   #    # #    # #####        #       
    ...
                                                                                                                               
                                                                                                            

  `.trim();
    header.style.cssText = `
        width: 100%; 
        text-align: center; 
        position: absolute; 
        top: 50px; 
        left: 50%; 
        transform: translateX(-50%);
        font-size: 12px; 
        color: #0ff;
        white-space: pre-wrap; 
        z-index: 10003; 
    `;
    terminalContent.appendChild(header);

    const questions = [
        "Would a fucktard prefer to eat cheese-flavored ice-cream or ice-cream flavored-cheese ?",
        "What would happen if a fucktard tried to solve world hunger with only memes?",
        "Can you name five fucktard celebrities who could potentially win a Nobel Prize for being a fucktard?",
        "If fucktards ruled the world, what would be the national anthem?",
        "Is it possible for a fucktard to become the first astronaut on Mars? Why or why not?",
        "How many fucktards does it take to change a lightbulb?",
        "Describe the perfect fucktard vacation destination.",
        "What's the life expectancy of a fucktard who only eats pizza?", 
        "Would a fucktard argue that gravity is a myth, or that it's the only real myth?",
        "If a fucktard could breathe underwater, why would they need a submarine?",
        "How many fucktards would it take to argue over which side of a coin has more value?",
        "Is it more efficient for a fucktard to count sheep or to teach sheep to count fucktards?",
        "What would happen if a fucktard decided to paint the sky with invisible colors?",
        "Could a fucktard win a marathon by running backwards or by not running at all?",
        "If a fucktard believes silence is loud, what kind of music would they listen to?",
        "How would a fucktard explain why the longest distance between two points is a straight line?",
        "Does a fucktard believe that the less you know, the more you understand, or vice versa?",
        "What would a fucktard's strategy be for playing chess with a deck of cards?",
        "If fucktards invented a new language, would it be silent or made entirely of emojis?",
        "Can a fucktard convince a door that it's not really there?",
        "If a fucktard was in charge of time, would they prefer it to go faster or slower by standing still?",
        "Is a fucktard's favorite color the sound of blue?",
        "What would a fucktard do to prove that fire is colder than ice?",
        "Would fucktards elect a king or a potato to rule their land?",
        "If a fucktard could see the future, would they look forward or backward to see it?",
        "How would a fucktard describe the smell of a color?",
        "What would happen if a fucktard tried to plant a tree upside down to grow into the sky?",
        "Is a fucktard's dream to fly by digging a tunnel to the sky?",
        "How many fucktards would it take to agree on the exact location of 'up'?",
        "What would be the signature dish in a fucktard's cookbook that uses only air as an ingredient?",
        "If fucktards were in charge of education, would they teach history from the future or the past?",
        "Can a fucktard make it rain by dancing with umbrellas indoors?",
        "What would a fucktard's reaction be to discovering that the sun is actually a giant disco ball?",
        "Would fucktards prefer to swim in the desert or walk across the ocean floor?",
        "If a fucktard wrote a book, would it be about the adventures of a stationary bicycle or the stillness of a running track?",
        "How would a fucktard explain why the shortest path to success is a zigzag?",
        "Is a fucktard's idea of a perfect day one where night never ends or day never begins?",
        "What would a fucktard's plan be to make mountains less steep by climbing them from the top down?",
        "If a fucktard could talk to plants, would they tell them to grow slower or faster?",
        "Would a fucktard believe that the opposite of love is love, but from a different angle?",
        "How would a fucktard react to the news that mirrors are just windows to another dimension?",
        "What would a fucktard do to prove that cold coffee is hotter than hot coffee?",
        "If a fucktard was a fashion designer, would they create clothes that are invisible or that change patterns every second?",
        "Could a fucktard convince a fish that water is dry?",
        "Is a fucktard's philosophy that ignorance is the highest form of knowledge?",
        "What would be the result if a fucktard tried to eat a shadow for breakfast?",
        "How would a fucktard prove that the best way to solve a puzzle is to ignore the pieces?",
        "If fucktards were philosophers, would they argue that existence is an illusion, or that illusions are the only true existence?",
        "Can a fucktard teach a dog to bark in sign language?",
        "What would a fucktard's strategy be for winning a race by starting after the finish line?",
        "Would a fucktard claim that the center of a circle is on its edge?",
        "How would a fucktard convince a clock that time is actually a cube?",
        "If fucktards were to write a dictionary, would they define 'wet' as 'dry' but in liquid form?",
        "What would a fucktard's approach be to make a soundless song?",
        "Is a fucktard's dream vacation to visit everywhere by staying home?",
        "Could a fucktard make a living by selling air in different flavors?",
        "What would a fucktard say if they discovered that the moon is made of cheese, but only during the day?",
        "If fucktards were in charge of traffic, would they paint all roads with the colors of silence?",
    ];

    let questionsAsked = [];
    let answerCount = 0;

    function generateAnswer(question) {
        const randomResponses = [
            `A fucktard would argue that eating cheese-flavored ice-cream is the pinnacle of human civilization!`,
            `The fucktard, of course, believes the only way to solve world hunger is with an infinite supply of memes. That’s how you win hearts, not stomachs.`,
            `The fucktard celebs? Honestly, I bet they’d win the Nobel Prize for making people believe in absurdity.`,
            `If fucktards ruled the world, the anthem would be nothing but the sound of confusion and misplaced ambition.`,
            `A fucktard might think the first astronaut should be a potato. Because why not? It's space and time we're talking about!`,
            `A fucktard might claim that wearing socks with sandals is the new fashion statement for intellectual superiority.`,
            `Only a fucktard would think that installing a door in a wall is an invasion of privacy for the wall.`,
            `A fucktard's strategy for climate change would involve teaching polar bears how to use sunscreen.`,
            `The fucktard believes that the best way to increase literacy is by writing books with invisible ink.`,
            `If a fucktard were a chef, they'd serve soup in a colander to showcase the soup's freedom.`,
            `A fucktard would propose that we solve energy crises by harnessing the power of yawns from bored people.`,
            `In a fucktard's world, the ultimate currency would be likes on social media, leading to economic policy based on popularity contests.`,
            `A fucktard might argue that the best way to avoid traffic jams is by convincing cars they're bicycles.`,
            `The fucktard would suggest that to cure insomnia, one should sleep with their eyes open to trick the brain.`,
            `Fucktards believe that the Earth is flat because if it were round, all the water would fall off the bottom.`,
            `A fucktard would think that the best way to find love is by shouting sweet nothings at trees, hoping for an echo of affection.`,
            `In fucktard logic, wearing headphones without music is the best way to appreciate silence.`,
            `A fucktard might insist that the most effective exercise is to run in place while waiting for the elevator.`,
            `To a fucktard, the optimal method for time management is to set all clocks to show 11:59 PM permanently.`,
            `Fucktards believe that the secret to immortality lies in holding your breath for as long as possible.`,
            `A fucktard would say that to make a building earthquake-proof, you should just ask it nicely not to fall.`,
            `If fucktards were in charge of education, they'd teach that the best way to learn history is by time traveling back and getting notes firsthand.`,
            `The fucktard's approach to dieting is to eat the menu because it has all the ingredients you need.`,
            `A fucktard would argue that the best way to recycle is to throw everything into the ocean because it's like a giant natural blender.`,
            `To deal with overpopulation, a fucktard would suggest we all live in a giant conga line to save space.`,
            `Fucktards believe that the best way to cure a cold is by sneezing into a fan to distribute your germs evenly.`,
            `A fucktard's idea of a secure internet password is "password" because it's the most unexpected choice.`,
            `In a fucktard's mind, the best way to stay hydrated is by drinking rain directly from the sky, because it's fresh.`,
            `A fucktard might propose that to prevent forest fires, we should train trees to dodge lightning.`,
            `The fucktard would argue that the only true form of transportation is by being carried by the wind.`,
            `If fucktards ran zoos, they'd rename all the animals based on what they look like when viewed upside down.`,
            `A fucktard would think that the best way to prevent crime is by making all criminals wear bells like cats.`,
            `In fucktard economics, money grows on trees, so deforestation is just bad financial planning.`,
            `A fucktard would suggest that the best way to learn a language is by speaking gibberish and waiting for the universe to translate.`,
            `The fucktard's approach to global warming is to give the planet a giant ice pack.`,
            `Fucktards believe that if we all jump at once, we can realign the Earth's axis.`,
            `A fucktard would argue that the best way to find lost items is by not looking for them, so they can come out of hiding.`,
            `To a fucktard, the best way to reduce noise pollution is by shouting "shh" very loudly.`,
            `Fucktards think that if you stare at a wall long enough, the wall will eventually stare back.`,
            `A fucktard would propose that the solution to homelessness is to build houses out of cardboard because it's renewable.`,
            `In a fucktard's world, the best way to cool a room in summer is by painting the air blue.`,
            `The fucktard believes that the best way to clean a car is by driving it through a car wash while it's closed.`,
            `A fucktard would argue that if we all wore capes, we could collectively fly to solve traffic issues.`,
            `The fucktard's idea of space exploration is to send a giant magnet into space to pull planets closer for study.`,
            `Fucktards might think that the best way to make friends is by randomly complimenting strangers' shoes.`,
            `A fucktard would suggest that to prevent sunburn, we should all live underwater since the sun doesn't reach there.`,
            `If a fucktard wrote a travel guide, it would recommend visiting your own backyard because you know where everything is.`,
            `A fucktard would believe that the best way to combat loneliness is by having a conversation with your shadow.`,
            `The fucktard's solution to air pollution would be to give exhaust pipes tiny umbrellas to keep the pollution from spreading.`,
            `Fucktards would argue that the best form of exercise is vigorously nodding in agreement during conversations.`,
            `In a fucktard's world, the best way to change seasons is by voting on which one you prefer.`,
            `A fucktard might think that the way to prevent aging is by never looking at a calendar.`,
            `The fucktard's approach to finding lost items involves accusing inanimate objects of theft.`,
            `If fucktards were into pet care, they'd recommend teaching cats to bark to keep dogs guessing.`,
            `A fucktard would suggest that the best way to learn to swim is by first mastering the art of floating on land.`,
            `The fucktard's idea of a security system is a sign that reads "Beware of Dog" when you don't even own a dog.`,
            `To prevent hair loss, fucktards would recommend wearing hats made of hair.`,
            `A fucktard would argue that the best way to save energy is by not using it, and then wondering why everything turned off.`,
            `The fucktard's method to avoid falling asleep during lectures is to stand on one leg.`,
            `If fucktards designed alarms, they'd be silent and wake you up with the smell of coffee.`,
            `A fucktard might propose that to solve the issue of overfishing, we should fish for fish with fishing rods made of fish.`,
            `In fucktard logic, the best way to cure allergies is by becoming allergic to everything, so your body gives up fighting.`,
            `Fucktards might think that the best way to learn about culture is by mispronouncing everything and hoping for corrections.`,
            `A fucktard would believe that the best way to stay warm in winter is by wearing multiple layers of birthday candles.`,
            `The fucktard's idea of a surprise party is to not invite anyone so you're genuinely surprised when no one shows up.`,
            `If fucktards were in charge of weather forecasts, they'd predict whatever weather they felt like experiencing.`,
            `A fucktard would argue that the best way to avoid getting lost is by always taking the path less traveled by anyone.`,
            `The fucktard's approach to making decisions is to flip a coin, but then do the opposite because it's more unexpected.`,
            `Fucktards believe that if you run fast enough, you can outrun your own shadow, thus becoming invisible.`,
            `A fucktard might think that to ensure privacy, one should speak in code, but the code would be to say everything backwards.`
        ];
        return randomResponses[Math.floor(Math.random() * randomResponses.length)];
    }

    function askQuestion() {
        if (answerCount < questions.length) {
            let questionIndex;
            do {
                questionIndex = Math.floor(Math.random() * questions.length);
            } while (questionsAsked.includes(questionIndex));

            questionsAsked.push(questionIndex);
            const question = document.createElement('p');
            question.textContent = questions[questionIndex];
            question.style.cssText = 'margin-bottom: 10px; animation: fadeIn 0.5s ease-out forwards;';
            
            const inputContainer = document.createElement('div');
            inputContainer.style.cssText = 'display: flex; flex-direction: row; align-items: center; gap: 10px;';
            
            const userInput = document.createElement('input');
            userInput.type = 'text';
            userInput.style.cssText = ' flex-grow: 1; padding: 5px; margin-right: 10px; border: none; background-color: #000; color: #0f0; border-bottom: 1px solid #0f0; font-family: inherit; font-size: inherit; transition: border-color 0.3s;';
            userInput.placeholder = 'Type your answer...';

            const submitButton = document.createElement('button');
            submitButton.textContent = 'Enter';
            submitButton.style.cssText = ' border: none; background: transparent; color: #0f0; font-family: inherit; font-size: inherit; cursor: pointer; transition: color 0.3s; outline: none;';
            
            submitButton.addEventListener('click', function () {
                const response = generateAnswer(question.textContent);
                const answer = document.createElement('p');
                answer.textContent = response;
                answer.style.cssText = 'color: #fff; margin-top: 10px;';
            
                // Insert the answer immediately after the input container.
                terminalContent.insertBefore(answer, inputContainer.nextSibling);
            
                // Set a timeout to remove the answer after 2 seconds.
                setTimeout(() => {
                    if (answer.parentNode) { // Check if answer is still in the DOM to avoid errors.
                        terminalContent.removeChild(answer);
                    }
                }, 4000); // 2000 milliseconds = 2 seconds
            
                // Clear the question and input container
                terminalContent.removeChild(question);
                terminalContent.removeChild(inputContainer);
            
                // Ask the next question after the answer has been shown and removed.
                setTimeout(askQuestion, 2000); // Ensure askQuestion is called after the answer is removed
            });
            inputContainer.appendChild(userInput);
            inputContainer.appendChild(submitButton);

            terminalContent.appendChild(question);
            terminalContent.appendChild(inputContainer);
            answerCount++;
        } 
    }

    // ASCII art close button
    const closeButton = document.createElement('pre');
    closeButton.textContent = `  
    .                                                                                                                                              
                                ..                                                        
                               : --:                                                      
                               :.-+:                                                      
                               : ..:                                                      
                               :..:.                        :.     -.                     
                                :.--...                    .+*.   :+=                     
                                : -:   -                   :-#==+=+*-                     
                       :::::::::=-+=+   :                  :=*::::++:                     
                       =:+*-:-:-:::.    -         ......  .-+#==-=**=:.                   
                 :----:::=+----------------------:......::..:...:.... .:---:              
                +.                                                         --             
                +                                                           +             
               -:                                                    .::.   +             
               *                                                 .---=+**+  =             
              --                                                -:--: :%#.=: +            
              *                                                           :. *            
             ::                                                    ::::--*+  +            
             +             ------.                                 -==--:   :-            
             +         :--- :=---*=                                         -.            
            -:       -==---#@@*   .                    =   .+               =             
            +       .#:    -*=    .                    +    --              +             
           =                    :*=                    =:    :=            +              
          .=           .-..::-==*=                    :-      :=          =.              
          +            :-====--:                      *        *         --               
          *                                          .+        *         +                
          +                                          .+       =-         +                
          *                                =.          -=-:  -+         =.                
          *                              .:=:            +.   =.       .=                 
          +                                 --::         *    * -      +                  
          .=                                   .=::-.           -+---.+                   
           :=                                   :=  .:=-:-=-==::     #                    
             --:                                 #    :- -   :     .+                     
               .--.                              .     :          --                      
                  :=:                                            =.                       
                    .:--.                                      .=                         
                        :--:                                  :-                          
                            --                               =:                           
                              :--:                         :=                             
                                 .---.                  :--.                              
                                     :--            :--:                                  
        --::::::::-:       

`.trim();
    closeButton.style.cssText = `
        margin-top: 20px;
        cursor: pointer; 
        font-size: 8px; 
        padding: 0; 
        text-align: center; 
        color: red; 
        background: none; 
        border: none;
        overflow: hidden; 
        z-index: 10004;
    `;

    // Add click event to close the overlay
    closeButton.addEventListener('click', function() {
        overlay.style.animation = 'terminalFadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            overlay.remove();
        }, 500);
    });

    overlay.appendChild(terminalContent);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    // CSS animations
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes terminalFadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes terminalFadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(20px); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        </style>
    `);

    // Start the quiz
    askQuestion();
}
// New function to glitch the page
function glitchPage() {
    const glitchStyle = document.createElement('style');
    glitchStyle.id = 'glitchEffect';
    glitchStyle.textContent = `
        .glitch {
            animation: glitch 0.5s infinite;
        }

        @keyframes glitch {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(-2px, 2px); }
            50% { transform: translate(2px, -2px); }
            75% { transform: translate(-2px, -2px); }
            100% { transform: translate(2px, 2px); }
        }
    `;
    document.head.appendChild(glitchStyle);

    // Apply glitch effect to all elements
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
        if (el.id !== 'glitchEffect') { // Avoid glitching the glitch style itself
            el.classList.add('glitch');
        }
    });

    // Remove the glitch effect after 5 seconds
    setTimeout(() => {
        elements.forEach(el => el.classList.remove('glitch'));
        document.head.removeChild(glitchStyle);
    }, 5000);
}

// Ascii Art 

function showAsciiArt() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: #000; color: #0f0; font-family: monospace; 
        padding: 20px; z-index: 10003; overflow: auto;
        display: flex; flex-direction: column; align-items: center;
        justify-content: center;
    `;

    const asciiContainer = document.createElement('pre');
    asciiContainer.style.cssText = 'font-size: 14px; text-align: center;';
    asciiContainer.textContent = `
                                 .    .....=.
                                 .-:.. -   . :=-.
                          -      -     :         .::
                        ..=......:.::           ...:-.....
                    :::.             -   ...:...           ........:.
                   ::.               :-:.               :.           .:.
                  -.                  .                =::             .:.
                 -         .                          .--                :.
                --          :.                  ......=::                 :.
                =                              :.:..: =:--.                .:
                =                              -=    :::    .:...::.         -
                :.       ..                   -.=          :.       ::        -
                 :=                           .  :         =          -        -
                 . -.                                      =           -       -
                    ::                                     .:.         .:      .-:
                      :=:.:-:                     -          .::.       =       . -.
                           =                       -             .-    -.          -
                           =              .:::::::::=:.     .::::::=:  -      ..:  -
                           =           :::            .:-:::.       --  -.     :. -
                          .:                    .::::::. -.  ..:::::..-: .:::    :-
                          -             .::::::+@@@+    ::*::.       .-+     .:.:         
                          -       .==-::       @@@@#      -      =@@@= .-                 
                         -.           :::::::::+@@@#      +:    -@@@@*-=                  
                        .-                       .:::::::+  .:::-#%#*==-                  
                        -                       .::::::::         ::=:.                   
                        -                      ::::::            ::-                      
                        -                                          :-                     
                        -.                                           -.                   
                         .:                                           +                   
                           .:.        :::::::.                  .:::::=:                  
                              -     -:        ..::::::::::::::::.      =                  
                              .:.  .-   ::::::::::::::::::::::::::::::=:                  
                                 ::.--                .:::.         ::-                   
                                   .::=-:::::::::::::.    .:::::==-:                      
                                       .::.   :.          .:::::                          
                                           ::  .:-=--:::::.                               
                                             ....                                         
    `;

    overlay.appendChild(asciiContainer);
    document.body.appendChild(overlay);

    let intervalId; // Declare intervalId here so it can be accessed in the click handler

    // Blink effect
    let intervalTime = 1000; // Initial blinking time (1 second)
    const maxDuration = 5000; // Total duration of 5 seconds
    const startTime = Date.now();

    function blink() {
        // Toggle visibility of ASCII content
        asciiContainer.style.visibility = (asciiContainer.style.visibility === 'hidden') ? 'visible' : 'hidden';
        
        // Increase blinking speed by decreasing the interval
        intervalTime = Math.max(100, intervalTime - 100); // Don't go below 100ms
        intervalId = setTimeout(blink, intervalTime);

        // Check if 5 seconds have passed
        if (Date.now() - startTime > maxDuration) {
            clearTimeout(intervalId); // Use clearTimeout here since we're now using setTimeout
            overlay.remove(); // Close the overlay after 5 seconds
        }
    }

    intervalId = setTimeout(blink, intervalTime);

    // Add click event listener to stop and close
    overlay.addEventListener('click', function() {
        clearTimeout(intervalId);
        overlay.remove();
    });
}

//balls
function playAsciiPenisGame() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: #000; z-index: 10004; overflow: hidden;
        display: flex; justify-content: center; align-items: center;
    `;

    // Replace ASCII text with image
    const penisImage = document.createElement('img');
    penisImage.src = 'fball.png';  // Ensure 'fball.png' is in the same directory or provide the correct path
    let scale = 1;  // Initial scale of the image
    let clickCount = 0;  // Counter for clicks

    // Style the image
    penisImage.style.cssText = `
        max-width: 100%; max-height: 100%; 
        transition: transform 0.3s ease-in-out;
        transform: scale(${scale});
    `;

    // Function to check if the image has scaled to fill the screen
    function checkScale() {
        if (penisImage.offsetWidth >= window.innerWidth || penisImage.offsetHeight >= window.innerHeight) {
            overlay.remove(); // Close the overlay
        }
    }

    // Event listener for clicks
    overlay.addEventListener('click', function() {
        clickCount++;
        // Increase scale on each click
        scale += 0.1;  // Increase the scale by 10% with each click
        penisImage.style.transform = `scale(${scale})`;

        // Check if we should close the overlay after 10 clicks
        if (clickCount >= 10) {
            overlay.remove();
        } else {
            checkScale(); // Still check if the image fills the screen before 10 clicks
        }
    });

    // Append the image to the overlay
    overlay.appendChild(penisImage);
    document.body.appendChild(overlay);

    // Initial check for scale, in case the initial size is too close to the screen size
    setTimeout(checkScale, 0);  // Use setTimeout to allow the DOM to update
}
