import { ContactMethod } from '@/types'
import { LinkedInIcon, GitHubIcon, BehanceIcon, EmailIcon } from '@/constants/icons'

export const contactMethods: ContactMethod[] = [
  {
    title: "Let's Connect",
    icon: "👋",
    description: "Open for collaborations and interesting projects",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sagar-devre-612866205/",
        icon: <LinkedInIcon />
      },
      {
        name: "GitHub",
        url: "https://github.com/SagarD-123",
        icon: <GitHubIcon />
      },
      {
        name: "Behance",
        url: "https://www.behance.net/sagardevre",
        icon: <BehanceIcon />
      }
    ]
  },
  {
    title: "Contact Info",
    icon: "📧",
    description: "Feel free to reach out through email",
    links: [
      {
        name: "sagardevre297964@gmail.com",
        url: "mailto:sagardevre297964@gmail.com",
        icon: <EmailIcon />
      }
    ]
  },
  {
    title: "Location",
    icon: "📍",
    description: "Pune, India",
    links: []
  }
]
