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
        } else if (event.key.toLowerCase() === 'a') { // Case-insensitive for 'A'
            event.preventDefault();
            startFucktardChatSimulation();
        }
    }
});

// New function for the Fucktard chat simulation
function startFucktardChatSimulation() {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); z-index: 10000; display: flex; justify-content: center; align-items: center;';
    
    const chatContainer = document.createElement('div');
    chatContainer.style.cssText = 'background: white; padding: 20px; border-radius: 10px; width: 80%; max-width: 600px; max-height: 80vh; overflow-y: auto;';
    
    const conversation = document.createElement('div');
    conversation.style.cssText = 'font-family: Arial, sans-serif;';
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = 'position: absolute; top: 10px; right: 10px; background: #4CAF50; color: white; border: none; padding: 10px; cursor: pointer;';
    closeButton.addEventListener('click', function() {
        overlay.remove();
    });
    
    overlay.appendChild(chatContainer);
    chatContainer.appendChild(conversation);
    chatContainer.appendChild(closeButton);
    document.body.appendChild(overlay);
    
    let botMessages = ["Hello, fucktard! How are you doing today?", 
                       "That's interesting, fucktard. What are your plans for today?",
                       "Oh, fucktard, that sounds quite typical of you, doesn't it?", 
                       "Alright, fucktard, let's continue this fascinating chat."];

    botMessages.forEach(msg => {
        addMessage('bot', msg);
    });

    addUserMessageInput(chatContainer, conversation);
}

function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender;
    messageDiv.textContent = `${sender === 'bot' ? 'Bot: ' : 'User: '}${message.replace(/fucktard/gi, '<strong>fucktard</strong>')}`;
    conversation.appendChild(messageDiv);
    conversation.scrollTop = conversation.scrollHeight;
}

function addUserMessageInput(container, conversation) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type "oui" to respond...';
    input.style.cssText = 'width: calc(100% - 60px); margin: 10px 0; padding: 5px;';
    
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.style.cssText = 'margin-left: 5px; padding: 5px 10px;';
    sendButton.addEventListener('click', function() {
        if (input.value.toLowerCase() === 'oui') {
            addMessage('user', input.value);
            input.value = '';
        } else {
            alert('You can only respond with "oui".');
        }
    });

    container.appendChild(input);
    container.appendChild(sendButton);
}

// Ensure all other functions (showFeetPicFullscreen, activateEasterEgg, etc.) are defined here or in separate scripts if they're not already.
