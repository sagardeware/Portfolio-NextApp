import { ExperienceItem } from '@/types'

export const experiences: ExperienceItem[] = [
  {
    company: "Leucine Pvt Ltd",
    location: "Bangalore",
    overallDuration: "Dec 2024 - Present",
    positions: [
      {
        title: "Software Engineer",
        duration: "May 2025 - Ongoing",
        description: [
          "Core Implementation: Enhanced LeucineOS by building subscription management, user management, marketplace modules, and platform improvements using TypeScript, React, Supabase RPCs, and Supabase APIs.",
          "Third-Party Integrations: Implemented Stripe billing, SSO authentication, and MCP integrations to streamline workflows and improve interoperability.",
          "Automation Testing: Developed Playwright-based frontend automation to improve reliability of critical user flows.",
          "Platform Engineering: Optimized internal tooling and data workflows through improved Supabase usage and modular architecture."
        ]
      },
      {
        title: "Software Engineer Intern",
        duration: "Dec 2024 - Apr 2025",
        description: [
          "Feature Development: Implemented core FDA Tracker features using Java Servlets, REST APIs, TypeScript, and PostgreSQL with modular backend design.",
          "SAP Integration: Built a Java microservice to migrate and sync SAP HANA data into the platform database.",
          "Service Extensions: Integrated printer services and email workflows to enhance module functionality.",
          "Deployment: Deployed production builds on GCP VM instances using PuTTY and WinSCP ensuring stable configurations and smooth rollouts."
        ]
      }
    ],
    technologies: ["Java", "TypeScript", "React", "Node.js", "PostgreSQL", "Supabase", "Stripe", "Playwright", "GCP"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Bangalore",
    duration: "Mar 2024 - Sept 2024",
    description: [
      "Bulk Mailing Application: Developed a bulk mailing application supporting attachments, Excel upload, and grouped mailing using React, Node.js, Express.js, and MySQL.",
      "Backend Architecture: Implemented Redis queueing to optimize mail processing and server load.",
      "Full Stack Development: Contributed to frontend UX, backend API design, and iterative product improvements."
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Redis"]
  }
]
