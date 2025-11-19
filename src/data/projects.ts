import { Project } from '@/types'

export const projects: Project[] = [
  {
    title: "User Management Application",
    description: "Developed RBAC-based authentication, user & permission management using React and Node.js. Features role-based access control with comprehensive user management capabilities.",
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/rbacs.jpeg",
    githubUrl: "https://github.com/sagardeware/Role-Based-Access-Control-System",
    liveUrl: "https://rbacs-ui.netlify.app/"
  },
  {
    title: "Earthquake Visualizer",
    description: "Built a global earthquake visualization tool using React, Leaflet, backend data processing, and open APIs. Displays real-time earthquake data from the US Geological Survey (USGS).",
    technologies: ["React", "TypeScript", "Leaflet", "Open APIs"],
    imageUrl: "/images/earvi.jpeg",
    githubUrl: "https://github.com/sagardeware/Earthquake-Visualizer",
    liveUrl: "https://earvi.netlify.app/"
  }
]
