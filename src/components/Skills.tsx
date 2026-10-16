import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-purple-200">
            02 / Technical Skills
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tools, frameworks &amp; architectures.
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            A practical toolkit structured around hands-on deep learning workflows, backend API development, and data engineering fundamentals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-700 mb-5">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-purple-50 hover:text-purple-800 hover:border-purple-200 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
