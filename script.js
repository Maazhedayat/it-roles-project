const tracks = {
    foundational: [
        {
            category: "Technical Support",
            roles: [
                {
                    title: "IT Support Specialist",
                    description: "Troubleshoot and resolve technical issues for end users.",
                    skills: ["Troubleshooting hardware and software issues", "Customer service best practices", "Basic network configuration"],
                    tools: ["Microsoft Teams", "Windows Diagnostic Tools", "IT Ticketing Software"],
                    pay: "USA: $40,000/year | EU: €35,000/year",
                    project: "Setting up a virtual IT helpdesk and resolving simulated tickets.",
                    cta: `<a href="https://www.techstepfoundation.org/apply-now" class="cta-button">Apply Now to Get Mentorship, Hands-on Experience, and Interview Prep</a>`
                },
                // Add more foundational roles...
            ]
        },
        // Add more foundational categories...
    ],
    transitional: [
        // Add transitional categories and roles...
    ],
    expert: [
        // Add expert categories and roles...
    ]
};

// Toggle Accordion
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// Toggle Chatbot
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
}

function sendChat() {
    const input = document.getElementById("chatbot-input").value.trim();
    const chatbotBody = document.getElementById("chatbot-body");

    if (input) {
        chatbotBody.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
        setTimeout(() => {
            chatbotBody.innerHTML += `<p><strong>Mentor:</strong> Let me assist you with that!</p>`;
        }, 1000);
    }
}
