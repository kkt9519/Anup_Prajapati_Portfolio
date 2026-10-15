import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink, Sparkles, ArrowUpRight, CheckCircle2, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filters = ['All', 'MERN Stack', 'Java & Spring Boot', 'AI-Powered'];

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'AI-Powered') return proj.isAi;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-navy-900/50">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient-cyan-purple">Software Projects</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mt-4 mb-5" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Real capstone engineering projects spanning the MERN stack, Gemini AI integrations, and enterprise Java Spring Boot architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`interactive-hover px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'bg-white/80 dark:bg-navy-900/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="interactive-hover group glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badges row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                    {project.isAi && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Gemini AI</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights preview (top 3) */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-navy-900 text-slate-500 border border-slate-200 dark:border-slate-800">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="interactive-hover inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                >
                  <span>View Full Details & Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-hover p-2 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-all"
                  aria-label={`View ${project.title} on GitHub`}
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
