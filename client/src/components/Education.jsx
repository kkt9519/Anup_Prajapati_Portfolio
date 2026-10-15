import React from 'react';
import { educationData } from '../data/educationData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-navy-950">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & <span className="text-gradient-cyan-purple">Qualifications</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mt-4 mb-5" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Formal engineering degree in Computer Science & Design, supported by strong fundamentals in science and mathematics.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`interactive-hover glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border bg-white/80 dark:bg-navy-850/80 shadow-md transition-all duration-300 ${
                idx === 0
                  ? 'border-cyan-500/40 shadow-cyan-500/5'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                
                {/* Institution & Degree Title */}
                <div className="flex items-start space-x-4">
                  {edu.logo ? (
                    <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-slate-200 dark:border-slate-700 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={edu.logo}
                        alt="College Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 flex items-center justify-center">
                      <BookOpen className="w-7 h-7" />
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                      {edu.field}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5 font-medium">
                      {edu.institution}
                    </p>
                    {edu.affiliation && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                        {edu.affiliation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Score & Timeline Tag */}
                <div className="sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-1">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.score}</span>
                  </div>
                  {edu.rollNo && (
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      Roll No: {edu.rollNo}
                    </span>
                  )}
                </div>

              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
