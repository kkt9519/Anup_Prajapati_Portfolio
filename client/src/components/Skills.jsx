import React, { useState } from 'react';
import { skillCategories, skillsData } from '../data/skillsData';
import {
  Coffee,
  Code2,
  Terminal,
  Database,
  Atom,
  Layout,
  Palette,
  Server,
  Network,
  FolderKanban,
  Layers,
  Binary,
  Cpu,
  DatabaseZap,
  GitBranch,
  Send,
  Zap,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

const iconMap = {
  Coffee,
  Code2,
  Terminal,
  Database,
  Atom,
  Layout,
  Palette,
  Server,
  Network,
  FolderKanban,
  Layers,
  Binary,
  Cpu,
  DatabaseZap,
  GitBranch,
  Send,
  Zap,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-navy-950">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-500 dark:text-purple-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-gradient-cyan-purple">Competencies</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mt-4 mb-5" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, full-stack frameworks, core computer science subjects, and developer workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`interactive-hover px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'bg-white/80 dark:bg-navy-900/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="interactive-hover group glass-card glass-card-hover rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-navy-850/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon and level badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border ${
                        skill.level === 'Advanced'
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30'
                          : skill.level === 'Proficient'
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center space-x-1.5 mb-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" title="Core Focus" />
                    )}
                  </div>

                  {/* Description / Specific Topics */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom category tag */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <div className="flex items-center space-x-1 text-emerald-500 text-[10px]">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CS Fundamentals Callout Banner */}
        <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-cyan-950/20 via-navy-900/40 to-purple-950/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                Recruitment & Placement Focus
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Strong Foundation in Computer Science Fundamentals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Trained in Object-Oriented Design (OOP), Data Structures & Algorithms (Arrays, Linked Lists, Trees, DP), Database Management Systems (DBMS, SQL, Normalization), and Operating Systems fundamentals to excel in technical screening rounds.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#projects"
                className="interactive-hover px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-purple-500/20 transition-all text-center"
              >
                See Skills In Action
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
