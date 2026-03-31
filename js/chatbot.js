// Create Chatbot HTML
const chatbotHTML = `
<div class="chatbot-container">
    <div class="chatbot-toggle">
        <i class="fas fa-robot"></i>
    </div>
    <div class="chatbot-window">
        <div class="chatbot-header">
            <h3>Addis Power AI Assistant</h3>
            <i class="fas fa-times" id="closeChatbot"></i>
        </div>
        <div class="chatbot-messages">
            <div class="message bot">
                <div class="message-content">
                    Hello! I'm Addis Power AI Assistant. How can I help you today?
                </div>
            </div>
        </div>
        <div class="chatbot-input">
            <input type="text" placeholder="Type your message..." id="chatbotInput">
            <button id="sendMessage"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>
</div>
`;

// Add chatbot to body
document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// Chatbot elements
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWindow = document.querySelector('.chatbot-window');
const closeChatbot = document.getElementById('closeChatbot');
const sendButton = document.getElementById('sendMessage');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.querySelector('.chatbot-messages');

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// AI Response Logic
function getAIResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('price') || msg.includes('cost') || msg.includes('birr')) {
        return "Our website packages start from 15,000 ETB for basic websites. Business Pro is 35,000 ETB, and Enterprise AI is 75,000 ETB. We also offer add-on services starting from 2,500 ETB/month. Would you like more details?";
    }
    else if (msg.includes('service') || msg.includes('offer')) {
        return "We offer Web Development, AI Integration, Mobile App Development, and Digital Marketing services. Which service are you interested in?";
    }
    else if (msg.includes('web') || msg.includes('website')) {
        return "We create modern, responsive websites tailored to your business needs. Our plans start from 15,000 ETB. Would you like to see our portfolio?";
    }
    else if (msg.includes('ai') || msg.includes('artificial intelligence')) {
        return "We specialize in AI solutions including chatbots, predictive analytics, and machine learning models. Our AI integration starts from 8,000 ETB for a custom chatbot.";
    }
    else if (msg.includes('contact') || msg.includes('reach')) {
        return "You can contact us via Telegram at @addis_power, email at agoodperception@gmail.com, or use the contact form on our website. We typically respond within 24 hours!";
    }
    else if (msg.includes('hello') || msg.includes('hi')) {
        return "Hello! Welcome to Addis Power AI & Web Solution. How can I assist you today?";
    }
    else if (msg.includes('support') || msg.includes('help')) {
        return "I'm here to help! You can ask me about our services, pricing, or contact information. What would you like to know?";
    }
    else {
        return "Thank you for your message! For detailed inquiries, please contact us directly on Telegram at @addis_power or email agoodperception@gmail.com. Is there anything specific you'd like to know about our services?";
    }
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Auto-open chatbot after 3 seconds (optional)
setTimeout(() => {
    if (!chatbotWindow.classList.contains('active')) {
        chatbotWindow.classList.add('active');
        setTimeout(() => {
            chatbotWindow.classList.remove('active');
        }, 5000);
    }
}, 3000);
