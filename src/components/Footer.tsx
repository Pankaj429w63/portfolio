import { config, profiles } from '../data/portfolio';
import { KaggleIcon, LeetCodeIcon, HackerRankIcon } from './SocialIcons';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const renderIcon = (type: string) => {
    switch (type) {
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
    <footer className="py-14 bg-[#0B0F19] text-white border-t border-purple-900/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center text-white font-black text-xs shadow-md">
              PY
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-tight text-white block">
                Pankaj Yadav
              </span>
              <span className="font-mono text-[10px] text-purple-300 uppercase tracking-widest block">
                AI / ML Engineer · SIT Pune
              </span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
            {profiles.map(({ label, href, iconType }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Pankaj Yadav on ${label}`}
                className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors py-1"
              >
                {renderIcon(iconType)}
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors border border-white/10"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Bottom Credits & Domain Reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Pankaj Yadav. Designed &amp; built for{' '}
            <a
              href={config.domain}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              pankaj-yadav.com.np
            </a>
          </p>
          <p className="text-slate-400">
            Vite · React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
