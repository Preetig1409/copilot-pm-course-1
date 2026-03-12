# Module 1.10: Copilot in SharePoint & Collaboration

**Duration:** 20 minutes
**Prerequisites:** Modules 1.1-1.9 completed, SharePoint with Copilot enabled

---

SharePoint is where your organization's institutional knowledge lives — PRDs, meeting notes, research, project files. This module teaches you to use Copilot as a universal search layer across all of it, letting you find and query documents in seconds using plain English instead of folder browsing.

## What You'll Learn

By the end of this module, you will:
1. Find documents across SharePoint using natural language
2. Summarize SharePoint sites and document libraries
3. Ask questions about documents without opening them
4. Get updates on recent changes across sites
5. Integrate SharePoint content into your PM workflows

### Technical Prerequisites for this Module

Before starting Module 1.10, confirm:

1. **SharePoint access** — You have access to at least one SharePoint site (check via sharepoint.com)
2. **Copilot for SharePoint** — Copilot's ability to search SharePoint content is part of M365 Copilot Enterprise; confirm it's enabled by trying: go to copilot.microsoft.com and type "Find a recent document" — if Copilot returns results from your SharePoint, you're ready
3. **Content to search** — You'll need some existing SharePoint content. If you're in a new environment with no content, the exercises will use generic prompts you can observe rather than execute

> *If SharePoint Copilot integration is not enabled in your tenant, contact your IT helpdesk or use the alternative prompts provided in each exercise.*

---

## Why SharePoint + Copilot Matters for PMs

PMs often need to find information scattered across the organization:

| Challenge | Without Copilot | With Copilot |
|-----------|-----------------|--------------|
| Finding a past PRD | Browse folders, search keywords | "Find the Q3 mobile app PRD" |
| Understanding a new team's work | Read through site, open docs | "Summarize what this team does" |
| Checking document updates | Open each file, check history | "What changed this week?" |
| Cross-referencing content | Multiple tabs, manual reading | "Compare these two documents" |

**Time savings: ~2 hours/week** on document discovery and information gathering.

---

## Section 1: Document Discovery

Copilot helps you find documents using natural language instead of keyword searches.

### Accessing Copilot for SharePoint

1. Go to **Microsoft 365 Copilot Chat** (copilot.microsoft.com)
2. Or use **Copilot in M365 apps** with SharePoint context
3. Your work content (including SharePoint) is searchable

### Finding Documents

**Basic document search:**
```
Find the product roadmap document from Q4 2025
```

**More specific:**
```
Find PRDs related to the onboarding project in the Product team's SharePoint
```

**By author or date:**
```
Find documents that Sarah created about user research in the last month
```

**By content:**
```
Find documents that mention "activation rate" or "onboarding funnel"
```

---

## Exercise 1: Find a Document

**Do this now:**

1. Open Copilot Chat (copilot.microsoft.com)
2. Try finding a document you know exists:

```
Find the most recent product roadmap document in our SharePoint
```

```
Find documents about [your current project] created in the last 3 months
```

```
Find the competitive analysis document for [competitor name]
```

**What to notice:**
- Copilot searches across SharePoint sites you have access to
- Results include file names and locations
- You can ask follow-up questions about what it finds

---

## Asking About Documents Without Opening Them

One of the most powerful features: get answers from documents without reading them.

### Prompts for Document Questions

**Summarize a document:**
```
Summarize the key points from the Q4 product roadmap document
```

**Ask specific questions:**
```
What does the mobile app PRD say about the target launch date?
```

**Extract information:**
```
What are the success metrics defined in the activation project brief?
```

**Compare documents:**
```
What are the differences between the Q3 and Q4 roadmap documents?
```

---

## Exercise 2: Ask About a Document

**Do this now:**

1. Think of a document you need information from
2. Ask Copilot without opening it:

```
What are the main goals outlined in [document name]?
```

```
Summarize the decisions made in [meeting notes document]
```

```
What action items are listed in [project document]?
```

---

## Section 2: Site & Library Intelligence

Copilot can summarize entire SharePoint sites and document libraries.

### Summarizing a SharePoint Site

**Understand a new team's site:**
```
Summarize what the Engineering team's SharePoint site contains
```

**Find what's relevant:**
```
What content on the Product team site is relevant to onboarding?
```

**Identify key resources:**
```
What are the most important documents in the Design team's site?
```

### Document Library Intelligence

**Understand a library:**
```
What types of documents are in the PRD library?
```

**Find recent content:**
```
What documents were added to the Product team site this week?
```

**Identify patterns:**
```
What topics are most covered in the Research folder?
```

---

## Exercise 3: Explore a SharePoint Site

**Do this now:**

1. Choose a SharePoint site you have access to
2. Ask Copilot:

```
Summarize what the [Team Name] SharePoint site is for and 
what key documents it contains
```

```
What are the most recently updated documents on [site name]?
```

```
What content on [site name] would be useful for a PM working 
on activation and onboarding?
```

---

## Section 3: Collaborative Workflows

Integrate SharePoint content into your daily PM workflows.

### Combining SharePoint with Other Sources

**Research across sources:**
```
Based on the PRD in SharePoint and recent emails about the project,
summarize the current status of the mobile app initiative
```

**Prepare for meetings:**
```
Find all documents related to tomorrow's roadmap review meeting
and summarize the key discussion points
```

**Create new content from existing:**
```
Based on the user research documents in SharePoint, 
draft a summary of the top 3 user pain points
```

### Recent Updates and Changes

**Stay current:**
```
What documents in the Product team site have been updated 
in the last week?
```

**Track project changes:**
```
What changes were made to the onboarding PRD recently?
```

**Monitor team activity:**
```
What new documents have been added to the Q1 Planning folder?
```

---

## Exercise 4: Integrated Workflow

**Do this now:**

Try a workflow that combines SharePoint with other sources:

```
Find all documents related to [your current project] and create 
a summary of:
1. Current project status
2. Key decisions made
3. Open questions or blockers
4. Next steps
```

Or for meeting prep:

```
I have a meeting about [topic] tomorrow. Find relevant documents 
from SharePoint and summarize what I should know going in.
```

---

## SharePoint Copilot Best Practices

### Do:
- ✅ Use natural language, not keywords
- ✅ Be specific about what you're looking for
- ✅ Ask about documents without opening them first
- ✅ Combine SharePoint search with other M365 sources
- ✅ Use Copilot to stay updated on changes

### Don't:
- ❌ Expect access to sites you don't have permission for
- ❌ Rely on Copilot for confidential document security
- ❌ Assume all content is indexed (new content takes time)
- ❌ Skip verifying important information
- ❌ Forget that Copilot only sees what you can see

---

## Prompt Templates for SharePoint

Save these for quick use:

### Document Discovery
```
Find documents about [topic] in [location/team site]
that were created in [timeframe]
```

### Document Summary
```
Summarize [document name] including:
1. Main purpose
2. Key points
3. Decisions or recommendations
4. Action items
```

### Site Overview
```
Give me an overview of the [Team] SharePoint site:
1. What is it for?
2. Key document types
3. Most important resources
4. Recent activity
```

### Project Research
```
Find all SharePoint documents related to [project name] and:
1. List the key documents
2. Summarize the project status
3. Identify any gaps in documentation
```

---

## Combining the Collaboration Trilogy

You've now mastered Teams, Outlook, and SharePoint with Copilot. Here's how they work together:

| Need | Tool | Copilot Action |
|------|------|----------------|
| Real-time discussion | Teams | Meeting summaries, chat help |
| Async communication | Outlook | Email drafting, thread summaries |
| Document storage | SharePoint | Document discovery, site intelligence |

### Power Workflow Example

**Preparing for a product review:**

1. **SharePoint:** "Find all documents related to Q1 product review"
2. **Outlook:** "Summarize email threads about the Q1 review"
3. **Teams:** "What was discussed in the last product sync meeting?"
4. **Combine:** "Based on all of this, create an agenda for the review"

---

## Module Complete!

You now know:
- ✅ How to find documents using natural language
- ✅ How to ask questions about documents without opening them
- ✅ How to summarize SharePoint sites and libraries
- ✅ How to track recent updates and changes
- ✅ How to integrate SharePoint into PM workflows

---

## Level 1 Complete! 🎉

Congratulations! You've completed all 10 modules of Level 1: Foundation.

**Full Level 1 Summary:**
| Module | Topic | Time Saved |
|--------|-------|------------|
| 1.1-1.3 | Basics & First Tasks | 3 hrs/week |
| 1.4-1.5 | Agents & Personas | 1 hr/week |
| 1.6-1.7 | Memory & M365 Apps | 1 hr/week |
| 1.8 | Teams | 2.5 hrs/week |
| 1.9 | Outlook | 1.5 hrs/week |
| 1.10 | SharePoint | 2 hrs/week |
| **Total** | | **11+ hrs/week** *(full Level 1 cumulative across all modules)* |

---

## Next Steps

Continue to **Level 2: Advanced PM Workflows**

In Level 2, you'll tackle:
- Module 2.1: Writing PRDs with Copilot
- Module 2.2: Analyzing Product Data  
- Module 2.3: Product Strategy

---

## Quick Reference

| Action | Prompt Pattern |
|--------|----------------|
| Find document | "Find [description] in [location]" |
| Summarize doc | "Summarize [document name]" |
| Ask about doc | "What does [doc] say about [topic]?" |
| Site overview | "Summarize what [site] contains" |
| Recent updates | "What was updated in [location] this week?" |

---

**Great work completing Level 1! On to Level 2!**
