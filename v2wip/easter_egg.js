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
        }
    }
});

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
                answer.style.cssText = 'color: #ff0000; margin-top: 10px;';
            
                // Insert the answer immediately after the input container.
                terminalContent.insertBefore(answer, inputContainer.nextSibling);
            
                // Set a timeout to remove the answer after 2 seconds.
                setTimeout(() => {
                    if (answer.parentNode) { // Check if answer is still in the DOM to avoid errors.
                        terminalContent.removeChild(answer);
                    }
                }, 2000); // 2000 milliseconds = 2 seconds
            
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

// New function for the ASCII Penis game with zoom effect
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

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: #4CAF50;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
    `;
    closeButton.addEventListener('click', function() {
        overlay.remove();
    });

    // Add an '=' to the penis text before the 'D' and zoom in on each click
    overlay.addEventListener('click', function() {
        // Add '=' before 'D'
        const position = penisText.indexOf('D');  
        penisText = penisText.slice(0, position) + '=' + penisText.slice(position);  
        penisContainer.textContent = penisText;  // Update the displayed text

        // Zoom effect: Increase the font size
        fontSize += 2;  // Increase the font size by 2px with each click
        penisContainer.style.fontSize = fontSize + 'px';  // Update the font size
    });

    overlay.appendChild(penisContainer);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
}
