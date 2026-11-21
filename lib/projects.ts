// Project data shared by the homepage cards and the /work/[slug] case-study
// pages. Text follows the copy guidelines in CLAUDE.md.

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  /** Employer, for projects built at work. Shown instead of a generic tag. */
  company?: string;
  role?: string;
  period?: string;
  description: string;
  /** Exactly three "Label: body" entries: Problem, What I did, Result. */
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  isCompanyProject?: boolean;
}

const CASE_LABELS = new Set(["Problem", "What I did", "Result"]);

export const parseFeature = (feature: string) => {
  const idx = feature.indexOf(": ");
  if (idx === -1) return { label: null, body: feature };
  const label = feature.slice(0, idx).trim();
  return CASE_LABELS.has(label)
    ? { label, body: feature.slice(idx + 2).trim() }
    : { label: null, body: feature };
};

export const projects: Project[] = [
  {
    title: "VersEye",
    slug: "verseye",
    company: "QBS Co.",
    subtitle: "Workforce monitoring platform for enterprise teams",
    role: "Full-stack engineer at QBS Co. (.NET + Next.js)",
    period: "Feb 2026 – Oct 2026",
    description:
      "Managers use VersEye to watch live activity, KPIs and logs across their organisation. I worked on the .NET backend and the Next.js dashboards: caching, auth, permissions and the live monitoring screens.",
    features: [
      "Problem: The live monitoring screens called the same external services on every refresh and took 1.6s to load. Admins also assigned permissions one at a time, by hand.",
      "What I did: Cached third-party responses and metadata in Redis and merged the duplicate API calls behind each screen, across 10+ services. Added JWT auth with refresh-token rotation and built an RBAC screen for assigning 278 permissions in bulk.",
      "Result: Screens load in under 600ms, onboarding a new team takes about 40% less time, and 21 KPIs update live at org, employee and product level.",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT",
      "RBAC",
      "SSR",
      "Monorepo",
      "Micro-frontends",
    ],
    // live: internal platform URL removed for privacy/company policy
    featured: true,
    isCompanyProject: true,
  },
  {
    title: "Ajeek-KSA",
    slug: "ajeek-ksa",
    company: "QBS Co.",
    subtitle: "Multi-tenant service marketplace in Saudi Arabia",
    role: ".NET intern at QBS Co.",
    period: "Dec 2024 – Mar 2025",
    description:
      "A platform where service companies take orders, run jobs and meet their SLAs, each with its own business rules. I built two of its .NET microservices.",
    features: [
      "Problem: Service workflows were run by hand and SLA tracking was spread across tools, so late jobs were spotted late and compliance was hard to prove.",
      "What I did: Built the Product service and an SLA orchestration service in .NET with Clean Architecture. SLA checks run in the background and flag breaches automatically. Added structured logging with Serilog and Application Insights.",
      "Result: Less manual follow-up for the operations team, and one place to see SLA status across every tenant.",
    ],
    technologies: [
      ".NET 6",
      "Microservices",
      "Clean Architecture",
      "Entity Framework",
      "PostgreSQL",
      "JWT",
      "Docker",
      "REST API",
      "Serilog",
      "Application Insights",
      "Azure Blob Storage",
      "FluentValidation",
      "Swagger",
    ],
    // live link removed for privacy/company policy
    featured: true,
    isCompanyProject: true,
  },
  {
    title: "TenXed",
    slug: "tenxed",
    company: "KoderLabs",
    subtitle: "Learning platform for parents, children and instructors",
    role: ".NET developer at KoderLabs",
    period: "Apr 2025 – Oct 2025",
    description:
      "A .NET 8 platform where parents enrol their children, instructors run classes, and payments and notifications happen in the background. I worked on auth, notifications and payments.",
    features: [
      "Problem: Three kinds of users needed different sign-up flows and permissions, plus notifications and payments that wouldn't slow down the main API.",
      "What I did: Set up JWT and role-based access with OTP sign-up. Moved email and push notifications to queue-triggered Azure Functions. Integrated Stripe payments and Azure Blob Storage, and added Serilog and Application Insights for tracing.",
      "Result: Background work runs off the request path, each role sees only what it should, and production issues can be traced from the logs.",
    ],
    technologies: [
      ".NET 8",
      "ASP.NET Core Web API",
      "Azure Functions",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "Stripe",
      "Azure Blob Storage",
      "SignalR",
      "Redis",
      "Serilog",
      "Application Insights",
      "FluentValidation",
      "MailKit / SendGrid",
      "NSwag / OpenAPI",
      "Clean Architecture",
    ],
    featured: true,
    isCompanyProject: true,
    // live/github omitted — internal/proprietary codebase
  },
  {
    title: "TrackWise",
    slug: "trackwise",
    subtitle: "Personal finance app with ML categorisation and forecasting",
    role: "Backend & ML lead, final-year project (team of 3)",
    period: "May 2025 – Present",
    description:
      "TrackWise sorts your transactions into categories, forecasts next month's spending, and flags anything unusual. It's live on Azure and Vercel, with 10 beta users on real data.",
    features: [
      "Problem: Most expense apps make you categorise everything by hand, and they tell you nothing about what's coming next or what looks wrong.",
      "What I did: Designed a 56-endpoint NestJS + PostgreSQL backend (modular monolith) on Azure. Built a separate Flask ML service on Hugging Face Spaces with three models: SBERT + logistic regression for categories, Prophet for forecasts, and an anomaly detector, with caching and rate limiting to hide cold starts. Added Jest tests, GitHub Actions CI/CD and email 2FA.",
      "Result: 88% accuracy on transaction categories, 0.87 AUC-ROC on anomaly detection, and spending forecasts once a user has 3+ months of history.",
    ],
    technologies: [
      "NestJS",
      "Angular 19",
      "PostgreSQL",
      "Flask",
      "Redis",
      "SBERT",
      "scikit-learn",
      "Prophet",
      "Jest",
      "GitHub Actions",
      "Azure",
      "Vercel",
      "Hugging Face",
      "2FA",
      "REST API",
    ],
    github: "https://github.com/Muhammad-Taqi-Dev/TrackWise",
    live: "https://track-wise2.vercel.app/home",
    featured: true,
  },
  {
    title: "CourseFlow",
    slug: "courseflow",
    subtitle: "University timetable generator",
    period: "Dec 2024 – Jan 2025",
    description:
      "Generates university timetables without clashes using Greedy and Backtracking algorithms, and gives admins a dashboard to compare the two and sort out anything left over. Flask + SQLite.",
    features: [
      "Problem: Building a timetable by hand keeps producing clashes, like the same teacher or room booked twice.",
      "What I did: Implemented Greedy and Backtracking schedulers, conflict detection, and an admin dashboard to review results and compare how each algorithm performs.",
      "Result: Clash-free schedules, plus a conflict report for anything that still needs a person to decide.",
    ],
    technologies: ["Flask", "Python", "Algorithms", "SQLite", "Jinja"],
    github: "https://github.com/Muhammad-Taqi-Dev/CourseFlow",
    featured: true,
  },
  {
    title: "Stock Management System",
    slug: "stock-management-system",
    subtitle: "Inventory tracking for multiple stores",
    period: "Jan 2024 – Jul 2024",
    description:
      "Keeps stock levels in sync across several stores with live updates, and warns before an item runs out. Flask + MySQL.",
    features: [
      "Problem: Stores tracked stock by hand, which meant stockouts on some items and overstock on others.",
      "What I did: Built a Flask backend with WebSockets for live stock updates, and threshold-based alerts that fire before an item runs low.",
      "Result: About 80% fewer inventory errors and 65% fewer stockouts.",
    ],
    technologies: ["Flask", "Python", "SQLAlchemy", "MySQL", "Bootstrap"],
    github:
      "https://github.com/Muhammad-Taqi-Dev/Stock-Management-System-Website",
    featured: true,
  },
  {
    title: "Chatbot Interface",
    slug: "chatbot-interface",
    subtitle: "Customer-service bot for English and Roman Urdu",
    period: "Sep 2024 – Oct 2024",
    description:
      "A customer-service chatbot that understands both English and Roman Urdu. Used by 500+ people, with about 85% satisfaction.",
    features: [
      "Problem: Support bots usually handle English only, which leaves out people who type in Roman Urdu.",
      "What I did: Wrote NLTK pattern matching for both languages and a mobile-friendly Flask chat UI.",
      "Result: 500+ users, about 85% satisfaction, and faster first replies.",
    ],
    technologies: ["Flask", "Python", "NLTK", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Muhammad-Taqi-Dev/CHATBOT",
    featured: false,
  },
  {
    title: "Mini Compiler",
    slug: "mini-compiler",
    subtitle: "Compiler for a small C-like language, in Python",
    period: "Mar 2026 – May 2026",
    description:
      "Written from scratch for my compiler design course: lexer, parser, semantic checks and intermediate code for a small C-like language.",
    features: [
      "Problem: I wanted to understand how a compiler works end to end, not just read about it.",
      "What I did: Built four stages: a lexer, a recursive-descent parser, a semantic checker with scoped symbol tables, and an emitter for stack-style IR (PUSH / STORE / LOAD / PRINT).",
      "Result: Turns source code into tokens, symbol tables and IR, with clear messages for semantic errors.",
    ],
    technologies: [
      "Python 3",
      "Lexical Analysis",
      "Recursive Descent Parsing",
      "Semantic Analysis",
      "Intermediate Code Generation",
      "Symbol Table",
      "Compiler Design",
    ],
    github: "https://github.com/Muhammad-Taqi-Dev/mini-compiler-python",
    featured: false,
  },
  {
    title: "LUDO Board Game",
    slug: "ludo-board-game",
    subtitle: "Ludo in C++ with a computer opponent",
    period: "Mar 2024 – May 2024",
    description:
      "A Ludo game in C++ where the board is a circular linked list, so moving a piece is O(1), plus a computer opponent that goes for captures.",
    features: [
      "Problem: Ludo's looping board and branching home paths are awkward to model with plain arrays.",
      "What I did: Modelled the board as circular linked lists and wrote an AI opponent that prioritises captures.",
      "Result: O(1) piece moves and a computer opponent that actually competes.",
    ],
    technologies: [
      "C++",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Windows.h",
    ],
    github: "https://github.com/Muhammad-Taqi-Dev/DSA-Semproj",
    featured: false,
  },
  {
    title: "Flappy Bird Console Game",
    slug: "flappy-bird-console-game",
    subtitle: "Console game in C++",
    period: "Jan 2024 – Feb 2024",
    description:
      "A console game in C++ built around OOP, with pixel-level collision detection and saved high scores. Runs at 60 FPS.",
    features: [
      "Problem: Getting smooth movement and accurate collisions inside a text console.",
      "What I did: Designed a class for each game object, a pixel-level hitbox system, and file I/O for high scores.",
      "Result: Smooth 60 FPS gameplay and high scores that persist between runs.",
    ],
    technologies: ["C++", "OOP", "olcConsoleGameEngine", "Game Dev"],
    github: "https://github.com/Muhammad-Taqi-Dev/Flappy-Bird-Game-Using-OOP",
    featured: false,
  },
  {
    title: "NLP Sentiment Analysis",
    slug: "nlp-sentiment-analysis",
    subtitle: "Sentiment classifier for Amazon product reviews",
    period: "Nov 2023 – Dec 2023",
    description:
      "Classifies Amazon product reviews as positive or negative with about 91% accuracy, with a Streamlit app so non-technical people can try it.",
    features: [
      "Problem: Reading reviews by hand is slow, and the dataset had far more positive reviews than negative ones.",
      "What I did: Balanced the classes with SMOTE, trained SVM and other classifiers, and wrapped the best model in a Streamlit app.",
      "Result: About 91% accuracy and a 34% better F1 score on the minority class.",
    ],
    technologies: ["Python", "NLP", "Scikit-learn", "Streamlit", "ML", "SVM"],
    github: "https://github.com/Muhammad-Taqi-Dev/NLP-CCP",
    featured: false,
  },
  {
    title: "DSA Practice Repository",
    slug: "dsa-practice-repository",
    subtitle: "My LeetCode solutions, organised by pattern",
    period: "Ongoing",
    description:
      "240+ LeetCode problems across 25+ patterns in C++ and Python, organised by topic so I can revise quickly before interviews.",
    features: [
      "Problem: Random practice left gaps in the patterns that interviews actually test.",
      "What I did: Grouped solutions by pattern, with clean, versioned code in C++ and Python.",
      "Result: A reference I can revise from quickly, and a public record of steady practice.",
    ],
    technologies: [
      "C++",
      "Python",
      "Algorithms",
      "Data Structures",
      "LeetCode",
    ],
    github: "https://github.com/Muhammad-Taqi-Dev/DSA---LeetCode",
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
