import { PersonalInfo, JourneyStep, MenuItem } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Sagar Deware",
  title: "Software Engineer",
  location: "Bangalore, India",
  bio: "Software engineer specializing in Java, TypeScript, Node.js, React, and scalable backend systems. Experienced in building production-grade applications, automation, integrations, and cloud deployments with a strong focus on clean architecture and reliability.",
  resumeUrl: "https://drive.google.com/file/d/1Pzv0vYffkP-whyIe8khFWQHenN0ZlfBv/view?usp=sharing",
  email: "sagardevre297964@gmail.com",
  phone: "+91-969-1337-249",
  profileImage: "/images/profilephoto.jpg",
  socialLinks: {
    github: "https://github.com/sagardeware",
    linkedin: "https://www.linkedin.com/in/sagar-devre-612866205/",
    behance: "https://www.behance.net/sagardevre",
    portfolio: "https://sagardeware.netlify.app"
  }
}

export const journeySteps: JourneyStep[] = [
  {
    title: "The Beginning",
    description: "Turning ideas into reality through code",
    icon: "💡"
  },
  {
    title: "The Growth",
    description: "Mastering the art of development",
    icon: "🚀"
  },
  {
    title: "The Vision",
    description: "Building the future of technology",
    icon: "🎯"
  }
]

export const menuItems: MenuItem[] = [
  { title: 'Home', href: 'home' },
  { title: 'Education', href: 'education' },
  { title: 'Skills', href: 'tech-stack' },
  { title: 'Projects', href: 'projects' },
  { title: 'UI/UX', href: 'design-projects' },
  { title: 'Experience', href: 'experience' },
  { title: 'Contact', href: 'contact' },
]
