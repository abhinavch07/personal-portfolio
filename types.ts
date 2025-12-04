
export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
  imageUrl: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  date: string;
  grade: string;
  description: string;
  logoUrl?: string;
}

export interface Extracurricular {
  id: number;
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface OpenSourceProject {
  id: number;
  repo: string;
  description: string;
  role: string;
  url: string;
  stars: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string; // Used to map to Lucide icons
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}