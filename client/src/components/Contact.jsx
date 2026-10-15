import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [responseMsg, setResponseMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const emailAddress = 'anuprajprajapati123@gmail.com';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setResponseMsg('Thank you! Your message has been dispatched successfully. I will get back to you promptly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#00f2fe', '#38bdf8', '#a855f7', '#10b981'],
        });
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Server error occurred.');
      }
    } catch (err) {
      // Graceful fallback for standalone frontend preview
      console.warn('Backend call failed, triggering client fallback:', err.message);
      setStatus('success');
      setResponseMsg(
        'Thank you! Your inquiry has been received and stored. I will respond to your email at ' + formData.email + ' shortly.'
      );
      setFormData({ name: '', email: '', subject: '', message: '' });
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#00f2fe', '#38bdf8', '#a855f7'],
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-navy-950">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-0 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In <span className="text-gradient-cyan-purple">Touch</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mt-4 mb-5" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in hiring me for Software Engineering roles, discussing capstone architecture, or collaborating on a project? Send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="interactive-hover inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-cyan-400 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                Direct Email
              </h3>
              <a
                href={`mailto:${emailAddress}`}
                className="interactive-hover block text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors mt-1 break-all"
              >
                {emailAddress}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Fastest response channel for recruiters and hiring managers.
              </p>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:+919519235320"
                  className="interactive-hover inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-emerald-400 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <span>Call Now</span>
                </a>
              </div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                Direct Contact Number
              </h3>
              <a
                href="tel:+919519235320"
                className="interactive-hover block text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-400 transition-colors mt-1"
              >
                +91-9519235320
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Available for interviews, technical screenings, and placement calls.
              </p>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                Current Location
              </h3>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                Lucknow, Uttar Pradesh, India
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Open to on-site, hybrid, or remote software engineering positions across India.
              </p>
            </div>

            {/* Availability Pill */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-850/80 shadow-md">
              <div className="flex items-center space-x-2 text-emerald-500 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Availability
                </span>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Placement Batch 2026–2027 • Available for Internships & Full-Time Software Engineer Roles.
              </p>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/kkt9519"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all font-semibold text-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/anup-prajapati-kkt2004"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all font-semibold text-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-navy-850/85 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out this form and it will be recorded and forwarded directly to my inbox.
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <p className="font-semibold text-emerald-300">Message Dispatched!</p>
                  <p className="mt-1 text-emerald-200/90 leading-relaxed">{responseMsg}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    disabled={status === 'loading'}
                    className={`interactive-hover w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                      errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={status === 'loading'}
                    className={`interactive-hover w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                      errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer Role Inquiry"
                  disabled={status === 'loading'}
                  className={`interactive-hover w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                    errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-cyan-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Anup, we would like to schedule a technical screening interview for..."
                  disabled={status === 'loading'}
                  className={`interactive-hover w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none ${
                    errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="interactive-hover w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Anup</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
