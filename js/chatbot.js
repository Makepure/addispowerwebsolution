// Create Chatbot HTML
const chatbotHTML = `
<div class="chatbot-container">
    <div class="chatbot-toggle">
        <i class="fas fa-robot"></i>
    </div>
    <div class="chatbot-window">
        <div class="chatbot-header">
            <h3>🤖 BEST Web & AI Assistant</h3>
            <i class="fas fa-times" id="closeChatbot"></i>
        </div>
        <div class="chatbot-messages">
            <div class="message bot">
                <div class="message-content">
                    👋 Hello! I'm BEST, your Web & AI Assistant from Addis Power. How can I help you today?
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
    
    // Show typing indicator
    addTypingIndicator();
    
    // Simulate AI response
    setTimeout(() => {
        removeTypingIndicator();
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 800);
}

// Add typing indicator
function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing-indicator';
    typingDiv.innerHTML = '<div class="message-content">BEST is typing<span>...</span></div>';
    typingDiv.id = 'typingIndicator';
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) {
        typing.remove();
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// AI Response Logic for BEST Assistant
function getAIResponse(message) {
    const msg = message.toLowerCase();
    
    // Pricing responses with updated amounts
    if (msg.includes('price') || msg.includes('cost') || msg.includes('birr') || msg.includes('plan')) {
        return "💰 Here are our plans in Ethiopian Birr (ETB):\n\n📌 Basic Plan: 8,000 ETB\n📌 Business Plan: 25,000 ETB (Most Popular!)\n📌 Enterprise Plan: 50,000 ETB\n\nAdd-ons start from 2,500 ETB/month. Which plan interests you?";
    }
    else if (msg.includes('basic')) {
        return "📌 Basic Plan - 8,000 ETB\n✅ 5 Pages Website\n✅ Responsive Design\n✅ Contact Form\n✅ Basic SEO\n✅ 1 Month Support\nPerfect for small businesses starting online!";
    }
    else if (msg.includes('business')) {
        return "📌 Business Plan - 25,000 ETB (Most Popular!)\n✅ 15 Pages Website\n✅ BEST AI Chatbot Integration\n✅ E-commerce Ready\n✅ Advanced SEO\n✅ 6 Months Support\n✅ Analytics Dashboard\nGreat for growing businesses!";
    }
    else if (msg.includes('enterprise')) {
        return "📌 Enterprise Plan - 50,000 ETB\n✅ Unlimited Pages\n✅ Custom Web Application\n✅ Advanced AI Integration\n✅ Full E-commerce Suite\n✅ Premium SEO\n✅ 12 Months Support\n✅ 24/7 Priority Support\nThe ultimate solution for large organizations!";
    }
    else if (msg.includes('service') || msg.includes('offer')) {
        return "🛠️ We offer:\n• Web Development\n• AI Integration (with BEST AI Chatbot)\n• Mobile App Development\n• Digital Marketing\n• SEO Optimization\nWhich service interests you?";
    }
    else if (msg.includes('web') || msg.includes('website')) {
        return "🌐 We create modern, responsive websites starting from 8,000 ETB. Our Business Plan includes the BEST AI Chatbot integration. Would you like to see our portfolio?";
    }
    else if (msg.includes('ai') || msg.includes('artificial intelligence') || msg.includes('chatbot')) {
        return "🤖 I'm BEST, your AI Assistant! We specialize in AI solutions including:\n• Custom AI Chatbots\n• Predictive Analytics\n• Machine Learning Models\n• Natural Language Processing\nOur BEST AI Chatbot can be added to any website for just 5,000 ETB!";
    }
    else if (msg.includes('best')) {
        return "🌟 I'm BEST, your Web & AI Assistant! I'm here to help you with information about our services, pricing, and anything else you need. How can I assist you today?";
    }
    else if (msg.includes('contact') || msg.includes('reach') || msg.includes('telegram')) {
        return "📞 You can reach us through:\n• Telegram: @addis_power\n• Email: agoodperception@gmail.com\n• Contact form on our website\nWe typically respond within 24 hours!";
    }
    else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "👋 Hello! I'm BEST, your Web & AI Assistant. Welcome to Addis Power! How can I help you today?";
    }
    else if (msg.includes('support') || msg.includes('help')) {
        return "🆘 I'm here to help! You can ask me about:\n• Our pricing plans (8k, 25k, 50k ETB)\n• Our services (Web, AI, Mobile)\n• Contact information\n• BEST AI Chatbot\nWhat would you like to know?";
    }
    else if (msg.includes('thank')) {
        return "😊 You're welcome! If you have any other questions, feel free to ask. We're here to help you succeed!";
    }
    else {
        return "🤖 I'm BEST, your AI Assistant. For more details, please contact us on Telegram at @addis_power or email agoodperception@gmail.com. Is there anything specific about our plans (8,000 ETB - 50,000 ETB) or services you'd like to know?";
    }
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Auto welcome message after page load
setTimeout(() => {
    if (!chatbotWindow.classList.contains('active')) {
        addMessage("👋 Welcome to Addis Power! I'm BEST, your Web & AI Assistant. Our plans start from 8,000 ETB. How can I help you today?", 'bot');
    }
}, 1000);
