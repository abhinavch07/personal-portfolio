
import { Experience, Skill, SocialLink, Education, Certification, Extracurricular, Project, OpenSourceProject } from './types';

export const HERO_DATA = {
  name: "Abhinav Choudhary",
  role: "Program Manager",
  tagline: "Delivering clarity and momentum from idea to impact.",
  bio: "Program Manager with more than a decade of experience aligning diverse teams around shared goals. I lead with clarity, trust, and structured execution to turn strategic vision into sustained, measurable impact."
};

export const CONTACT_INFO = {
  email: "abhinavchoudhary07@gmail.com",
  phone: "+91 9999361976",
  address: "New Delhi, India",
};

export const SKILLS: Skill[] = [
  { 
    title: "Program Leadership & Strategy", 
    description: "Multi-program portfolio management | Transformational initiatives | Strategic planning | Benefits realisation | Program governance | Executive reporting." 
  },
  { 
    title: "Program & Project Management", 
    description: "Multi-project portfolio management | End-to-end program execution | Agile/Scrum methodologies | Sprint planning & retrospectives | Release management | Timeline adherence" 
  },
  { 
    title: "Stakeholder Engagement & Vendor Management", 
    description: "·       Cross-functional collaboration | Executive communication | Requirement gathering | Expectation management | Building trust-based relationships |Vendor selection & contract negotiation | Procurement partnership" 
  },
  { 
    title: "Process Optimisation", 
    description: "Workflow design & improvement | Operational efficiency | Governance frameworks | Standard operating procedures | Continuous improvement | Scalability initiatives" 
  },
  { 
    title: "Risk & Quality Management", 
    description: "Risk identification & mitigation | Issue tracking & resolution | Quality assurance | Dependency management | Compliance monitoring" 
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Program Manager",
    company: "IGT Solutions / Indigo Airlines",
    date: "2025 - Present",
    description: [
      "Led cross-functional strategic program delivery across product, engineering, GTM, and operations teams, and benefits realization to Executive Sponsors and C-suite leadership monthly.",
      "Established enterprise-wide tracking systems using JIRA and Confluence to monitor project portfolio performance, providing executive visibility into delivery health and early-warning insights.",
      "Manage cross-team communication and alignment across multiple geographies, ensuring program milestones, deliverables, and review cycles run smoothly.",
      "Partner with business teams to define program KPIs, optimize workflows, and streamline delivery processes, reducing cycle times by 30%."
    ],
    skills: ["Project", "Program", "Delivery"],
    logo: "https://ui-avatars.com/api/?name=Tech+Corp&background=6366f1&color=fff&size=128&bold=true"
  },
  {
    id: 2,
    role: "Technical Program Manager",
    company: "GupShup Technologies",
    date: "2022 - 2025",
    description: [
      "Managed large-scale program portfolio working cross-functionally with product managers, designers, engineering teams, GTM, business operations, and external partners to guarantee efficient project delivery.",
      "Defined and implemented cross-team processes to improve efficiency and delivery across the organization, establishing metrics to measure and monitor efficiency and effectiveness, and driving adoption across the organization.",
      "Developed comprehensive PMO performance metrics including risk heatmaps and portfolio dashboards on JIRA used in executive reviews to monitor program health and highlight intervention areas."
    ],
    skills: ["Program", "Governance", "Portfolio", "Cross-Functional Collab"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Gupshup.png"
  },
  {
    id: 3,
    role: "Rategain Travel Technologies",
    company: "Creative Agency",
    date: "Jun 2021 - Oct 2021",
    description: [
      "Collaborated with designers to implement pixel-perfect UI.",
      "Developed responsive landing pages for high-profile clients."
    ],
    skills: ["HTML", "SCSS", "JavaScript"],
    logo: "https://ui-avatars.com/api/?name=Creative&background=ec4899&color=fff&size=128&bold=true"
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Post Graduate Diploma (Executive) in Information Systems",
    institution: "Institute of Management & Technology CDL (IMT),Ghaziabad",
    date: "2015 - 2016",
    grade: "B",
    description: "Specialized in Artificial Intelligence and Database Systems. Served as the Technical Head of the Computer Science Society.",
    logoUrl: "https://ui-avatars.com/api/?name=IIT&background=6366f1&color=fff&size=128&bold=true"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Hotel Management",
    institution: "Institute of Hotel Management, Guwahati",
    date: "2007 - 2010",
    grade: "A",
    description: "Major in Physics, Chemistry, and Mathematics. Won the Inter-School Coding Championship.",
    logoUrl: "https://ui-avatars.com/api/?name=DPS&background=a855f7&color=fff&size=128&bold=true"
  }
];

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    id: 1,
    role: "Core Team Member",
    organization: "Google Developer Student Clubs (GDSC)",
    date: "2019 - 2020",
    description: "Organized 10+ workshops on Web Development and Cloud Computing. Mentored 50+ students in starting their open source journey."
  },
  {
    id: 2,
    role: "Volunteer",
    organization: "Code For Cause",
    date: "2018 - 2019",
    description: "Contributing to open source projects that help NGOs. Helped in developing a website for a local animal shelter."
  },
  {
    id: 3,
    role: "Event Coordinator",
    organization: "College Cultural Fest",
    date: "2018",
    description: "Managed logistics and sponsorships for the annual college fest, securing partnerships with 5 major brands."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Issued Aug 2023",
    description: "Validates ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
    credentialUrl: "https://aws.amazon.com/certification/",
    imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "Issued Jan 2023",
    description: "Demonstrates proficiency in building scalable and highly available applications using Google Cloud tools.",
    credentialUrl: "https://cloud.google.com/certification/cloud-developer",
    imageUrl: "https://images.unsplash.com/photo-1531297461136-82bf9f7962ce?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "Issued Dec 2022",
    description: "Comprehensive training in React, JavaScript, HTML, CSS, and UI/UX design principles.",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Portfolio Chatbot",
    description: "An intelligent portfolio assistant powered by Gemini API that answers questions about my experience and skills in real-time.",
    techStack: ["React", "TypeScript", "Google Gemini API", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    techStack: ["Next.js", "Tremor", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
    techStack: ["React", "Redux", "Node.js", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
  }
];

export const OPEN_SOURCE: OpenSourceProject[] = [
  {
    id: 1,
    repo: "facebook/react",
    description: "Contributed to the core React library by fixing a memory leak in the `useEffect` hook cleanup process.",
    role: "Contributor",
    url: "https://github.com/facebook/react",
    stars: 213000
  },
  {
    id: 2,
    repo: "vercel/next.js",
    description: "Improved documentation for image optimization and added examples for custom loaders.",
    role: "Contributor",
    url: "https://github.com/vercel/next.js",
    stars: 110000
  },
  {
    id: 3,
    repo: "tailwindlabs/tailwindcss",
    description: "Fixed a bug in the JIT compiler that caused intermittent build failures in monorepo setups.",
    role: "Contributor",
    url: "https://github.com/tailwindlabs/tailwindcss",
    stars: 75000
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/abhinavch07", iconName: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/abhinavchoudhary07", iconName: "Linkedin" },
  { platform: "Email", url: "mailto:abhinavchoudhary07@gmail.com", iconName: "Mail" },
];
