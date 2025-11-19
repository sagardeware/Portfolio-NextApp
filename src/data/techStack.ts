import { TechStackItem } from '@/types'

export const techStack: TechStackItem[] = [
  // Languages
  {
    name: "Java",
    category: "language",
    icon: "☕"
  },
  {
    name: "Node.js",
    category: "language",
    icon: "🟢"
  },
  {
    name: "Express.js",
    category: "language",
    icon: "⚡"
  },
  {
    name: "TypeScript",
    category: "language",
    icon: "📘"
  },
  {
    name: "React.js",
    category: "language",
    icon: "⚛️"
  },
  {
    name: "Bash",
    category: "language",
    icon: "🐚"
  },

  // Tools
  {
    name: "Git",
    category: "tool",
    icon: "🔧"
  },
  {
    name: "Postman",
    category: "tool",
    icon: "📮"
  },
  {
    name: "Docker",
    category: "tool",
    icon: "🐳"
  },
  {
    name: "PostgreSQL",
    category: "tool",
    icon: "🐘"
  },
  {
    name: "MongoDB",
    category: "tool",
    icon: "🍃"
  },
  {
    name: "VS Code",
    category: "tool",
    icon: "💻"
  },
  {
    name: "Supabase",
    category: "tool",
    icon: "⚡"
  },
  {
    name: "PuTTY",
    category: "tool",
    icon: "🖥️"
  },
  {
    name: "WinSCP",
    category: "tool",
    icon: "📁"
  },

  // Testing
  {
    name: "Playwright",
    category: "testing",
    icon: "🎭"
  },

  // AI Tools
  {
    name: "Claude Code",
    category: "ai-tool",
    icon: "🤖"
  },
  {
    name: "ChatGPT",
    category: "ai-tool",
    icon: "💬"
  },
  {
    name: "Cursor",
    category: "ai-tool",
    icon: "✨"
  },

  // Soft Skills
  {
    name: "Problem Solving",
    category: "soft-skill",
    icon: "🧩"
  },
  {
    name: "Attention to Detail",
    category: "soft-skill",
    icon: "🔍"
  },
  {
    name: "Clear Communication",
    category: "soft-skill",
    icon: "💡"
  }
]

export const techStackByCategory = {
  languages: techStack.filter(tech => tech.category === 'language'),
  tools: techStack.filter(tech => tech.category === 'tool'),
  testing: techStack.filter(tech => tech.category === 'testing'),
  aiTools: techStack.filter(tech => tech.category === 'ai-tool'),
  softSkills: techStack.filter(tech => tech.category === 'soft-skill')
}
