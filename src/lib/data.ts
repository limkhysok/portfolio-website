// ============================================================
// 🎨 PORTFOLIO DATA — Edit everything here to personalize!
// ============================================================

export const personalInfo = {
    name: "Limkhy Sok",
    title: "Full Stack Developer",
    tagline: "Junior Full Stack Developer passionate about exploring tech stacks & AI/ML.",
    location: "Phnom Penh, Cambodia",
    school: "IT Academy STEP Cambodia",
    email: "soklimkhy@gmail.com",
    github: "https://github.com/limkhysok",
    linkedin: "https://www.linkedin.com/in/limkhysok/",
    telegram: "https://t.me/soklimkhy",
    resume: "/resume.pdf",
    avatarInitials: "LS",
    bio: `I am a Junior Developer who loves to keep exploring new tech stacks. I have a deep interest in AI and Machine Learning, constantly pushing myself to learn how to integrate these technologies into modern web applications. Currently studying at IT Academy STEP Cambodia, I focus on writing clean code and building performant user experiences.`,
};

export const skillCategories = [
    {
        title: "Programming Languages",
        items: ["C++", "C#", "Python", "Kotlin", "TypeScript", "JavaScript", "SQL"]
    },
    {
        title: "Web Frameworks",
        items: ["Next.js", "React", "Django", "Spring Boot", "Tailwind CSS", "Node.js"]
    },
    {
        title: "Desktop Frameworks",
        items: ["WinForms", "WPF", "PyQt6", "Qt Designer"]
    },
    {
        title: "Databases",
        subCategories: [
            { name: "Relational", items: ["PostgreSQL", "MySQL", "SQLite"] },
            { name: "Non-Relational", items: ["MongoDB", "Redis"] }
        ]
    },
    {
        title: "API & Testing",
        items: ["RESTful API", "GraphQL", "Swagger", "Postman", "cURL", "Insomnia"]
    },
    {
        title: "Data Analytics",
        items: ["Pandas", "Matplotlib", "NumPy", "Scikit-learn", "SciPy"]
    },
    {
        title: "Automation Frameworks",
        items: ["Selenium", "Appium", "UIAutomator2", "PyAutoGUI", "Playwright"]
    },
    {
        title: "DevOps & Deployment",
        items: ["Docker", "Kubernetes", "Nginx", "Vercel", "Railway", "Linux/CLI"]
    }
];


export const experiences = [
    {
        role: "Full Stack Developer",
        company: "Your Company",
        period: "2024 – Present",
        description:
            "Developed and maintained scalable web applications using React, Django, and PostgreSQL. Led the migration to a microservices architecture, reducing API response time by 40%.",
        tags: ["React", "Django", "PostgreSQL", "Docker"],
    },
    {
        role: "Frontend Developer",
        company: "Another Company",
        period: "2022 – 2024",
        description:
            "Built responsive UIs for high-traffic SaaS platforms serving 50k+ users. Implemented design systems from scratch and improved Core Web Vitals scores across the board.",
        tags: ["Next.js", "TypeScript", "GraphQL", "Figma"],
    },
    {
        role: "Junior Developer",
        company: "Startup / Freelance",
        period: "2021 – 2022",
        description:
            "Freelanced for multiple startups, building landing pages, admin dashboards, and REST APIs. Gained hands-on experience with full project lifecycles.",
        tags: ["React", "Node.js", "MongoDB", "CSS"],
    },
];

export interface Project {
    title: string;
    description: string;
    techs: string[];
    link: string;
    date: string;
    status?: string;
    category: "Web" | "Desktop" | "Mobile" | "Game" | "System";
}

export const projects: Project[] = [
    {
        title: "Pyanalypt",
        description: "Full-stack web application for analyzing and visualizing datasets. Currently focusing on data processing performance.",
        techs: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
        link: "https://github.com/limkhysok/pyanalypt_frontend",
        date: "Present",
        status: "Under Development",
        category: "Web",
    },
    {
        title: "LimQt6",
        description: "An open-source library providing enhanced PyQt6 widgets and modern theming. Built for developers to create beautiful Python GUIs.",
        techs: ["Python", "PyQt6", "Qt Designer"],
        link: "https://github.com/limkhysok/LimQt6",
        date: "Jan 2026 - Present",
        status: "Active",
        category: "Desktop",
    },
    {
        title: "AttendanceApp",
        description: "Comprehensive student management system featuring a Jetpack Compose mobile client and Spring Boot API.",
        techs: ["Kotlin", "Spring Boot", "Jetpack Compose"],
        link: "https://github.com/limkhysok/mobile-app-attendance",
        date: "Nov 2025",
        category: "Mobile",
    },
    {
        title: "MyFirstFPS",
        description: "A modular first-person shooter developed in Unity. Explores advanced C# patterns and game physics.",
        techs: ["C#", "Unity", "Game Design"],
        link: "https://github.com/limkhysok/MyFirstFPS",
        date: "Jan 2025",
        category: "Game",
    },
    {
        title: "PayrollApp",
        description: "Desktop solution for automating corporate payroll processing, reporting, and employee management.",
        techs: ["C#", ".NET", "MySQL"],
        link: "https://github.com/limkhysok/Term-Project-Payroll-Management",
        date: "Nov 2024",
        category: "Desktop",
    },
    {
        title: "GutenbergApp",
        description: "A specialized reader for Project Gutenberg eBooks, focusing on clean typography and UI layout.",
        techs: ["C#", "WPF", "WinForms"],
        link: "https://github.com/limkhysok/Gutenberg-Ebooks-Winforms",
        date: "Oct 2024",
        category: "Desktop",
    },
    {
        title: "Simple Bank",
        description: "A core banking logic system demonstrating deep understanding of Object-Oriented Programming and memory management.",
        techs: ["C++", "Algorithms", "OOP"],
        link: "https://github.com/limkhysok/USER-BANK-SYSTEM-MANAGEMENT",
        date: "Feb 2024",
        category: "System",
    },
];
export const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Coffee Consumed", value: "∞" },
];
