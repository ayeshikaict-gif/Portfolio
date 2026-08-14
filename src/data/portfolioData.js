export const personalDetails = {
  name: "Sachini Ayeshika",
  subtitle: "ICT Undergraduate • Web Developer",
  tagline: "ICT UNDERGRADUATE • WEB DEVELOPER",
  headline: "Hi, I'm Sachini Ayeshika.",
  subheadline: "I build modern, responsive and user-focused digital experiences.",
  bioShort: "I am an Information and Communication Technology (Honours) undergraduate at the University of Vavuniya, passionate about web development, software engineering, UI/UX design, and creating practical digital solutions.",
  bioStory: [
    "I am a motivated ICT undergraduate with a strong interest in technology and software development. My academic journey has helped me build knowledge in programming, web technologies, databases, software engineering, and system development.",
    "I enjoy building practical projects that combine functionality with attractive and user-friendly interfaces. I have worked on web applications, desktop applications, database-related systems, and UI/UX design projects.",
    "I am a continuous learner who enjoys exploring new technologies and strengthening my technical and professional skills through projects, certifications, and independent learning.",
    "My goal is to build a successful career in the IT industry and contribute to innovative technology solutions."
  ],
  highlights: [
    { label: "Currently", value: "ICT Undergraduate" },
    { label: "Focus", value: "Web Development & Software Engineering" },
    { label: "Based in", value: "Sri Lanka" }
  ],
  stats: [
    { number: "06+", label: "Projects Completed", suffix: "+" },
    { number: "07+", label: "Certifications", suffix: "+" },
    { number: "Multiple", label: "Technologies Mastered", suffix: "" },
    { number: "BSc (Hons)", label: "ICT Honours Undergraduate", suffix: "" }
  ],
  education: {
    headline: "Building a strong foundation in technology.",
    qualifications: [
      {
        id: "bsc-ict",
        degree: "Bachelor of Information and Communication Technology (Honours)",
        status: "Undergraduate",
        institution: "University of Vavuniya",
        subText: "Faculty of Technological Studies",
        badge: "Honours Degree",
        logoUrl: "/images/logos/uov.png",
        focus: "Web Technologies, Object-Oriented Programming, DBMS, Software Engineering, OS, SAD, Programming, Computer Graphics",
        relevantAreasList: ["Web Technologies", "Object-Oriented Programming", "Database Management Systems", "Software Engineering", "Operating Systems", "System Analysis and Design", "Programming", "Computer Graphics"]
      },
      {
        id: "dip-ict",
        degree: "Diploma in Information and Communication Technology",
        status: "Completed",
        institution: "IMBS Green Campus",
        subText: "School of Technology",
        badge: "Diploma",
        logoUrl: "/images/logos/imbs.jpg",
        focus: "IT Fundamentals, Web Programming, Software Systems",
        relevantAreasList: ["IT Fundamentals", "Web Programming", "Software Systems"]
      },
      {
        id: "dip-hrm",
        degree: "Diploma in Human Resource Management",
        status: "Ongoing",
        institution: "LPEC Campus",
        subText: "Department of Management Studies",
        badge: "Ongoing",
        logoUrl: "/images/logos/lpec.jpg",
        focus: "Business Management, Human Resource Management, Business Communication, Business Law",
        relevantAreasList: ["Business Management", "Human Resource Management", "Business Communication", "Business Law"]
      },
      {
        id: "dip-cs",
        degree: "Diploma in Computer Science",
        status: "Completed",
        institution: "Success Computer Training Institute",
        subText: "Computer Studies",
        badge: "Grade A+",
        logoUrl: "/images/logos/success_it.jpg",
        focus: "Computer Fundamentals, Operating Systems, Microsoft Windows, Microsoft Office, HTML",
        relevantAreasList: ["Computer Fundamentals", "Operating Systems", "Microsoft Windows", "Microsoft Office", "HTML"]
      },
      {
        id: "dip-eng",
        degree: "Diploma in English",
        status: "Completed",
        institution: "IMBS Green Campus",
        subText: "Department of Languages & Communication",
        badge: "Diploma",
        logoUrl: "/images/logos/imbs.jpg",
        focus: "Speaking, Listening, Grammar, Writing",
        relevantAreasList: ["Speaking", "Listening", "Grammar", "Writing"]
      }
    ],
    relevantAreas: [
      { id: "web", title: "Web Technologies", desc: "Modern frontend frameworks, semantic HTML5, CSS layout engines, RESTful architectures, and client-side state management." },
      { id: "oop", title: "Object-Oriented Programming", desc: "Encapsulation, inheritance, polymorphism, design patterns, and clean code architecture in Java, C#, and Python." },
      { id: "dbms", title: "Database Management Systems", desc: "Relational database design, SQL querying, schema optimization, normalizations, and MySQL transactions." },
      { id: "se", title: "Software Engineering", desc: "SDLC methodologies, Agile/Scrum processes, software design principles, testing frameworks, and quality assurance." },
      { id: "os", title: "Operating Systems", desc: "Process scheduling, memory management, file systems, concurrency, and command line tools." },
      { id: "sad", title: "System Analysis and Design", desc: "Requirement elicitation, UML modeling, system architecture diagrams, and feasibility studies." }
    ]
  },
  careerObjective: {
    label: "MY CAREER GOAL",
    heading: "Learning today. Building tomorrow.",
    statement: "To build a successful career in the IT industry by applying my knowledge of web development, programming, software engineering, database technologies, and UI/UX design. I aim to continuously develop my technical and professional skills, contribute to innovative digital solutions, and grow as a skilled software developer."
  },
  contact: {
    email: "ayeshika.ict@gmail.com",
    phone: "074 152 9105",
    phoneTel: "+94741529105",
    location: "Vavuniya / Colombo, Sri Lanka",
    github: "https://github.com/ayeshikaict-gif",
    githubUsername: "ayeshikaict-gif",
    linkedin: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/",
    linkedinUsername: "Sachini Ayeshika",
    availability: "Open for Internships & Junior Web Developer roles",
    resumeUrl: "/resume/Sachini-Ayeshika-CV.pdf"
  }
};

export const servicesData = [
  { id: "web-dev", title: "Web Development", description: "Creating dynamic, modern, responsive websites and client-side interfaces using HTML, CSS, JavaScript, and React.", icon: "Code2" },
  { id: "fullstack", title: "Full-Stack Development", description: "Building end-to-end web applications connecting frontend interfaces with backend servers and MySQL databases.", icon: "Layers" },
  { id: "software-eng", title: "Software Engineering", description: "Applying object-oriented design principles, design patterns, SDLC methodologies, and structured code architecture.", icon: "Cpu" },
  { id: "ui-ux", title: "UI/UX Design", description: "Designing intuitive, visually appealing, and user-centric wireframes and web layouts using Figma.", icon: "Palette" },
  { id: "database", title: "Database Development", description: "Designing relational database schemas, executing efficient SQL queries, and managing phpMyAdmin & MySQL databases.", icon: "Database" },
  { id: "app-dev", title: "Application Development", description: "Developing robust desktop applications utilizing C# and the .NET framework for business domain solutions.", icon: "Layout" }
];

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Foundational and modern languages for application logic and querying.",
      skills: [
        { name: "Java", type: "Object-Oriented", tag: "Enterprise & OOP" },
        { name: "C", type: "Low-level", tag: "Algorithms" },
        { name: "C#", type: "Desktop & .NET", tag: "Windows Apps" },
        { name: "Python", type: "General Purpose", tag: "Scripting & Data" },
        { name: "JavaScript", type: "Core Web", tag: "ES6+" },
        { name: "SQL", type: "Database", tag: "Relational Queries" }
      ]
    },
    {
      id: "web",
      title: "Web Technologies",
      description: "Frontend and full-stack building blocks for responsive web interfaces.",
      skills: [
        { name: "HTML5", type: "Markup", tag: "Semantic & Accessible" },
        { name: "CSS3", type: "Styling", tag: "Flexbox & Grid" },
        { name: "JavaScript", type: "Dynamic Scripting", tag: "DOM & ES6+" },
        { name: "React.js", type: "Frontend Library", tag: "Hooks & SPA" },
        { name: "Responsive Web Design", type: "UI Strategy", tag: "Mobile-First" },
        { name: "Full-Stack Web Development", type: "Architecture", tag: "Client & Server" }
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Backend",
      description: "Server-side runtimes, APIs, and application frameworks.",
      skills: [
        { name: ".NET Framework", type: "Application Platform", tag: "C# / WinForms" },
        { name: "Node.js", type: "Runtime Environment", tag: "Server JS" },
        { name: "Express.js", type: "Backend Framework", tag: "REST APIs" }
      ]
    },
    {
      id: "database",
      title: "Database Systems",
      description: "Relational database management and administration tools.",
      skills: [
        { name: "MySQL", type: "RDBMS", tag: "Relational Engine" },
        { name: "SQL", type: "Query Language", tag: "DDL / DML" },
        { name: "Database Management", type: "Schema Design", tag: "Normalization" },
        { name: "phpMyAdmin", type: "Database Tool", tag: "Admin GUI" }
      ]
    },
    {
      id: "engineering",
      title: "Software Engineering",
      description: "Methodologies and principles for scalable, maintainable software systems.",
      skills: [
        { name: "Object-Oriented Programming", type: "Paradigms", tag: "OOP" },
        { name: "Software Development Life Cycle (SDLC)", type: "Methodology", tag: "SDLC" },
        { name: "Software Design Patterns", type: "Architecture", tag: "Best Practices" },
        { name: "Software Testing", type: "Quality", tag: "Verification" },
        { name: "Quality Assurance", type: "Testing Standard", tag: "QA" }
      ]
    },
    {
      id: "design",
      title: "UI/UX & Design",
      description: "Design tools and user experience principles.",
      skills: [
        { name: "Figma", type: "Design Tool", tag: "Wireframing & UI" },
        { name: "UI Design", type: "Visual Design", tag: "Layouts & Hierarchy" },
        { name: "UX Design", type: "User Experience", tag: "User Flows" },
        { name: "Responsive Interface Design", type: "Layout System", tag: "Multi-Device" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      description: "Development environments, version control, and cloud deployment.",
      skills: [
        { name: "Git", type: "Version Control", tag: "CLI & Branching" },
        { name: "GitHub", type: "Collaboration", tag: "Repositories" },
        { name: "Vercel", type: "Deployment", tag: "Cloud Hosting" },
        { name: "Visual Studio", type: "IDE", tag: "C# & .NET" },
        { name: "Visual Studio Code", type: "Editor", tag: "Frontend & Scripting" },
        { name: "MySQL / phpMyAdmin", type: "Database Stack", tag: "Local & Cloud Server" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "sky-nova",
    number: "01",
    category: "WEB",
    categoryLabel: "Airline Website",
    title: "Sky Nova International Airways",
    subtitle: "Modern Aviation Platform & Flight Exploration Interface",
    description: "A modern airline website designed to provide a professional and engaging digital experience for airline services.",
    fullDescription: "A modern airline website designed to provide a professional and engaging digital experience for airline services. The project focuses on attractive UI design, responsive layouts, and smooth user interaction for booking concepts, service showcases, and flight route explorations.",
    features: [
      "Modern airline-themed interface",
      "Responsive layout optimized for mobile & desktop",
      "Airline service showcases",
      "Destination exploration sections",
      "User-friendly navigation bar & footer",
      "Interactive components & smooth animations"
    ],
    skillsDemonstrated: ["Frontend Web Development", "UI/UX Design", "Responsive Layouts", "Vercel Deployment"],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    techLabel: "Technology Stack: HTML5, CSS3, JavaScript (Verified)",
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
    id: "pet-care-hospital",
    number: "02",
    category: "FULL-STACK",
    categoryLabel: "Full-Stack Web Development",
    title: "Pet Care Hospital",
    subtitle: "Veterinary Healthcare Portal & Service Platform",
    description: "Developed a modern and responsive website for a pet care hospital based in Gampaha.",
    fullDescription: "Developed a modern and responsive website for a pet care hospital based in Gampaha. The project creates a professional online presence while providing users with information about veterinary services, appointment booking inquiries, and pet health tips.",
    features: [
      "Veterinary service information modules",
      "Pet care and health guidance sections",
      "Professional medical branding & typography",
      "Responsive multi-device layout",
      "Contact and emergency info sections",
      "Backend server integration with Node.js & Express",
      "Database functionality with MySQL"
    ],
    skillsDemonstrated: ["Full-Stack Development", "Frontend Development", "Backend Development", "Database Management", "Responsive Web Design", "UI/UX Design", "Git & GitHub", "Deployment"],
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL", "Git", "GitHub", "Vercel"],
    techLabel: "HTML5 • CSS3 • JavaScript • Node.js • Express.js • MySQL • Git • Vercel",
    demoUrl: "https://pet-care-hospital.vercel.app/",
    codeUrl: "https://github.com/ayeshikaict-gif/pet-care-hospital",
    accentColor: "from-rose-600/20 via-pink-500/10 to-red-600/20",
    cardType: "Full-Stack Web Application",
    imageUrl: "/images/pet_care.jpg",
    previewStats: [
      { label: "Backend API", value: "Node.js & Express" },
      { label: "Database", value: "MySQL Integration" },
      { label: "Layout", value: "Responsive Healthcare UI" }
    ]
  },
  {
    id: "ceylon-tea",
    number: "03",
    category: "WEB",
    categoryLabel: "E-Commerce Web Development",
    title: "Ceylon Herbal Tea",
    subtitle: "Premium E-Commerce Showcase for Pure Sri Lankan Herbal Blends",
    description: "Developed a modern e-commerce-style website to showcase Sri Lankan herbal tea products.",
    fullDescription: "Developed a modern e-commerce-style website to showcase Sri Lankan herbal tea products. The project focuses on clean visual design, responsive layouts, product presentation, shopping cart simulation, and intuitive user navigation.",
    features: [
      "Rich product showcase grid",
      "Categorized herbal tea collections",
      "Interactive shopping cart interface",
      "Smooth checkout layout",
      "Brand story & About section",
      "Contact section with location details",
      "Mobile-first responsive design"
    ],
    skillsDemonstrated: ["E-Commerce UI Design", "DOM Manipulation", "JavaScript State Management", "Web Presentation"],
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub", "Vercel"],
    techLabel: "HTML5 • CSS3 • JavaScript • GitHub • Vercel",
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
    number: "04",
    category: "WEB",
    categoryLabel: "Web Development",
    title: "Student Progress Dashboard",
    subtitle: "Interactive Student Timetable & Academic Productivity Hub",
    description: "Developed a web-based student progress dashboard with interactive productivity features.",
    fullDescription: "Developed a web-based student progress dashboard with interactive productivity features designed to help users manage tasks, track assignment deadlines, and manage study time efficiently.",
    features: [
      "Student progress overview dashboard",
      "Interactive to-do list with filter & check states",
      "Custom Pomodoro study timer",
      "Interactive user-friendly interface",
      "Responsive layout for tablets and phones"
    ],
    skillsDemonstrated: ["JavaScript Application Logic", "UI Component Architecture", "Local Storage", "Productivity Tool Design"],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    techLabel: "HTML5 • CSS3 • JavaScript • Vercel",
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
    id: "library-system",
    number: "05",
    category: "DESKTOP",
    categoryLabel: "C# Desktop Application",
    title: "Library Management System",
    subtitle: "Enterprise .NET Windows Desktop Application",
    description: "Developed a Library Management System using C# with the .NET Framework for library operations.",
    fullDescription: "Developed a Library Management System using C# with the .NET Framework to support essential library management operations, including book inventory registration, member record maintenance, book issue/return tracking, and database synchronization.",
    features: [
      "Comprehensive book management (Add/Edit/Search)",
      "Library member management & history",
      "Book check-out and return tracking",
      "Structured C# Windows Forms interface",
      "Relational SQL database integration"
    ],
    skillsDemonstrated: ["Object-Oriented Programming", "C# Development", "Desktop Application Development", "Database Management", "Problem Solving"],
    techStack: ["C#", ".NET Framework", "SQL / Database Technologies"],
    techLabel: "C# • .NET Framework • SQL Database",
    demoUrl: null,
    codeUrl: "https://github.com/ayeshikaict-gif/library-management-system",
    accentColor: "from-purple-600/20 via-indigo-500/10 to-blue-600/20",
    cardType: "Desktop Software",
    imageUrl: "/images/univav_sis.jpg",
    previewStats: [
      { label: "Framework", value: "C# .NET Forms" },
      { label: "Database", value: "Relational SQL" },
      { label: "Architecture", value: "Desktop App" }
    ]
  },
  {
    id: "movie-ui",
    number: "06",
    category: "UI/UX",
    categoryLabel: "UI/UX Design Project",
    title: "Movie Website UI Design",
    subtitle: "Modern Movie Streaming Interface & Figma Design Prototype",
    description: "Designed a modern movie website interface as part of a collaborative group project.",
    fullDescription: "Designed a modern movie website interface as part of a collaborative group project in Figma. The project focused on creating an attractive, modern, visually immersive, and user-friendly website layout with seamless navigation flow.",
    features: [
      "Modern movie streaming homepage layout",
      "User-friendly navigation and category filters",
      "Featured movie hero banner design",
      "Movie detail card & review section layouts",
      "Consistent color scheme & visual hierarchy"
    ],
    skillsDemonstrated: ["Website interface design", "Team collaboration", "Modern layout creation", "UI/UX principles", "User-friendly navigation", "Visual consistency"],
    techStack: ["Figma", "UI Design", "UX Design", "Prototyping"],
    techLabel: "Figma • UI/UX Principles • Wireframing • Prototyping",
    demoUrl: "https://www.figma.com/proto/sUGBwajWFaVxGxa8ZbEi2L/Untitled?node-id=0-1&t=aCEy3FC42jVtdgK3-1",
    codeUrl: null,
    figmaUrl: "https://www.figma.com/proto/sUGBwajWFaVxGxa8ZbEi2L/Untitled?node-id=0-1&t=aCEy3FC42jVtdgK3-1",
    accentColor: "from-amber-600/20 via-orange-500/10 to-rose-600/20",
    cardType: "Figma UI/UX Prototype",
    imageUrl: "/images/taskflow.jpg",
    previewStats: [
      { label: "Tool", value: "Figma Prototyping" },
      { label: "Focus", value: "Visual Hierarchy" },
      { label: "Type", value: "Media Streaming UI" }
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "React: Creating and Hosting a Full Stack Site",
    provider: "LinkedIn Learning",
    issuer: "LinkedIn Learning",
    year: "Issued July 2026",
    badge: "Full Stack",
    credentialId: "0b7a55afe59c559a17f5bdd68ba8ddff93d8981d2dea02eefabb4d2214f1b3f3",
    skillsLearned: "React.js, Web Development, Full-Stack Development",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 2,
    title: "CS302: Software Engineering",
    provider: "Saylor Academy",
    issuer: "Saylor Academy",
    year: "Issued July 2026",
    badge: "Software Engineering",
    details: "36 hours coursework • Final Grade: 80.65% • IACET Accredited (3.6 CEUs)",
    credentialId: "9569583745SA",
    skillsLearned: "SDLC, Object-Oriented Design, Software Architecture, Software Testing, Quality Assurance",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 3,
    title: "React: Design Patterns",
    provider: "LinkedIn Learning",
    issuer: "LinkedIn Learning",
    year: "Issued July 2026",
    badge: "Frontend Architecture",
    credentialId: "68710c1bb864c0bdc7b1b278d234eb4429dc553e90f2ffc7923b88b2091933e1",
    skillsLearned: "React.js, Software Design Patterns",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 4,
    title: "Getting Started as a Full-Stack Web Developer",
    provider: "CompTIA",
    issuer: "CompTIA",
    year: "Issued July 2026",
    badge: "Web Development",
    credentialId: "b4c64cb072aceb64068f8a9ef164fdca3ecf43c584cdac126a9f1f77579ea6a",
    skillsLearned: "Full-Stack Development, Web Development",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 5,
    title: "Web Design for Beginners",
    provider: "University of Moratuwa",
    issuer: "University of Moratuwa",
    year: "Issued July 2026",
    badge: "University Certification",
    credentialId: null,
    skillsLearned: "HTML, CSS, Web Design",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 6,
    title: "Python for Beginners",
    provider: "University of Moratuwa",
    issuer: "University of Moratuwa",
    year: "Issued June 2026",
    badge: "Programming",
    credentialId: null,
    skillsLearned: "Python Programming",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  },
  {
    id: 7,
    title: "Professional Networking for Career Growth",
    provider: "HP LIFE",
    issuer: "HP LIFE",
    year: "Issued April 2026",
    badge: "Professional Skills",
    credentialId: "5944bebd-09b9-447b-a58b-1f1f77f25431",
    skillsLearned: "Professional Networking, Personal Branding, Digital Communication",
    certificateUrl: "https://www.linkedin.com/in/sachini-ayeshika-9b91b9344/details/certifications/"
  }
];

export const softSkillsData = [
  { name: "Problem Solving", desc: "Analytical approach to dissecting complex coding challenges." },
  { name: "Communication", desc: "Clear verbal and written articulation of technical ideas." },
  { name: "Teamwork", desc: "Collaborative mindset in academic and group projects." },
  { name: "Time Management", desc: "Efficient prioritization of academic deadlines and development." },
  { name: "Adaptability", desc: "Quick adjustment to new tools, languages, and methodologies." },
  { name: "Leadership", desc: "Guiding project goals with initiative and accountability." },
  { name: "Quick Learning", desc: "Rapid comprehension of emerging web stacks and frameworks." },
  { name: "Creativity", desc: "Designing elegant user interfaces and modern visual solutions." },
  { name: "Professional Networking", desc: "Building meaningful relationships across technology domains." }
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
