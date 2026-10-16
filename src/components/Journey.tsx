import { motion } from 'framer-motion';
import { education, verifiedCredentials, profiles } from '../data/portfolio';
import { GraduationCap, Award, ExternalLink, Terminal, CheckCircle2 } from 'lucide-react';
import { KaggleIcon, LeetCodeIcon, HackerRankIcon } from './SocialIcons';
import { Github, Linkedin } from 'lucide-react';

export function Journey() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github size={18} aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin size={18} aria-hidden="true" />;
      case 'kaggle':
        return <KaggleIcon size={18} />;
      case 'leetcode':
        return <LeetCodeIcon size={18} />;
      case 'hackerrank':
        return <HackerRankIcon size={18} />;
      default:
        return <Terminal size={18} aria-hidden="true" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-purple-200">
            04 / Education &amp; Foundation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Academic rigor &amp; verified problem solving.
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Grounded in university-level computer science fundamentals and reinforced through continuous practical problem solving across verified coding platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-xs text-purple-700 font-semibold uppercase tracking-wider block">
                  Degree &amp; Institution
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {education.institution}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div>
                  <span className="font-bold text-slate-900 text-base block">{education.degree}</span>
                  <span className="text-purple-700 font-medium text-xs font-mono">{education.major}</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold">
                  {education.timeline}
                </span>
              </div>

              <p className="pt-2">{education.description}</p>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Academic Focus &amp; Competencies:
                </span>
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={15} className="text-purple-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Problem Solving & Technical Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Verified Platforms Card */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Award size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="font-mono text-xs text-purple-700 font-semibold uppercase tracking-wider block">
                    Verified Competencies
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Coding &amp; Problem Solving
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {verifiedCredentials.map((c, i) => (
                  <a
                    key={i}
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-3.5 rounded-xl bg-slate-50 hover:bg-purple-50/50 border border-slate-200/80 hover:border-purple-200 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                        {c.title}
                      </span>
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-purple-600 transition-colors" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Profile Access Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
              <span className="font-mono text-xs text-slate-500 font-semibold uppercase tracking-wider block mb-3">
                Verified Public Profiles
              </span>
              <div className="grid grid-cols-2 gap-2">
                {profiles.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs font-mono font-medium border border-slate-200/70 hover:border-purple-200 transition-colors"
                  >
                    {getIcon(p.iconType)}
                    <span>{p.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
