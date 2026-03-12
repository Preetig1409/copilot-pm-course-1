# Module 2.1: Writing PRDs with Copilot (Enterprise Edition)

**Duration:** 35 minutes
**Prerequisites:** Level 1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Draft a business case section of an enterprise PRD including ROI calculations using Copilot prompts
2. Create a RACI matrix for a major internal product initiative
3. Build a stakeholder engagement plan that maps decision-makers to their concerns
4. Assess your own PRD draft for steering committee readiness using the quality checklist
5. Get multi-perspective feedback from MD, CKO, and Consultant personas on a PRD section

> *Quick navigation: Phase 1 Business Context | Phase 2 Solution & Impact | Phase 3 Document & Governance | Phase 4 Review & Alignment | Quality Checklist*

---

## Enterprise PRDs Are Different

Internal enterprise PRDs require elements that external product PRDs don't:

| Standard PRD | Enterprise Internal PRD |
|--------------|------------------------|
| Problem statement | Problem + Business case |
| User stories | Stakeholder analysis |
| Success metrics | Adoption metrics + ROI |
| Technical requirements | Integration requirements |
| Risks | Governance & change management |
| Launch plan | Change management & communications |

> *Each of these enterprise additions is covered in the exercises below. Business Case → Phase 1, Stakeholder Analysis → Phase 1, Governance → Phase 3, Change Management → Phase 2, RACI → Phase 3.*

---

## The Right Mindset: Thinking Partner, Not Ghostwriter

**Important:** Copilot should help you think through your PRD, not write it for you.

### The Right Approach

| Don't Do This | Do This Instead |
|---------------|-----------------|
| "Write a PRD for feature X" | "Help me build the business case for feature X" |
| "Create requirements for me" | "What governance considerations should I address?" |
| "Generate the full document" | "Let's structure the stakeholder analysis section" |

---

## The Enterprise PRD Workflow

### Phase 1: Business Context
- Define the business problem and opportunity
- Build ROI case
- Identify stakeholders and governance

### Phase 2: Solution & Impact
- Explore solution options
- Define success metrics
- Plan change management

### Phase 3: Document & Governance
- Structure the PRD with enterprise sections
- Create RACI matrix
- Prepare for steering committee

### Phase 4: Review & Alignment
- Multi-perspective stakeholder review
- Address governance concerns
- Prepare for approval

---

## Phase 1: Business Context

### Step 1: Define Business Problem

Use this prompt to clarify the business context:

```
I'm writing an enterprise PRD for AKX's AI-powered search feature.

Here's what I know:
- Current AKX weekly active users: 43% (target: 60%)
- Average search time: 8 minutes (target: 2 minutes)
- Search satisfaction: 3.2/5 (target: 4.0/5)
- Competitors (McKinsey, BCG) have better knowledge platforms
- Lost $20M deal because we couldn't identify an expert in 48 hours

Help me articulate:
1. The business problem (not just user problem)
2. Competitive implications
3. Financial impact of NOT solving this
4. How this aligns with company strategic priorities

Ask me clarifying questions if needed.
```

### Step 2: Build the Business Case

> **Enterprise data guidance:** The financial figures, metrics, and business data used throughout this module are realistic examples for learning purposes. In real use, replace with your organization's actual data. Always verify calculations independently before presenting to stakeholders.

This is critical for enterprise PRDs - you need to justify the investment.

```
Help me build a business case for AI-powered search in AKX.

Investment context:
- Development cost: ~$2M over 6 months
- Ongoing cost: ~$500K/year

Potential benefits:
- Time saved per consultant: 4+ hours/week
- 300,000 potential weekly users
- Average consultant billing rate: $300/hour
- Faster expert discovery → more deals won
- Reduced duplicate work → higher efficiency

Please create:

1. **ROI Calculation**
   - Quantified time savings
   - Productivity gain value
   - Conservative, moderate, and optimistic scenarios

2. **Strategic Value**
   - Competitive positioning benefits
   - Talent retention impact
   - Revenue enablement potential

3. **Risk-Adjusted Analysis**
   - What could reduce ROI?
   - What assumptions are we making?

Format this for a steering committee business case presentation.
```

### Step 3: Stakeholder Analysis

```
Help me identify stakeholders for the AKX AI Search initiative.

Known stakeholders:
- Richard Thorne (CKO) - Executive Sponsor
- Jennifer Walsh (VP Internal Digital Products) - Product Lead
- David Kim (MD Technology Practice) - Business Champion
- Sarah Mitchell (MD Strategy Practice) - Business Champion

For a comprehensive stakeholder analysis, help me identify:

1. **Decision Makers** - Who has approval authority?
2. **Champions** - Who will actively promote this?
3. **Influencers** - Who shapes opinions?
4. **Users** - Who will use this daily?
5. **Impacted Parties** - Who is affected even if not direct users?

For each stakeholder group:
- Their key interests/concerns
- How to engage them
- Risk if not aligned

Format as a stakeholder map with engagement strategy.
```

---

## Phase 2: Solution & Impact

### Generate Strategic Approaches

```
Let's develop 3 distinct approaches for AI-powered search in AKX:

**Approach A: AI Search Only**
(Semantic search with quality ranking)

**Approach B: AI Search + Expert Matching**
(Search plus automated expert recommendations)

**Approach C: Full AI Knowledge Assistant**
(Search + experts + personalized recommendations + content generation)

For each approach, outline:
1. Scope and features
2. Investment required
3. Time to deliver
4. Adoption complexity
5. ROI potential
6. Risk profile
7. Steering committee appeal

Include recommendation for which approach to pursue.
```

### Define Success Metrics (Enterprise)

```
Help me define success metrics for AI Search that will satisfy:

1. **Executive Sponsors** (Richard, CKO)
   - Strategic metrics they'll report to the board
   - Competitive positioning indicators

2. **Business Champions** (David, Sarah - MDs)
   - Practice-level impact metrics
   - Revenue enablement indicators

3. **Users** (Partners, Consultants)
   - Daily experience metrics
   - Time savings indicators

4. **Product Team** (Jennifer, me)
   - Leading indicators for product health
   - Adoption and engagement metrics

Create a metrics framework with:
- Metric name and definition
- Target value
- How we'll measure
- Who cares most about this metric
- Reporting frequency
```

### Plan Change Management

```
AI Search is a major change for 700,000 users. Help me think through
change management requirements.

Questions to address:

1. **Awareness**
   - How will users know this exists?
   - What channels reach different personas?

2. **Desire**
   - Users have tried AKX before and given up
   - How do we rebuild trust?

3. **Knowledge**
   - What training is needed?
   - How do we reach 700K users?

4. **Ability**
   - Is the product intuitive enough?
   - What support will be needed?

5. **Reinforcement**
   - How do we keep users engaged?
   - What ongoing communications are needed?

Create a change management summary for the PRD.
```

---

## Phase 3: Enterprise PRD Structure

### Enterprise PRD Template Sections

```
Help me structure an enterprise PRD with these sections:

## 1. Executive Summary
(1 page for steering committee review)

## 2. Business Case
- Problem statement (business impact)
- ROI analysis
- Strategic alignment

## 3. Stakeholder Analysis
- Key stakeholders
- Engagement plan
- RACI matrix

## 4. Solution Overview
- Approach description
- Key features
- What's NOT in scope

## 5. Success Metrics
- Business metrics
- Product metrics
- Adoption metrics

## 6. Governance
- Decision authority
- Approval process
- Escalation path

## 7. Change Management
- Communication plan
- Training plan
- Adoption targets by phase

## 8. Risk Assessment
- Technical risks
- Adoption risks
- Business risks
- Mitigation strategies

## 9. Implementation Plan
- Timeline
- Resource requirements
- Dependencies

## 10. Appendices
- User research summary
- Technical specifications
- Detailed ROI model

For each section, tell me what makes it "enterprise-grade" vs. a startup PRD.
```

### Creating the RACI Matrix

> *New to enterprise governance? Quick definitions:*
> - **RACI**: Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), Informed (needs to know)
> - **Steering Committee**: Senior stakeholder group with budget authority and strategic oversight
> - **Governance**: The process by which decisions are made, approved, and tracked in an organization

```
Create a RACI matrix for the AI Search initiative.

Decisions/Activities:
1. Feature prioritization
2. Investment approval (> $500K)
3. Technical architecture
4. UX design direction
5. Go-live decision
6. Change management execution
7. Adoption targets
8. Post-launch optimization

Stakeholders:
- Richard Thorne (CKO, Sponsor)
- Jennifer Walsh (VP, Product Lead)
- David Kim (MD, Business Champion)
- Me (Product Owner)
- Raj Patel (Tech Lead)
- Lisa Chen (Change Management)
- Practice Leads (user representatives)

Create RACI matrix (Responsible, Accountable, Consulted, Informed)
with notes on decision-making process.
```

---

## Phase 4: Multi-Perspective Review

### Enterprise Stakeholder Review

```
Review this PRD draft from THREE enterprise perspectives:

## As CKO (Richard - Executive Sponsor)
- Is the business case compelling?
- What would I need to present to the CEO?
- Are risks adequately addressed?

## As MD (David - Business Champion)
- Will this help my practice win deals?
- Is the ROI realistic?
- Will my team actually adopt this?

## As Senior Consultant (Marcus - User)
- Will this save me time?
- Is this better than my workarounds?
- Will I actually use it?

PRD DRAFT:
[Paste your draft here]
```

### Steering Committee Readiness

```
Assess this PRD for steering committee readiness:

1. **Business Case Strength**
   - Is ROI clearly articulated?
   - Are assumptions documented?
   - Is competitive context clear?

2. **Governance Clarity**
   - Are decision rights clear?
   - Is RACI complete?
   - Is escalation path defined?

3. **Risk Management**
   - Are major risks identified?
   - Are mitigations realistic?
   - Are we being honest about challenges?

4. **Executive Summary**
   - Can sponsor present this in 5 minutes?
   - Are key asks clear?
   - Is approval path obvious?

Provide a readiness score (1-5) and improvement suggestions.
```

---

## Exercise: Complete Enterprise PRD Workflow

**Scenario:** Create a PRD for AKX's AI Search feature.

### Step 1: Business Context (10 min)

```
I'm writing an enterprise PRD for AI-powered search in AKX.

Context:
- Company: Accenture (700,000 employees)
- Product: AKX (internal knowledge platform)
- Current WAU: 43%, Target: 60%
- Executive Sponsor: Richard Thorne (CKO)
- Investment: ~$2M, Timeline: 6 months

Help me build the business case foundation.
What questions should I answer for the steering committee?
```

### Step 2: Stakeholder & Governance (10 min)

Work through stakeholder analysis and RACI.

### Step 3: Draft Key Sections (10 min)

Draft the Executive Summary and Business Case sections.

### Step 4: Steering Committee Readiness (5 min)

Get feedback and identify gaps before presenting.

---

## Enterprise PRD Quality Checklist

Before considering your PRD done:

### Business Justification
- [ ] ROI clearly calculated with scenarios
- [ ] Strategic alignment articulated
- [ ] Competitive context included
- [ ] Investment justified

### Governance
- [ ] Stakeholders identified and engaged
- [ ] RACI complete
- [ ] Decision authority clear
- [ ] Escalation path defined

### Change Management
- [ ] Adoption targets by phase
- [ ] Communication plan outlined
- [ ] Training approach defined
- [ ] Reinforcement strategy included

### Steering Committee Ready
- [ ] Executive summary stands alone
- [ ] Sponsor can present in 5 minutes
- [ ] Key asks are clear
- [ ] Risks honestly addressed

---

## Module Complete!

You now know:
- ✅ How enterprise PRDs differ from startup PRDs
- ✅ How to build business cases with ROI
- ✅ How to create stakeholder analysis and RACI
- ✅ How to plan change management in PRDs
- ✅ How to prepare for steering committee review

**Quick Self-Check**
Before moving on, can you:
- [ ] Draft a business case section with ROI calculations using Copilot
- [ ] Create a RACI matrix for a product initiative and explain each role
- [ ] Describe 3 ways enterprise PRDs differ from standard startup PRDs

*If you're unsure about any of these, re-read that section before continuing.*

---

## Next Steps

Continue to **Module 2.2: Analyzing Product Data with Copilot**

In Module 2.2, you'll learn:
- Analyzing adoption funnels and utilization data
- Using Excel Copilot for enterprise metrics
- Interpreting A/B tests for internal tools
- ROI validation with data

---

## Quick Reference: Enterprise PRD Prompts

| Phase | Prompt Starter |
|-------|----------------|
| Business Case | "Help me build an ROI case for..." |
| Stakeholder Analysis | "Identify stakeholders and create engagement strategy..." |
| Governance | "Create a RACI matrix for..." |
| Change Management | "Plan change management for 700K users..." |
| Steering Committee | "Assess this PRD for steering committee readiness..." |

---

**Ready for data analysis? Let's go to Module 2.2!**
