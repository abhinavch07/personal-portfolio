
import { Experience, Skill, SocialLink, Education, Certification, Extracurricular, Project, OpenSourceProject } from './types';

export const HERO_DATA = {
  name: "Abhinav Choudhary",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter.",
  bio: "I'm a passionate developer who loves building scalable web applications and exploring new technologies. Currently focused on React ecosystem and AI integration."
};

export const CONTACT_INFO = {
  email: "abhinav.choudhary@example.com",
  phone: "+91 98765 43210",
  address: "New Delhi, India",
};

export const SKILLS: Skill[] = [
  { 
    title: "Frontend Development", 
    description: "React.js | Next.js | TypeScript | Tailwind CSS | Redux Toolkit | HTML5 | CSS3" 
  },
  { 
    title: "Backend Development", 
    description: "Node.js | Express.js | PostgreSQL | MongoDB | REST APIs | GraphQL" 
  },
  { 
    title: "Tools & DevOps", 
    description: "Git & GitHub | Docker | AWS (EC2, S3) | CI/CD Pipelines | VS Code | Postman" 
  },
  { 
    title: "Project Management", 
    description: "Project Charter | Team Management | Agile Methodologies | Scrum | Jira | Sprint Planning" 
  },
  { 
    title: "Soft Skills", 
    description: "Effective Communication | Leadership | Problem Solving | Time Management | Collaboration" 
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Tech Corp Inc.",
    date: "2023 - Present",
    description: [
      "Led the migration of legacy codebase to Next.js 14.",
      "Improved site performance by 40% using advanced caching strategies.",
      "Mentored junior developers and conducted code reviews."
    ],
    skills: ["React", "Next.js", "GraphQL"],
    logo: "https://ui-avatars.com/api/?name=Tech+Corp&background=6366f1&color=fff&size=128&bold=true"
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartUp Hustle",
    date: "2021 - 2023",
    description: [
      "Built a SaaS platform from scratch using MERN stack.",
      "Integrated Stripe payments and implemented real-time features with Socket.io.",
      "Deployed and managed infrastructure on AWS EC2."
    ],
    skills: ["MongoDB", "Express", "React", "Node.js"],
    logo: "https://ui-avatars.com/api/?name=StartUp&background=a855f7&color=fff&size=128&bold=true"
  },
  {
    id: 3,
    role: "Web Developer Intern",
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
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology (IIT)",
    date: "2017 - 2021",
    grade: "9.2 CGPA",
    description: "Specialized in Artificial Intelligence and Database Systems. Served as the Technical Head of the Computer Science Society.",
    logoUrl: "https://ui-avatars.com/api/?name=IIT&background=6366f1&color=fff&size=128&bold=true"
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Delhi Public School",
    date: "2015 - 2017",
    grade: "95%",
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
  { platform: "GitHub", url: "https://github.com", iconName: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
  { platform: "Twitter", url: "https://twitter.com", iconName: "Twitter" },
  { platform: "Email", url: "mailto:hello@example.com", iconName: "Mail" },
];