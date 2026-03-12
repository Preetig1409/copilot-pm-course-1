# Module 1.3: Your First PM Tasks with Copilot

**Duration:** 30 minutes
**Prerequisites:** Modules 1.1-1.2 completed

---

## What You'll Learn

By the end of this module, you will:
1. Process steering committee notes into clear action items
2. Synthesize multiple stakeholder interview transcripts
3. Transform the same content for different audiences (Partners vs. Consultants vs. Executives)
4. Analyze design mockups and provide feedback
5. Perform rapid competitive research on consulting firms

These are the **core PM skills** that will save you hours every week!

---

## Scenario: A Day at Accenture

It's Monday morning in Accenture's Internal Digital Products team. As Senior Product Owner for AKX and ADH, you have:

- 📝 Notes from last week's steering committee meeting that need processing
- 🎤 8 stakeholder interviews that need synthesis (Partners, Consultants, Delivery Managers)
- 📧 An update that needs to go to 3 different audiences (leadership, partners, consultants)
- 🎨 A design mockup for the new AI search feature that needs PM feedback
- 🔍 Research needed on what McKinsey and BCG are doing with their knowledge platforms

Let's tackle each one with Copilot!

---

## Task 1: Steering Committee Notes → Action Items

**Time without Copilot:** 45 minutes
**Time with Copilot:** 3 minutes

### The Problem

You have raw notes from multiple meetings including a steering committee. You need:
- Clear action items with owners and deadlines
- Key decisions documented for the record
- Risks and escalations flagged
- Executive summary for your sponsor

### Step-by-Step

1. **Upload the meeting notes file**
   - Use the 📎 button or drag and drop
   - Upload: `meeting-notes-raw.md` from the sample files

2. **Use this prompt:**

```
Please analyze these meeting notes from Accenture's Internal Digital Products team
and create a structured summary suitable for enterprise governance:

## Executive Summary
- 3-4 sentences summarizing the key outcomes

## Action Items
- List each action item
- Assign owner (based on context)
- Note deadline if mentioned
- Flag priority (Critical/High/Medium)

## Decisions Made
- List any decisions finalized in these meetings
- Note who made/approved the decision

## Risks & Escalations
- Any issues that need to be escalated to sponsors
- Competitive threats mentioned

## Open Questions
- Items needing follow-up or sponsor input

## Next Steps
- What happens next? When is the next checkpoint?

Format as clean markdown suitable for a steering committee update.
```

3. **Review and refine**
   - Copilot extracts the structure
   - You verify owners and deadlines
   - Copy to your status deck or SharePoint

> *After reviewing Copilot's initial output, verify the priorities reflect your actual context. Try a follow-up prompt:*
>
> ```
> The priorities look reasonable. However, please reprioritize [specific item]
> as Critical because [your reason]. Update the action item list.
> ```
>
> *Note: Copilot assigns priorities based on language in the source text. Always review AI-generated priorities against your own judgment of urgency.*

### Try It Now!

Use this sample steering committee notes content if you don't have the file:

```
AKX steering committee 2/13
richard (CKO sponsor) concerned about WAU - stuck at 43%
david kim (MD tech practice) says search is terrible
"my team searches for SAP expertise, gets 500 results, most from 2019"
sarah mitchell mentioned we lost a deal to BCG - they identified experts in 48 hrs, we took 4 days
decision: AI search is #1 priority, mobile can slip if needed
jennifer to assess if we can accelerate Q2 to Q1 end
TODO: me - draft proposal for auto skill profiles from ADH
david will identify 3 practice leads for pilot
richard presenting to CEO next month, needs to show progress
change mgmt meeting later - need adoption campaign for AI search launch
technical review with raj and amit on ADH integration
```

---

## Task 2: Synthesize Stakeholder Interviews

**Time without Copilot:** 3-4 hours
**Time with Copilot:** 5 minutes

### The Problem

You have 8 stakeholder interview transcripts from across Accenture:
- Partners and Practice Leads (Priya's persona)
- Senior Consultants (Marcus's persona)
- Delivery Managers (Elena's persona)
- New Analysts, Project Managers, Knowledge Managers, Operations Leads, Executives

You need to find patterns across roles and prioritize insights by business impact.

### Step-by-Step

**Important:** Copilot can analyze multiple files at once (typically 5–10 depending on file size and your license). For 8 files, we recommend batching:

1. **Batch 1: Upload first 5 interviews**
   - Upload files together
   - Use this prompt:

```
Analyze these 5 stakeholder interviews from Accenture employees. I'm looking
for patterns that will inform our AKX and ADH product priorities.

Please identify:
1. **Common Pain Points** - Issues mentioned by 2+ stakeholders (note their roles)
2. **Feature Requests** - Specific capabilities stakeholders asked for
3. **Competitive Comparisons** - Any mentions of McKinsey, BCG, Deloitte tools
4. **Adoption Barriers** - Why people don't use AKX/ADH
5. **Quick Wins** - Things that seem easy to fix with high impact

For each finding, note:
- Which interviews mentioned it (by participant role)
- Business impact (revenue, efficiency, talent retention)
- Include a compelling quote

Group findings by persona type: Partners, Consultants, Delivery Managers, Others
```

2. **Batch 2: Upload remaining interviews**

   Upload the remaining interview files, then use this prompt:

```
Analyze these additional stakeholder interviews from Accenture.
Use the same format as your previous analysis: identify pain points
by role, feature requests, competitive comparisons, adoption barriers,
and quick wins. Include quotes and note business impact.
```

3. **Combine findings**
   - Ask Copilot to merge the two analyses:

```
Here are findings from two batches of stakeholder interviews at Accenture.
Please merge into a single, prioritized synthesis.

Rank pain points by:
1. Business impact (revenue/efficiency)
2. Frequency (how many mentioned it)
3. Feasibility (how hard to fix)

Create a "Key Insights for Steering Committee" section with the top 5 findings.
```

### Alternative: Use Researcher Agent

For complex synthesis, try the Researcher agent:

1. Upload all files first
2. Click on "Researcher" in the left panel
3. Ask: "Analyze these stakeholder interviews and create a comprehensive research synthesis report for our steering committee"

Researcher takes longer (5-10 min) but produces more thorough analysis.

---

## Task 3: Communication Transformation

**Time without Copilot:** 60 minutes
**Time with Copilot:** 5 minutes

### The Problem

You have ONE update about AI search launching. You need to communicate it to:
- **Partners (Priya)** - High-level business impact, time savings
- **Consultants (Marcus)** - How it helps their daily work
- **Executive Sponsors (Richard)** - Metrics, competitive positioning, ROI

### Step-by-Step

1. **Start with your core message:**

```
I need to communicate this product update to three different audiences at Accenture.

THE UPDATE:
We're launching AI-powered search for AKX next month. In beta testing with
the Technology practice (500 users), average search time dropped from 8 minutes
to 2 minutes. Search satisfaction improved from 3.2/5 to 4.1/5. Expert discovery
improved - users found relevant experts in 15 minutes vs. 2+ days previously.

Please create three versions:

1. **PARTNER COMMUNICATION** (for Practice Leads like Priya)
   - Focus on business impact (winning deals, finding experts)
   - Lead with time savings and competitive advantage
   - 2 short paragraphs, professional but not formal
   - End with "how to get involved in pilot"

2. **CONSULTANT EMAIL** (for consultants like Marcus)
   - Focus on how it helps their daily work
   - Emphasize: find templates faster, stop recreating work
   - Casual, peer-to-peer tone
   - Include 2-3 specific use cases
   - 3-4 short paragraphs

3. **EXECUTIVE BRIEFING** (for steering committee sponsors like Richard)
   - Lead with metrics and competitive positioning
   - Include: adoption targets, ROI, timeline, risks
   - Reference competitive pressure (McKinsey, BCG)
   - Structured with headers
   - Include "asks" for executive support
```

2. **Review each version**
   - Copilot adapts tone, detail level, and focus
   - Each version serves its audience perfectly

### The Power of Style Templates

For recurring communication needs, we've included templates in the `communication-styles/` folder:

- `style-slack-update.md` - Template for Teams/Slack messages
- `style-executive-email.md` - Template for exec communications
- `style-notion-doc.md` - Template for wiki documentation

**Pro tip:** Upload a style template and ask Copilot to "Write in this style."

---

## Task 4: Design Mockup Feedback

**Time without Copilot:** 20 minutes
**Time with Copilot:** 3 minutes

### The Problem

Design sent you a mockup for the new AI search interface in AKX. You need to provide structured PM feedback covering usability, alignment with personas, and enterprise considerations.

### Step-by-Step

> If you have access to a design mockup file, upload it here. If not, use the text description below — Copilot can analyze described mockups just as effectively for learning purposes.

1. **Upload the design image**
   - Drag & drop the mockup image
   - Or use 📎 to attach

2. **Use this prompt:**

```
Analyze this design mockup from a Product Manager perspective.

Context: This is for AKX (Accenture Knowledge Exchange), an internal knowledge
management platform for 700,000+ Accenture employees.

Our users are:
- Priya (Partner) - uses mobile between meetings, needs results in 5 minutes
- Marcus (Consultant) - power user, needs quality filtering, compares to BCG tools
- Elena (Delivery Manager) - occasional user, needs project templates

Please provide feedback on:

1. **Usability** - Is it intuitive? Any confusion points?
2. **Persona Fit** - How well does it serve each user type?
3. **Information Hierarchy** - Is the most important info prominent?
4. **Enterprise Considerations** - Accessibility, data privacy, scale
5. **Mobile Readiness** - Will this work on Partner's phones?
6. **Competitive Comparison** - How does this compare to what we know about McKinsey/BCG?
7. **Questions for Design** - What should I ask the designer?

Be constructive and specific. Reference our personas by name.
```

3. **Copilot analyzes the visual**
   - It can read text in images
   - It understands UI patterns
   - It provides structured feedback

### Sample Mockup Exercise

If you don't have a mockup, describe one to Copilot:

```
Imagine an AKX search interface mockup with:
- Top search bar with "AI-powered" badge
- Filter panel on left (industry, capability, content type, date)
- Main results area showing document cards
- Each card shows: title, preview snippet, author, date, quality score (1-5 stars)
- Right sidebar showing "Related Experts" with profile photos
- Mobile responsive design

Analyze this from a PM perspective for AKX serving our three personas.
```

---

## Task 5: Competitive Research - Consulting Firms

**Time without Copilot:** 90 minutes
**Time with Copilot:** 10 minutes

### The Problem

The steering committee wants to understand what competitors are doing with their knowledge management platforms. You need quick intelligence on McKinsey, BCG, and Deloitte.

### Option A: Quick Research (5 min)

Use regular Copilot Chat:

```
I'm a Product Owner at Accenture responsible for our internal knowledge
management platform (AKX). Our competitors are McKinsey, BCG, and Deloitte.

What do you know about their internal knowledge management and expert discovery
tools? Specifically:

1. McKinsey Knowledge Center - what makes it the "gold standard"?
2. BCG's AI investments in internal tools
3. Deloitte's knowledge platform modernization efforts

I need to understand:
- What capabilities they have that we might lack
- Their approach to content curation
- AI/GenAI investments
- What Accenture employees who came from these firms say about the tools

This is for a steering committee discussion.
```

Copilot uses its knowledge + web grounding to answer.

### Option B: Deep Research (10 min)

Use the **Researcher** agent for comprehensive analysis:

1. Click "Researcher" in the left panel
2. Enter this prompt:

```
Research knowledge management and expert discovery platforms at major consulting firms.
I need competitive intelligence for Accenture's internal tools team.

Firms to research: McKinsey, BCG, Deloitte, Bain, IBM Consulting

For each firm, find:
- Internal knowledge management platform name and capabilities
- AI/GenAI investments in internal tools
- Expert discovery and matching capabilities
- Any public information about adoption rates or effectiveness
- Recent news or announcements about internal tool improvements

Also research:
- Industry best practices for enterprise knowledge management
- Common challenges at consulting firm scale (50,000+ employees)
- How firms measure KM platform success

Create a competitive comparison report I can present to our steering committee.
Include recommendations for where Accenture should focus.
```

3. Researcher works for 5-10 minutes
4. Returns a comprehensive, cited report

---

## Your Time Savings Summary

| Task | Old Way | With Copilot | Saved |
|------|---------|--------------|-------|
| Steering committee notes | 45 min | 3 min | 42 min |
| 8 stakeholder interviews | 3-4 hours | 5 min | ~3.5 hrs |
| 3 audience communications | 60 min | 5 min | 55 min |
| Design feedback | 20 min | 3 min | 17 min |
| Competitive research | 90 min | 10 min | 80 min |
| **TOTAL** | **~6.5 hours** | **~26 min** | **~6 hours** |

**That's almost a full workday saved on just these 5 tasks!**

---

## Practice Exercise: End-of-Week Processing

Let's put it all together. Imagine it's Friday and you need to prepare for Monday's steering committee:

1. Process all your meeting notes from the week
2. Extract action items and status updates
3. Summarize key findings for your sponsor
4. Draft the agenda for next steering committee

**Try this prompt:**

```
I'm a Senior Product Owner at Accenture preparing for Monday's AKX steering
committee. Here are my notes from this week:
[Paste or upload your notes]

Please help me prepare:

1. **Status Update** - Progress on AI search, expert matching, adoption
2. **Action Item Summary** - What was completed, what's in progress, what's blocked
3. **Key Metrics** - Current WAU, search satisfaction, any changes from last week
4. **Risks & Issues** - What the steering committee needs to know
5. **Decisions Needed** - What do I need sponsor input on?
6. **Suggested Agenda** - Proposed topics for Monday's meeting

Format for a 30-minute steering committee meeting.
Include recommended discussion time for each topic.
```

---

## Module Complete!

You now know how to:
- ✅ Process steering committee notes into structured governance summaries
- ✅ Synthesize multiple stakeholder interviews (in batches)
- ✅ Transform content for different enterprise audiences
- ✅ Analyze design mockups with enterprise PM perspective
- ✅ Perform competitive research on consulting firms

**Quick Self-Check**
Before moving on, can you:
- [ ] Upload a document to Copilot and get a structured summary with action items
- [ ] Rewrite Copilot output for a different audience (e.g., executive vs. team lead)
- [ ] Describe the difference between Batch 1 and Batch 2 interview analysis approaches

*If you're unsure about any of these, re-read that section before continuing.*

---

## Next Steps

Continue to **Module 1.4: Using Researcher & Analyst Agents**

In Module 1.4, you'll discover Copilot's built-in specialized agents:
- **Researcher** - For deep, multi-step research
- **Analyst** - For data analysis and reasoning
- **Workflows** - For automation

These agents take Copilot to the next level!

---

## Quick Reference: Prompts from This Module

### Steering Committee Notes
```
Analyze these meeting notes and extract: executive summary, action items
with owners and priority, decisions made, risks/escalations, open questions.
Format for steering committee governance.
```

### Stakeholder Interview Synthesis
```
Analyze these interviews for: pain points by role, feature requests,
competitive comparisons, adoption barriers, quick wins. Include quotes
and business impact.
```

### Multi-Audience Communication (Enterprise)
```
Transform this update into 3 versions: Partner (business impact),
Consultant (daily work), Executive (metrics and ROI).
```

### Design Feedback (Enterprise)
```
Analyze this mockup from enterprise PM perspective: usability, persona fit,
information hierarchy, enterprise considerations, mobile readiness,
competitive comparison, questions for designer.
```

### Competitive Research (Consulting)
```
Research knowledge management platforms at McKinsey, BCG, Deloitte.
Provide: capabilities, AI investments, expert discovery, adoption.
Create competitive comparison for steering committee.
```

---

**Great work! Ready for the agents? Let's go to Module 1.4!**
