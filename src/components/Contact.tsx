import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
import { config } from '../data/portfolio';
import { KaggleIcon } from './SocialIcons';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [submitNotice, setSubmitNotice] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject || 'Engineering Collaboration'}`
    );
    const bodyContent = `Hello Pankaj,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n`;
    const encodedBody = encodeURIComponent(bodyContent);

    // Form direct mailto fallback
    const mailtoUri = `mailto:${config.email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUri;

    setSubmitNotice(
      `Opening your email client to send to ${config.email}. If your mail app didn't open, please write directly to ${config.email}.`
    );
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-purple-200">
              05 / Get in Touch
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Let's connect &amp; build <br />
              <span className="text-gradient-purple">impactful AI systems.</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether you are looking for an AI/ML engineering intern, exploring system collaborations, or want to exchange thoughts on deep learning, I'd be glad to hear from you.
            </p>

            {/* Direct Email Card with Copy Feature */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 mb-6 space-y-3">
              <span className="text-xs font-mono text-purple-700 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Mail size={15} aria-hidden="true" />
                <span>Direct Email</span>
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${config.email}`}
                  className="font-mono text-sm font-bold text-slate-900 hover:text-purple-700 transition-colors break-all"
                >
                  {config.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-purple-50 text-xs font-medium text-slate-700 border border-slate-200 hover:border-purple-300 transition-all shadow-2xs shrink-0"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-600" aria-hidden="true" />
                      <span className="text-green-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Professional Networks */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block">
                Professional Networks
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-purple-700 border border-slate-200/80 transition-colors text-sm font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin size={18} className="text-purple-600" aria-hidden="true" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink size={14} className="text-slate-400" aria-hidden="true" />
                </a>

                <a
                  href={config.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-purple-700 border border-slate-200/80 transition-colors text-sm font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Github size={18} className="text-purple-600" aria-hidden="true" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ExternalLink size={14} className="text-slate-400" aria-hidden="true" />
                </a>

                <a
                  href={config.kaggleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-purple-700 border border-slate-200/80 transition-colors text-sm font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <KaggleIcon size={18} className="text-purple-600" />
                    <span>Kaggle Notebooks &amp; Competitions</span>
                  </div>
                  <ExternalLink size={14} className="text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Message Dispatcher via Mailto Fallback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                Draft a Message
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Submitting opens your local email client with your message pre-formatted for{' '}
                <span className="text-purple-700 font-bold">{config.email}</span>. No third-party data tracking.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Your Name *
                  </span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all placeholder:text-slate-400"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Your Email *
                  </span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@organization.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all placeholder:text-slate-400"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Subject *
                </span>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Internship opportunity / Collaboration inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all placeholder:text-slate-400"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Message *
                </span>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share a brief overview of what you would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all placeholder:text-slate-400 resize-none"
                />
              </label>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Send Message via Email <Send size={16} aria-hidden="true" />
              </button>

              {submitNotice && (
                <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono text-purple-800 leading-relaxed">
                  {submitNotice}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
