import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { config, profiles } from '../data/portfolio';
import { KaggleIcon, LeetCodeIcon, HackerRankIcon } from './SocialIcons';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const renderProfileIcon = (iconType: string) => {
    switch (iconType) {
      case 'github':
        return <Github size={15} aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin size={15} aria-hidden="true" />;
      case 'kaggle':
        return <KaggleIcon size={15} />;
      case 'leetcode':
        return <LeetCodeIcon size={15} />;
      case 'hackerrank':
        return <HackerRankIcon size={15} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0B0F19] text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-900/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Core Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Institution & Degree Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-200 text-xs font-mono mb-7 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>AI / ML Engineer · B.Tech Symbiosis Institute of Technology</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Engineering Deep Learning &amp; <br />
            <span className="text-gradient-hero">Multimodal AI Systems.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-9 leading-relaxed">
            I am Pankaj Yadav — an AI/ML engineer focused on multimodal neural networks, computer vision, retrieval-augmented generation (RAG), and dependable full-stack ML architectures.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white font-semibold hover:from-purple-600 hover:to-purple-400 hover:-translate-y-0.5 transition-all shadow-[0_0_25px_rgba(124,58,237,0.35)]"
            >
              Explore Featured Projects <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href={config.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 hover:border-purple-400/50 text-slate-200 font-semibold hover:bg-white/5 transition-all"
            >
              Download Resume <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-mono text-slate-400">
            {profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Pankaj Yadav ${p.label} Profile`}
                className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors py-1 px-2 rounded hover:bg-white/5"
              >
                {renderProfileIcon(p.iconType)}
                <span>{p.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Technically Accurate Illustrative Multimodal AI Schema */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 w-full"
        >
          <div className="relative rounded-2xl bg-slate-900/80 border border-purple-900/40 p-6 shadow-2xl backdrop-blur-xl">
            {/* Header / Caption strictly stating this is an architectural schema */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                  Multimodal Fusion Architecture
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-700/30">
                ILLUSTRATIVE SCHEMA
              </span>
            </div>

            {/* Architectural Nodes Breakdown */}
            <div className="space-y-4">
              {/* Level 1: Multi-Stream Inputs */}
              <div>
                <p className="text-[11px] font-mono text-purple-300 uppercase tracking-widest mb-2">
                  01 / Input Encoders (768-d Embeddings)
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-purple-400 block">Text Stream</span>
                    <span className="text-xs font-bold text-white">DistilRoBERTa</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-purple-400 block">Audio Stream</span>
                    <span className="text-xs font-bold text-white">Wav2Vec2</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-purple-400 block">Video Stream</span>
                    <span className="text-xs font-bold text-white">Vision Extractor</span>
                  </div>
                </div>
              </div>

              {/* Connecting Flow Indicator */}
              <div className="flex justify-center text-purple-400/60 font-mono text-xs">
                ▼ Gated Feature Aggregation
              </div>

              {/* Level 2: Gated Multimodal Fusion Core */}
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-600/30">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-purple-200">Gated Multimodal Fusion Layer</span>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-900/60 px-2 py-0.5 rounded">
                    Learned Cross-Modal Weights
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                  Dynamic gating filters modality noise and weights complementary linguistic, acoustic, and visual evidence.
                </p>
              </div>

              {/* Connecting Flow Indicator */}
              <div className="flex justify-center text-purple-400/60 font-mono text-xs">
                ▼ Decoupled Classification &amp; RAG
              </div>

              {/* Level 3: Output Multi-Task Heads */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-white/5">
                  <span className="text-[10px] font-mono text-purple-400 block">Task 1: Emotion</span>
                  <span className="text-xs font-bold text-white">7 Emotion Classes</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Joy, Sadness, Anger, Fear...</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-white/5">
                  <span className="text-[10px] font-mono text-purple-400 block">Task 2: Sentiment</span>
                  <span className="text-xs font-bold text-white">3 Sentiment Classes</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Positive, Negative, Neutral</span>
                </div>
              </div>
            </div>

            {/* Footer Schema Note */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>FastAPI · FAISS · PyTorch</span>
              <span className="text-purple-400">Affectra AI Pipeline</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
