import React from 'react';
import { GraduationCap, Code2, Server, Compass, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: 'Data Structures & Algorithms',
      description:
        'Proficient in algorithmic problem solving with Java, focusing on time & space complexity, arrays, strings, recursion, sorting, and tree traversal patterns.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Server,
      title: 'Full-Stack MERN Development',
      description:
        'Experienced in designing modular RESTful APIs with Node.js/Express, state-driven user interfaces with React, and schema modeling with MongoDB.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: GraduationCap,
      title: 'Computer Science & Design (CSD)',
      description:
        'Bridging computational thinking with intuitive UI/UX design principles to build applications that are both robust under the hood and delightful to use.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Compass,
      title: 'Enterprise Java & Spring Boot',
      description:
        'Solid grasp of Object-Oriented Programming (OOP) concepts, Spring Data JPA, relational DBMS with MySQL, and layered architectural standards.',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-navy-900/40">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient-cyan-purple">My Journey</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mt-4 mb-5" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A dedicated Computer Science & Design undergraduate driven to engineer clean, maintainable, and high-impact digital solutions.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Detailed Biography Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl bg-white/70 dark:bg-navy-850/70">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Passionate Software Engineer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong className="text-slate-900 dark:text-white">Anup Prajapati</strong>, a final-year Bachelor of Technology (B.Tech) student in <strong className="text-cyan-600 dark:text-cyan-400">Computer Science & Design (CSD)</strong> at <strong className="text-slate-900 dark:text-white">R.R. Group of Modern Technology, Lucknow</strong>, affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU) (Batch 2023–2027) with a current <strong className="text-emerald-500 font-mono">7.38 / 10 CGPA</strong>.
              </p>
              <p>
                My technical passion lies at the intersection of robust algorithmic logic and modern web engineering. Over the course of my academic journey, I have specialized in <span className="text-slate-900 dark:text-white font-medium">Java (DSA & OOP)</span> and the <span className="text-purple-600 dark:text-purple-400 font-medium">MERN Stack (MongoDB, Express, React, Node.js)</span>, delivering real-world applications including an AI-Based Customer Relationship Management system and an ATS-grade Career Preparation Platform.
              </p>
              <p>
                Beyond writing code, I strongly value clean architecture, maintainable repository structures, comprehensive API testing with Postman, and adhering to Object-Oriented and SOLID design principles. I am actively preparing for software engineering and full-stack developer roles in top placement drives.
              </p>
            </div>

            {/* Quick check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Current CGPA: 7.38 / 10</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Core Java & Data Structures</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-Stack MERN Architecture</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>B.Tech CSD (AKTU Affiliated)</span>
              </div>
            </div>
          </div>

          {/* Quick Stats & Credentials side */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-card rounded-2xl p-5 border border-cyan-500/40 dark:border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-950/20 shadow-lg shadow-cyan-500/5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">7.38 / 10</span>
              <p className="text-xs font-mono text-cyan-500 uppercase tracking-wider mt-1 font-bold">Current CGPA</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                B.Tech Computer Science & Design, R.R. Group (AKTU)
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-navy-850/70 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">4+ Featured</span>
              <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mt-1">Engineering Projects</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Including Gemini AI CRM, CareerPilot, CloudDesk & ShopNest
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-navy-850/70 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">Internships</span>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mt-1">Industry Exposure</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                MERN Stack & Data Analytics practical development experience
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-navy-850/70 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">Placement</span>
              <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mt-1">Readiness</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Rigorous preparation across Java, DSA, DBMS, and OOP
              </p>
            </div>

          </div>

        </div>

        {/* Technical Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="interactive-hover glass-card glass-card-hover rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-navy-850/60 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-[1px] mb-4 shadow-md`}>
                    <div className="w-full h-full rounded-[11px] bg-slate-900 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
