
import { Experience, Skill, SocialLink, Education, Certification, Extracurricular, Project, OpenSourceProject } from './types';

export const HERO_DATA = {
  name: "Abhinav Choudhary",
  role: "Program Manager",
  tagline: "Delivering clarity and momentum from idea to impact.",
  bio: "Strategic Program Manager with deep expertise in technology-driven transformation. I lead with clarity and structured execution, enabling organizations to scale, innovate, and achieve measurable outcomes. My strength lies in aligning diverse teams around long-term vision while delivering short-term wins that build momentum."
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
    description: "Cross-functional collaboration | Executive communication | Requirement gathering | Expectation management | Building trust-based relationships |Vendor selection & contract negotiation | Procurement partnership" 
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
      "Mitigated project-wide risks through structured governance and reporting, ensuring seamless delivery across multiple interdependent projects.",
      "Manage cross-team communication and alignment across multiple geographies, ensuring program milestones, deliverables, and review cycles run smoothly.",
      "Partner with business teams to define program KPIs, optimize workflows, and streamline delivery processes, reducing cycle times by 30%."
    ],
    skills: ["Project", "Program", "Delivery"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg"
  },
  {
    id: 2,
    role: "Technical Program Manager",
    company: "GupShup Technologies",
    date: "2022 - 2025",
    description: [
      "Managed large-scale program portfolio working cross-functionally with product managers, designers, engineering teams, GTM, business operations, and external partners to guarantee efficient project delivery.",
      "Defined and implemented cross-team processes to improve efficiency and delivery across the organization, establishing metrics to measure and monitor efficiency and effectiveness, and driving adoption across the organization.",
      "Developed metrics and KPIs to measure project performance and PMO effectiveness, generating regular reports on project status, risks, issues, and resource utilization."
    ],
    skills: ["Program", "Governance", "Portfolio", "Cross-Functional Collab"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Gupshup.png"
  },
  {
    id: 3,
    role: "Senior Manager Engineering",
    company: "Rategain Travel Technologies",
    date: "Aug 2016 - Jan 2022",
    description: [
      "Led multiple end-to-end project execution for travel tech and SaaS product rollouts, collaborating with product owners, architects, and external vendors.",
      "Owned project delivery, milestone tracking, and stakeholder communication, with strong emphasis on execution, release management, and risk identification.",
      "Strengthened client relationships with agencies and vendor groups, driving long-term partnerships."
    ],
    skills: ["Service Delivery", "Product", "Start Up","Project Management"],
    logo: "https://rategain.com/wp-content/uploads/2025/11/RateGain-logo-Vivid-Lavender.png"
  },
  {
    id: 4,
    role: "Implementation Concultant / Customer Support Analyst",
    company: "Oracle India Pvt. Ltd",
    date: "Dec 2013 - Jul 2026",
    description: [
      "Managed concurrent implementations of Oracle hospitality products for travel and hospitality clients.",
      "Ensured adherence to scope, timeline, and budget while maintaining high-quality standards.",
      "Conducted comprehensive risk analysis and developed mitigation strategies to respond to challenges promptly, ensuring project continuity and stakeholder satisfaction."
    ],
    skills: ["Service Delivery", "Product", "Implementation"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Oracle_redlogo.jpg"
  },
  {
    id: 5,
    role: "Night Auditor / Front Office Supervisor",
    company: "Marriott Hotels / Claridges Hotels",
    date: "Jul 2010 - Nov 2013",
    description: [
      "Served as the first point of contact with guests & Resolving guest concerns, complaints, and comments regarding front office issues.",
      "Prepared a daily summary of cash, check, and credit card activities that occurred at the front desk.",
      "Prepare the night reports, send them to managers & hand over any incident to the GM."
    ],
    skills: ["Service Delivery", "Hospitality", "Guest Relations"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Marriott_hotels_logo14.svg"
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Post Graduate Diploma (Executive) in Information Systems",
    institution: "Institute of Management & Technology CDL (IMT),Ghaziabad",
    date: "2015 - 2016",
    grade: "B",
    description: "Specialized in Business Operations and Information Systems.",
    logoUrl: "https://www.imtcdl.ac.in/wp-content/uploads/2024/05/imt-logo-black.png"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Hotel Management",
    institution: "Institute of Hotel Management, Guwahati",
    date: "2007 - 2010",
    grade: "A",
    description: "Specialized in Hospitality and Hotel Management.",
    logoUrl: "https://ihmctanghy.org.in/wp-content/uploads/2019/08/logo-white-925x339.png"
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
    name: "Project Management Professional",
    issuer: "PMI",
    date: "Issued Nov 2024",
    description: "Validates ability to showcase Project Management Principles.",
    credentialUrl: "https://www.credly.com/badges/22a79bab-eeee-41d5-9f20-800693a24e1f/public_url",
    imageUrl: "https://images.credly.com/size/680x680/images/731e7ef4-9b0c-4d7b-ab65-23cc699c0aa3/blob"
  },
  {
    id: 2,
    name: "Professional Scrum Master 1",
    issuer: "Scrum.Org",
    date: "Issued Jan 2023",
    description: "Demonstrates proficiency in Agile and Scrum.",
    credentialUrl: "https://www.credly.com/badges/38a5814e-cbc7-4f7e-8fc9-5c8f8d42f2cd/public_url",
    imageUrl: "https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png"
  },
  {
    id: 3,
    name: "McKinsey Forward Program",
    issuer: "McKinsey",
    date: "Issued Jul 2025",
    description: "Validates Resilience and Business Consulting .",
    credentialUrl: "https://www.credly.com/badges/ea47ff09-b099-4b1f-b9c0-09152c6af635/public_url",
    imageUrl: "https://www.mckinsey.org/~/media/mckinsey/careers%…umb_1098x618.jpg?cq=50&mw=767&car=16:9&cpy=Center"
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
  { platform: "Topmate", url: "https://topmate.io/abhinav_choudhary", iconName: "Presentation" },
];
