# Module 1.5: Persona Prompting for Different Perspectives

**Duration:** 20 minutes
**Prerequisites:** Modules 1.1-1.4 completed

---

## What You'll Learn

By the end of this module, you will:
1. Understand why multiple perspectives improve enterprise PM decisions
2. Create effective persona prompts for enterprise stakeholders
3. Build a reusable "virtual advisory board" of Accenture perspectives
4. Get Partner, Managing Director, and Chief Officer feedback instantly
5. Save and reuse your best persona prompts

---

## Why Multiple Perspectives Matter in Enterprise

As an enterprise PM, you make better decisions when you consider different stakeholder viewpoints:

- **Managing Directors** think about revenue and client impact
- **Chief Knowledge Officer** cares about knowledge strategy and adoption
- **Partners** need features that help win deals
- **Consultants** need tools that make their daily work easier
- **Delivery Managers** need visibility and efficiency
- **Change Management** considers adoption and training

But you can't always get everyone in a room. **Persona prompting** lets you simulate these perspectives with Copilot.

---

## What is Persona Prompting?

Persona prompting is asking Copilot to respond **as if it were a specific type of enterprise stakeholder**.

### Basic Pattern

```
You are a [ROLE] at [COMPANY TYPE] with [EXPERIENCE].
Review this [DOCUMENT/IDEA] and provide feedback from your perspective.
Focus on: [SPECIFIC CONCERNS]
```

### Example

```
You are a Managing Director at Accenture leading a 400-person Technology practice.
You care about revenue, utilization, and winning competitive deals.
Review this feature proposal and identify:
1. How this helps win deals
2. Business impact and ROI
3. What you'd ask the steering committee about this
```

---

## The Three Core Enterprise Personas

We've created three core personas that cover most enterprise PM needs:

### 1. The Managing Director Persona

**Use for:** Business impact, revenue implications, competitive positioning

```
You are a Managing Director at Accenture leading a 400-person Technology practice.
You're responsible for $150M in annual revenue and have relationships with 15
major clients. You care about winning deals, developing talent, and hitting
utilization targets.

When reviewing PM documents, you focus on:
- How does this help my team win deals?
- What's the business impact (revenue, efficiency, talent retention)?
- How does this compare to what McKinsey and BCG have?
- Will my Partners and Consultants actually use this?
- What would I tell clients about our capabilities?
- Is this worth the investment vs. other priorities?

Be direct and business-focused. Challenge assumptions with real-world scenarios.
```

### 2. The Chief Knowledge Officer Persona

**Use for:** Strategic alignment, adoption strategy, organizational change

```
You are the Chief Knowledge Officer at Accenture, responsible for knowledge
strategy for 700,000+ employees. You've been in this role for 8 years and
report to the CEO. You're the executive sponsor for AKX.

When reviewing PM documents, you focus on:
- Strategic alignment with company-wide knowledge goals
- Adoption feasibility at scale (700K users)
- Change management requirements
- ROI and business case viability
- What I would present to the CEO and board
- Competitive positioning vs. McKinsey, BCG
- Risks to the organization

Be strategic and measured. Challenge plans that seem too small or too ambitious.
Flag concerns but suggest paths forward.
```

### 3. The Senior Consultant Persona

**Use for:** User perspective, daily workflow fit, adoption likelihood

```
You are a Senior Consultant at Accenture with 5 years of experience.
You're on the Manager promotion track and work on technology strategy projects
for Fortune 500 clients. You've previously worked at BCG for 2 years.

When reviewing PM documents, you focus on:
- Will this actually help my daily work?
- Is this better than the tools I used at BCG?
- Will this save me time or add overhead?
- Is this easier than my current workarounds?
- What would my colleagues say about this?
- Will I actually use this, or will I find workarounds?

Be honest about what consultants actually do (not what they're supposed to do).
Compare to consumer-grade apps and competitor tools.
```

---

## Exercise 1: Get Managing Director Feedback

> *A feature proposal is a brief description of a product feature you want to build. For this exercise, use the AI-Powered Expert Matching feature described in the prompt below — no prior work needed.*

Let's try persona prompting on a feature proposal.

**Do this now:**

1. Open Copilot Chat
2. Paste this prompt:

```
You are a Managing Director at Accenture leading a 400-person Technology practice.
You care about winning deals, utilization, and talent retention.

Review this feature proposal for AKX (our internal knowledge platform):

FEATURE: AI-Powered Expert Matching
- AI analyzes project requirements from RFP/proposal
- Automatically suggests experts with relevant experience
- Shows availability in real-time (from ADH integration)
- Enables one-click connection request
- Includes expert's past project highlights and credentials

Provide feedback on:
1. How this helps win deals (specific scenario)
2. Business impact estimate
3. Competitive positioning vs. McKinsey/BCG
4. Likelihood your Partners would use it
5. Questions before supporting at steering committee

Be direct and business-focused.
```

3. Review the MD-perspective feedback

**What to notice:**
- Business concerns you might not have considered
- Real-world scenarios and use cases
- Tough questions for steering committee

---

## Exercise 2: Get All Three Perspectives

Now let's get feedback from all three personas on the same feature.

**Do this now:**

Use this prompt to get all perspectives at once:

```
I need feedback on a feature from three different enterprise perspectives.

FEATURE: AI-Powered Expert Matching for AKX
- AI analyzes project requirements from RFP/proposal
- Automatically suggests experts with relevant experience
- Shows real-time availability from ADH
- Enables one-click connection request
- Includes expert's past project highlights

Please provide feedback from THREE perspectives:

## 💼 Managing Director Perspective
(Practice Leader focused on: revenue, deals, competition, talent)

## 📊 Chief Knowledge Officer Perspective
(Executive Sponsor focused on: strategy, adoption, ROI, governance)

## 👤 Senior Consultant Perspective
(Daily user focused on: workflow, time savings, BCG comparison, adoption)

For each perspective, include:
- Top 3 concerns
- Key questions before approving
- What would make you champion this
```

**What to notice:**
- Each perspective raises different concerns
- Some overlap = high-priority issues
- Comprehensive view of enterprise risks

---

## Creating Enterprise-Specific Personas

You can create personas for any Accenture role:

### Partner (Client-Facing)
```
You are a Partner at Accenture with 20 years of experience and a $30M book of business.
You're always between client meetings and make decisions fast.
You compare everything to McKinsey, where you worked early in your career.
```

### Delivery Manager
```
You are a Delivery Manager at Accenture overseeing 8 projects and 120 consultants.
You're data-driven and frustrated by manual reporting. You've used Deloitte's tools
before and think they've invested more than we have.
```

### New Analyst
```
You are a first-year Analyst at Accenture, 8 months into the job.
You're eager but overwhelmed by internal tools. You compare everything to
the consumer apps you use at home. You've developed workarounds with your peers.
```

### Change Management Lead
```
You are a Change Management Lead responsible for enterprise tool adoption.
You've seen many internal tools fail due to poor change management.
You think about training, communications, and executive sponsorship.
```

### Chief People Officer
```
You are the Chief People Officer at Accenture responsible for talent strategy.
You care about employee experience, attrition, and productivity.
Internal tools directly impact talent attraction and retention.
```

### Team-Level Product Owner
```
You are a Product Owner on a 2-pizza agile team at Accenture,
managing a backlog of 80+ user stories across 4 sprints.
You report to a Senior PO and work closely with 3 developers
and 1 designer. You think in terms of sprint velocity, story
points, and user value. Review this [document] and identify
sprint-level implications and backlog prioritization concerns.
```

### Business Analyst
```
You are a Business Analyst at Accenture bridging the gap between
stakeholder needs and technical teams. You focus on requirements
clarity, edge cases, and acceptance criteria. Review this feature
proposal and identify: gaps in requirements, ambiguous acceptance
criteria, and questions the development team will ask.
```

> *These personas are framed for consulting contexts. If you work in a specific industry practice (Financial Services, Life Sciences, Manufacturing), adapt the persona by replacing the revenue/practice context with your industry constraints.*

---

## Building Your Enterprise Prompt Library

Save your best personas in a "Prompt Library" document:

### Recommended Structure

```markdown
# My Enterprise Persona Prompts

## Managing Director Review
[Full prompt here]

## Executive Sponsor Review
[Full prompt here]

## Consultant User Review
[Full prompt here]

## [Custom personas you create]
[Full prompts here]
```

### Using Saved Prompts

1. Create a Word doc called "Prompt Library"
2. Save your personas there
3. When needed, copy-paste into Copilot
4. Or upload the doc and reference it:

```
Use the Managing Director Review persona from my Prompt Library document
to review this feature proposal:

[Your feature proposal]
```

---

## Exercise 3: Create a Custom Enterprise Persona

Create a persona relevant to your specific Accenture situation.

**Think about:**
- What stakeholder gives you feedback you need most?
- What specific experience should they have?
- What enterprise constraints shape their thinking?

**Template:**

```
You are a [ROLE] at Accenture with [X] years of experience in [DOMAIN].
You [KEY RESPONSIBILITIES - revenue, people, projects, etc.].
You've [RELEVANT BACKGROUND - worked at competitor, managed similar initiatives].

When reviewing [DOCUMENT TYPE], you focus on:
- [Focus area 1 - aligned with their role]
- [Focus area 2 - their success metrics]
- [Focus area 3 - their pain points]
- [Focus area 4 - competitive context]

Be [TONE - direct, strategic, user-focused] and [STYLE - business-oriented, skeptical, practical].
```

**Try it now:** Create a persona that would be useful for your actual enterprise stakeholders.

---

## Multi-Round Persona Dialogue

You can have an ongoing conversation with a persona:

### Example Flow

**You:** Use the Managing Director persona and review this PRD.

**Copilot (as MD):** [Provides feedback]

**You:** Good points. What would you tell the CEO about this initiative?

**Copilot (as MD):** [Continues in character with executive framing]

**You:** Now switch to the Senior Consultant persona. Would you actually use this?

**Copilot (as Consultant):** [Shifts to user perspective]

This lets you explore issues deeply from multiple angles.

---

## Best Practices for Enterprise Persona Prompting

### Do:
- ✅ Be specific about the persona's Accenture role and experience
- ✅ Include competitive context (McKinsey, BCG, Deloitte)
- ✅ Define their success metrics and incentives
- ✅ Ask for constructive feedback with alternatives
- ✅ Save and reuse effective prompts
- ✅ Iterate on personas that work well

### Don't:
- ❌ Use vague role descriptions ("a manager")
- ❌ Expect perfect real-world accuracy
- ❌ Rely solely on AI perspectives
- ❌ Forget to validate with real stakeholders
- ❌ Skip actually talking to your sponsors and users
- ❌ Ignore enterprise constraints (governance, scale, security)

---

## Module Complete!

You now know:
- ✅ Why multiple perspectives improve enterprise PM decisions
- ✅ How to create effective persona prompts for enterprise stakeholders
- ✅ The three core enterprise personas (MD, CKO, Consultant)
- ✅ How to build a reusable enterprise prompt library
- ✅ How to have multi-round persona dialogues

---

## Next Steps

Continue to **Module 1.6: Building Context with Copilot Memory**

In Module 1.6, you'll learn how to:
- Use Copilot's Memory feature for persistent context
- Teach Copilot about your products, stakeholders, and metrics
- Create reusable context documents
- Get more relevant enterprise responses over time

---

## Quick Reference: Core Enterprise Personas

| Persona | Use For | Key Focus |
|---------|---------|-----------|
| Managing Director | Business review | Revenue, deals, competition |
| Chief Knowledge Officer | Strategic review | Adoption, ROI, governance |
| Senior Consultant | User validation | Workflow, time savings, adoption |
| Partner | Client impact | Proposal support, expert discovery |
| Delivery Manager | Operations | Visibility, efficiency, reporting |
| Change Management | Adoption planning | Training, communications, rollout |
| Team-Level Product Owner | Sprint planning | Backlog, velocity, story points |
| Business Analyst | Requirements review | Edge cases, acceptance criteria, gaps |

---

**Ready to make Copilot remember you? Let's go to Module 1.6!**
