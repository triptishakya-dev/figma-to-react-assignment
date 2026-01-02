import { Layers, Server, MonitorCheck, Code2 } from 'lucide-react';


export const portfolioItems = [
  {
    id: 1,
    title: "AI Voice Interview Platform",
    description: "Built a scalable AI-driven interview platform supporting real-time speech-to-text and text-to-speech workflows. Integrated large language models (LLMs) to generate dynamic interview questions and provide automated, real-time feedback. Optimized system workflows to ensure low-latency streaming and a smooth user experience.",
    tags: ["Next.js", "Node.js", "OpenAI"],
    image: "/image/voiceInterview.png",
    demoUrl: "https://ai-voice-interview-platform.vercel.app",
    githubUrl: "https://github.com/your-username/ai-voice-interview",
  },
  {
    id: 2,
    title: "Chat with PDF (RAG)",
    description: "Implemented a high-accuracy RAG pipeline enabling context-aware, document-based conversations. Integrated vector embeddings for optimized semantic search and fast PDF retrieval. Designed a fault-tolerant, production-ready architecture for RAG deployments.",
    tags: ["Next.js", "LangChain", "Pinecone"],
    image: "/image/chatpdf.png",
    demoUrl: "https://chat-with-pdf-rag.vercel.app",
    githubUrl: "https://github.com/your-username/chat-with-pdf",
  },
  {
    id: 3,
    title: "AI Product Ads Generator",
    description: "Developed an automated ad-generation engine using OpenAI to create platform-optimized ad content. Designed a highly customizable template system supporting multiple ad formats and user personas. Optimized API workflows to reduce generation time and improve content accuracy.",
    tags: ["Next.js", "OpenAI API"],
    image: "/image/adsgenerator.png",
    demoUrl: "https://ai-ads-generator.vercel.app",
    githubUrl: "https://github.com/your-username/ai-ads-generator",
  },
  {
    id: 4,
    title: "Vercel Clone",
    description: "Built a production-grade deployment platform with GitHub OAuth and automated CI/CD-style build pipelines. Implemented team collaboration, environment previews, and project-level deployment logs. Engineered a scalable serverless deployment workflow inspired by Vercel architecture.",
    tags: ["Next.js", "MongoDB", "GitHub OAuth"],
    image: "/image/vercelclone.png",
    demoUrl: "https://vercel-clone.vercel.app",
    githubUrl: "https://github.com/your-username/vercel-clone",
  },
  {
    id: 5,
    title: "Resume Analyzer",
    description: "Developed an AI-driven resume analysis system with ATS scoring and section-level insights. Built an automated pipeline to evaluate content quality, formatting, keyword density, and job-role alignment. Optimized inference workflows for fast, accurate, and scalable resume analysis.",
    tags: ["Next.js", "OpenAI", "Tailwind CSS"],
    image: "/image/resumeanalyzer.png",
    demoUrl: "https://resume-analyzer.vercel.app",
    githubUrl: "https://github.com/your-username/resume-analyzer",
  },
  {
    id: 6,
    title: "Donation Platform (Razorpay Integration)",
    description: "Built a secure, high-availability donation platform with dynamic forms and real-time transaction updates. Integrated Razorpay for reliable payments and automated email workflows using Resend API. Implemented search, filtering, analytics dashboards, and paginated admin views for efficient donor management.",
    tags: ["Next.js", "Razorpay", "MongoDB", "Tailwind CSS"],
    image: "/image/donation.png",
    demoUrl: "https://bring-smile-d8d4.vercel.app",
    githubUrl: "https://github.com/triptishakya-dev/bring-smile.git",
  },
];




export const skills = [
  {
    id: 1,
    title: "Frontend Development",
    percentage: 95,
    description: "Building user interfaces and client-side applications using React.js, focusing on component-based architecture, state management, hooks, and responsive design.",
    icon: Code2,
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Backend Development",
    percentage: 92,
    description: "Developing server-side applications and APIs using Node.js, Express.js, and handling database operations, authentication, and server logic.",
    icon: MonitorCheck,
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: 3,
    title: "Full Stack Development",
    percentage: 88,
    description: "Combining frontend and backend skills to build complete applications, managing end-to-end development including API design, server logic, and user interfaces.",
    icon: Server,
    color: "from-green-400 to-emerald-400",
  },
  {
    id: 4,
    title: "Database Management",
    percentage: 89,
    description: "Designing, implementing, and managing databases, optimizing data storage, retrieval, and ensuring data integrity and security.",
    icon: Layers,
    color: "from-indigo-400 to-purple-400",
  },
];

