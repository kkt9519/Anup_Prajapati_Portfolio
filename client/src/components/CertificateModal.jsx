import React, { useEffect, useState } from 'react';
import { X, Award, CheckCircle2, ZoomIn, ZoomOut, RotateCcw, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.7));
  const handleResetZoom = () => setZoom(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl glass-card bg-navy-900/95 dark:bg-navy-900/95 border border-slate-700/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-navy-950/70">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white">
                  {certificate.title}
                </h2>
                <span className="hidden sm:inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Verified Credential</span>
                </span>
              </div>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">
                {certificate.issuer} • {certificate.date}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {certificate.image && (
              <>
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
              </>
            )}
            <button
              onClick={onClose}
              aria-label="Close Certificate modal"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="flex-1 w-full bg-slate-950/80 overflow-y-auto overflow-x-auto p-4 sm:p-6 flex flex-col items-center min-h-[400px] max-h-[75vh]">
          {certificate.image ? (
            <div
              className="relative shadow-2xl rounded-lg transition-transform duration-200 origin-top overflow-hidden border border-slate-700/60 bg-white"
              style={{
                transform: `scale(${zoom})`,
                maxWidth: '850px',
                width: '100%',
              }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto block select-none pointer-events-none"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center text-slate-300 max-w-md">
              <Award className="w-16 h-16 text-purple-400 mb-4 opacity-80" />
              <h3 className="text-lg font-bold text-white mb-2">{certificate.title}</h3>
              <p className="text-sm text-cyan-400 font-mono mb-4">{certificate.issuer}</p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {certificate.highlights[0]}
              </p>
            </div>
          )}

          {/* Details below certificate */}
          <div className="w-full max-w-3xl mt-6 p-4 rounded-xl bg-navy-900/80 border border-slate-800 text-left space-y-2">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Verification & Achievements
            </h4>
            <ul className="space-y-1.5">
              {certificate.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {certificate.score && (
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {certificate.score}
                </span>
                {certificate.rank && (
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {certificate.rank}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-2.5 bg-navy-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="text-[11px] font-mono text-cyan-400">
            Awarded to: Anup Prajapati
          </span>
          <span className="text-[11px] text-slate-500">
            R.R. Institute of Modern Technology, Lucknow (AKTU)
          </span>
        </div>
      </div>
    </div>
  );
}
