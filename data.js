const portfolioData = {
  skills: [
  {
    name: 'Python',
    description: 'AI engineering, backend development and machine learning'
  },
  {
    name: 'Generative AI & LLMs',
    description: 'Prompt engineering, fine-tuning, LoRA and QLoRA'
  },
  {
    name: 'LangChain & LlamaIndex',
    description: 'LLM applications and retrieval pipelines'
  },
  {
    name: 'LangGraph & Agentic AI',
    description: 'Multi-agent workflows, orchestration and tool calling'
  },
  {
    name: 'RAG & Vector Databases',
    description: 'Embeddings, Pinecone, FAISS, ChromaDB, pgvector and reranking'
  },
  {
    name: 'Model Context Protocol (MCP)',
    description: 'MCP servers and AI tool integration'
  },
  {
    name: 'FastAPI & REST APIs',
    description: 'AI inference services, backend APIs and Pydantic'
  },
  {
    name: 'Docker & Kubernetes',
    description: 'Containerisation, orchestration and deployment'
  },
  {
    name: 'AWS & Microsoft Azure',
    description: 'Cloud deployment and Azure AI Services'
  },
  {
    name: 'Git & GitHub Actions',
    description: 'Version control, automated testing and CI/CD'
  },
  {
    name: 'LLMOps & Evaluation',
    description: 'RAGAS, MLflow, AI guardrails and observability'
  },
  {
    name: 'PyTorch & TensorFlow',
    description: 'Deep learning and neural network development'
  },
  {
    name: 'Pandas, NumPy & SQL',
    description: 'Data processing, analytics and relational databases'
  },
  {
    name: 'Computer Vision & Robotics',
    description: 'OpenCV, reinforcement learning and ROS'
  }
],
  projects: [
  {
    title: 'AssistFlow AI — Agentic Customer Support Platform',
    category: 'Generative AI',
    tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Docker', 'GitHub Actions'],
    desc: 'Agentic customer-support platform with intent classification, retrieval and escalation workflows, deployed as a production-style AI application.',
    github: 'https://github.com/MrPratik05/assistflow-ai',
    demo: 'https://huggingface.co/spaces/MrPratikk/assistflow-ai'
  },

  {
    title: 'Production ML Inference API',
    category: 'MLOps',
    tech: ['FastAPI', 'Docker', 'GitHub Actions', 'PyTest', 'REST API'],
    desc: 'Production-style ML inference API with automated testing, CI/CD, health checks, structured logging and containerised deployment.',
    github: 'https://github.com/MrPratik05/production-ml-inference-api',
    demo: '#'
  },

    
  {
    title: 'Candidrivo — AI Job Application Assistant (In Progress)',
    category: 'Generative AI',
    status: 'In Progress',
    tech: ['Python', 'Streamlit', 'Gemini API', 'Prompt Engineering'],
    desc: 'Currently developing an AI-powered job application assistant. Implemented resume profile extraction, structured profile management, JSON backup and Gemini API integration. Planned features include job discovery, tailored resumes, cover letter generation and application tracking.',
    github: '#',
    demo: '#'
  },

  {
    title: 'AI Financial Analysis Chatbot',
    category: 'Data & AI',
    tech: ['Python', 'Streamlit', 'Pandas', 'Financial Analysis'],
    desc: 'Natural-language interface for exploring structured financial data across revenue, cash flow and balance-sheet metrics.',
    github: 'https://github.com/MrPratik05/financial-analysis-chatbot',
    demo: 'https://financial-analysis-chatbot-p9lk5jtkda8mdqyydoyi3h.streamlit.app/'
  },

  {
    title: 'Customer Support RAG Chatbot',
    category: 'Generative AI',
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini', 'RAG'],
    desc: 'Retrieval-augmented customer-support assistant that searches a business knowledge base, maintains conversational context and provides escalation support.',
    github: 'https://github.com/MrPratik05/RAG',
    demo: '#'
  },

  {
    title: 'MeetingIQ — AI Meeting Assistant',
    category: 'NLP',
    tech: ['Python', 'Streamlit', 'Whisper', 'FFmpeg', 'Speech Recognition'],
    desc: 'AI meeting assistant that accepts audio uploads and converts spoken conversations into searchable text using Whisper-based transcription.',
    github: 'https://github.com/MrPratik05/Meeting-IQ',
    demo: '#'
  },

  {
    title: 'Quantitative Research — Industry Simulation',
    category: 'Data Science',
    tech: ['Python', 'Statistical Modeling', 'Logistic Regression'],
    desc: 'JPMorgan Chase & Co. simulation covering natural-gas price forecasting, probability-of-default modelling and FICO-based borrower risk segmentation.',
    github: 'https://github.com/MrPratik05/Quantitative-Research',
    demo: '#'
  },

  {
    title: 'AI-Powered Delinquency Prediction & Collections Strategy',
    category: 'Machine Learning',
    tech: ['Python', 'Decision Trees', 'EDA', 'Predictive Analytics'],
    desc: 'Tata Group simulation focused on customer delinquency prediction, risk segmentation and data-driven collections strategies.',
    github: '#',
    demo: '#'
  },

  {
    title: 'Animal Image Classification — Computer Vision',
    category: 'Computer Vision',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    desc: 'Computer-vision pipeline using image preprocessing, augmentation and deep learning to classify animal images and evaluate model predictions.',
    github: '#',
    demo: '#'
  },

  {
    title: 'Crop Yield Prediction Using Machine Learning',
    category: 'Machine Learning',
    tech: ['Python', 'Random Forest', 'Gradient Boosting', 'Neural Networks'],
    desc: 'Machine-learning project for forecasting crop yields using historical yield and weather data across multiple predictive models.',
    github: '#',
    demo: '#'
  },

  {
    title: 'Transformer-Based Text Summarization Model',
    category: 'NLP',
    tech: ['Python', 'Transformers', 'NLP', 'PyTorch'],
    desc: 'Transformer-based NLP project for generating concise summaries using generative AI and sequence-to-sequence techniques.',
    github: 'https://github.com/MrPratik05/text-summarizer-transformer',
    demo: '#'
  },

  {
    title: 'µGenAI: Lightweight Generative AI Models',
    category: 'AI Research',
    tech: ['PyTorch', 'TensorFlow', 'Quantisation', 'Pruning', 'Knowledge Distillation'],
    desc: 'MSc research project exploring quantisation, pruning and knowledge distillation to reduce generative AI model size and computational requirements.',
    github: 'https://github.com/MrPratik05/-GenAI-SML-Generative-AI-Models',
    demo: '#'
  },

  {
    title: 'Spiking Neural Network for Audio Processing',
    category: 'AI Research',
    tech: ['Python', 'NEST', 'Spiking Neural Networks'],
    desc: 'Designed a Spiking Neural Network for audio-to-spike and spike-to-audio conversion using the NEST simulation framework.',
    github: '#',
    demo: '#'
  }
],
  experience: [
  {
    role: 'Generative AI Engineer',
    company: 'Silverspace — Remote',
    date: 'Nov 2025 – Present',
    bullets: [
      'Architected RAG pipelines using LangChain, LlamaIndex, embeddings, reranking and vector databases across 8,000 documents, delivering cited answers to 150 users.',
      'Engineered multi-agent workflows using LangGraph, tool calling and Model Context Protocol (MCP), automating 3 business workflows and saving approximately 40 staff hours per month.',
      'Fine-tuned Llama and Mistral models using LoRA, QLoRA and Hugging Face Transformers on 12,000 examples, reducing monthly inference costs by £1,500.',
      'Deployed FastAPI inference services using Docker, Kubernetes, AWS and CI/CD, handling 5,000 daily LLM requests with response times under 2 seconds.',
      'Implemented RAGAS evaluations, prompt regression tests and AI guardrails across 250 test cases, identifying 60 hallucination and prompt-injection failures before production releases.',
      'Improved LLMOps processes using versioned prompts and MLflow experiment tracking, reducing release preparation from 3 days to 1 day.'
    ]
  },
  {
    role: 'Junior AI Engineer',
    company: 'vizva Consultancy Services — India',
    date: 'Feb 2023 – Apr 2024',
    bullets: [
      'Developed computer vision and reinforcement learning pipelines using Python, PyTorch, OpenCV and ROS across 15,000 images, saving 4 seconds per part in pick-and-place operations.',
      'Automated sensor-data preprocessing, model validation and reporting using Python, Pandas and NumPy, saving approximately 120 engineering hours over 14 months.',
      'Prototyped deep learning models for object detection and motion planning, delivering 3 working demonstrations to client stakeholders within 10 weeks.'
    ]
  }
],
  education: [
    {degree:'MSc Artificial Intelligence', school:'Nottingham Trent University, UK', date:'Oct 2025', detail:'Focused on Generative AI, NLP, computer vision, spiking neural networks and efficient AI deployment.'},
    {
  degree: 'B.Eng. Mechanical Engineering',
  school: 'Sandip Institute of Technology and Research Centre, India',
  date: 'Jul 2024',
  detail: 'Final project: Smart Solar Drier — energy-efficient solar drying system with patent filed.'
}
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
