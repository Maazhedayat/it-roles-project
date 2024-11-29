const roles = [
    // Technical Support and Helpdesk
    {
        category: "Technical Support and Helpdesk",
        title: "IT Support Specialist",
        description: "Troubleshoot and resolve technical issues for end users.",
        skills: ["Customer Service", "Troubleshooting", "Technical Documentation"],
        tools: ["Windows OS", "Active Directory", "Basic Networking"],
        training: "Enroll in IT Fundamentals training."
    },
    {
        category: "Technical Support and Helpdesk",
        title: "Helpdesk Technician",
        description: "Provide first-line support for software, hardware, and network issues.",
        skills: ["Communication", "Problem-Solving", "Patience"],
        tools: ["Ticketing Systems", "Microsoft Office", "Hardware Setup"],
        training: "Join Helpdesk Essentials."
    },
    {
        category: "Technical Support and Helpdesk",
        title: "Technical Support Analyst",
        description: "Analyze and address recurring IT issues with a focus on root causes.",
        skills: ["Analytical Thinking", "Problem Resolution", "Documentation"],
        tools: ["ITIL Framework", "Networking Basics", "Diagnostics Tools"],
        training: "Take IT Support & Operations."
    },
    // System and Network Roles
    {
        category: "System and Network Roles",
        title: "Junior Systems Administrator",
        description: "Assist in managing servers, backups, and IT infrastructure.",
        skills: ["Organization", "Collaboration", "Problem-Solving"],
        tools: ["Linux OS", "Backup Tools", "Server Monitoring"],
        training: "Start with Systems Administration Basics."
    },
    {
        category: "System and Network Roles",
        title: "Junior Network Administrator",
        description: "Support network maintenance, monitoring, and troubleshooting.",
        skills: ["Attention to Detail", "Teamwork", "Analytical Thinking"],
        tools: ["Cisco Routing", "Firewall Configurations", "Networking Protocols"],
        training: "Join Networking Essentials."
    },
    {
        category: "System and Network Roles",
        title: "Desktop Support Technician",
        description: "Handle desktop setup, software installation, and hardware issues.",
        skills: ["Technical Expertise", "Customer Service", "Troubleshooting"],
        tools: ["Peripheral Devices", "OS Setup", "Troubleshooting Tools"],
        training: "Learn Desktop Support."
    },
    // Add other categories and roles...
];

// Load roles dynamically based on category
function filterRoles(category) {
    const filteredRoles = roles.filter(role => role.category === category);
    const rolesList = document.getElementById("roles-list");
    rolesList.innerHTML = ""; // Clear previous roles

    filteredRoles.forEach((role, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = role.title;
        listItem.onclick = () => showDetails(role);
        rolesList.appendChild(listItem);
    });
}

// Display role details
function showDetails(role) {
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `
        <h3>${role.title}</h3>
        <p>${role.description}</p>
        <ul>
            <li><strong>Skills:</strong> ${role.skills.join(", ")}</li>
            <li><strong>Tools:</strong> ${role.tools.join(", ")}</li>
            <li><strong>Recommended Training:</strong> ${role.training}</li>
        </ul>
    `;
}
