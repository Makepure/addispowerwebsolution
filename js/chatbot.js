// Create Chatbot HTML
const chatbotHTML = `
<div class="chatbot-container">
    <div class="chatbot-toggle">
        <i class="fas fa-robot"></i>
    </div>
    <div class="chatbot-window">
        <div class="chatbot-header">
            <h3>🤖 POWER Web & AI Assistant</h3>
            <i class="fas fa-times" id="closeChatbot"></i>
        </div>
        <div class="chatbot-messages">
            <div class="message bot">
                <div class="message-content">
                    👋 Hello! I'm POWER, your Web & AI Assistant from Addis Power. How can I help you today?
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
    typingDiv.innerHTML = '<div class="message-content">POWER is typing<span>...</span></div>';
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

// AI Response Logic for POWER Assistant - 100+ Responses
function getAIResponse(message) {
    const msg = message.toLowerCase().trim();
    
    // ============ GREETINGS & FAREWELLS ============
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good afternoon') || msg.includes('good evening')) {
        if (msg.includes('morning')) return "🌅 Good morning! I'm POWER, your AI Assistant. Ready to help you with your web and AI needs today!";
        if (msg.includes('afternoon')) return "☀️ Good afternoon! POWER at your service. How can I assist you with your business today?";
        if (msg.includes('evening')) return "🌙 Good evening! This is POWER. I'm here to help you with Addis Power services!";
        return "👋 Hello! I'm POWER, your Web & AI Assistant. Welcome to Addis Power! Our plans start from 8,000 ETB. How can I help you today?";
    }
    
    if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you') || msg.includes('farewell')) {
        return "👋 Goodbye! Thank you for visiting Addis Power. Feel free to come back anytime. You can also reach us on Telegram @addis_power or call +251 911 573 334. Have a great day!";
    }
    
    // ============ PRICING & PLANS ============
    if (msg.includes('price') || msg.includes('cost') || msg.includes('birr') || msg.includes('plan') || msg.includes('pricing') || msg.includes('how much')) {
        return "💰 Here are our plans in Ethiopian Birr (ETB):\n\n📌 Basic Plan: 8,000 ETB\n📌 Business Plan: 25,000 ETB (Most Popular!)\n📌 Enterprise Plan: 50,000 ETB\n\nAdd-ons start from 2,500 ETB/month.\n\nWhich plan would you like to know more about?";
    }
    
    if (msg.includes('basic')) {
        return "📌 Basic Plan - 8,000 ETB\n✅ 5 Pages Website\n✅ Responsive Design\n✅ Contact Form\n✅ Basic SEO Setup\n✅ 1 Month Free Support\n✅ Mobile Friendly\n❌ No AI Chatbot\n❌ No E-commerce\n\nPerfect for small businesses starting online!";
    }
    
    if (msg.includes('business')) {
        return "📌 Business Plan - 25,000 ETB (Most Popular!)\n✅ 15 Pages Website\n✅ Advanced Responsive Design\n✅ POWER AI Chatbot Integration\n✅ E-commerce Ready\n✅ Advanced SEO\n✅ 6 Months Free Support\n✅ Analytics Dashboard\n✅ Social Media Integration\n\nGreat for growing businesses!";
    }
    
    if (msg.includes('enterprise')) {
        return "📌 Enterprise Plan - 50,000 ETB\n✅ Unlimited Pages\n✅ Custom Web Application\n✅ Advanced AI Integration\n✅ Full E-commerce Suite\n✅ Premium SEO Package\n✅ 12 Months Free Support\n✅ Custom AI Models\n✅ Priority 24/7 Support\n\nThe ultimate solution for large organizations!";
    }
    
    // ============ ADD-ONS ============
    if (msg.includes('add-on') || msg.includes('addon') || msg.includes('extra') || msg.includes('additional')) {
        return "🛠️ Our Add-on Services:\n\n• Monthly Maintenance: 2,500 ETB/month\n• POWER AI Chatbot Only: 5,000 ETB (one-time)\n• SEO Package: 5,000 ETB/month\n• 24/7 Priority Support: 3,000 ETB/month\n\nWhich add-on interests you?";
    }
    
    if (msg.includes('maintenance')) {
        return "🔧 Monthly Maintenance - 2,500 ETB/month\n✅ Regular updates\n✅ Daily backups\n✅ Security monitoring\n✅ Performance optimization\n✅ Bug fixes\n✅ Uptime monitoring";
    }
    
    if (msg.includes('chatbot only') || (msg.includes('chatbot') && msg.includes('price'))) {
        return "🤖 POWER AI Chatbot Only - 5,000 ETB (one-time)\n✅ Custom AI Chatbot\n✅ 24/7 Customer Support\n✅ Smart Responses\n✅ Easy Integration\n✅ 3 Months Free Updates\n✅ No monthly fees!";
    }
    
    // ============ SERVICES ============
    if (msg.includes('service') || msg.includes('offer') || msg.includes('provide') || msg.includes('do you do')) {
        return "🛠️ We offer 4 main services:\n\n1️⃣ Web Development (from 8,000 ETB)\n2️⃣ AI Integration with POWER Chatbot (from 5,000 ETB)\n3️⃣ Mobile App Development (from 15,000 ETB)\n4️⃣ Digital Marketing (from 5,000 ETB/month)\n\nWhich service would you like to know more about?";
    }
    
    if (msg.includes('web development') || (msg.includes('web') && msg.includes('website'))) {
        return "🌐 Web Development Services:\n✅ Custom Website Design\n✅ E-commerce Websites\n✅ CMS Integration (WordPress)\n✅ Responsive Design\n✅ SEO Optimization\n✅ Fast Loading Speed\n✅ Security Features\n\nStarting from 8,000 ETB. Would you like a quote?";
    }
    
    if (msg.includes('mobile') || msg.includes('app') || msg.includes('android') || msg.includes('ios')) {
        return "📱 Mobile App Development:\n✅ Native Android Apps (Kotlin/Java)\n✅ Native iOS Apps (Swift)\n✅ Cross-platform (React Native/Flutter)\n✅ UI/UX Design\n✅ App Store & Play Store Deployment\n✅ Maintenance & Support\n\nStarting from 15,000 ETB. Tell us your app idea!";
    }
    
    if (msg.includes('digital marketing') || msg.includes('marketing') || msg.includes('seo')) {
        return "📈 Digital Marketing Services (from 5,000 ETB/month):\n✅ Search Engine Optimization (SEO)\n✅ Social Media Management\n✅ Content Marketing\n✅ Email Marketing\n✅ Google Ads Management\n✅ Analytics & Reporting\n✅ Monthly Performance Reports";
    }
    
    // ============ AI & CHATBOT ============
    if (msg.includes('ai') || msg.includes('artificial intelligence') || msg.includes('machine learning')) {
        return "🤖 I'm POWER, your AI Assistant! We specialize in:\n✅ Custom AI Chatbots\n✅ Predictive Analytics\n✅ Machine Learning Models\n✅ Natural Language Processing (NLP)\n✅ Computer Vision\n✅ Data Analysis\n✅ Process Automation\n\nOur POWER AI Chatbot starts at 5,000 ETB!";
    }
    
    if (msg.includes('chatbot') || msg.includes('bot')) {
        return "🤖 POWER AI Chatbot Features:\n✅ 24/7 Customer Support\n✅ Instant Responses\n✅ Smart Question Answering\n✅ Lead Generation\n✅ Multi-language Support\n✅ Easy to Customize\n✅ Analytics Dashboard\n\nGet it for just 5,000 ETB (one-time payment)!";
    }
    
    // ============ CONTACT INFORMATION ============
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('telegram') || msg.includes('email') || msg.includes('phone') || msg.includes('call') || msg.includes('whatsapp')) {
        return "📞 You can reach Addis Power through:\n\n📱 Telegram: @addis_power\n📧 Email: agoodperception@gmail.com\n📞 Phone/WhatsApp: +251 911 573 334\n📍 Location: Addis Ababa, Ethiopia\n\nWe typically respond within 24 hours! Click the links on our contact page to chat directly.";
    }
    
    if (msg.includes('telegram')) {
        return "📱 Our Telegram username is @addis_power. Click the Telegram icon on our website to chat with us directly!";
    }
    
    if (msg.includes('whatsapp')) {
        return "📱 You can WhatsApp us at +251 911 573 334. Click the WhatsApp button on our contact page to start chatting!";
    }
    
    // ============ ABOUT COMPANY ============
    if (msg.includes('who are you') || msg.includes('about you') || (msg.includes('tell me') && msg.includes('yourself'))) {
        return "🤖 I'm POWER, your Web & AI Assistant from Addis Power AI & Web Solution. I'm here to help you with information about our services, pricing, and answer any questions you have about web development and AI solutions in Ethiopia!";
    }
    
    if (msg.includes('about') || msg.includes('company') || msg.includes('who we are')) {
        return "🏢 Addis Power AI & Web Solution is a technology company based in Addis Ababa, Ethiopia. We specialize in Web Development, AI Integration, Mobile Apps, and Digital Marketing. Founded to help Ethiopian businesses grow online with affordable solutions starting from 8,000 ETB!";
    }
    
    if (msg.includes('mission')) {
        return "🎯 Our Mission: To empower Ethiopian businesses with world-class AI and web technologies, making digital transformation accessible, affordable, and effective for every organization. We believe in quality solutions at fair prices!";
    }
    
    if (msg.includes('vision')) {
        return "👁️ Our Vision: To become Ethiopia's leading provider of AI and web solutions, driving innovation and digital excellence across the nation with our POWER AI Assistant.";
    }
    
    // ============ LOCATION ============
    if (msg.includes('location') || msg.includes('address') || msg.includes('where are you') || msg.includes('addis')) {
        return "📍 We are located in Addis Ababa, Ethiopia. While we primarily operate online, we serve clients all across Ethiopia. Contact us via Telegram @addis_power or call +251 911 573 334 to discuss your project!";
    }
    
    // ============ SUPPORT & HELP ============
    if (msg.includes('support') || msg.includes('help') || msg.includes('assist')) {
        return "🆘 I'm POWER, here to help! You can ask me about:\n\n• Our pricing plans (8,000, 25,000, 50,000 ETB)\n• Our services (Web, AI, Mobile, Marketing)\n• Contact information\n• POWER AI Chatbot\n• Project timeline\n• Payment options\n\nWhat would you like to know?";
    }
    
    // ============ TIMELINE ============
    if (msg.includes('how long') || msg.includes('time') || msg.includes('days') || msg.includes('weeks') || msg.includes('delivery') || msg.includes('timeline')) {
        return "⏰ Typical Project Timelines:\n\n• Basic Website: 1-2 weeks\n• Business Website: 2-4 weeks\n• Enterprise Solution: 4-8 weeks\n• AI Chatbot: 1-2 weeks\n• Mobile App: 4-8 weeks\n\nTimelines may vary based on requirements. Contact us for an accurate quote!";
    }
    
    // ============ PAYMENT ============
    if (msg.includes('payment') || msg.includes('pay') || msg.includes('deposit') || msg.includes('installment')) {
        return "💳 Payment Options:\n\n• 50% deposit to start\n• 50% upon completion\n• Bank transfer accepted\n• Telebirr accepted\n• Cash payment available in Addis Ababa\n\nContact us for more details about payment plans!";
    }
    
    // ============ DISCOUNTS ============
    if (msg.includes('discount') || msg.includes('offer') || msg.includes('promotion') || msg.includes('sale') || msg.includes('deal')) {
        return "🎉 Current Offers:\n\n• 10% discount for startups\n• 15% discount for NGOs\n• Free .com domain with Business Plan\n• Free SSL certificate with all plans\n• Referral discount: Get 10% off for referring a client\n\nContact us to claim your discount!";
    }
    
    // ============ COMPARISON ============
    if (msg.includes('compare') || msg.includes('difference') || msg.includes('vs') || msg.includes('which plan')) {
        return "📊 Plan Comparison:\n\nBasic (8,000 ETB): 5 pages, basic SEO, 1 month support\nBusiness (25,000 ETB): 15 pages, AI chatbot, e-commerce, 6 months support\nEnterprise (50,000 ETB): Unlimited pages, custom app, full AI, 12 months support\n\nBusiness Plan is our most popular choice!";
    }
    
    // ============ CUSTOM SOLUTION ============
    if (msg.includes('custom') || msg.includes('unique') || msg.includes('specific') || msg.includes('tailor')) {
        return "🔧 Yes! We offer custom solutions tailored to your specific needs. Contact us via Telegram @addis_power or call +251 911 573 334 to discuss your requirements. We'll provide a free quote within 24 hours!";
    }
    
    // ============ PORTFOLIO ============
    if (msg.includes('portfolio') || msg.includes('past work') || msg.includes('previous') || msg.includes('examples') || msg.includes('samples')) {
        return "📁 We've completed 50+ projects for 30+ happy clients across Ethiopia. Our portfolio includes business websites, e-commerce stores, AI chatbots, and mobile apps. Contact us via Telegram @addis_power to see our work samples!";
    }
    
    // ============ TECHNOLOGIES ============
    if (msg.includes('technology') || msg.includes('tech') || msg.includes('stack') || msg.includes('framework') || msg.includes('react') || msg.includes('python') || msg.includes('javascript')) {
        return "💻 Technologies We Use:\n\n• Frontend: HTML5, CSS3, JavaScript, React, Vue.js\n• Backend: Node.js, Python, PHP, Laravel\n• Databases: MySQL, MongoDB, PostgreSQL\n• Mobile: React Native, Flutter, Kotlin, Swift\n• AI: TensorFlow, OpenAI, Dialogflow\n\nWe use modern, proven technologies for all projects!";
    }
    
    // ============ SEO ============
    if (msg.includes('seo') || msg.includes('google ranking') || msg.includes('search engine')) {
        return "🔍 SEO Services (from 5,000 ETB/month):\n\n✅ Keyword Research\n✅ On-page Optimization\n✅ Content Strategy\n✅ Backlink Building\n✅ Google Analytics Setup\n✅ Monthly Reports\n\nImprove your Google ranking and get more customers!";
    }
    
    // ============ SOCIAL MEDIA ============
    if (msg.includes('social media') || msg.includes('facebook') || msg.includes('instagram') || msg.includes('linkedin')) {
        return "📱 Social Media Management:\n\n✅ Content Creation\n✅ Posting Schedule\n✅ Engagement Monitoring\n✅ Ad Campaigns\n✅ Analytics Reporting\n\nStarting from 5,000 ETB/month. Grow your social presence with us!";
    }
    
    // ============ E-COMMERCE ============
    if (msg.includes('ecommerce') || msg.includes('e-commerce') || msg.includes('online store') || msg.includes('shop')) {
        return "🛒 E-commerce Solutions:\n\n✅ Product Management\n✅ Shopping Cart\n✅ Payment Integration (Telebirr, Chapa)\n✅ Order Management\n✅ Customer Accounts\n✅ Shipping Integration\n\nGet your online store starting from 15,000 ETB!";
    }
    
    // ============ HOSTING ============
    if (msg.includes('hosting') || msg.includes('server') || msg.includes('domain')) {
        return "🌐 Hosting & Domain:\n\n• Free .com domain with Business Plan\n• Free SSL certificate\n• Reliable hosting (99.9% uptime)\n• Daily backups\n• Free migration assistance\n\nWe recommend Netlify for free hosting or can set up paid hosting for you!";
    }
    
    // ============ SECURITY ============
    if (msg.includes('security') || msg.includes('secure') || msg.includes('hack') || msg.includes('protect')) {
        return "🔒 Security Features We Provide:\n\n✅ SSL Certificate (Free)\n✅ Firewall Protection\n✅ Malware Scanning\n✅ Daily Backups\n✅ Security Updates\n✅ Login Protection\n\nYour website's security is our priority!";
    }
    
    // ============ SPEED ============
    if (msg.includes('speed') || msg.includes('fast') || msg.includes('performance') || msg.includes('loading')) {
        return "⚡ We optimize all websites for speed:\n\n• Fast loading (under 2 seconds)\n• Image optimization\n• Code minification\n• CDN integration\n• Cache implementation\n• 90+ Google PageSpeed score guaranteed!";
    }
    
    // ============ RESPONSIVE ============
    if (msg.includes('responsive') || msg.includes('mobile friendly') || msg.includes('phone') || msg.includes('tablet')) {
        return "📱 All our websites are fully responsive and mobile-friendly! They will look great on:\n\n✅ Desktop computers\n✅ Laptops\n✅ Tablets\n✅ Mobile phones (Android & iPhone)\n✅ All screen sizes\n\nMobile-friendly design is included in all plans!";
    }
    
    // ============ REVISIONS ============
    if (msg.includes('revision') || msg.includes('change') || msg.includes('edit') || msg.includes('modify')) {
        return "✏️ Revision Policy:\n\n• Basic Plan: 2 free revisions\n• Business Plan: 5 free revisions\n• Enterprise Plan: Unlimited revisions\n\nAdditional revisions: 500 ETB per revision\nWe want you to be 100% satisfied!";
    }
    
    // ============ WARRANTY ============
    if (msg.includes('warranty') || msg.includes('guarantee') || msg.includes('refund')) {
        return "✅ Our Guarantee:\n\n• 30-day money-back guarantee\n• 3 months free bug fixes\n• Lifetime support (paid plans)\n• 99.9% uptime guarantee\n\nYour satisfaction is our priority!";
    }
    
    // ============ COMPLAINTS ============
    if (msg.includes('complain') || msg.includes('issue') || msg.includes('problem') || msg.includes('not working')) {
        return "😟 We're sorry to hear that. Please contact us directly on Telegram @addis_power or call +251 911 573 334. We'll resolve your issue within 24 hours. Your satisfaction is important to us!";
    }
    
    // ============ THANK YOU ============
    if (msg.includes('thank')) {
        return "😊 You're very welcome! Thank you for choosing Addis Power. If you have any other questions, feel free to ask. We're here to help you succeed online!";
    }
    
    // ============ YES/NO RESPONSES ============
    if (msg === 'yes' || msg === 'yeah' || msg === 'yep' || msg === 'sure') {
        return "👍 Great! What would you like to know more about? You can ask me about pricing, services, timeline, or anything else!";
    }
    
    if (msg === 'no' || msg === 'nope' || msg === 'not really') {
        return "👌 No problem! Feel free to ask me anything else. I'm here to help with your web and AI needs. You can also contact us on Telegram @addis_power or call +251 911 573 334!";
    }
    
    // ============ SMALL TALK ============
    if (msg.includes('how are you') || msg.includes('how do you do')) {
        return "🤖 I'm POWER, your AI Assistant! I'm always ready and excited to help you. How can I assist you with your web or AI project today?";
    }
    
    if (msg.includes('what can you do')) {
        return "🔧 I can help you with:\n\n• Information about our pricing plans\n• Details about our services\n• Contact information\n• Project timeline estimates\n• Technology recommendations\n• Answering any questions about web development or AI\n\nWhat would you like to know?";
    }
    
    if (msg.includes('nice') || msg.includes('great') || msg.includes('awesome')) {
        return "😊 Thank you! We're passionate about helping Ethiopian businesses succeed online. How can I assist you today?";
    }
    
    if (msg.includes('busy')) {
        return "🏃‍♂️ We're always busy helping clients build amazing websites and AI solutions! But we always have time for new projects. Tell me about your needs!";
    }
    
    // ============ COMPETITORS ============
    if (msg.includes('competitor') || msg.includes('other company') || msg.includes('different')) {
        return "🏆 What makes Addis Power different?\n\n✅ Affordable prices (starting 8,000 ETB)\n✅ Local Ethiopian company\n✅ 24/7 support\n✅ POWER AI Assistant included in Business Plan\n✅ 100% satisfaction guarantee\n✅ Fast delivery\n\nWe offer the best value in Ethiopia!";
    }
    
    // ============ CLIENT REVIEWS ============
    if (msg.includes('review') || msg.includes('testimonial') || msg.includes('client say')) {
        return "⭐ What Our Clients Say:\n\n\"Addis Power built an amazing website for our business!\" - Mekdes T.\n\"The AI chatbot increased our sales by 40%!\" - Samuel K.\n\"Professional, affordable, and fast service!\" - Biruk M.\n\nContact us to join our happy clients!";
    }
    
    // ============ EXPERIENCE ============
    if (msg.includes('experience') || msg.includes('years') || msg.includes('since')) {
        return "📅 Addis Power has been serving Ethiopian businesses since 2020. We have 5+ years of experience in web development and AI solutions, with 50+ successful projects delivered!";
    }
    
    // ============ TEAM ============
    if (msg.includes('team') || msg.includes('people') || msg.includes('staff')) {
        return "👥 Our team consists of experienced web developers, AI specialists, UI/UX designers, and digital marketing experts. We're all passionate about helping Ethiopian businesses grow online!";
    }
    
    // ============ LANGUAGES ============
    if (msg.includes('amharic') || msg.includes('language') || msg.includes('ethiopian')) {
        return "📢 We primarily communicate in English and Amharic. Our team is fluent in both languages. Feel free to message us in Amharic or English on Telegram @addis_power!";
    }
    
    // ============ URGENT PROJECTS ============
    if (msg.includes('urgent') || msg.includes('emergency') || msg.includes('quick') || msg.includes('fast')) {
        return "⚡ Need a website urgently? We offer expedited delivery:\n\n• Basic Website: 3-5 days (+2,000 ETB)\n• Business Website: 7-10 days (+5,000 ETB)\n\nContact us immediately on Telegram @addis_power or call +251 911 573 334 for urgent projects!";
    }
    
    // ============ TRAINING ============
    if (msg.includes('training') || msg.includes('learn') || msg.includes('teach') || msg.includes('education')) {
        return "📚 We offer training services:\n\n• Website Management Training: 5,000 ETB\n• SEO Training: 3,000 ETB\n• Social Media Management Training: 3,000 ETB\n\nLearn to manage your own website after we build it!";
    }
    
    // ============ CONSULTATION ============
    if (msg.includes('consultation') || msg.includes('consult') || msg.includes('advice')) {
        return "💡 Free Consultation!\n\nWe offer free 30-minute consultations to discuss your project. Contact us on Telegram @addis_power or call +251 911 573 334 to schedule your free consultation today!";
    }
    
    // ============ QUOTE ============
    if (msg.includes('quote') || msg.includes('estimate') || msg.includes('how much for')) {
        return "📋 To get an accurate quote, please:\n\n1. Tell us what type of website/app you need\n2. Share your requirements\n3. Contact us on Telegram @addis_power or call +251 911 573 334\n\nWe'll provide a free quote within 24 hours!";
    }
    
    // ============ COMPATIBILITY ============
    if (msg.includes('browser') || msg.includes('chrome') || msg.includes('firefox') || msg.includes('safari')) {
        return "🌐 Our websites work perfectly on all modern browsers:\n✅ Google Chrome\n✅ Mozilla Firefox\n✅ Safari\n✅ Microsoft Edge\n✅ Opera\n\nCross-browser testing included in all plans!";
    }
    
    // ============ DATABASE ============
    if (msg.includes('database') || msg.includes('data') || msg.includes('storage')) {
        return "🗄️ Database Solutions:\n\n• MySQL for structured data\n• MongoDB for flexible data\n• PostgreSQL for advanced features\n\nWe'll help you choose the right database for your project!";
    }
    
    // ============ API ============
    if (msg.includes('api') || msg.includes('integration') || msg.includes('third party')) {
        return "🔌 API Integration Services:\n\n• Payment gateways (Telebirr, Chapa)\n• Social media APIs\n• Google Maps\n• Email services\n• SMS gateways\n\nTell us what you need to integrate!";
    }
    
    // ============ MAINTENANCE ============
    if (msg.includes('maintenance') || msg.includes('update') || msg.includes('upkeep')) {
        return "🔧 Maintenance Package - 2,500 ETB/month:\n\n✅ Regular updates\n✅ Daily backups\n✅ Security patches\n✅ Performance monitoring\n✅ Bug fixes\n✅ 24/7 support\n\nKeep your website secure and up-to-date!";
    }
    
    // ============ AFTER SALES ============
    if (msg.includes('after sales') || msg.includes('post') || msg.includes('ongoing')) {
        return "🤝 After-Sales Support:\n\n• 1-12 months free support (depending on plan)\n• Training included\n• Documentation provided\n• Ongoing maintenance options\n\nWe don't just build and leave - we stay with you!";
    }
    
    // ============ SCALABILITY ============
    if (msg.includes('scale') || msg.includes('grow') || msg.includes('expand') || msg.includes('future')) {
        return "📈 Scalable Solutions:\n\n• Start with Basic Plan\n• Upgrade to Business anytime\n• Add features as you grow\n• Custom development available\n\nWe build websites that grow with your business!";
    }
    
    // ============ DEFAULT RESPONSE ============
    return "🤖 I'm POWER, your AI Assistant. I can help you with:\n\n💰 Pricing (8,000 - 50,000 ETB)\n🛠️ Services (Web, AI, Mobile, Marketing)\n📞 Contact (Telegram @addis_power)\n📱 Call +251 911 573 334\n\nCould you please rephrase your question? I'm here to help!";
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
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'message bot';
        welcomeMsg.innerHTML = '<div class="message-content">👋 Welcome to Addis Power! I\'m POWER, your Web & AI Assistant. Our plans start from 8,000 ETB. You can reach us on Telegram @addis_power or call +251 911 573 334. How can I help you today?</div>';
        chatbotMessages.appendChild(welcomeMsg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
}, 1500);
