# Pankaj Yadav — AI / ML Engineer Portfolio

[![Production Site](https://img.shields.io/badge/Domain-pankaj--yadav.com.np-7C3AED?style=flat&logo=vercel)](https://pankaj-yadav.com.np/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Production-quality personal portfolio for **Pankaj Yadav**, an AI/ML Engineer pursuing a B.Tech in Artificial Intelligence & Machine Learning at **Symbiosis Institute of Technology (SIT), Pune, India** (2023–2027).

---

## 🌟 Featured Engineering Projects

1. **[Affectra AI](https://github.com/Pankaj429w63/Affectra-AI)** — *Flagship Multimodal Intelligence Platform*
   * Tri-encoder representations using DistilRoBERTa-base (text), Wav2Vec2-base (audio), and video feature extractors projected to 768-d embeddings.
   * Gated Multimodal Fusion network with multi-task prediction: 7 emotion classes and 3 sentiment classes.
   * FastAPI backend (`/predict`, `/explain`, `/rag`, `/agents`, `/health`), FAISS vector search, and Docker deployment.
   * **Live Demo:** [affectra-ai.vercel.app](https://affectra-ai.vercel.app/)

2. **[TerraMind AI](https://github.com/Pankaj429w63/Terramind-AI)** — *Agricultural Vision & Multi-Agent Diagnosis Platform*
   * PyTorch EfficientNet-B0 vision classifier trained for leaf disease diagnosis across 89 verified disease classes.
   * Seven-agent supervisor architecture orchestrating diagnosis, research, treatment, fertilizer, care, and reporting.
   * RAG knowledge base utilizing TF-IDF lexical reranking and Qdrant vector retrieval.
   * Supabase Auth, PostgreSQL with Row Level Security (RLS), and private storage.
   * **Live Demo:** [terramind-ai-72q1.vercel.app](https://terramind-ai-72q1.vercel.app/)

3. **[Smart Digital Banking System](https://github.com/Pankaj429w63/SmartDigitalBankingSystem)** — *Full-Stack MERN System with Python AI Fraud Detection*
   * React interface for account management, balance inquiries, fund transfers, and transaction histories.
   * Express REST API with JWT authentication, validation middleware, and MongoDB Atlas data models.
   * Dedicated Python AI fraud scoring microservice (`fraud_model.py`, `fraud_api.py`) evaluating real-time risk scores.
   * Modular Java banking module (`java-bank-app/`) implementing core ledger calculations.

4. **[CampusGPT](https://github.com/Pankaj429w63/CampusGPT)** — *B.Tech Group Project · Architecture & In Development*
   * Department-aware university assistant grounded in institutional documents using RAG.
   * BGE-M3 (1024-d embeddings) and ChromaDB vector store paired with a BGE reranker for high-precision passage selection.
   * Python FastAPI backend query and health endpoints with a Next.js/React conversational interface.
   * Local LLM generation using Qwen 2.5:3B via Ollama and structured Excel-based retrieval for departmental timetables.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** React 18 with TypeScript
* **Bundler & Tooling:** Vite 5 with `@/` depth-invariant path aliases
* **Styling:** Tailwind CSS 3.4 with custom purple design tokens (`#7C3AED`, `#8B5CF6`, `#A855F7`)
* **Motion & Interactivity:** Framer Motion
* **Typography:** Outfit (Display), Inter (Sans-serif), DM Mono (Code/Badges)
* **Hosting Target:** Vercel with automatic HTTPS and edge CDN caching
* **Custom Domain:** `https://pankaj-yadav.com.np/`

---

## 🚀 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Pankaj429w63/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Run type-checking
npm run typecheck

# 5. Run ESLint code checks
npm run lint

# 6. Build production bundle
npm run build

# 7. Preview production build locally
npm run preview
```

---

## 🌐 Custom Domain Setup (`pankaj-yadav.com.np`)

1. Connect this repository to your **Vercel** dashboard (`New Project` ➔ Import `portfolio`).
2. In Vercel Project Settings ➔ **Domains**, add `pankaj-yadav.com.np`.
3. In your **register.com.np** DNS management panel, point your domain:
   * **CNAME Record:** `pankaj-yadav.com.np` ➔ `cname.vercel-dns.com.`
   * Or **A Record:** `@` ➔ `76.76.21.21` (Vercel IP)
4. Vercel automatically issues and renews an SSL/TLS certificate for your domain.

---

## 📬 Contact & Profiles

* **Email:** [roypankaj2060@gmail.com](mailto:roypankaj2060@gmail.com)
* **GitHub:** [github.com/Pankaj429w63](https://github.com/Pankaj429w63)
* **LinkedIn:** [linkedin.com/in/pankaj-yadav-0172162a2](https://www.linkedin.com/in/pankaj-yadav-0172162a2/)
* **Kaggle:** [kaggle.com/pankajyadavbtech2023](https://www.kaggle.com/pankajyadavbtech2023)
* **LeetCode:** [leetcode.com/u/pankajyadav200](https://leetcode.com/u/pankajyadav200/)
* **HackerRank:** [hackerrank.com/profile/pankaj_yadav_bt1](https://www.hackerrank.com/profile/pankaj_yadav_bt1)
