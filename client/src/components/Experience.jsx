import React, { useState } from 'react';
import { internshipsData, certificatesData } from '../data/experienceData';
import CertificateModal from './CertificateModal';
import { Briefcase, Award, Calendar, CheckCircle2, Eye, Sparkles, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-navy-900/40">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-500 dark:text-purple-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>CREDENTIALS & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & <span className="text-gradient-cyan-purple">Certifications</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mt-4 mb-5" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified industry internships, hackathon honors, and officially certified assessment achievements.
          </p>
        </div>

        {/* 1. Official Verified Certificates Showcase */}
        <div className="mb-20">
          <div className="flex items-center space-x-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Verified Certificates & Honors
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Click any certificate to inspect full resolution and verification credentials
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="interactive-hover group glass-card glass-card-hover rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Certificate Image Preview Thumbnail (if image available) */}
                  {cert.image ? (
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-slate-900 border border-slate-700/60 group-hover:border-cyan-500/50 transition-colors">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg backdrop-blur-md bg-navy-950/80 border border-white/10 text-[10px] font-mono text-cyan-300 flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl p-6 mb-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-900 dark:to-navy-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                      <Award className="w-12 h-12 text-purple-400/80" />
                    </div>
                  )}

                  {/* Header badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${
                        cert.badgeColor === 'cyan'
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30'
                          : cert.badgeColor === 'emerald'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                          : cert.badgeColor === 'purple'
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                  </div>

                  {/* Title & Issuer */}
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-1">
                    {cert.issuer}
                  </p>
                  {cert.partner && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mb-3">
                      {cert.partner}
                    </p>
                  )}

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{cert.highlights[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Footer skills & Action */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 2).map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Professional Internships Section */}
        <div>
          <div className="flex items-center space-x-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Internship Experience
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Hands-on production development and algorithmic problem solving
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {internshipsData.map((item, idx) => (
              <div
                key={idx}
                className="interactive-hover glass-card glass-card-hover rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                      {item.type}
                    </span>
                    <div className="flex items-center space-x-1 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.role}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
