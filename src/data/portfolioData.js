export const personalDetails = {
  name: "Sachini Ayeshika",
  eyebrow: "ICT Undergraduate • Web Developer",
  tagline: "Building digital experiences that feel simple.",
  bioShort: "I’m Sachini Ayeshika, an ICT undergraduate at the University of Vavuniya passionate about web development, software engineering, and modern digital solutions.",
  bioStory: [
    "I am an undergraduate Information and Communication Technology (ICT) student at the University of Vavuniya, passionate about web development, software engineering, and creating modern digital solutions.",
    "I enjoy designing responsive, user-friendly websites and developing practical applications while continuously improving my technical skills through academic projects, professional certifications, and self-learning.",
    "My interests include web development, full-stack development, software engineering, UI/UX design, and data-driven solutions."
  ],
  education: {
    headline: "Building a strong foundation in technology.",
    qualifications: [
      {
        id: "bict-hons",
        degree: "Bachelor of Information Communication Technology (Hons)",
        status: "Undergraduate",
        institution: "University of Vavuniya",
        subText: "Faculty of Technological Studies",
        badge: "Honours Degree",
        logoUrl: "/images/logos/uov.png",
        focus: "Focus on Full-Stack Engineering, Database Architecture & Software Systems"
      },
      {
        id: "diploma-ict",
        degree: "Diploma in Information and Communication Technology",
        status: "Completed",
        institution: "IMBS Green Campus",
        subText: "School of Information Technology",
        badge: "Diploma",
        logoUrl: "/images/logos/imbs.jpg",
        focus: "Foundations of Computer Systems, Programming Logic, Web Architecture & IT Fundamentals"
      },
      {
        id: "diploma-english",
        degree: "Diploma in English",
        status: "Completed",
        institution: "IMBS Green Campus",
        subText: "Department of Languages & Communication",
        badge: "Diploma",
        logoUrl: "/images/logos/imbs.jpg",
        focus: "Professional Communication, Technical Writing, Academic Expression & Presentation Skills"
      },
      {
        id: "diploma-hrm",
        degree: "Diploma in Human Resource Management",
        status: "Completed",
        institution: "LPEC Campus",
        subText: "Department of Business & Management Studies",
        badge: "Diploma",
        logoUrl: "/images/logos/lpec.jpg",
        focus: "Human Resource Principles, Organizational Behavior, Talent Acquisition & Workforce Management"
      },
      {
        id: "diploma-cs",
        degree: "Diploma in Computer Science",
        status: "Completed",
        institution: "Success IT College",
        subText: "School of Computing & Computer Science",
        badge: "Diploma",
        logoUrl: "/images/logos/success_it.jpg",
        focus: "Computer Science Fundamentals, Data Structures, Algorithms, Software Systems & Programming"
      }
    ],
    relevantAreas: [
      { id: "web", title: "Web Technologies", desc: "Modern frontend frameworks, semantic HTML5, CSS layout engines, RESTful architectures, and client-side state management." },
      { id: "oop", title: "Object-Oriented Programming", desc: "Encapsulation, inheritance, polymorphism, design patterns, and clean code architecture in Java and Python." },
      { id: "dbms", title: "Database Management Systems", desc: "Relational database design, SQL querying, schema optimization, normalizations, and MySQL transactions." },
      { id: "se", title: "Software Engineering", desc: "SDLC methodologies, Agile/Scrum processes, software design principles, testing frameworks, and quality assurance." },
      { id: "os", title: "Operating Systems", desc: "Process scheduling, memory management, file systems, concurrency, and command line tools." },
      { id: "sad", title: "System Analysis and Design", desc: "Requirement elicitation, UML modeling, system architecture diagrams, and feasibility studies." }
    ]
  },
  careerObjective: {
    label: "MY DIRECTION",
    heading: "Learning today. Building tomorrow.",
    statement: "To build a successful career in the IT industry by applying my knowledge of web development, programming, and software engineering while continuously learning and contributing to innovative technology solutions."
  },
  contact: {
    email: "ayeshika.ict@gmail.com",
    location: "Vavuniya / Colombo, Sri Lanka",
    github: "https://github.com/ayeshikaict-gif",
    linkedin: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/",
    availability: "Open for Internships & Junior Web Developer roles"
  }
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Foundational and modern languages for application logic and querying.",
      skills: [
        { name: "JavaScript", type: "Core", tag: "ES6+" },
        { name: "Python", type: "General Purpose", tag: "Data & Scripting" },
        { name: "Java", type: "Object-Oriented", tag: "Enterprise & OOP" },
        { name: "C Programming", type: "Low-level", tag: "Algorithms" },
        { name: "SQL", type: "Database", tag: "Relational" }
      ]
    },
    {
      id: "web",
      title: "Web Development",
      description: "Frontend and full-stack building blocks for responsive web interfaces.",
      skills: [
        { name: "HTML5", type: "Markup", tag: "Semantic & Accessible" },
        { name: "CSS3", type: "Styling", tag: "Flexbox & Grid" },
        { name: "React.js", type: "Frontend Library", tag: "Hooks & Components" },
        { name: "Responsive Web Design", type: "UI Strategy", tag: "Mobile-First" },
        { name: "Full-Stack Development", type: "Architecture", tag: "Client & Server" }
      ]
    },
    {
      id: "engineering",
      title: "Software Engineering",
      description: "Methodologies and principles for scalable, maintainable software systems.",
      skills: [
        { name: "Software Development Life Cycle", type: "Methodology", tag: "SDLC" },
        { name: "Object-Oriented Programming", type: "Paradigms", tag: "OOP" },
        { name: "Software Design Patterns", type: "Architecture", tag: "Best Practices" },
        { name: "Software Testing", type: "Quality", tag: "Unit & Integration" },
        { name: "Quality Assurance", type: "Verification", tag: "Standards" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      description: "Essential tools, database systems, and deployment platforms.",
      skills: [
        { name: "Git", type: "Version Control", tag: "Distributed" },
        { name: "GitHub", type: "Collaboration", tag: "CI/CD & Repos" },
        { name: "Vercel", type: "Deployment", tag: "Cloud Edge" },
        { name: "Visual Studio Code", type: "IDE", tag: "Development Environment" },
        { name: "MySQL", type: "Database", tag: "RDBMS" },
        { name: "TallyPrime", type: "Business Software", tag: "Financial Tech" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "sky-nova",
    number: "01",
    category: "Web Application",
    title: "Sky Nova International Airways",
    subtitle: "Modern Aviation Platform & Flight Exploration Interface",
    description: "A modern airline website designed to provide an engaging and professional online experience. The project focuses on responsive design, attractive user interfaces, and smooth user interaction.",
    features: [
      "Responsive layout for mobile, tablet, and ultra-wide displays",
      "Modern airline-themed design with luxury aesthetic",
      "Interactive flight service and destination showcases",
      "Intuitive flight search, booking preview, and user-friendly navigation"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://sky-nova-international-airways.vercel.app/",
    codeUrl: "https://github.com/ayeshikaict-gif/SkyNova-International-Airways",
    accentColor: "from-blue-600/20 via-sky-500/10 to-indigo-600/20",
    cardType: "Flagship Showcase",
    imageUrl: "/images/skynova.jpg",
    previewStats: [
      { label: "Design Concept", value: "Aviation UI" },
      { label: "User Interaction", value: "Micro-animated" },
      { label: "Responsiveness", value: "Fluid Mobile-First" }
    ]
  },
  {
    id: "ceylon-tea",
    number: "02",
    category: "E-Commerce",
    title: "Ceylon Herbal Tea",
    subtitle: "Premium E-Commerce Showcase for Pure Sri Lankan Herbal Blends",
    description: "A responsive e-commerce-style website developed to showcase Sri Lankan herbal tea products with a modern and clean interface.",
    features: [
      "Responsive e-commerce layout with refined product cards",
      "Rich product showcase with botanical descriptions & brewing guides",
      "Brand story & heritage about section celebrating Sri Lankan tea crafting",
      "Contact page with inquiry form & mobile-friendly browsing experience"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://ceylon-herbal-tea.vercel.app/",
    codeUrl: "https://github.com/ayeshikaict-gif/ceylon-herbal-tea",
    accentColor: "from-emerald-600/20 via-teal-500/10 to-amber-600/20",
    cardType: "E-Commerce Launch",
    imageUrl: "/images/ceylon_tea.jpg",
    previewStats: [
      { label: "Product Catalog", value: "Organic Blends" },
      { label: "Architecture", value: "Vanilla JS / CSS" },
      { label: "Layout", value: "Editorial E-Commerce" }
    ]
  },
  {
    id: "study-dashboard",
    number: "03",
    category: "Web Application",
    title: "Study Dashboard",
    subtitle: "Interactive Student Timetable & Academic Productivity Hub",
    description: "A modern academic study management application built to help students organize course schedules, assignment deadlines, focus session timers, and daily task backlogs.",
    features: [
      "Interactive study schedule & deadline tracking timetable",
      "Integrated Pomodoro focus timer with custom session goals",
      "Course assignment progress visualizer & priority tags",
      "Clean responsive layout optimized for mobile & desktop study sessions"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    demoUrl: "https://study-dashboard-opal.vercel.app/",
    codeUrl: "https://github.com/ayeshikaict-gif/study-dashboard",
    accentColor: "from-indigo-600/20 via-purple-500/10 to-pink-600/20",
    cardType: "Productivity Hub",
    imageUrl: "/images/study_dashboard.jpg",
    previewStats: [
      { label: "Focus Engine", value: "Timer & Analytics" },
      { label: "Schedule UI", value: "Timetable Planner" },
      { label: "Layout", value: "Student Dashboard" }
    ]
  },
  {
    id: "univav-sis",
    number: "04",
    category: "Software Engineering",
    title: "UniVav Student Information System",
    subtitle: "Enterprise University Management Portal & Database Engine",
    description: "An academic software engineering project built for managing student enrollments, course registrations, database queries, and grade tracking with role-based authentication.",
    features: [
      "Relational MySQL database schema designed with 3NF normalization",
      "Role-based access control for students, faculty, and administrative staff",
      "Automated GPA calculation engine & transcript generation",
      "Interactive data management UI with query search & export filters"
    ],
    techStack: ["Java", "MySQL", "JDBC", "Object-Oriented Programming", "SQL"],
    demoUrl: "https://univav-sis.demo",
    codeUrl: "https://github.com/ayeshikaict-gif/univav-student-portal",
    accentColor: "from-purple-600/20 via-indigo-500/10 to-blue-600/20",
    cardType: "Enterprise System",
    imageUrl: "/images/univav_sis.jpg",
    previewStats: [
      { label: "Architecture", value: "Java & RDBMS" },
      { label: "Data Integrity", value: "3NF Normalized" },
      { label: "Security", value: "Role-Based Access" }
    ]
  },
  {
    id: "taskflow-pro",
    number: "05",
    category: "Full-Stack App",
    title: "TaskFlow Pro — Agile Workspace",
    subtitle: "Minimalist Project Planning & Sprint Tracking Tool",
    description: "A full-stack productivity web application designed to help software engineering teams organize user stories, Kanban boards, sprint backlogs, and team progress metrics.",
    features: [
      "Drag-and-drop Kanban task board with real-time status updates",
      "Sprint velocity charts & issue prioritization filters",
      "Lightweight state management & persistent local storage caching",
      "Clean Apple-inspired dark/light theme switching UI"
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Software Design Patterns", "Vercel"],
    demoUrl: "https://taskflow-pro.demo",
    codeUrl: "https://github.com/ayeshikaict-gif/taskflow-pro",
    accentColor: "from-amber-600/20 via-orange-500/10 to-rose-600/20",
    cardType: "Full-Stack Web App",
    imageUrl: "/images/taskflow.jpg",
    previewStats: [
      { label: "State Engine", value: "React Context" },
      { label: "Board UI", value: "Kanban Drag-Drop" },
      { label: "Deployment", value: "Vercel Edge" }
    ]
  },
  {
    id: "eco-weather-analytics",
    number: "06",
    category: "Python & Data",
    title: "EcoWeather Pulse & Climate Dashboard",
    subtitle: "Real-Time Environmental Insights & Weather Data Visualizer",
    description: "A Python-powered environmental telemetry dashboard that ingests live weather API data, computes historical trends, and renders interactive statistical charts.",
    features: [
      "RESTful API integration fetching real-time meteorological metrics",
      "Python data processing pipeline for temperature & rainfall analytics",
      "Interactive charts visualizing weekly humidity, UV index & forecasts",
      "Responsive weather alert notification system & location search"
    ],
    techStack: ["Python", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    demoUrl: "https://ecoweather-pulse.demo",
    codeUrl: "https://github.com/ayeshikaict-gif/ecoweather-analytics",
    accentColor: "from-teal-600/20 via-cyan-500/10 to-emerald-600/20",
    cardType: "Data Analytics",
    imageUrl: "/images/ecoweather.jpg",
    previewStats: [
      { label: "Data Pipeline", value: "Python REST API" },
      { label: "Visualizer", value: "Chart Metrics" },
      { label: "Updates", value: "Real-time Telemetry" }
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "React: Creating and Hosting a Full Stack Site",
    provider: "LinkedIn Learning",
    year: "2024",
    badge: "Full Stack",
    skillsLearned: "React, Node.js, Express, Hosting & Deployment",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 2,
    title: "CS302: Software Engineering",
    provider: "Saylor Academy",
    year: "2024",
    badge: "Computer Science",
    skillsLearned: "Software Architecture, Development Cycles, Requirements & Testing",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 3,
    title: "React: Design Patterns",
    provider: "LinkedIn Learning",
    year: "2024",
    badge: "Frontend Architecture",
    skillsLearned: "Compound Components, Custom Hooks, Higher Order Components",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 4,
    title: "Getting Started as a Full-Stack Web Developer",
    provider: "CompTIA",
    year: "2023",
    badge: "Web Development",
    skillsLearned: "Web Architecture, Client-Server Communication, APIs",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 5,
    title: "Professional Networking for Career Growth",
    provider: "HP LIFE",
    year: "2023",
    badge: "Professional Skills",
    skillsLearned: "Industry Networking, Digital Branding, Career Strategy",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 6,
    title: "Web Design for Beginners",
    provider: "University of Moratuwa",
    year: "2023",
    badge: "University Course",
    skillsLearned: "HTML5, CSS3, Web Layouts, Usability Fundamentals",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 7,
    title: "Python for Beginners",
    provider: "University of Moratuwa",
    year: "2023",
    badge: "Programming",
    skillsLearned: "Python Syntax, Data Structures, Control Flow, Problem Solving",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  }
];

export const softSkillsData = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Quick Learning",
  "Professional Networking"
];

export const languagesData = [
  {
    language: "Sinhala",
    proficiency: "Native",
    level: "Native / Mother Tongue",
    desc: "Complete fluency in spoken and written Sinhala."
  },
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    level: "Full Professional Capability",
    desc: "Fluent in technical communication, academic writing, documentation, and presentation."
  }
];
