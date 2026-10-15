import React, { useState, useEffect } from 'react';
import { X, Lock, ZoomIn, ZoomOut, RotateCcw, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      // Block Ctrl+P (Print / Save as PDF) while viewing resume
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S')) {
        e.preventDefault();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setZoom(1);
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.7));
  const handleResetZoom = () => setZoom(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl glass-card bg-navy-900/95 dark:bg-navy-900/95 border border-slate-700/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-navy-950/70">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white">
                  Anup Prajapati — Official CV
                </h2>
                <span className="hidden sm:inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>View Only (Download Protected)</span>
                </span>
              </div>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">
                B.Tech CSD (Current CGPA: 7.38 / 10) • R.R. Group of Modern Technology (AKTU)
              </p>
            </div>
          </div>

          {/* Viewer Controls */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.7}
              title="Zoom Out"
              aria-label="Zoom Out"
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors disabled:opacity-40"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1 min-w-[42px] text-center hidden sm:inline">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 1.8}
              title="Zoom In"
              aria-label="Zoom In"
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors disabled:opacity-40"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              aria-label="Reset Zoom"
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors hidden sm:inline"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV viewer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Protected View Area */}
        <div
          className="flex-1 w-full bg-slate-950/80 overflow-y-auto overflow-x-auto p-4 sm:p-6 flex justify-center items-start min-h-[480px] max-h-[76vh]"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            className="relative shadow-2xl rounded-lg transition-transform duration-200 origin-top overflow-hidden border border-slate-700/60 bg-white"
            style={{
              transform: `scale(${zoom})`,
              maxWidth: '850px',
              width: '100%',
            }}
          >
            {/* The Resume Image */}
            <img
              src="/anup_prajapati_cv.png"
              alt="Anup Prajapati Official Resume"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-auto block pointer-events-none select-none"
            />

            {/* Transparent Security Overlay Shield */}
            <div
              className="absolute inset-0 z-20 bg-transparent cursor-default"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Footer info & Protection notice */}
        <div className="px-4 sm:px-6 py-2.5 bg-navy-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] sm:text-xs">
              Recruiter Preview Only • Direct Download, Copy & Sharing are Disabled
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-500 text-[11px] font-mono">
            <span>R.R. Group of Modern Technology, Lucknow (AKTU)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
