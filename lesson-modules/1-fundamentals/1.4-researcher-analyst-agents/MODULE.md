# Module 1.4: Using Researcher & Analyst Agents

**Duration:** 20 minutes
**Prerequisites:** Modules 1.1-1.3 completed

---

## What You'll Learn

By the end of this module, you will:
1. Understand what Copilot agents are and how they differ from regular chat
2. Use the **Researcher** agent for deep, multi-step research
3. Use the **Analyst** agent for complex data analysis
4. Know when to use agents vs regular Copilot Chat
5. Leverage the **Workflows** agent for automation

---

## What Are Copilot Agents?

Agents are **specialized AI assistants** built into Microsoft 365 Copilot. They're designed for specific types of complex tasks.

### Regular Copilot Chat vs Agents

| Regular Copilot Chat | Agents |
|---------------------|--------|
| Quick Q&A | Multi-step reasoning |
| Single-turn tasks | Extended workflows |
| Immediate responses | Takes 5-10 minutes |
| General purpose | Specialized tasks |
| Latest Microsoft language model | Advanced reasoning model |

### Available Agents in M365 Copilot

1. **Researcher** - Deep research across web and work data
2. **Analyst** - Complex data analysis and reasoning
3. **Workflows** - Automation across M365 apps (availability varies by tenant)

**Note:** You get 25 combined Researcher + Analyst queries per month with M365 Copilot license.

---

## Accessing Agents

To access agents in Copilot:

1. Go to **copilot.microsoft.com**
2. Look at the **left panel**
3. You'll see agents listed (Researcher, Analyst, etc.)
4. Click an agent to start a specialized session

Alternatively, in the chat:
- Type **@Researcher** followed by your question
- Type **@Analyst** followed by your data analysis request

---

## The Researcher Agent

Researcher is your **AI research assistant**. It performs deep, multi-step research and produces comprehensive reports.

### What Researcher Does

1. Breaks your question into sub-questions
2. Searches across web AND your work data
3. Evaluates multiple sources
4. Synthesizes findings
5. Produces a cited report

### When to Use Researcher

| Use Researcher For | Don't Use For |
|-------------------|---------------|
| Competitive analysis (consulting firms) | Quick facts |
| Industry best practices | Simple questions |
| Multi-source synthesis | Single document analysis |
| Strategic reports for steering committees | Real-time data |
| Change management research | Basic summaries |

### Researcher Example: Competitive Intelligence

**Prompt:**

```
Research how major consulting firms (McKinsey, BCG, Deloitte) handle
internal knowledge management and expert discovery. I need to understand:

1. What platforms/tools do they use?
2. How do they approach content curation at scale?
3. What AI/GenAI investments have they made in internal tools?
4. What are their adoption rates (if publicly available)?
5. What best practices can Accenture learn from?

I'm a Product Owner at Accenture responsible for AKX (our internal
knowledge platform with 700,000+ users). Create a comprehensive
competitive intelligence report I can share with our steering committee.
```

**What happens:**
- Researcher shows its "thinking" as it works
- Takes 5-10 minutes
- Produces a multi-page report with citations
- You can export to Word

---

> **Response times:** Agent responses take longer than regular chat. Researcher typically takes 5-10 minutes, Analyst 2-5 minutes. This is expected — do not refresh the page while waiting.

## Exercise 1: Use Researcher

Let's try a research task relevant to your Accenture PM role.

**Do this now:**

1. Click on **Researcher** in the left panel
2. Enter this prompt:

```
Research best practices for driving adoption of internal enterprise tools.
I'm a Product Owner at Accenture responsible for an internal knowledge
management platform. Our weekly active users are stuck at 43% (target: 60%).

I need:
1. Industry benchmarks for internal tool adoption at large enterprises
2. Top strategies companies use to drive adoption of internal platforms
3. Case studies of companies that significantly improved internal tool usage
4. Role of change management vs product improvements
5. Metrics we should track beyond WAU

Create a strategic report with actionable recommendations
for our steering committee.
```

3. Watch Researcher work (notice the "thinking" display)
4. Review the final report

**What to notice:**
- The depth of analysis
- Citations and sources
- Structured, actionable output
- Takes longer but more thorough

---

## The Analyst Agent

Analyst is your **AI data scientist**. It uses reasoning models to solve complex analytical problems.

### What Analyst Does

1. Understands your data analysis question
2. Applies multi-step reasoning
3. Performs calculations and analysis
4. Explains its methodology
5. Provides insights and recommendations

### When to Use Analyst

| Use Analyst For | Don't Use For |
|----------------|---------------|
| Complex adoption funnel analysis | Simple sums/averages |
| Statistical significance testing | Basic charts |
| Multi-variable problems | Quick calculations |
| Predictive insights | Real-time dashboards |
| ROI calculations for business cases | Data cleaning |

### Analyst Example: Adoption Cohort Analysis

> *This is a realistic enterprise PM scenario. The numbers are illustrative — your actual data will vary. The goal is to practice the prompt structure, not to memorize these specific figures.*

**Prompt:**

```
I'm analyzing AKX adoption cohorts at Accenture. Here's the data:

September cohort (new hires):
- 5,000 provisioned users
- 3,400 logged in first week (68%)
- 2,200 performed a search (44%)
- 1,100 weekly active at 30 days (22%)

October cohort (new hires):
- 5,500 provisioned users
- 3,850 logged in first week (70%)
- 2,750 performed a search (50%)
- 1,430 weekly active at 30 days (26%)

November cohort (new hires):
- 4,800 provisioned users
- 3,600 logged in first week (75%)
- 2,880 performed a search (60%)
- 1,584 weekly active at 30 days (33%)

Analyze this data and help me understand:
1. What's the trend in activation and retention?
2. Is the improvement statistically significant?
3. Where's the biggest drop-off in the funnel?
4. What should we project for December if the trend continues?
5. What should I present to the steering committee?
```

**What Analyst provides:**
- Statistical analysis of trends
- Significance calculations
- Funnel analysis identifying bottlenecks
- Projections with confidence levels
- Clear explanation of methodology

---

## Exercise 2: Use Analyst

Let's try a data analysis task relevant to enterprise internal tools.

**Do this now:**

1. Click on **Analyst** in the left panel
2. Enter this prompt:

```
Help me analyze this A/B test result for AKX AI Search:

Control group (old search):
- 5,000 users in pilot
- Average search time: 8.2 minutes
- Search success rate: 67%
- User satisfaction: 3.2/5
- Time to find expert: 55 hours average

Test group (AI-powered search):
- 5,000 users in pilot
- Average search time: 2.4 minutes
- Search success rate: 82%
- User satisfaction: 4.1/5
- Time to find expert: 12 hours average

Questions:
1. Are these results statistically significant?
2. What's the estimated time savings across 700,000 users?
3. What's the ROI if average consultant billing rate is $300/hour?
4. Should we roll out to 100% of users?
5. Write a recommendation for the steering committee with ROI justification.
```

3. Review Analyst's methodology and conclusions

**What to notice:**
- Step-by-step reasoning
- Statistical rigor
- ROI calculations
- Clear recommendations with business justification
- Explains the "why" behind conclusions

---

## The Workflows Agent

Workflows is your **automation assistant**. It helps you create automated flows across M365 apps.

### What Workflows Can Do

1. Send automated emails and reminders
2. Create calendar events based on triggers
3. Post updates to Teams channels
4. Manage SharePoint files
5. Connect to Planner and other M365 services

### Example Workflow: Steering Committee Prep

**Prompt:**

```
Create a workflow that:
1. Every Thursday at 2pm
2. Sends me an email reminder to update AKX metrics for steering committee
3. On Friday at 9am, reminds me to finalize the steering committee deck
4. Then on Monday at 8am (before the 9am meeting)
5. Posts a reminder to my team's Teams channel that steering committee is today
```

Workflows builds this automation without you needing to use Power Automate directly.

> **Environment note:** The Workflows agent may appear as "Workflow Frontier" in some enterprise environments. The concepts and prompt patterns apply to both. If neither is available in your environment, skip this exercise.

*(Optional — complete if Workflows/Workflow Frontier is available in your environment)*

---

## When to Use Each Tool

Here's a decision framework for enterprise PM tasks:

```
Is it a quick question?
├── YES → Use regular Copilot Chat
└── NO → Does it require deep research?
    ├── YES → Use Researcher (5-10 min)
    │   Examples: Competitive intel, best practices, industry research
    └── NO → Does it require complex analysis?
        ├── YES → Use Analyst
        │   Examples: Adoption analysis, ROI calc, statistical tests
        └── NO → Does it need automation?
            ├── YES → Use Workflows
            │   Examples: Reminders, status updates, recurring tasks
            └── NO → Use regular Copilot Chat
```

### Combined Agent Workflow: Research + Analysis

For complex enterprise analysis tasks, use both agents in sequence:

**Step 1 — Researcher:** Use for data gathering and source retrieval
> *"Research best practices for enterprise knowledge management adoption..."*

**Step 2 — Analyst:** Pass Researcher output into Analyst for synthesis
> *"Based on the research above, analyze which strategies apply to our context and calculate the ROI impact..."*

This sequencing produces richer, more analytically sound outputs than either agent alone.

### Quick Reference for Enterprise PMs

| Task Type | Use This |
|-----------|----------|
| "What is McKinsey doing with their KM tools?" | Researcher |
| "Summarize this steering committee doc" | Copilot Chat |
| "Research enterprise adoption best practices" | Researcher |
| "Analyze our adoption funnel for bottlenecks" | Analyst |
| "Is this A/B test result significant?" | Analyst |
| "What ROI can I present to sponsors?" | Analyst |
| "Remind me every Friday to update metrics" | Workflows |
| "Post updates to leadership channel when..." | Workflows |

---

## Agent Limits & Best Practices

### Monthly Limits
- **25 queries** for Researcher + Analyst combined
- No limit on Workflows
- No limit on regular Copilot Chat

### Best Practices for Enterprise PMs

1. **Save complex work for agents** - Don't waste queries on simple tasks
2. **Be specific about your enterprise context** - Include company size, industry, constraints
3. **Export important outputs** - Save to Word/OneDrive for steering committee decks
4. **Iterate in chat first** - Refine your question before using an agent
5. **Include business context** - Mention ROI needs, stakeholder concerns, governance requirements
6. **Track your usage** - 25 queries/month requires strategic use

---

## Module Complete!

You now know:
- ✅ What Copilot agents are and how they differ from chat
- ✅ How to use Researcher for competitive and industry research
- ✅ How to use Analyst for adoption analysis and ROI calculations
- ✅ When to use each tool (chat vs agents)
- ✅ How Workflows automates enterprise PM tasks

**Quick Self-Check**
Before moving on, can you:
- [ ] Explain when to use Researcher vs. Analyst vs. regular Copilot Chat
- [ ] Write a Researcher prompt that specifies scope, sources, and output format
- [ ] Describe the combined Research → Analysis workflow for complex enterprise tasks

*If you're unsure about any of these, re-read that section before continuing.*

---

## Next Steps

Continue to **Module 1.5: Persona Prompting for Different Perspectives**

In Module 1.5, you'll learn how to:
- Get feedback from enterprise stakeholder perspectives (Partners, Consultants, Sponsors)
- Create reusable persona prompts
- Use Copilot as your virtual advisory board

---

## Quick Reference: Agent Access

| Agent | Access | Best For |
|-------|--------|----------|
| Researcher | Left panel or @Researcher | Competitive intel, best practices |
| Analyst | Left panel or @Analyst | Adoption analysis, ROI, statistics |
| Workflows | Left panel | Steering committee prep, reminders |

---

**Ready to get multiple perspectives? Let's go to Module 1.5!**
