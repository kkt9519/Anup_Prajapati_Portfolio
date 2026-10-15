import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl glass-card bg-navy-900/95 dark:bg-navy-900/95 border border-slate-700/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-navy-950/60">
          <div className="space-y-1.5 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              {project.isAi && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Gemini AI Integrated</span>
                </span>
              )}
              <span className="text-xs text-slate-400 font-mono">
                {project.role} • {project.period}
              </span>
            </div>
            <h2 id="project-modal-title" className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-cyan-400 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-300">
          
          {/* Executive Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-navy-950/70 border border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xs text-slate-400 font-mono uppercase">{m.label}</p>
                  <p className="text-base sm:text-lg font-bold text-white mt-0.5">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Architectural Design */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>System Architecture</span>
            </h3>
            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.architecture}
            </div>
          </div>

          {/* Key Modules & Engineered Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Engineering Highlights</span>
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complete Technology Stack */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
              Technologies & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status Note on Live Demos */}
          <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
            <span>
              This capstone application has been developed and evaluated under academic & placement environments at R.R. Group of Institutions (AKTU). Live demo deployment and source code walkthroughs can be scheduled during technical interviews.
            </span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-navy-950/80 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="interactive-hover px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-navy-900 border border-slate-700 hover:border-slate-600 transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
