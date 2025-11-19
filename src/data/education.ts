import { Education, Achievement } from '@/types'

export const education: Education = {
  institution: "Indian Institute of Information Technology, Vadodara",
  degree: "Bachelor of Technology",
  field: "Computer Science",
  duration: "Oct 2020 - Jul 2024",
  location: "Gandhinagar, India",
  imageUrl: "/images/collage.jpg",
  coreCourses: [
    "Operating Systems",
    "Data Structures",
    "Algorithms",
    "AI",
    "ML",
    "Networking",
    "Databases"
  ]
}

export const achievements: Achievement[] = [
  {
    title: "Technical Expertise",
    icon: "💻",
    items: [
      "Full Stack Development",
      "Backend Architecture",
      "System Integration",
      "Test Automation"
    ]
  },
  {
    title: "Professional Focus",
    icon: "🎯",
    items: [
      "Production-Grade Apps",
      "Cloud Deployment",
      "Clean Architecture",
      "Problem Solving"
    ]
  }
]
