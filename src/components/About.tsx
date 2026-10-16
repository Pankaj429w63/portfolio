import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Terminal } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-purple-200">
              01 / About Me
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Turning complex data into <br />
              <span className="text-gradient-purple">dependable AI systems.</span>
            </h2>
            <div className="space-y-3 font-mono text-xs text-slate-600 mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5">
                <GraduationCap size={16} className="text-purple-600 shrink-0" aria-hidden="true" />
                <span>B.Tech in Artificial Intelligence &amp; Machine Learning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-purple-600 shrink-0" aria-hidden="true" />
                <span>Symbiosis Institute of Technology · Pune, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Terminal size={16} className="text-purple-600 shrink-0" aria-hidden="true" />
                <span>Class of 2023 — 2027</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed"
          >
            <p className="text-lg font-medium text-slate-800 leading-snug">
              I am an aspiring AI/ML engineer currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at Symbiosis Institute of Technology (SIT), Pune.
            </p>
            <p>
              My engineering focus centers on building reliable architectures where machine learning models interact seamlessly with production backend systems. Rather than keeping models confined to training notebooks, I build complete systems: from multimodal representation learning and vector databases to validated FastAPI services and responsive web interfaces.
            </p>
            <p>
              My key areas of exploration include <strong>multimodal fusion</strong> (combining linguistic, acoustic, and visual information), <strong>computer vision</strong> for domain-specific diagnosis, and <strong>retrieval-augmented generation (RAG)</strong> utilizing modern dense embeddings, rerankers, and local LLMs.
            </p>
            <p>
              I take pride in code that is testable, modular, and clearly documented—grounded in rigorous data structures, object-oriented principles, and continuous technical growth.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                Multimodal AI
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                Computer Vision
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                RAG Systems
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                FastAPI &amp; Backend
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                Vector Search
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
