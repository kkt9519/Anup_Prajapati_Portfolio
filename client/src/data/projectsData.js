export const projectsData = [
  {
    id: 'ai-crm',
    title: 'Customer Relationship Management (CRM)',
    subtitle: 'Full-Stack MERN CRM Platform with Gemini AI',
    category: 'MERN Stack',
    isAi: true,
    featured: true,
    period: 'June 2026 – July 2026',
    role: 'Full-Stack MERN Developer',
    description:
      'Developed a full-stack Customer Relationship Management (CRM) application using the MERN stack. Features complete CRUD operations for managing customers, leads, follow-ups, and tasks, enhanced with Google Gemini AI for smart summaries.',
    highlights: [
      'Developed a full-stack Customer Relationship Management (CRM) application using the MERN stack.',
      'Implemented secure JWT authentication, RESTful APIs, and complete CRUD operations for managing customers, leads, follow-ups, and tasks.',
      'Integrated Google Gemini AI for automated lead insights, risk indicators, and draft communications.',
      'Designed responsive UI with Tailwind CSS and modular Express.js controllers with MongoDB/Mongoose persistence.'
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini AI', 'Tailwind CSS', 'JWT'],
    architecture: 'MERN stack architecture with JWT auth middleware, RESTful API endpoints, and MongoDB document database.',
    githubUrl: 'https://github.com/kkt9519',
    liveUrl: null,
    metrics: [
      { label: 'Role', value: 'Full-Stack' },
      { label: 'Security', value: 'JWT Auth' },
      { label: 'Database', value: 'MongoDB' }
    ]
  },
  {
    id: 'todo-list-java',
    title: 'To-Do List Application',
    subtitle: 'Desktop Task Management System with Java Swing',
    category: 'Java & Spring Boot',
    isAi: false,
    featured: true,
    period: '2025',
    role: 'Java Developer',
    description:
      'Developed a desktop To-Do List Application with Java Swing, enabling users to add, update, delete, and organize daily tasks with local data persistence.',
    highlights: [
      'Developed a Java-based To-Do List Application with Java Swing, enabling users to add, update, and delete daily tasks.',
      'Implemented Object-Oriented Programming (OOP) concepts, Java Collections Framework (ArrayList, HashMaps), and File Handling to ensure efficient task management and data persistence.',
      'Designed an intuitive desktop Graphical User Interface (GUI) with interactive task status filters.',
      'Optimized memory usage and structured modular Java classes adhering to clean coding standards.'
    ],
    techStack: ['Java', 'Java Swing', 'OOP', 'Java Collections', 'File I/O', 'GUI Design'],
    architecture: 'Object-Oriented desktop architecture with GUI view separation, task models, and file-based data persistence.',
    githubUrl: 'https://github.com/kkt9519',
    liveUrl: null,
    metrics: [
      { label: 'Platform', value: 'Java Swing' },
      { label: 'Paradigms', value: 'OOP & Collections' },
      { label: 'Storage', value: 'File I/O' }
    ]
  },
  {
    id: 'careerpilot-ai',
    title: 'CareerPilot AI',
    subtitle: 'AI-Powered Career & Placement Preparation Platform',
    category: 'MERN Stack',
    isAi: true,
    featured: true,
    period: '2026',
    role: 'Full-Stack Developer',
    description:
      'A full-stack career and placement preparation platform. Features multi-format resume parsing (PDF/DOCX) with ATS keyword scoring and an interactive mock interview simulator with real-time feedback.',
    highlights: [
      'Built multi-format resume parser supporting PDF and DOCX uploads with server-side text extraction using Multer, pdf-parse, and Mammoth.',
      'Created automated ATS Scoring Engine evaluating keyword density, formatting hygiene, and skill gaps against target roles.',
      'Designed interactive Mock Interview Simulator delivering 5-criteria radar evaluation across Technical Accuracy, Relevance, Clarity, Completeness, and Communication.',
      'Verified with 7 comprehensive Jest test suites covering authentication, resume ingestion, and interview flows.'
    ],
    techStack: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Tailwind CSS', 'Multer', 'Jest'],
    architecture: 'Tiered client-server architecture with REST API endpoints under /api/resumes, /api/interviews, and /api/assessments.',
    githubUrl: 'https://github.com/kkt9519',
    liveUrl: null,
    metrics: [
      { label: 'Test Suites', value: '7 Jest Suites' },
      { label: 'Parser', value: 'PDF & DOCX' },
      { label: 'Evaluation', value: '5-Criteria' }
    ]
  },
  {
    id: 'clouddesk',
    title: 'CloudDesk Enterprise Support',
    subtitle: 'Scalable Customer Support & Ticket Management System',
    category: 'Java & Spring Boot',
    isAi: false,
    featured: true,
    period: '2026',
    role: 'Backend Java Developer',
    description:
      'A high-performance enterprise customer service ticketing system built with Java and Spring Boot. Manages end-to-end incident lifecycles, SLA monitoring, agent workload routing, and department categorization with strict data integrity.',
    highlights: [
      'Architected RESTful service layer with Spring Boot, Spring Data JPA, and Hibernate ORM.',
      'Implemented Role-Based Access Control (Admin, Support Agent, Customer) and audit history trails.',
      'Designed relational database schema in MySQL optimized with foreign key constraints, indexes, and transactions.',
      'Integrated Maven build management and comprehensive integration tests for controllers and service layers.'
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'REST API', 'Maven', 'Postman'],
    architecture: 'Standard multi-layer enterprise Java architecture: Controller, Service, Repository, DTO, and Entity layers.',
    githubUrl: 'https://github.com/kkt9519',
    liveUrl: null,
    metrics: [
      { label: 'Runtime', value: 'Java' },
      { label: 'Database', value: 'MySQL / JPA' },
      { label: 'Architecture', value: 'Layered MVC' }
    ]
  }
];
