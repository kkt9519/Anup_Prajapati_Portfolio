import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-navy-950 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-lg text-gradient-cyan-purple">
                &lt;AP /&gt;
              </span>
              <span className="font-bold text-slate-900 dark:text-white">
                Anup Prajapati
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              B.Tech Computer Science & Design • Aspiring Software Engineer
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              R.R. Institute of Modern Technology, Lucknow (AKTU)
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/kkt9519"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="interactive-hover p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/anup-prajapati-kkt2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="interactive-hover p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:anuprajprajapati123@gmail.com"
              aria-label="Email Anup"
              className="interactive-hover p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="interactive-hover flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Anup Prajapati. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with React 18, Tailwind CSS & Node.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
