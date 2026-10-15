export const internshipsData = [
  {
    role: 'MERN Stack Development Intern',
    organization: 'Web Development Internship',
    period: 'June 2026 – July 2026',
    type: 'Internship',
    description:
      'Developed responsive, scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
    achievements: [
      'Developed responsive full-stack web applications using the MERN stack.',
      'Built REST APIs and integrated MongoDB for data management.',
      'Used Git and GitHub for version control and project collaboration.'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub']
  },
  {
    role: 'Data Structures & Algorithms Intern',
    organization: 'Algorithmic Problem Solving Program',
    period: 'July 2026 – Present',
    type: 'Internship',
    description:
      'Intensive problem-solving and algorithmic optimization program focused on core computer science foundations in Java.',
    achievements: [
      'Solved complex coding problems on Arrays, Strings, Linked Lists, Trees, and Graphs.',
      'Improved algorithmic problem-solving skills and optimized execution time and space solutions using Java.',
      'Practiced clean code and efficient algorithmic paradigms for technical screening rounds.'
    ],
    skills: ['Java', 'Data Structures', 'Algorithms', 'Trees & Graphs', 'Dynamic Programming', 'Optimization']
  }
];

export const certificatesData = [
  {
    id: 'innovathon-krutrim',
    title: 'RRGI INNOVATHON 2026',
    issuer: 'R.R. Group of Institutions & OLA KRUTRIM',
    partner: 'In Strategic Partnership with TrainX',
    type: 'Hackathon & Innovation',
    team: 'Cryptic coders',
    date: '2026',
    image: '/certificates/innovathon_ola_krutrim.jpg',
    badge: 'Ola Krutrim Powered',
    badgeColor: 'cyan',
    highlights: [
      'Demonstrated exceptional innovation, creativity, and technical excellence at RRGI INNOVATHON 2026.',
      'Competed under team name "Cryptic coders" solving real-world technological challenges.',
      'Endorsed and signed by Dr. (Prof.) S.S. Chauhan (Director) and Aarti Jaiswal (Dean Training & Placements).'
    ],
    skills: ['Innovation', 'System Architecture', 'Problem Solving', 'Team Collaboration']
  },
  {
    id: 'trainx-dsa',
    title: '3-Month DSA Impact Training (Intermediate Level)',
    issuer: 'TrainX',
    partner: 'Co-Founded by Gaurav Chaudhary',
    type: 'Technical Training & Mastery',
    team: null,
    date: 'Sep 2025 – Dec 2025',
    image: '/certificates/trainx_dsa.jpg',
    badge: '3-Month Impact Program',
    badgeColor: 'purple',
    highlights: [
      'Successfully completed intensive 3 Months Impact Training in Data Structures and Algorithms at Intermediate Level.',
      'Comprehensive hands-on implementation of Arrays, Linked Lists, Binary Trees, Graph Traversals, and Dynamic Programming in Java.',
      'Certificate of Completion officially awarded by TrainX.'
    ],
    skills: ['Java', 'Data Structures', 'Algorithms', 'Trees & Graphs', 'Dynamic Programming']
  },
  {
    id: 'java-assessment-infotact',
    title: 'Java Development Assessment Test',
    issuer: 'INFOTACT SOLUTIONS & QtestWIK',
    partner: 'ISO 9001:2015 Approved Assessment',
    type: 'National Assessment & Exam',
    team: null,
    date: '2025 – 2026',
    score: 'Score: 43 / 60 (71.7%)',
    rank: 'National Rank: 133',
    image: '/certificates/java_assessment_infotact.jpg',
    badge: 'Score: 71.7% • Rank 133',
    badgeColor: 'emerald',
    highlights: [
      'Cleared the competitive Java Development Assessment Test with 71.7% (Score: 43/60).',
      'Secured Rank 133 on the national assessment leaderboard.',
      'Evaluated across Object-Oriented Programming (OOP), Collections Framework, Exception Handling, and algorithmic logic.'
    ],
    skills: ['Java Development', 'Core Java', 'OOP', 'Problem Solving', 'Collections']
  },
  {
    id: 'adfa-diploma',
    title: 'Advance Diploma in Financial Accounting (ADFA)',
    issuer: 'Gayatri Institute of Technology',
    partner: 'Approved by MSME, Govt. of India • ISO 9001:2015 Certified',
    type: '12-Month Professional Diploma',
    team: null,
    date: 'Jul 2022 – Jul 2023',
    score: 'Grade: A+',
    rank: 'Certificate No: 6577',
    image: '/certificates/adfa_gayatri_institute.jpg',
    badge: 'Grade A+ • 12-Month Diploma',
    badgeColor: 'emerald',
    highlights: [
      'Successfully completed 12 Months Advance Diploma in Financial Accounting securing top Grade A+.',
      'Head Office: Padrauna, Kushinagar, Uttar Pradesh (Govt. of India MSME Approved & ISO 9001:2015).',
      'Trained in Tally Prime, business accounting fundamentals, MS Office productivity tools, and computer applications.'
    ],
    skills: ['Tally Prime', 'MS Office', 'Financial Accounting', 'Data Management']
  },
  {
    id: 'mern-cert',
    title: 'MERN Stack Development Certification',
    issuer: 'Full-Stack Web Engineering',
    partner: 'Industry Training',
    type: 'Full-Stack Development',
    team: null,
    date: '2026',
    image: null,
    badge: 'MERN Certified',
    badgeColor: 'purple',
    highlights: [
      'Certified completion of comprehensive MERN stack web development training.',
      'Engineered and deployed end-to-end applications utilizing MongoDB, Express, React, and Node.js with JWT authentication.'
    ],
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT']
  }
];

// Backwards compatibility export
export const experienceData = [
  ...internshipsData,
  ...certificatesData.map(c => ({
    role: c.title,
    organization: c.issuer,
    period: c.date,
    type: 'Certification',
    description: c.highlights[0],
    achievements: c.highlights,
    skills: c.skills
  }))
];
