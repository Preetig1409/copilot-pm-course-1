import { CourseStructure, ResourceSection } from '../types/course'

export const courseStructure: CourseStructure = {
  course: {
    title: "Microsoft Copilot for Product Managers",
    version: "1.0.0",
    description: "A comprehensive course teaching PMs to leverage Microsoft Copilot for everyday work",
    targetAudience: "Product Managers",
    prerequisites: [
      "Microsoft 365 Copilot Enterprise license",
      "OneDrive access",
      "Basic familiarity with M365 apps"
    ],
    estimatedDuration: "6 hours",
    lastUpdated: "2026-01-18"
  },
  levels: [
    {
      id: "1",
      title: "Foundation",
      description: "Core Copilot skills for PMs",
      modules: [
        {
          id: "1.1",
          title: "Welcome to Microsoft Copilot",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.1-welcome/MODULE.md",
          objectives: [
            "Understand what Microsoft Copilot is",
            "Access Copilot via browser and shortcuts",
            "Meet Accenture Internal Digital Products (company context)"
          ]
        },
        {
          id: "1.2",
          title: "Setting Up Your Workspace",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.2-workspace-setup/MODULE.md",
          objectives: [
            "Set up optimal workspace",
            "Upload files to Copilot",
            "Use ContextIQ and OneDrive"
          ]
        },
        {
          id: "1.3",
          title: "Your First PM Tasks",
          duration: "30 min",
          path: "lesson-modules/1-fundamentals/1.3-first-tasks/MODULE.md",
          objectives: [
            "Process meeting notes",
            "Synthesize user interviews",
            "Transform communications"
          ]
        },
        {
          id: "1.4",
          title: "Researcher & Analyst Agents",
          duration: "25 min",
          path: "lesson-modules/1-fundamentals/1.4-researcher-analyst-agents/MODULE.md",
          objectives: [
            "Use Researcher for deep research",
            "Use Analyst for data reasoning",
            "Combine agents for workflows"
          ]
        },
        {
          id: "1.5",
          title: "Persona Prompting",
          duration: "20 min",
          path: "lesson-modules/1-fundamentals/1.5-persona-prompting/MODULE.md",
          objectives: [
            "Create effective persona prompts",
            "Get multi-perspective feedback",
            "Build a prompt library"
          ]
        },
        {
          id: "1.6",
          title: "Building Context with Memory",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.6-copilot-memory/MODULE.md",
          objectives: [
            "Use Copilot Memory feature",
            "Create context documents",
            "Manage persistent context"
          ]
        },
        {
          id: "1.7",
          title: "Copilot Across M365 Apps",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.7-m365-navigation/MODULE.md",
          objectives: [
            "Use Copilot in Word, Excel, PowerPoint",
            "Navigate between chat and in-app",
            "Master keyboard shortcuts"
          ]
        },
        {
          id: "1.8",
          title: "Copilot in Microsoft Teams",
          duration: "25 min",
          path: "lesson-modules/1-fundamentals/1.8-teams-integration/MODULE.md",
          objectives: [
            "Get meeting summaries and action items",
            "Catch up on missed meetings",
            "Use Copilot in chats and channels"
          ]
        },
        {
          id: "1.9",
          title: "Copilot in Outlook",
          duration: "20 min",
          path: "lesson-modules/1-fundamentals/1.9-outlook-integration/MODULE.md",
          objectives: [
            "Draft emails with tone adjustment",
            "Summarize long email threads",
            "Prepare for meetings from calendar"
          ]
        },
        {
          id: "1.10",
          title: "Copilot in SharePoint & Collaboration",
          duration: "20 min",
          path: "lesson-modules/1-fundamentals/1.10-sharepoint-collaboration/MODULE.md",
          objectives: [
            "Find documents using natural language",
            "Summarize SharePoint sites and libraries",
            "Track updates and integrate into workflows"
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Advanced PM Workflows",
      description: "Complex PM tasks with Copilot",
      modules: [
        {
          id: "2.1",
          title: "Writing PRDs with Copilot",
          duration: "35 min",
          path: "lesson-modules/2-advanced-pm-work/2.1-write-prd/MODULE.md",
          objectives: [
            "Use Copilot as thinking partner",
            "Work through PRD sections",
            "Get multi-perspective feedback"
          ]
        },
        {
          id: "2.2",
          title: "Analyzing Product Data",
          duration: "30 min",
          path: "lesson-modules/2-advanced-pm-work/2.2-analyze-data/MODULE.md",
          objectives: [
            "Upload and analyze data",
            "Use Excel Copilot",
            "Interpret A/B tests with Analyst"
          ]
        },
        {
          id: "2.3",
          title: "Product Strategy",
          duration: "30 min",
          path: "lesson-modules/2-advanced-pm-work/2.3-product-strategy/MODULE.md",
          objectives: [
            "Apply strategic frameworks",
            "Conduct competitive analysis",
            "Prioritize roadmap items"
          ]
        }
      ]
    },
    {
      id: "3",
      title: "Product Visuals",
      description: "Creating visuals with DALL-E and Designer",
      modules: [
        {
          id: "3.1",
          title: "Image Generation Basics",
          duration: "20 min",
          path: "lesson-modules/3-product-visuals/3.1-image-basics/MODULE.md",
          objectives: [
            "Generate images with DALL-E 3",
            "Write effective image prompts",
            "Iterate and refine outputs"
          ]
        },
        {
          id: "3.2",
          title: "PM Visuals",
          duration: "25 min",
          path: "lesson-modules/3-product-visuals/3.2-pm-visuals/MODULE.md",
          objectives: [
            "Create persona illustrations",
            "Generate journey maps and diagrams",
            "Build marketing assets"
          ]
        }
      ]
    }
  ]
}

export const resourceStructure: ResourceSection[] = [
  {
    id: "company-context",
    title: "Company Context",
    categories: [
      {
        id: "taskflow",
        title: "Accenture",
        files: [
          { id: "company", title: "Company Overview", path: "company-context/COMPANY.md" },
          { id: "personas", title: "User Personas", path: "company-context/PERSONAS.md" },
          { id: "product", title: "Product Details", path: "company-context/PRODUCT.md" },
          { id: "competitive", title: "Competitive Landscape", path: "company-context/COMPETITIVE.md" }
        ]
      }
    ]
  },
  {
    id: "prompt-library",
    title: "Prompt Library",
    categories: [
      {
        id: "personas",
        title: "Persona Prompts",
        files: [
          { id: "executive", title: "Executive Persona", path: "prompt-library/personas/executive.md" },
          { id: "engineer", title: "Engineer Persona", path: "prompt-library/personas/engineer.md" },
          { id: "user-researcher", title: "User Researcher Persona", path: "prompt-library/personas/user-researcher.md" }
        ]
      },
      {
        id: "templates",
        title: "Templates",
        files: [
          { id: "meeting-notes", title: "Meeting Notes", path: "prompt-library/templates/meeting-notes.md" },
          { id: "communication-transform", title: "Communication Transform", path: "prompt-library/templates/communication-transform.md" },
          { id: "user-research-synthesis", title: "User Research Synthesis", path: "prompt-library/templates/user-research-synthesis.md" }
        ]
      }
    ]
  },
  {
    id: "sample-files",
    title: "Sample Files",
    categories: [
      {
        id: "meeting-notes",
        title: "Meeting Notes",
        files: [
          { id: "meeting-raw", title: "Meeting Notes (Raw)", path: "sample-files/meeting-notes/meeting-notes-raw.md" },
          { id: "product-sync", title: "Product Sync Notes", path: "sample-files/meeting-notes/product-sync-notes.md" }
        ]
      },
      {
        id: "user-interviews",
        title: "User Interviews",
        files: [
          { id: "interview-01", title: "User Interview 01", path: "sample-files/user-interviews/user-interview-01.md" },
          { id: "interview-02", title: "User Interview 02", path: "sample-files/user-interviews/user-interview-02.md" },
          { id: "interview-03", title: "User Interview 03", path: "sample-files/user-interviews/user-interview-03.md" },
          { id: "interview-04", title: "User Interview 04", path: "sample-files/user-interviews/user-interview-04.md" },
          { id: "interview-05", title: "User Interview 05", path: "sample-files/user-interviews/user-interview-05.md" },
          { id: "interview-06", title: "User Interview 06", path: "sample-files/user-interviews/user-interview-06.md" },
          { id: "interview-07", title: "User Interview 07", path: "sample-files/user-interviews/user-interview-07.md" },
          { id: "interview-08", title: "User Interview 08", path: "sample-files/user-interviews/user-interview-08.md" }
        ]
      }
    ]
  }
]

// Helper function to get all modules in order
export function getAllModules() {
  return courseStructure.levels.flatMap(level => level.modules)
}

// Helper function to get a module by ID
export function getModuleById(id: string) {
  return getAllModules().find(m => m.id === id)
}

// Helper function to get level by module ID
export function getLevelByModuleId(moduleId: string) {
  return courseStructure.levels.find(level =>
    level.modules.some(m => m.id === moduleId)
  )
}

// Helper function to get prev/next module
export function getAdjacentModules(currentId: string) {
  const modules = getAllModules()
  const currentIndex = modules.findIndex(m => m.id === currentId)

  return {
    prev: currentIndex > 0 ? modules[currentIndex - 1] : null,
    next: currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null
  }
}

// Helper function to get resource by path
export function getResourceByPath(path: string) {
  for (const section of resourceStructure) {
    for (const category of section.categories) {
      const file = category.files.find(f => f.path === path)
      if (file) {
        return { section, category, file }
      }
    }
  }
  return null
}
