export const portfolioData = {
  projects: [
    {
      title: "Dork-AI",
      description: "SaaS platform with powerful, integrated all-in-one AI tools for content creation and developers. Built with Next.js, integrated with OpenAI, Replicate AI, and Stripe.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gradient: "linear-gradient(135deg, var(--aqua-primary), var(--aqua-light))",
      titleColor: "var(--aqua-primary)",
      technologies: [
        { name: "TypeScript", color: "var(--aqua-light)" },
        { name: "Next.js", color: "var(--aqua-primary)" },
        { name: "AI APIs", color: "var(--indigo-accent)" }
      ],
      period: "2023 – present",
      link: "https://github.com/paragpurandare/generative_Ai_saas"
    },
    {
      title: "Nivesh Token",
      description: "Blockchain/Web3 crowdfunding platform for startups with automated smart contracts. Features ERC720 tokens and IPFS-based certificates for donors.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gradient: "linear-gradient(135deg, var(--indigo-accent), var(--aqua-light))",
      titleColor: "var(--indigo-accent)",
      technologies: [
        { name: "Solidity", color: "var(--indigo-accent)" },
        { name: "Thirdweb SDK", color: "var(--aqua-light)" },
        { name: "IPFS", color: "var(--aqua-primary)" }
      ],
      period: "2022"
    },
    {
      title: "Promptify",
      description: "AI-powered platform for sharing and discovering creative prompts. Built with React, Next.js, and Tailwind CSS with Next Auth integration.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gradient: "linear-gradient(135deg, var(--aqua-light), var(--aqua-primary))",
      titleColor: "var(--aqua-light)",
      technologies: [
        { name: "React", color: "var(--aqua-primary)" },
        { name: "Next.js", color: "var(--aqua-light)" },
        { name: "Tailwind CSS", color: "var(--indigo-accent)" }
      ],
      period: "2023 – present"
    },
    {
      title: "Fraud Analysis",
      description: "Machine learning model for predicting fraudulent transactions using Python and Kaggle datasets. Developed actionable insights for financial companies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
      titleColor: "#a855f7",
      technologies: [
        { name: "Python", color: "#a855f7" },
        { name: "Machine Learning", color: "#ec4899" },
        { name: "Data Analysis", color: "#6366f1" }
      ],
      period: "2023 April"
    },
    {
      title: "WaterWise IoT",
      description: "Smart water metering solution integrating IoT devices for precise consumption monitoring and streamlined billing processes.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
      titleColor: "#10b981",
      technologies: [
        { name: "IoT", color: "#10b981" },
        { name: "Sensors", color: "#14b8a6" },
        { name: "Smart Devices", color: "#3b82f6" }
      ],
      period: "2023 March"
    },
    {
      title: "Red Wine Band",
      description: "Official music band member and performer at VIT Pune's 'Aaroha' music club. Combining technical skills with creative musical expression.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gradient: "linear-gradient(135deg, #ef4444, #f59e0b)",
      titleColor: "#ef4444",
      technologies: [
        { name: "Music", color: "#ef4444" },
        { name: "Performance", color: "#f59e0b" },
        { name: "Guitar", color: "#f97316" }
      ],
      period: "2023 – present"
    }
  ],
  skillCategories: [
    {
      title: "Frontend Development",
      color: "var(--aqua-primary)",
      type: "progress",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Three.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      color: "var(--aqua-light)",
      type: "progress",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Express.js", level: 85 }
      ]
    },
    {
      title: "Blockchain & AI",
      color: "var(--indigo-accent)",
      type: "progress",
      skills: [
        { name: "Solidity", level: 80 },
        { name: "AI Integration", level: 85 },
        { name: "Python", level: 78 }
      ]
    },
    {
      title: "Development Tools",
      color: "var(--aqua-primary)",
      type: "badges",
      items: [
        "Git/GitHub", "VS Code", "Figma", "Postman", "Jupyter", "Canva", "GitHub Copilot", "ChatGPT"
      ]
    },
    {
      title: "Professional Certifications",
      color: "var(--aqua-light)",
      type: "list",
      items: [
        "Backend Development and APIs - FreeCodeCamp (Comprehensive Node.js, Express, MongoDB certification)",
        "Digital Marketing Fundamentals - Google (Complete digital marketing strategies and analytics)",
        "Communication and Soft Skills - LinkedIn Learning & TCS iON (Professional communication in technology environments)",
        "Instrumentation Engineering - VIT Pune (B.Tech with 8.64 CPI, specialized in modern instrumentation systems)"
      ]
    },
    {
      title: "Languages Spoken",
      color: "var(--indigo-accent)",
      type: "languages",
      languages: [
        { name: "English", level: 5, description: "Native proficiency - Professional communication" },
        { name: "Hindi", level: 5, description: "Native speaker - Complete fluency" },
        { name: "Marathi", level: 5, description: "Mother tongue - Perfect command" }
      ]
    }
  ]
};
