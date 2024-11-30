const roles = [
    // Foundational Track Roles
    {
        track: "Foundational",
        category: "Technical Support and Helpdesk",
        title: "IT Support Specialist",
        description: "Troubleshoot and resolve technical issues for end users.",
        skills: ["Customer Service", "Troubleshooting", "Technical Documentation"],
        tools: ["Windows OS", "Active Directory", "Basic Networking"],
        training: "Enroll in IT Fundamentals training."
    },
    {
        track: "Foundational",
        category: "Technical Support and Helpdesk",
        title: "Helpdesk Technician",
        description: "Provide first-line support for software, hardware, and network issues.",
        skills: ["Communication", "Problem-Solving", "Patience"],
        tools: ["Ticketing Systems", "Microsoft Office", "Hardware Setup"],
        training: "Join Helpdesk Essentials."
    },
    {
        track: "Foundational",
        category: "System and Network Roles",
        title: "Junior Systems Administrator",
        description: "Assist in managing servers, backups, and IT infrastructure.",
        skills: ["Organization", "Collaboration", "Problem-Solving"],
        tools: ["Linux OS", "Backup Tools", "Server Monitoring"],
        training: "Start with Systems Administration Basics."
    },
    {
        track: "Foundational",
        category: "Cybersecurity",
        title: "Cybersecurity Analyst Intern",
        description: "Support security operations and identify potential vulnerabilities.",
        skills: ["Basic Threat Analysis", "Risk Assessment", "Security Reporting"],
        tools: ["Antivirus Software", "Firewalls", "Wireshark"],
        training: "Complete Cybersecurity Fundamentals."
    },
    // Transition Track Roles
    {
        track: "Transition",
        category: "Cybersecurity",
        title: "SOC Analyst",
        description: "Monitor and analyze security alerts to identify potential threats.",
        skills: ["Threat Monitoring", "Incident Response", "Log Analysis"],
        tools: ["SIEM Tools", "Splunk", "Wireshark"],
        training: "Enroll in Cybersecurity Foundations."
    },
    {
        track: "Transition",
        category: "Data and Analytics",
        title: "Data Visualization Specialist",
        description: "Create actionable insights using advanced data visualization techniques.",
        skills: ["Advanced Tableau Usage", "Storytelling with Data", "Dashboard Design"],
        tools: ["Tableau", "Power BI", "Excel"],
        training: "Master Data Analytics and Visualization."
    },
    {
        track: "Transition",
        category: "Cloud and IT Operations",
        title: "Cloud Solutions Specialist",
        description: "Design and manage cloud-based solutions to support enterprise operations.",
        skills: ["Cloud Architecture", "Hybrid Deployment", "Scaling Strategies"],
        tools: ["AWS", "Azure", "Google Cloud"],
        training: "Learn Cloud Solutions Basics."
    },
    {
        track: "Transition",
        category: "Leadership and Specialized Roles",
        title: "Project Coordinator",
        description: "Assist in managing project schedules, deliverables, and team communication.",
        skills: ["Project Planning", "Collaboration", "Time Management"],
        tools: ["Microsoft Project", "Trello", "Slack"],
        training: "Project Management Essentials."
    },
    // Expert Track Roles
    {
        track: "Expert",
        category: "Cybersecurity",
        title: "Senior SOC Analyst",
        description: "Lead the monitoring and analysis of security events and coordinate advanced incident response efforts.",
        skills: ["Threat Intelligence", "Malware Analysis", "Incident Management"],
        tools: ["SIEM Tools", "CrowdStrike", "Carbon Black"],
        training: "Complete Advanced SOC Analyst Training."
    },
    {
        track: "Expert",
        category: "Data and Analytics",
        title: "Data Scientist",
        description: "Use machine learning and statistical methods to analyze and predict business outcomes.",
        skills: ["Data Modeling", "Machine Learning", "Advanced Statistical Analysis"],
        tools: ["Python", "TensorFlow", "Jupyter Notebooks"],
        training: "Enroll in Data Science Certification."
    },
    {
        track: "Expert",
        category: "Cloud and IT Operations",
        title: "Cloud Security Engineer",
        description: "Secure cloud environments and ensure compliance with security standards.",
        skills: ["Cloud Security Frameworks", "IAM", "Securing Architectures"],
        tools: ["AWS Security Hub", "Azure Sentinel", "Palo Alto Prisma"],
        training: "Master Cloud Security."
    },
    {
        track: "Expert",
        category: "Leadership and Specialized Roles",
        title: "IT Governance Specialist",
        description: "Establish IT governance frameworks to align IT strategy with business goals.",
        skills: ["IT Risk Assessment", "Governance Frameworks", "Regulatory Compliance"],
        tools: ["ServiceNow", "Governance Tools (Archer)", "Compliance Checklists"],
        training: "IT Governance and Strategy Certification."
    }
];
