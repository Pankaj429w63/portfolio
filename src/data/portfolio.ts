import {
  BrainCircuit,
  Database,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';

export const config = {
  name: 'Pankaj Yadav',
  role: 'AI / ML Engineer',
  institution: 'Symbiosis Institute of Technology, Pune',
  education: 'B.Tech in Artificial Intelligence & Machine Learning (2023–2027)',
  location: 'Pune, India',
  email: 'roypankaj2060@gmail.com',
  resumeUrl: '/pankaj_swe_(2).pdf',
  githubUrl: 'https://github.com/Pankaj429w63',
  linkedinUrl: 'https://www.linkedin.com/in/pankaj-yadav-0172162a2/',
  kaggleUrl: 'https://www.kaggle.com/pankajyadavbtech2023',
  leetcodeUrl: 'https://leetcode.com/u/pankajyadav200/',
  hackerrankUrl: 'https://www.hackerrank.com/profile/pankaj_yadav_bt1',
  domain: 'https://pankaj-yadav.com.np/',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const profiles = [
  {
    label: 'GitHub',
    handle: 'Pankaj429w63',
    href: 'https://github.com/Pankaj429w63',
    iconType: 'github' as const,
  },
  {
    label: 'LinkedIn',
    handle: 'pankaj-yadav-0172162a2',
    href: 'https://www.linkedin.com/in/pankaj-yadav-0172162a2/',
    iconType: 'linkedin' as const,
  },
  {
    label: 'Kaggle',
    handle: 'pankajyadavbtech2023',
    href: 'https://www.kaggle.com/pankajyadavbtech2023',
    iconType: 'kaggle' as const,
  },
  {
    label: 'LeetCode',
    handle: 'pankajyadav200',
    href: 'https://leetcode.com/u/pankajyadav200/',
    iconType: 'leetcode' as const,
  },
  {
    label: 'HackerRank',
    handle: 'pankaj_yadav_bt1',
    href: 'https://www.hackerrank.com/profile/pankaj_yadav_bt1',
    iconType: 'hackerrank' as const,
  },
];

export const skillGroups = [
  {
    label: 'Core AI & Machine Learning',
    icon: BrainCircuit,
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'Transformers',
      'Multimodal Fusion',
      'Computer Vision',
      'Model Evaluation',
    ],
  },
  {
    label: 'RAG & Generative AI',
    icon: Sparkles,
    items: [
      'BGE-M3 Embeddings',
      'ChromaDB',
      'FAISS',
      'Passage Reranking',
      'Document Chunking',
      'Ollama (Qwen 2.5)',
      'Prompt Design',
      'Multi-Agent Workflows',
    ],
  },
  {
    label: 'Backend & System APIs',
    icon: Server,
    items: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Microservices',
      'Pydantic',
    ],
  },
  {
    label: 'Databases & Data Handling',
    icon: Database,
    items: [
      'PostgreSQL',
      'MongoDB Atlas',
      'MySQL',
      'Pandas',
      'NumPy',
      'Vector Databases',
      'Supabase RLS',
      'ETL Pipelines',
    ],
  },
  {
    label: 'Software Engineering & Tools',
    icon: Terminal,
    items: [
      'Docker',
      'Git & GitHub',
      'TypeScript',
      'JavaScript',
      'Java',
      'C',
      'Linux',
      'Postman',
      'Vercel Deployment',
    ],
  },
];

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  statusBadge: string;
  description: string;
  tags: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  repoUrl: string;
  demoUrl?: string | null;
  architectureNotes?: string;
  isFeatured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'affectra-ai',
    number: '01',
    title: 'Affectra AI',
    eyebrow: 'Flagship Project · Multimodal Intelligence Platform',
    statusBadge: 'Production Architecture',
    description:
      'A production-oriented multimodal emotion and sentiment intelligence platform combining text, audio, and video representations using Gated Multimodal Fusion. It strictly decouples predictive classification from the LLM/RAG/agent explanation layer.',
    tags: ['Multimodal AI', 'PyTorch', 'FastAPI', 'Transformers', 'FAISS', 'React', 'Docker'],
    highlights: [
      'Tri-encoder feature pipeline: DistilRoBERTa-base (text), Wav2Vec2-base (audio), and video feature extractors projected to 768-d embeddings',
      'Gated Multimodal Fusion network with multi-task classification across 7 emotion classes and 3 sentiment classes',
      'Decoupled architecture: Deep classifier performs inference while RAG and orchestrator agents provide transparent reasoning',
      'Production FastAPI backend (/predict, /explain, /rag, /agents, /health), FAISS vector search, and responsive React web client',
    ],
    metrics: [
      { label: 'Modalities', value: 'Text, Audio, Video' },
      { label: 'Emotion Classes', value: '7 Emotions' },
      { label: 'Sentiment Classes', value: '3 Sentiments' },
      { label: 'Fusion Dimension', value: '768-d Gated' },
    ],
    repoUrl: 'https://github.com/Pankaj429w63/Affectra-AI',
    demoUrl: 'https://affectra-ai.vercel.app/',
    architectureNotes:
      'Modalities: Text (DistilRoBERTa-base) + Audio (Wav2Vec2-base) + Video (ResNet/ViT) ➔ 768-d Gated Multimodal Fusion ➔ 7 Emotion Classes + 3 Sentiment Classes ➔ Grounded RAG & Agent Explanation',
    isFeatured: true,
  },
  {
    id: 'terramind-ai',
    number: '02',
    title: 'TerraMind AI',
    eyebrow: 'Computer Vision & Multi-Agent Diagnosis Platform',
    statusBadge: 'Live Deployment',
    description:
      'An end-to-end agricultural plant disease diagnosis system combining an EfficientNet-B0 vision classifier with a collaborative seven-agent supervisor workflow and evidence-grounded treatment retrieval.',
    tags: ['Computer Vision', 'PyTorch', 'Next.js 14', 'FastAPI', 'Supabase RLS', 'Multi-Agent RAG'],
    highlights: [
      'PyTorch EfficientNet-B0 vision classifier trained for leaf disease diagnosis across 89 verified disease classes',
      'Seven-agent supervisor architecture orchestrating diagnosis, research, treatment, fertilizer, care, and reporting',
      'Agricultural RAG knowledge base utilizing TF-IDF lexical reranking and Qdrant vector retrieval',
      'Strict data ownership and human review flows backed by Supabase Auth, PostgreSQL with Row Level Security (RLS), and private storage',
    ],
    metrics: [
      { label: 'Disease Classes', value: '89 Classes' },
      { label: 'Workflow Agents', value: '7-Agent Supervisor' },
      { label: 'Data Security', value: 'Supabase RLS' },
      { label: 'Frontend Stack', value: 'Next.js 14 / Vercel' },
    ],
    repoUrl: 'https://github.com/Pankaj429w63/Terramind-AI',
    demoUrl: 'https://terramind-ai-72q1.vercel.app/',
    isFeatured: false,
  },
  {
    id: 'smart-digital-banking',
    number: '03',
    title: 'Smart Digital Banking System',
    eyebrow: 'Full-Stack FinTech Architecture with AI Fraud Detection',
    statusBadge: 'Full-Stack MERN + Python AI',
    description:
      'A modular full-stack banking platform combining a Node.js/Express REST backend and React dashboard with a dedicated Python AI fraud detection microservice and Java core logic module.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Python AI', 'JWT Auth'],
    highlights: [
      'React interface for account management, balance inquiries, fund transfers, and filtered transaction history',
      'Node.js & Express REST API with JWT token validation, input sanitization middleware, and MongoDB Atlas data models',
      'Dedicated Python AI microservice (fraud_model.py, fraud_api.py) evaluating transaction risk scores in real-time',
      'Modular Java banking component (java-bank-app/) implementing foundational ledger and balance calculation routines',
    ],
    metrics: [
      { label: 'Web Tier', value: 'React + Node.js' },
      { label: 'AI Service', value: 'Python Fraud API' },
      { label: 'Database', value: 'MongoDB Atlas' },
      { label: 'Security', value: 'JWT & Middleware' },
    ],
    repoUrl: 'https://github.com/Pankaj429w63/SmartDigitalBankingSystem',
    demoUrl: null,
    isFeatured: false,
  },
  {
    id: 'campusgpt',
    number: '04',
    title: 'CampusGPT',
    eyebrow: 'B.Tech Group Project · Architecture & In Development',
    statusBadge: 'Architecture & In Progress',
    description:
      'A department-aware conversational university assistant using Retrieval-Augmented Generation (RAG) and local LLMs to provide students and faculty with verified answers grounded in institutional documents.',
    tags: ['RAG System', 'Python / FastAPI', 'BGE-M3', 'ChromaDB', 'Ollama / Qwen 2.5', 'Next.js'],
    highlights: [
      'Document engineering pipeline preprocessing handbooks, curricula, and timetables with department/semester metadata',
      'BGE-M3 1024-dimensional embeddings and ChromaDB vector store paired with a BGE reranker for precision passage retrieval',
      'FastAPI backend query endpoints designed for integration with an interactive Next.js conversational web interface',
      'Local LLM generation with Qwen 2.5:3B via Ollama and structured Excel-based retrieval for departmental timetables',
    ],
    metrics: [
      { label: 'Embedding Model', value: 'BGE-M3 (1024-d)' },
      { label: 'Vector Store', value: 'ChromaDB' },
      { label: 'Reranker', value: 'BGE Reranker' },
      { label: 'Local LLM', value: 'Qwen 2.5:3B (Ollama)' },
    ],
    repoUrl: 'https://github.com/Pankaj429w63/CampusGPT',
    demoUrl: null,
    isFeatured: false,
  },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Artificial Intelligence & Machine Learning',
  institution: 'Symbiosis Institute of Technology (SIT), Pune',
  timeline: '2023 — 2027',
  status: 'Currently in Progress (3rd Year)',
  location: 'Pune, Maharashtra, India',
  description:
    'Pursuing rigorous engineering coursework covering Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Deep Learning, Natural Language Processing, Computer Networks, and Software Engineering.',
  highlights: [
    'Focus on hands-on system building: multimodal neural networks, agentic RAG architectures, and scalable API services',
    'Active participation in collaborative academic and engineering group projects',
    'Continuous technical problem solving on LeetCode, Kaggle, and HackerRank',
  ],
};

export const verifiedCredentials = [
  {
    title: 'HackerRank SQL & Python',
    issuer: 'HackerRank',
    description: 'Verified assessment in advanced SQL queries, complex joins, subqueries, and Python programming fundamentals.',
    link: 'https://www.hackerrank.com/profile/pankaj_yadav_bt1',
  },
  {
    title: 'Competitive Problem Solving',
    issuer: 'LeetCode',
    description: 'Active practice in core data structures, algorithms, dynamic programming, and system optimization.',
    link: 'https://leetcode.com/u/pankajyadav200/',
  },
  {
    title: 'Machine Learning Competitions & Analysis',
    issuer: 'Kaggle',
    description: 'Data analysis notebooks, feature engineering workflows, and machine learning model exploration.',
    link: 'https://www.kaggle.com/pankajyadavbtech2023',
  },
];
