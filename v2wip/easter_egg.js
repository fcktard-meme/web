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
        } else if (event.key === 'P') {
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
        } else if (event.key === 'L') {
            event.preventDefault();
            startLetterCatchGame();
        } else if (event.key === 'Q') {
            event.preventDefault();
            showFucktardQuotesOverlay();
        }  else if (event.key === 'U') {
            event.preventDefault();
            startPenisPong();
        }else if (event.key === 'T') {
            event.preventDefault();
            startSnakeGame();
        }else if (event.key === 'X') {
            event.preventDefault();
            sayFucktardInManyWays();
        } else if (event.key === 'J') {
            event.preventDefault();
            showVideoInTheBenin();
        }
    }
    });

    function showVideoInTheBenin() {
        const videoSrc = 'inthebeni.mp4'; 
        const mosaicCount = 20; // Now we want 10 videos
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: black;
            z-index: 9999;
            overflow: hidden;
        `;
    
        const filters = [
            'grayscale(100%)', // Noir et blanc
            'invert(100%)', // Contraste inversé
            'sepia(100%)', // Sépia
            'hue-rotate(180deg)', // Rotation de teinte
            'saturate(5)', // Saturation élevée
            'brightness(0.5)', // Assombrissement
            'contrast(200%)' // Contraste élevé
        ];
    
        for (let i = 0; i < mosaicCount; i++) {
            const mosaic = document.createElement('div');
            const size = Math.random() * 100 + 400; // Taille aléatoire entre 100px et 300px
            mosaic.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                overflow: hidden;
            `;
    
            const video = document.createElement('video');
            video.src = videoSrc;
            video.controls = false; 
            video.muted = i !== 0; // Mute all videos except the first one
            video.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: cover;
            `;
            video.loop = true;
    
            // Randomly select and apply a filter
            if (Math.random() > 0.3) { // 70% chance of applying a filter
                const randomIndex = Math.floor(Math.random() * filters.length);
                video.style.filter = filters[randomIndex];
            }
    
            mosaic.appendChild(video);
            overlay.appendChild(mosaic);
    
            // Déplacement aléatoire des mosaïques
            function moveMosaic(mosaicElement, size) {
                const newX = Math.random() * (window.innerWidth - size);
                const newY = Math.random() * (window.innerHeight - size);
                mosaicElement.style.transition = `all ${Math.random() * 3 + 2}s linear`;
                mosaicElement.style.left = `${newX}px`;
                mosaicElement.style.top = `${newY}px`;
            }
    
            mosaic.addEventListener('click', function(e) {
                e.stopPropagation(); // Empêche la propagation de l'évènement click pour ne pas fermer immédiatement
                this.style.transition = 'transform 0.5s ease-in-out';
                const randomScale = Math.random() * 2 + 1;
                this.style.transform = `scale(${randomScale})`; // Zoom aléatoire
    
                setTimeout(() => {
                    this.style.transform = 'scale(1)'; // Remise à l'échelle normale
                }, 500);
    
                // Apply glitch effect randomly to some videos
                if (Math.random() > 0.5) { // 50% chance of applying glitch effect
                    video.style.filter = `blur(${Math.random() * 3}px) saturate(${Math.random() * 2}) contrast(${Math.random() * 2})`;
                    setTimeout(() => {
                        video.style.filter = video.style.filter ? video.style.filter : 'none'; // Retour à l'état normal ou filtre original après un certain temps
                    }, 300);
                }
            });
    
            video.addEventListener('loadedmetadata', () => {
                video.play();
                moveMosaic(mosaic, size); // Déplacement initial
    
                // Animation continue
                setInterval(() => moveMosaic(mosaic, size), Math.random() * 10000 + 5000);
    
                // Random zoom during playback
                setInterval(() => {
                    if (Math.random() < 0.1) { // 10% chance every 5 seconds
                        const randomScale = Math.random() * 2 + 1;
                        mosaic.style.transition = 'transform 0.5s ease-in-out';
                        mosaic.style.transform = `scale(${randomScale})`;
                        setTimeout(() => {
                            mosaic.style.transform = 'scale(1)';
                        }, 500);
                    }
                }, 5000); // Check every 5 seconds
            });
    
            video.addEventListener('ended', () => {
                if (Array.from(overlay.querySelectorAll('video')).every(v => v.ended)) {
                    overlay.remove();
                }
            });
        }
    
        // Fermeture par clic n'importe où sur l'overlay
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.remove();
            }
        });
    
        document.body.appendChild(overlay);
    }
    
    // Pour utiliser la fonction
    // showVideoInTheBenin();
    function sayFucktardInManyWays() {
        // Vérifions si la synthèse vocale est supportée par le navigateur
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const voices = synth.getVoices(); // Récupère les voix disponibles
    
            // Liste des différentes manières de dire "fucktard"
            const waysToSayFucktard = [
                "Fucktard",
                "F-U-C-K-T-A-R-D",
                "Fucking retard",
                "You absolute fucktard",
                "What a fucktard",
                "Complete fucktard",
                "Fucktard, seriously?",
                "Oh my god, what a fucktard",
                "That's a classic fucktard move",
                "Such a fucktard",
                "Total fucktard",
                "Certified fucktard",
                "Epic fucktard",
                "Grade A fucktard",
                "A real fucktard",
                "Prize-winning fucktard",
                "The epitome of fucktard",
                "Fucktard of the year",
                "He's a fucktard, isn't he?",
                "Unbelievable fucktard",
                "Just a fucktard",
                "A walking fucktard",
                "The living definition of fucktard",
                "Are you kidding me? Fucktard!",
                "A textbook fucktard",
                "Fucktard extraordinaire",
                "Fucktard alert",
                "A fucktard's fucktard",
                "That's some next-level fucktardery",
                "Fucktard parade",
                "A fucktard's guide to life",
                "Fucktard genius",
                "Fucktard supreme",
                "A masterclass in fucktardery",
                "Fucktard hall of fame",
                "Fucktard chronicles",
                "Fucktard 101",
                "Fucktard olympics",
                "A fucktard's anthem",
                "A world-class fucktard",
                "Fucktard in chief",
                "Fucktard level: expert",
                "Fucktard of the century",
                "Fucktard, with honors",
                "A fucktard's legacy",
                "Fucktard philosophy",
                "Fucktard prodigy",
                "The fucktard's handbook",
                "Fucktard at heart",
                "A PhD in fucktardery"
            ];
    
            // Mélanger les phrases
            const shuffledPhrases = waysToSayFucktard.sort(() => 0.5 - Math.random());
    
            // Fonction pour dire un texte avec une voix aléatoire
            function speakText(text) {
                return new Promise((resolve, reject) => {
                    // Choisir une voix aléatoire parmi celles disponibles
                    const voiceIndex = Math.floor(Math.random() * voices.length);
                    const utterThis = new SpeechSynthesisUtterance(text);
                    utterThis.voice = voices[voiceIndex];
                    utterThis.onend = resolve;
                    // Ajoute un reject pour gérer l'annulation
                    utterThis.onerror = reject;
                    synth.speak(utterThis);
                });
            }
    
            // Fonction pour arrêter la parole
            function stopSpeech() {
                if (synth.speaking) {
                    synth.cancel();
                }
            }
    
            // On enchaîne les phrases mélangées avec un délai aléatoire pour une meilleure expérience audio
            async function sayAllWays() {
                try {
                    for (let phrase of shuffledPhrases) {
                        await speakText(phrase);
                        // Attente d'un délai aléatoire entre 1 et 3 secondes
                        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
                    }
                } catch (error) {
                    // On ignore l'erreur si la synthèse est annulée
                }
            }
    
            // Attendre que les voix soient chargées (pour certains navigateurs)
            speechSynthesis.onvoiceschanged = () => {
                // Ajouter un écouteur d'événements pour les clics sur le document
                document.addEventListener('click', stopSpeech);
                sayAllWays();
            };
    
        } else {
            console.log("Désolé, votre navigateur ne supporte pas la synthèse vocale.");
        }
    }
    
    // Pour utiliser la fonction
    // sayFucktardInManyWays();

    // VERGE

    function startSnakeGame() {
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
    
        // Créer le serpent initial
        let snake = [{x: 15, y: 15}];
        let food = {x: 10, y: 10};
        let dx = 0;
        let dy = 0;
        const gridSize = 20;
        let speed = 100; // Initial speed
        let foodCount = 0;
        let gameStarted = false;
    
        // Créer une fonction pour dessiner le jeu
        function drawGame() {
            gameContainer.innerHTML = ''; // Efface le contenu précédent
    
            // Dessiner le serpent
            snake.forEach((segment, index) => {
                const snakePart = document.createElement('div');
                snakePart.style.cssText = `
                    position: absolute;
                    width: ${gridSize}px;
                    height: ${gridSize}px;
                    line-height: ${gridSize}px;
                    text-align: center;
                    font-size: ${gridSize - 5 }px;
                    left: ${segment.x * gridSize}px;
                    top: ${segment.y * gridSize}px;
                    color: #FF69B4; // Change color to fluorescent pink
                `;
                if (index === 0) {
                    snakePart.textContent = 'D'; // Head
                } else if (index === snake.length - 1) {
                    snakePart.textContent = '8'; // Feet
                } else {
                    snakePart.textContent = '='; // Body
                }
                gameContainer.appendChild(snakePart);
            });
    
            // Dessiner la nourriture
            const foodElement = document.createElement('div');
            foodElement.style.cssText = `
                position: absolute;
                width: ${gridSize}px;
                height: ${gridSize}px;
                background-color: #FFF;
                left: ${food.x * gridSize}px;
                top: ${food.y * gridSize}px;
            `;
            gameContainer.appendChild(foodElement);
        }
    
        // Mettre à jour le jeu
        function updateGame() {
            if (!gameStarted) return; // Ne pas mettre à jour le jeu si le jeu n'a pas commencé
    
            const head = {
                x: snake[0].x + dx,
                y: snake[0].y + dy
            };
    
            // Vérifier les collisions
            if (head.x < 0 || head.x >= Math.floor(window.innerWidth / gridSize) || head.y < 0 || head.y >= Math.floor(window.innerHeight / gridSize) || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
                gameContainer.innerHTML = '<h2 style="color: white; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">REKT FUCKTARD, BUY THE DIP !</h2>';
                setTimeout(() => {
                    overlay.remove(); // Remove the overlay
                    document.removeEventListener('keydown', handleKeydown); // Remove the keydown event listener
                }, 3000); // Wait for 3 seconds before closing
                return;
            }
    
            snake.unshift(head); // Ajouter la nouvelle tête
    
            // Si le serpent mange la nourriture
            if (head.x === food.x && head.y === food.y) {
                foodCount++;
                // Augmenter la vitesse en fonction de la longueur du serpent
                speed = Math.max(50, Math.floor(100 - snake.length * 2)); // Diminuer la vitesse (vitesse augmente) quand le serpent grandit
                food = {
                    x: Math.floor(Math.random() * Math.floor(window.innerWidth / gridSize)),
                    y: Math.floor(Math.random() * Math.floor(window.innerHeight / gridSize))
                };
            } else {
                snake.pop(); // Retirer la queue si pas de nourriture mangée
            }
    
            drawGame();
            setTimeout(updateGame, speed); // Utiliser la vitesse ajustée
        }
    
        // Écouteur d'événement pour le mouvement du serpent
        function handleKeydown(event) {
            if (!gameStarted && (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
                gameStarted = true;
                // Set the direction only after the game has started
                switch (event.key) {
                    case 'ArrowUp':    dy = -1; dx = 0; break;
                    case 'ArrowDown':  dy = 1;  dx = 0; break;
                    case 'ArrowLeft':  dx = -1; dy = 0; break;
                    case 'ArrowRight': dx = 1;  dy = 0; break;
                }
                updateGame(); // Start the game loop only after setting the initial direction
            } else if (gameStarted) {
                // Prevent immediate direction reversal
                switch (event.key) {
                    case 'ArrowUp':    if (dy === 0) { dx = 0; dy = -1; } break;
                    case 'ArrowDown':  if (dy === 0) { dx = 0; dy = 1; } break;
                    case 'ArrowLeft':  if (dx === 0) { dx = -1; dy = 0; } break;
                    case 'ArrowRight': if (dx === 0) { dx = 1; dy = 0; } break;
                }
            }
        }
    
        document.addEventListener('keydown', handleKeydown);
    
        // Fermer le jeu quand on clique sur l'overlay
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                document.body.removeChild(this);
                document.removeEventListener('keydown', handleKeydown);
            }
        });
    
        document.body.appendChild(overlay);
        drawGame();
    
        // Afficher un message pour lancer le jeu
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
        scorePlayer.style.cssText = 'position: absolute; top: 10px; right: 50px; font-size: 20px; color: #FF00FF;';
        const scoreRobot = document.createElement('div');
        scoreRobot.style.cssText = 'position: absolute; bottom: 10px; left: 50px; font-size: 20px; color: #00FF00;';
        gameArea.appendChild(scorePlayer);
        gameArea.appendChild(scoreRobot);

        // Joueur (en haut)
        const player = document.createElement('div');
        player.style.cssText = 'position: absolute; top: 10px; left: 50%; transform: translateX(-50%); font-size: 30px; color: #FF00FF;';
        player.textContent = '8======D';
        gameArea.appendChild(player);

        // Robot (en bas)
        const robot = document.createElement('div');
        robot.style.cssText = 'position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 30px; color: #00FF00;';
        robot.textContent = '8======D';
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
        };
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
        penis.style.width = penis.style.height = `${Math.random() * 50 + 20}px`; // Random size between 20px and 70px

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
    }, 30000);

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
   ..#                                                                                                                 #####     
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
function playAsciiPenisGame() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: #000; color: #0f0; font-family: monospace; 
        padding: 20px; z-index: 10004; overflow: hidden;
        display: flex; flex-direction: column; align-items: center;
        justify-content: center;
    `;

    let penisText = "8==D";  // Initial text of the ASCII penis
    let fontSize = 14;  // Initial font size
    const penisContainer = document.createElement('pre');
    penisContainer.style.cssText = `font-size: ${fontSize}px; text-align: center;`;
    penisContainer.textContent = penisText;

    // Function to check if the text has reached full width
    function checkWidth() {
        if (penisContainer.offsetWidth >= window.innerWidth) {
            overlay.remove(); // Close the overlay
        }
    }

    // Event listener for clicks
    overlay.addEventListener('click', function() {
        // Add '=' before 'D'
        const position = penisText.indexOf('D');  
        penisText = penisText.slice(0, position) + '=' + penisText.slice(position);  
        penisContainer.textContent = penisText;  // Update the displayed text

        // Zoom effect: Increase the font size
        fontSize += 2;  // Increase the font size by 2px with each click
        penisContainer.style.fontSize = fontSize + 'px';  // Update the font size

        // Check if we should close the overlay
        checkWidth();
    });

    // Append only the penis container to the overlay
    overlay.appendChild(penisContainer);
    document.body.appendChild(overlay);

    // Initial check for width, in case the initial size is too close to the screen width
    setTimeout(checkWidth, 0);  // Use setTimeout to allow the DOM to update
}