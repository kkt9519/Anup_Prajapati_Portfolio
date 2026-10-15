export const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'fundamentals', label: 'CS Fundamentals' },
  { id: 'tools', label: 'Tools & DevOps' },
];

export const skillsData = [
  // Languages
  {
    name: 'Java',
    category: 'languages',
    level: 'Advanced',
    icon: 'Coffee',
    description: 'Core Java, OOP, Collections Framework, Multithreading, Java 21, Streams',
    highlight: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    level: 'Advanced',
    icon: 'Code2',
    description: 'Async/Await, Promises, Closures, DOM Manipulation, Modern Syntaxes',
    highlight: true,
  },
  {
    name: 'Python (Basics)',
    category: 'languages',
    level: 'Intermediate',
    icon: 'Terminal',
    description: 'Core syntax, Scripting, Automation, Data Structures basics',
    highlight: false,
  },
  {
    name: 'SQL',
    category: 'languages',
    level: 'Proficient',
    icon: 'Database',
    description: 'Complex Queries, Joins, Aggregations, Indexing, Schema Normalization',
    highlight: true,
  },

  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    level: 'Advanced',
    icon: 'Atom',
    description: 'Hooks (useState, useEffect, useMemo), Context API, Custom Hooks, Component Lifecycle',
    highlight: true,
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'Advanced',
    icon: 'Layout',
    description: 'Semantic HTML, Flexbox, CSS Grid, Responsive Design, CSS Variables',
    highlight: false,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Advanced',
    icon: 'Palette',
    description: 'Utility-first styling, Glassmorphism, Dark/Light theming, Responsive Breakpoints',
    highlight: true,
  },

  // Backend & Databases
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Proficient',
    icon: 'Server',
    description: 'Event-driven runtime, Non-blocking I/O, File System, NPM ecosystem',
    highlight: true,
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'Proficient',
    icon: 'Network',
    description: 'RESTful API routing, Middleware architecture, Error handling, JWT Authentication',
    highlight: true,
  },
  {
    name: 'MongoDB & Mongoose',
    category: 'backend',
    level: 'Proficient',
    icon: 'FolderKanban',
    description: 'NoSQL document schema design, CRUD operations, Aggregation pipeline, Indexing',
    highlight: true,
  },
  {
    name: 'Spring Boot (Java)',
    category: 'backend',
    level: 'Intermediate',
    icon: 'Layers',
    description: 'Spring Data JPA, Hibernate, MVC architecture, Dependency Injection, REST APIs',
    highlight: true,
  },

  // CS Fundamentals
  {
    name: 'Data Structures & Algorithms (DSA)',
    category: 'fundamentals',
    level: 'Advanced',
    icon: 'Binary',
    description: 'Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, Dynamic Programming, Two Pointers',
    highlight: true,
  },
  {
    name: 'Object-Oriented Programming (OOP)',
    category: 'fundamentals',
    level: 'Advanced',
    icon: 'Cpu',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID design principles',
    highlight: true,
  },
  {
    name: 'DBMS (Database Management)',
    category: 'fundamentals',
    level: 'Proficient',
    icon: 'DatabaseZap',
    description: 'ACID properties, Relational models, Normalization (1NF to BCNF), Transactions',
    highlight: true,
  },

  // Tools & DevOps
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Proficient',
    icon: 'GitBranch',
    description: 'Version control, Branching workflows, Pull requests, Merge conflict resolution, CI/CD basics',
    highlight: true,
  },
  {
    name: 'Postman',
    category: 'tools',
    level: 'Proficient',
    icon: 'Send',
    description: 'API testing, Request chaining, Environment variables, Mock endpoints',
    highlight: false,
  },
  {
    name: 'Vite & Build Tools',
    category: 'tools',
    level: 'Proficient',
    icon: 'Zap',
    description: 'Modern frontend tooling, Fast HMR, Production bundling, PostCSS',
    highlight: false,
  },
];
