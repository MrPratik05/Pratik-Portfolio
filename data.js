const portfolioData = {
  skills: [
  {
    name: 'Python',
    description: 'AI, machine learning and backend development'
  },
  {
    name: 'Generative AI & LLMs',
    description: 'Building applications powered by large language models'
  },
  {
    name: 'LangChain',
    description: 'LLM application development and orchestration'
  },
  {
    name: 'LangGraph',
    description: 'Agentic and multi-step AI workflows'
  },
  {
    name: 'RAG',
    description: 'Retrieval-augmented and knowledge-grounded AI systems'
  },
  {
    name: 'FastAPI & REST APIs',
    description: 'Backend API design and production-style AI services'
  },
  {
    name: 'Docker',
    description: 'Application containerisation and deployment'
  },
  {
    name: 'Git & GitHub Actions',
    description: 'Version control, automated testing and CI/CD workflows'
  },
  {
    name: 'PyTorch',
    description: 'Deep learning model development'
  },
  {
    name: 'TensorFlow',
    description: 'Machine learning and neural network development'
  },
  {
    name: 'Pandas & NumPy',
    description: 'Data processing, manipulation and analysis'
  },
  {
    name: 'OpenCV',
    description: 'Computer vision and image preprocessing'
  },
  {
    name: 'Cloud Platforms',
    description: 'AWS, GCP and Microsoft Azure'
  },
  {
    name: 'PyTest',
    description: 'Automated testing for Python applications'
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
    role: 'Warehouse Systems Operator',
    company: 'Frasers Group — Distribution Operations',
    date: 'Oct 2025 – Present',
    bullets: [
      'Operate Zebra MC3300x enterprise mobile computers and Warehouse Management Systems (WMS) to process high-volume deliveries and maintain accurate real-time inventory records.',
      'Reconcile expected vs. scanned quantities and handle failed scans, quantity mismatches and damaged-stock exceptions through structured troubleshooting and escalation.',
      'Built Excel and Power BI dashboards and automated compliance and training delivery across SuccessFactors and Workday Learning, reducing onboarding processing time by 12%.',
      'Support a 10–15 member team processing up to 15 deliveries per day, contributing to accurate synchronization between physical stock and digital inventory systems.'
    ]
  },
  {
    role: 'Project Intern',
    company: 'Global Shala — Virtual, USA (via Saint Louis University)',
    date: 'Feb 2022 – Mar 2022',
    bullets: [
      'Supported successful delivery of the "Super Hero YOU" initiative through project planning, cross-functional coordination and stakeholder presentations within a multicultural virtual team.',
      'Developed practical leadership, communication and problem-solving skills applicable to software and technology delivery teams.'
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
