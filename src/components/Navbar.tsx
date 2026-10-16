import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ArrowDown } from 'lucide-react';
import { navItems, config } from '../data/portfolio';
import { KaggleIcon } from './SocialIcons';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-purple-900/30 py-3 shadow-lg'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
          aria-label="Pankaj Yadav — AI/ML Engineer Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 flex items-center justify-center text-white font-black text-sm group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.35)]">
            PY
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Pankaj Yadav
            </span>
            <span className="font-mono text-[10px] text-purple-300/80 uppercase tracking-widest">
              AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:-translate-y-0.5 transform duration-150"
            >
              {item.label}
            </a>
          ))}
          <a
            href={config.resumeUrl}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-200 hover:bg-purple-600 hover:text-white transition-all text-sm font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            aria-label="Download Pankaj Yadav Resume PDF"
          >
            Resume <ArrowDown size={14} aria-hidden="true" />
          </a>
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4 text-slate-400">
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Pankaj Yadav GitHub Profile"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            <Github size={19} aria-hidden="true" />
          </a>
          <a
            href={config.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Pankaj Yadav LinkedIn Profile"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            <Linkedin size={19} aria-hidden="true" />
          </a>
          <a
            href={config.kaggleUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Pankaj Yadav Kaggle Profile"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            <KaggleIcon size={18} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-purple-900/30 px-6 py-5 shadow-2xl"
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-purple-300 py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="flex gap-4 text-slate-400">
                  <a
                    href={config.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Pankaj Yadav GitHub"
                    className="p-2 hover:text-white"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={config.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Pankaj Yadav LinkedIn"
                    className="p-2 hover:text-white"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={config.kaggleUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Pankaj Yadav Kaggle"
                    className="p-2 hover:text-white"
                  >
                    <KaggleIcon size={19} />
                  </a>
                </div>
                <a
                  href={config.resumeUrl}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 text-white text-sm font-semibold shadow-md"
                >
                  Resume <ArrowDown size={14} aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
