import { FormEvent, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  Send,
  Server,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';

const resumeUrl = '/pankaj_swe_(2).pdf';

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
];

const skillGroups = [
  { label: 'Languages', icon: Code2, items: ['Python', 'Java', 'C', 'SQL', 'TypeScript', 'JavaScript'] },
  { label: 'AI / ML & Data', icon: BarChart3, items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'Matplotlib', 'Seaborn', 'Plotly'] },
  { label: 'Backend & APIs', icon: Server, items: ['REST APIs', 'HTTP', 'JSON', 'CRUD', 'JWT Auth', 'PyMySQL', 'JDBC', 'Parameterized Queries'] },
  { label: 'Databases', icon: Database, items: ['MySQL', 'MongoDB Atlas', 'PostgreSQL', 'Schema Design', 'Normalization', 'Joins', 'Indexing'] },
  { label: 'Engineering', icon: Terminal, items: ['Git', 'GitHub', 'VS Code', 'Postman', 'OOP', 'DSA', 'DBMS', 'Testing', 'Documentation'] },
];

const projects = [
  {
    number: '01',
    title: 'Smart Digital Banking System',
    eyebrow: 'Full-stack backend system · 2025',
    description: 'A secure banking platform built around real-world account workflows, transfers, transaction history, and role-aware access.',
    tags: ['Python', 'Flask', 'MySQL', 'REST APIs', 'JWT'],
    points: ['Validated REST endpoints with clear HTTP responses', 'Normalized schemas with constraints, indexes, and parameterized queries', 'JWT authentication with separate customer and admin access'],
    icon: Network,
  },
  {
    number: '02',
    title: 'Payroll & Financial Records',
    eyebrow: 'Desktop CRUD system · 2024',
    description: 'A production-minded records system for employee data, attendance tracking, payroll computation, and clean database operations.',
    tags: ['Python', 'MySQL', 'PyMySQL', 'Tkinter', 'CRUD'],
    points: ['Normalized Employees, Attendance, and Payroll tables', 'Automated payroll calculations from attendance and salary tiers', 'Documented setup and schema in a reviewable GitHub workflow'],
    icon: BriefcaseBusiness,
  },
  {
    number: '03',
    title: 'Vendor Analytics Platform',
    eyebrow: 'Data engineering & visualization · 2025',
    description: 'An end-to-end analytics workflow that prepares multi-source vendor data and turns it into useful operational views.',
    tags: ['Python', 'Pandas', 'MySQL', 'ETL', 'Plotly'],
    points: ['Cleaned, normalized, and aggregated 100,000+ vendor records', 'Exposed analytics through lightweight JSON REST endpoints', 'Created interactive KPI views with regional and time-based filtering'],
    icon: BarChart3,
  },
];

const profiles = [
  { label: 'GitHub', value: 'Pankaj429w63', href: 'https://github.com/Pankaj429w63', icon: Github },
  { label: 'LinkedIn', value: 'pankaj-yadav-0172162a2', href: 'https://www.linkedin.com/in/pankaj-yadav-0172162a2/', icon: Linkedin },
  { label: 'LeetCode', value: 'pankajyadav200', href: 'https://leetcode.com/u/pankajyadav200/', icon: Code2 },
  { label: 'HackerRank', value: 'pankaj_yadav_bt1', href: 'https://www.hackerrank.com/profile/pankaj_yadav_bt1', icon: Terminal },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage('Your message is valid. Email is not connected yet, so please send it directly to pankajyadav2600@gmail.com.');
  };

  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setFormMessage('');
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Pankaj Yadav home">
          <span className="brand-mark">PY</span>
          <span className="brand-copy"><strong>Pankaj Yadav</strong><small>AI / ML · Software</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-resume" href={resumeUrl} download>Resume <ArrowDown size={15} /></a>
        </nav>
        <div className="top-actions">
          <a href="https://github.com/Pankaj429w63" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/pankaj-yadav-0172162a2/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <div className="status-pill"><span className="status-dot" /> Open to internships & graduate opportunities</div>
            <p className="overline">Aspiring AI/ML Engineer & Software Developer</p>
            <h1>Building useful systems<br /><span>with data at the core.</span></h1>
            <p className="hero-intro">I’m Pankaj — a B.Tech AI/ML student who enjoys turning backend logic, data pipelines, and machine learning ideas into dependable software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href={resumeUrl} download>Download resume <ArrowDown size={16} /></a>
            </div>
            <div className="social-row" aria-label="Professional profiles">
              {profiles.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16} /> {label}</a>)}
            </div>
          </div>
          <div className="hero-visual reveal-delay" aria-label="Pankaj Yadav profile and data engineering visual">
            <div className="visual-grid" />
            <div className="profile-photo-card">
              <img src="/profile-photo.jpg" alt="Pankaj Yadav" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
              <div className="photo-fallback">PY</div>
              <div><strong>Pankaj Yadav</strong><small>AI/ML Engineer in progress</small></div>
            </div>
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="code-card code-card-main"><div className="window-bar"><span /><span /><span /><em>pipeline.py</em></div><pre><code><b>def</b> build_system(data):{`\n`}  clean = <i>normalize</i>(data){`\n`}  model = <i>train</i>(clean){`\n`}  <b>return</b> model.predict()</code></pre></div>
            <div className="signal-card"><span className="signal-icon"><Zap size={16} /></span><div><small>system signal</small><strong>learning in public</strong></div><span className="signal-line" /></div>
            <div className="visual-caption"><span className="caption-line" /><span>01 / Build with intention</span></div>
          </div>
        </section>

        <section className="metrics-strip section-wrap" aria-label="Highlights">
          <div><strong>100<span>+</span></strong><p>LeetCode problems<br />solved</p></div>
          <div><strong>120<span>+</span></strong><p>Accredited volunteer<br />hours</p></div>
          <div><strong>3</strong><p>End-to-end systems<br />in the portfolio</p></div>
          <div><strong>2027</strong><p>Expected B.Tech<br />graduation</p></div>
        </section>

        <section id="about" className="content-section section-wrap two-col">
          <div className="section-intro"><p className="section-kicker">01 / About</p><h2>Curious by nature.<br /><span>Practical by default.</span></h2></div>
          <div className="about-copy"><p className="lead">I’m currently pursuing a B.Tech in Artificial Intelligence & Machine Learning at Symbiosis Institute of Technology, Pune.</p><p>My work sits where software engineering meets data: building REST APIs, designing relational databases, shaping ETL workflows, and learning how machine learning can solve useful problems. I care about writing code that is understandable, testable, and ready for the next person to work with.</p><p>Outside of coursework, I’m building in public, contributing time to meaningful projects, and sharpening the fundamentals that make great systems possible.</p><div className="signature-line"><span /> Pune, India · 2026</div></div>
        </section>

        <section id="skills" className="content-section section-wrap">
          <div className="section-heading"><div><p className="section-kicker">02 / Toolkit</p><h2>The tools I reach for</h2></div><p>From database design to model experimentation, my toolkit is grounded in fundamentals and shaped by hands-on projects.</p></div>
          <div className="skills-grid">{skillGroups.map(({ label, icon: Icon, items }) => <article className="skill-card" key={label}><div className="skill-icon"><Icon size={20} /></div><h3>{label}</h3><div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section id="projects" className="content-section section-wrap projects-section">
          <div className="section-heading"><div><p className="section-kicker">03 / Selected work</p><h2>Systems, not just screens.</h2></div><p>A few projects that show how I approach real requirements: clear structure, deliberate data handling, and thoughtful interfaces.</p></div>
          <article className="spotlight-project"><div className="spotlight-visual"><div className="plant-dashboard"><div className="dashboard-top"><span className="leaf-mark">✦</span><b>TerraMind AI</b><span className="dash-user">Pankaj Yadav</span></div><div className="dashboard-body"><aside><span className="dash-active">⌂ Dashboard</span><span>◌ Disease Detection</span><span>⌁ Plant Diagnosis</span><span>⌘ Upload Images</span><span>◷ History & Reports</span></aside><div className="dash-content"><small>Welcome back.</small><h3>AI-powered plant<br /><span>disease detection</span></h3><div className="dash-buttons"><i>Detect Disease</i><i>View History</i></div><div className="dash-stats"><b>19<small>classes</small></b><b>24,853<small>images</small></b><b>97.42%<small>accuracy</small></b></div><div className="dash-chart"><span /><span /><span /><span /><span /><span /><span /></div></div></div></div></div><div className="spotlight-copy"><p className="section-kicker">Featured project · AI product concept</p><h3>TerraMind AI</h3><p>An AI-focused plant disease detection experience designed around diagnosis, history, model insights, and actionable care guidance.</p><div className="tag-list"><span>AI / ML</span><span>Computer Vision</span><span>Product thinking</span></div><a className="text-link" href="https://github.com/Pankaj429w63/Terramind-AI" target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={16} /></a></div></article>
          <div className="project-list">{projects.map(({ number, title, eyebrow, description, tags, points, icon: Icon }) => <article className="project-card" key={title}><div className="project-top"><span className="project-number">{number}</span><Icon size={21} /></div><p className="project-eyebrow">{eyebrow}</p><h3>{title}</h3><p>{description}</p><ul>{points.map((point) => <li key={point}><Check size={14} />{point}</li>)}</ul><div className="project-bottom"><div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="https://github.com/Pankaj429w63" target="_blank" rel="noreferrer" aria-label={`${title} on GitHub`}><Github size={18} /></a></div></article>)}</div>
        </section>

        <section id="journey" className="content-section section-wrap two-col journey-section">
          <div className="section-intro"><p className="section-kicker">04 / Journey</p><h2>Learning through<br /><span>real responsibility.</span></h2></div>
          <div className="journey-content"><div className="timeline-item"><span className="timeline-dot" /><div><p className="timeline-date">Jul — Nov 2025</p><h3>AI/ML Technical Volunteer</h3><p className="muted">Akshar Paul NGO · Pune</p><p>Completed 120+ accredited hours and independently built a Python data pipeline for NGO resource allocation, with modular structure, README, and documentation.</p></div></div><div className="timeline-item"><span className="timeline-dot" /><div><p className="timeline-date">2023 — May 2027</p><h3>B.Tech · Artificial Intelligence & Machine Learning</h3><p className="muted">Symbiosis Institute of Technology · Pune</p><p>Building a strong base across data structures, OOP, DBMS, networks, operating systems, software engineering, Python, and machine learning.</p></div></div></div>
        </section>

        <section className="content-section section-wrap proof-section"><div className="section-heading"><div><p className="section-kicker">05 / Proof of work</p><h2>Keep learning. Keep shipping.</h2></div><p>Milestones and certifications that reflect consistent practice, not inflated numbers.</p></div><div className="proof-grid"><article className="proof-card large"><Award size={22} /><p className="proof-label">Achievement</p><h3>SQL Advanced · HackerRank</h3><p>Top percentile among 140,000+ global candidates, working through query optimization, window functions, and multi-table joins.</p><span className="proof-year">2024</span></article><article className="proof-card"><GraduationCap size={22} /><p className="proof-label">Academic</p><h3>GREEN Olympiad</h3><p>Certificate of Distinction, 80%+ · GO4Youth 2025</p><span className="proof-year">2025</span></article><article className="proof-card"><Sparkles size={22} /><p className="proof-label">Certifications</p><h3>SQL · Python · MongoDB</h3><p>HackerRank, SQL Advanced & Intermediate, Python Basic, and MongoDB Developer Toolkit.</p><span className="proof-year">2024</span></article><article className="proof-card"><BarChart3 size={22} /><p className="proof-label">Additional learning</p><h3>Analytics & BI</h3><p>Google Analytics and Power BI certifications supporting a broader data perspective.</p><span className="proof-year">2025 — 2026</span></article></div></section>

        <section className="profiles-section section-wrap"><div className="section-heading"><div><p className="section-kicker">06 / Find me online</p><h2>Coding & developer profiles</h2></div><p>Open work, daily practice, and a record of how I keep improving.</p></div><div className="profile-grid">{profiles.map(({ label, value, href, icon: Icon }) => <a className="profile-card" key={label} href={href} target="_blank" rel="noreferrer"><Icon size={22} /><span><strong>{label}</strong><small>{value}</small></span><ExternalLink size={16} /></a>)}</div></section>

        <section id="contact" className="contact-section section-wrap"><div className="contact-copy"><p className="section-kicker">07 / Contact</p><h2>Have a problem<br /><span>worth solving?</span></h2><p>Whether you’re looking for a curious engineering intern, a project collaborator, or just want to exchange ideas, I’d be glad to hear from you.</p><div className="contact-links"><a href="mailto:pankajyadav2600@gmail.com"><Mail size={18} /> pankajyadav2600@gmail.com</a><a href="tel:+919325237641"><Terminal size={18} /> +91 93252 37641</a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input required value={formState.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your name" /></label><label>Email<input required type="email" value={formState.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" /></label></div><label>Subject<input required value={formState.subject} onChange={(event) => updateField('subject', event.target.value)} placeholder="How can I help?" /></label><label>Message<textarea required rows={5} value={formState.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Tell me a little about it..." /></label><button className="button button-primary" type="submit">Send message <Send size={16} /></button>{formMessage && <p className="form-message" role="status">{formMessage}</p>}</form></section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">PY</span><span className="brand-copy"><strong>Pankaj Yadav</strong><small>AI / ML · Software</small></span></a><p>Building useful systems with data at the core.</p><div className="footer-links">{profiles.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div><span className="copyright">© 2026 Pankaj Yadav</span></footer>
    </div>
  );
}

export default App;
