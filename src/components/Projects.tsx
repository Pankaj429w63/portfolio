import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ArrowUpRight, Github, Check, ExternalLink } from 'lucide-react';

export function Projects() {
  const featured = projects[0]; // Affectra AI
  const secondaryProjects = projects.slice(1); // TerraMind AI, Smart Digital Banking, CampusGPT

  return (
    <section id="projects" className="py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-purple-200">
            03 / Featured Projects
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Production-minded AI &amp; systems.
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Four end-to-end systems showcasing multimodal deep learning, computer vision pipelines, full-stack microservices, and retrieval-augmented generation.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PROMINENT FLAGSHIP: Affectra AI */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/50 via-white to-slate-50 p-8 sm:p-12 mb-14 shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Project Overview & Features */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-purple-700 text-xs font-bold uppercase tracking-wider bg-purple-100/80 border border-purple-200 px-3 py-1 rounded-full">
                    {featured.eyebrow}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {featured.statusBadge}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {featured.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {featured.description}
                </p>

                {/* Technical Highlights with Checkmarks */}
                <div className="space-y-2.5 mb-8">
                  {featured.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white text-slate-800 text-xs font-mono font-medium border border-slate-200 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-purple-100">
                {featured.demoUrl && (
                  <a
                    href={featured.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View Affectra AI Live Demo"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Launch Live Demo <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
                <a
                  href={featured.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Affectra AI GitHub Repository"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 hover:border-purple-300 transition-all shadow-2xs"
                >
                  <Github size={17} aria-hidden="true" /> Source Code
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Highlights & Verified Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {featured.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs"
                  >
                    <span className="text-[11px] font-mono text-purple-700 font-semibold uppercase tracking-wider block mb-1">
                      {m.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Multimodal Architecture Callout */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-wider font-semibold">
                    Multimodal Fusion Pipeline
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-300">
                    PyTorch + FastAPI
                  </span>
                </div>
                <div className="space-y-3 font-mono text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-purple-400 font-bold block mb-0.5">Tri-Encoder Backbones</span>
                    <span className="text-[11px] text-slate-400">
                      DistilRoBERTa (Text) + Wav2Vec2 (Audio) + Vision Extractor
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-900/30 border border-purple-500/30">
                    <span className="text-purple-300 font-bold block mb-0.5">768-d Gated Fusion Network</span>
                    <span className="text-[11px] text-slate-300">
                      Learned cross-modal attention gating to filter noisy signals
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-purple-400 font-bold block mb-0.5">Decoupled Prediction &amp; RAG</span>
                    <span className="text-[11px] text-slate-400">
                      7 Emotions + 3 Sentiments predicted; FAISS &amp; agents generate reasoning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* SECONDARY PROJECTS: TerraMind, Smart Banking, CampusGPT */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Number & Eyebrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-purple-700 text-lg font-bold">
                    {project.number}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                    {project.statusBadge}
                  </span>
                </div>

                <p className="font-mono text-[11px] text-purple-700 uppercase tracking-wider mb-2 font-semibold">
                  {project.eyebrow}
                </p>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-purple-600 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Links & Action Buttons */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-purple-700 transition-colors"
                >
                  <Github size={15} aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} Live Demo`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 text-xs font-semibold transition-colors border border-purple-200"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-600 px-2 py-1 rounded bg-slate-100 border border-slate-200">
                    Source Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
