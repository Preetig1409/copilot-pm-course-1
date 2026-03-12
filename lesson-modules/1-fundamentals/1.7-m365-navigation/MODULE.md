# Module 1.7: Copilot Across M365 Apps

**Duration:** 20 minutes
**Prerequisites:** Modules 1.1-1.6 completed

---

## What You'll Learn

By the end of this module, you will:
1. Use Copilot inside Word, Excel, PowerPoint, and Outlook
2. Understand app-specific Copilot capabilities
3. Create documents, analyze data, and build presentations with Copilot
4. Navigate between browser chat and in-app Copilot
5. Know which Copilot to use for which task

---

## The M365 Copilot Ecosystem

Copilot isn't just a chat interface—it's integrated throughout Microsoft 365:

| App | Copilot Capabilities |
|-----|---------------------|
| **Browser Chat** | Research, analysis, general questions, file analysis |
| **Word** | Draft, rewrite, summarize, generate content |
| **Excel** | Analyze data, create formulas, generate charts |
| **PowerPoint** | Create presentations, add slides, design suggestions |
| **Outlook** | Draft emails, summarize threads, suggest replies |
| **Teams** | Meeting summaries, chat insights, action items |
| **OneNote** | Summarize notes, generate content, organize |

---

## Opening Copilot in M365 Apps

### Universal Shortcut
**Windows:** Alt + I
**Mac:** Option + I
This opens the Copilot panel in Word, Excel, and PowerPoint.

> **If the shortcut does not work:**
> - Look for the purple **Copilot icon** in the Home tab of the ribbon
> - In Excel, also check the **Review** tab for Copilot
> - Shortcut availability depends on your Microsoft 365 version and admin settings

---

> **Before these exercises:**
> - Ensure your files are saved and not in "Protected View"
> - Files with sensitivity labels "Highly Confidential - Encrypted" may block Copilot access
> - If Copilot appears greyed out or unavailable, check with your IT team
> - If Alt+I does not work in any app, use the Copilot button in the ribbon Home tab instead

> ---
> **Enterprise Data Guidance**
> Before uploading files or sharing data with Copilot:
> - Copilot operates within your Microsoft 365 tenant — data is not shared externally
> - Files labeled "Highly Confidential — Encrypted" may be blocked by Copilot due to sensitivity policies
> - Do not share client names, deal values, or engagement codes in Copilot prompts
> ---

## Copilot in Word

Word Copilot helps you **create and refine documents**.

### What Word Copilot Can Do

| Task | How to Use |
|------|------------|
| Draft new content | "Write a project proposal for..." |
| Rewrite text | Select text → "Rewrite this to be more concise" |
| Summarize | "Summarize this document in 3 bullet points" |
| Change tone | "Rewrite this for an executive audience" |
| Expand | "Add more detail about the implementation" |
| Generate ideas | "Suggest 5 alternative approaches to..." |

### Exercise: Create a Document with Word Copilot

**Do this now:**

1. Open Microsoft Word
2. Create a new blank document
3. Press **Alt+I** to open Copilot
4. Type this prompt:

```
Create a one-page project brief for AKX's new onboarding wizard.

Include:
- Executive Summary (2-3 sentences)
- Problem Statement
- Proposed Solution
- Success Metrics
- Timeline (high level)
- Risks

Target audience: VP of Product and Engineering Lead
```

5. Copilot generates the document
6. Review and edit as needed

**What to notice:**
- Content appears directly in your document
- You can iterate with follow-up prompts
- Each section can be refined individually

---

## Copilot in Excel

Excel Copilot helps you **analyze data and create insights**.

### What Excel Copilot Can Do

| Task | How to Use |
|------|------------|
| Analyze data | "What are the trends in this data?" |
| Create formulas | "Add a column that calculates growth rate" |
| Generate charts | "Create a bar chart of sales by region" |
| Find insights | "What's surprising about this data?" |
| Format tables | "Format this as a professional report table" |
| Python analysis | "Use Python to do regression analysis" |

### Exercise: Analyze Data with Excel Copilot

**Do this now:**

1. Open Microsoft Excel
2. Create a new spreadsheet with this data:

> *Note: The data below is illustrative for this exercise. When applying these techniques to your own work, use your actual product metrics.*

| Month | Signups | Activated | Activation Rate |
|-------|---------|-----------|-----------------|
| Jan | 500 | 175 | 35% |
| Feb | 550 | 220 | 40% |
| Mar | 600 | 270 | 45% |
| Apr | 580 | 290 | 50% |
| May | 620 | 341 | 55% |

3. Press **Alt+I** to open Copilot
4. Type:

```
Analyze this activation data and:
1. What's the trend?
2. Create a line chart showing the improvement
3. If this trend continues, what will June look like?
4. Add a column calculating month-over-month growth
```

5. Review Copilot's analysis and chart

**What to notice:**
- Copilot understands your data structure
- Creates formulas automatically
- Generates visualizations
- Provides analytical insights

---

## Copilot in PowerPoint

PowerPoint Copilot helps you **create and enhance presentations**.

### What PowerPoint Copilot Can Do

| Task | How to Use |
|------|------------|
| Create from scratch | "Create a presentation about..." |
| Create from document | "Create slides from this Word doc" |
| Add slides | "Add a slide about market opportunity" |
| Improve design | "Suggest a better layout for this slide" |
| Summarize | "Create a summary slide" |
| Speaker notes | "Add speaker notes to all slides" |

### Exercise: Create a Presentation

**Do this now:**

1. Open Microsoft PowerPoint
2. Create a new blank presentation
3. Press **Alt+I** to open Copilot
4. Type:

```
Create a 6-slide presentation about AKX's new onboarding wizard:

Slide 1: Title slide
Slide 2: The Problem (current WAU is 43%, target is 60%)
Slide 3: Our Solution (new onboarding wizard features)
Slide 4: Expected Impact (metrics improvement)
Slide 5: Timeline and Milestones
Slide 6: Ask (what we need from leadership)

Use a professional, modern design style.
```

5. Review the generated presentation
6. Ask Copilot to refine specific slides:

```
Make slide 3 more visual with icons representing each feature
```

---

## Copilot in Outlook

Outlook Copilot helps you **manage email more efficiently**.

### What Outlook Copilot Can Do

| Task | How to Use |
|------|------------|
| Draft emails | "Draft a follow-up email to the design team" |
| Summarize threads | "Summarize this email thread" |
| Suggest replies | "Suggest a polite decline to this request" |
| Improve writing | "Make this more professional" |
| Find information | "What was the deadline mentioned in this thread?" |

### Email Best Practices with Copilot

**Drafting:**
```
Draft an email to my engineering lead about the onboarding project:
- Thank them for the timeline estimate
- Ask about API dependencies
- Propose a sync meeting this week
- Keep it brief and friendly
```

**Replying:**
```
Write a polite response that:
- Acknowledges their concern
- Explains our reasoning
- Offers a compromise
- Maintains a collaborative tone
```

---

## Copilot in Teams

Teams Copilot helps you **stay on top of meetings and conversations**.

### What Teams Copilot Can Do

| Task | How to Use |
|------|------------|
| Meeting summaries | "Summarize what was discussed" |
| Action items | "What action items came from this meeting?" |
| Catch up | "What did I miss in the last hour?" |
| Find decisions | "What decisions were made about the timeline?" |
| Chat insights | "Summarize the key points from this chat" |

### Meeting Recap Example

After a meeting, click Copilot in Teams and ask:
```
Give me a meeting recap including:
- Key decisions made
- Action items (with owners if mentioned)
- Topics that need follow-up
- My personal action items
```

---

## When to Use Each Copilot

### Decision Framework

```
What do you need to do?

CREATE content
├── Document → Word Copilot
├── Presentation → PowerPoint Copilot
├── Email → Outlook Copilot
└── General content → Browser Chat

ANALYZE data
├── Spreadsheet → Excel Copilot
├── Multiple files → Browser Chat
└── Complex analysis → Analyst Agent

RESEARCH
├── Quick question → Browser Chat
├── Deep research → Researcher Agent
└── Project-specific → Upload context + Chat

COMMUNICATE
├── Draft email → Outlook Copilot
├── Refine doc → Word Copilot
└── Summarize meeting → Teams Copilot
```

### Quick Reference Table

| I Want To... | Use This |
|--------------|----------|
| Write a PRD | Word Copilot |
| Analyze metrics | Excel Copilot |
| Create a deck | PowerPoint Copilot |
| Draft an update email | Outlook Copilot |
| Research competitors | Browser Chat + Researcher |
| Get meeting notes | Teams Copilot |
| General questions | Browser Chat |

---

## Tips for Navigating the Ecosystem

### Tip 1: Start in Browser, Finish in Apps
- Do research and planning in Browser Chat
- Create drafts in the appropriate app
- Use in-app Copilot for refinement

### Tip 2: Copy Between Copilots
- Generate content in Browser Chat
- Copy to Word/PowerPoint
- Refine with in-app Copilot

### Tip 3: Upload Outputs as Context
- Create something in Word
- Upload to Browser Chat
- Ask for feedback or iterations

### Tip 4: Use Consistent Shortcuts
- **Alt+I** works in Word, Excel, PowerPoint
- Muscle memory speeds you up

---

## Module Complete!

You now know:
- ✅ How to open Copilot in Word, Excel, PowerPoint, Outlook
- ✅ What each app's Copilot can do
- ✅ When to use browser chat vs in-app Copilot
- ✅ How to create documents, analyze data, build presentations
- ✅ How to navigate the M365 Copilot ecosystem

---

## Great Work on Module 1.7!

You now know how to use Copilot across Word, Excel, and PowerPoint.

Three more modules remain in Level 1:
- 1.8: Teams Integration
- 1.9: Outlook Integration
- 1.10: SharePoint & Collaboration

**Continue to Module 1.8: Copilot in Microsoft Teams →**

---

## Quick Reference: Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Open Copilot (anywhere) | Alt + Spacebar | Option + Spacebar |
| Open Copilot in apps | Alt + I | Option + I |
| Voice input | Hold Alt + Space 2s | Hold Option + Space 2s |

---

**Ready for advanced PM workflows? Let's start Level 2!**
