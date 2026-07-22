const portfolioData = {
  skills: [
    ['Python', 95], ['Generative AI', 92], ['RAG', 90], ['LangChain', 88], ['LangGraph', 88], ['FastAPI', 86], ['Docker', 84], ['GitHub Actions', 82], ['TensorFlow', 82], ['PyTorch', 82], ['Computer Vision', 80], ['SQL', 78]
  ],
projects: [
  {
    title: 'AssistFlow AI',
    category: 'Generative AI',
    tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Gemini', 'ChromaDB'],
    desc: 'Agentic customer-support platform with intent classification, semantic retrieval, conversational memory and human escalation.',
    github: 'https://github.com/MrPratik05/assistflow-ai',
    demo: 'https://huggingface.co/spaces/MrPratikk/assistflow-ai'
  },

  {
    title: 'Financial Analysis Chatbot',
    category: 'Generative AI',
    tech: ['Python', 'Streamlit', 'Pandas', 'Financial Analysis'],
    desc: 'Interactive financial assistant that answers predefined questions about revenue, net income, cash flow, assets and liabilities using 2023–2025 company data.',
    github: 'https://github.com/MrPratik05/financial-analysis-chatbot',
    demo: '#'
  },

  {
    title: 'Production ML Inference API',
    category: 'MLOps',
    tech: ['FastAPI', 'Docker', 'GitHub Actions', 'Pytest', 'REST API'],
    desc: 'Production-style machine-learning inference service with automated testing, CI/CD, health checks, logging and containerised deployment.',
    github: 'https://github.com/MrPratik05/production-ml-inference-api',
    demo: '#'
  },

  {
    title: 'Customer Support RAG Chatbot',
    category: 'Generative AI',
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini', 'RAG'],
    desc: 'Retrieval-augmented customer-support assistant that searches a business knowledge base, maintains chat context and provides escalation support.',
    github: '#',
    demo: '#'
  },

  {
    title: 'MeetingIQ',
    category: 'NLP',
    tech: ['Python', 'Streamlit', 'Whisper', 'FFmpeg', 'Speech Recognition'],
    desc: 'AI meeting assistant that accepts audio uploads and converts spoken conversations into searchable text using Whisper-based transcription.',
    github: '#',
    demo: '#'
  },

  {
    title: 'µGenAI: Lightweight Generative AI Models',
    category: 'AI Research',
    tech: ['PyTorch', 'Quantisation', 'Pruning', 'Knowledge Distillation'],
    desc: 'MSc research project investigating techniques for reducing the memory usage and computational cost of generative AI models.',
    github: '#',
    demo: '#'
  }
],
  experience: [
    {role:'Training Partner', company:'Frasers Group', date:'Oct 2025 – Present', bullets:['Built structured performance dashboards from training and operational data using Excel, SQL and Power BI.','Reduced onboarding processing time by 12% by redesigning compliance and training delivery workflows across SuccessFactor and Workday Learning.']},
    {role:'Virtual Internship', company:'Global Shala / Saint Louis University', date:'Feb 2022 – Mar 2022', bullets:['Led the Super Hero YOU project in a multicultural virtual team environment.','Coordinated remote collaboration, project planning and presentation activities.']}
  ],
  education: [
    {degree:'MSc Artificial Intelligence', school:'Nottingham Trent University, UK', date:'Oct 2025', detail:'Focused on Generative AI, NLP, computer vision, spiking neural networks and efficient AI deployment.'},
    {degree:'B.Eng. Mechanical Engineering', school:'Sandip Institute of Technology and Research Centre, India', date:'Jul 2024', detail:'Final project: Smart Solar Drier — energy-efficient solar drying system with patent filed.'}
  ],
  certifications: [
    'Microsoft Azure AI Fundamentals (AI-900)',
    'Generative AI with Large Language Models — DeepLearning.AI & AWS',
    'Introduction to Retrieval Augmented Generation (RAG) — Duke University',
    'MCP - Model Content Protocol — Coursera',
    'Quantitative Research Job Simulation — JPMorgan Chase & Co Forage',
    'GenAI Powered Data Analytics Job Simulation — Tata Group & Forage'
  ]
};
