// Personal Information Types
export interface PersonalInfo {
  name: string
  title: string
  location: string
  bio: string
  resumeUrl: string
  email: string
  phone?: string
  profileImage: string
  socialLinks: {
    github: string
    linkedin: string
    behance: string
    portfolio?: string
  }
}

// Tech Stack Types
export interface TechStackItem {
  name: string
  category: 'language' | 'tool' | 'testing' | 'ai-tool' | 'soft-skill'
  icon?: string
}

export interface JourneyStep {
  title: string
  description: string
  icon: string
}

// Project Types
export interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

// Design Project Types
export interface DesignProject {
  title: string
  category: string
  description: string
  imageUrl: string
  tools: string[]
  behanceUrl?: string
  dribbbleUrl?: string
  caseStudyUrl?: string
}

// Experience Types
export interface Position {
  title: string
  duration: string
  description: string[]
}

export interface ExperienceItem {
  company: string
  logo?: string
  location?: string
  overallDuration?: string
  positions?: Position[]
  title?: string
  duration?: string
  description?: string[]
  technologies: string[]
  companyUrl?: string
}

// Education Types
export interface Achievement {
  title: string
  icon: string
  items: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  duration: string
  location: string
  imageUrl: string
  coreCourses: string[]
}

// Contact Types
export interface ContactLink {
  name: string
  url: string
  icon: React.ReactNode
}

export interface ContactMethod {
  title: string
  icon: string
  description: string
  links: ContactLink[]
}

// Navbar Types
export interface MenuItem {
  title: string
  href: string
}
