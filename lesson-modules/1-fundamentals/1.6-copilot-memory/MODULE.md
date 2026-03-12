# Module 1.6: Building Context with Copilot Memory

**Duration:** 15 minutes
**Prerequisites:** Modules 1.1-1.5 completed

---

## What You'll Learn

By the end of this module, you will:
1. Understand how Copilot Memory works
2. Teach Copilot about your role, projects, and preferences
3. Create context documents for project-specific information
4. Manage what Copilot remembers
5. Get more relevant, personalized responses over time

---

## What is Copilot Memory?

Copilot Memory is a feature that allows Copilot to **remember key information about you** across conversations. This makes future interactions more relevant and personalized.

### What Memory Does

- Stores preferences you share with Copilot
- Remembers context about your work
- Adapts responses based on what it knows
- Persists across sessions (unlike chat history)

### How It's Different from Chat History

| Chat History | Copilot Memory |
|--------------|----------------|
| Disappears after session | Persists forever (until deleted) |
| Linear conversation | Extracted key facts |
| Everything is saved | Only important info remembered |
| Context within conversation | Context across all conversations |

---

## How Memory Works

When you share information with Copilot, it may choose to remember key facts.

### Memory Gets Updated When You:

1. Share preferences: "I prefer bullet points over paragraphs"
2. Describe your role: "I'm a PM focused on activation"
3. Mention recurring projects: "I work on AKX adoption and onboarding"
4. Express working style: "I like data-driven decisions"

### What You'll See

When Copilot remembers something, you may see a subtle "Memory updated" notification. This means a fact has been stored for future reference.

---

## Exercise 1: Teach Copilot About You

Let's intentionally teach Copilot about your role at Accenture.

**Do this now:**

In Copilot Chat, enter this prompt:

```
I'd like to share some context about my work so you can help me better:

**My Role:**
- I'm a Senior Product Owner at Accenture
- I lead two internal tools: AKX (Accenture Knowledge Exchange) and ADH (Accenture Delivery Hub)
- AKX is at 43% weekly active users (WAU), with a target of 60%
- ADH is a newer delivery management platform in early adoption
- I report to the VP of Product

**My Users:**
- Sarah Chen (Enterprise Admin) - needs security & compliance
- Mike Rodriguez (IC Engineer) - needs speed & integrations
- Alex Thompson (Team Lead) - needs visibility & reporting

**My Preferences:**
- I prefer concise, bullet-pointed responses
- I value data-driven recommendations
- I like to see "why" behind suggestions
- I appreciate when you flag risks proactively

Please confirm you've noted this context. In future conversations,
use this information to make your responses more relevant to my work.
```

**What should happen:**
- Copilot acknowledges the context
- Some or all may be stored in Memory
- Future responses will be more tailored

---

## Checking Your Memory

You can see and manage what Copilot remembers.

**To view and manage your Memory settings:**
1. Go to **copilot.microsoft.com**
2. Look for your profile icon — it may appear in the **top right** or **bottom left** depending on your interface version
3. Click it and look for **Settings**, **Memory**, or **Manage memory**
4. If you don't see "Memory" in settings, it may not yet be enabled for your account

> *Note: The Copilot interface is updated frequently. If these steps have changed, look for a settings gear icon or contact your IT helpdesk.*

### To Delete Memories:

1. Navigate to memory settings
2. Find the memory you want to remove
3. Click the delete/remove option
4. That fact will no longer influence responses

---

## Creating Context Documents

For detailed project context that's too complex for Memory, use **Context Documents**.

### What is a Context Document?

A document (usually Word or Markdown) that contains:
- Project background
- Key stakeholders
- User personas
- Current goals
- Terminology/definitions

You upload this at the start of a session to give Copilot full context.

### Example Context Document

```markdown
# AKX Product Context

## Project Overview
Improving adoption and engagement for AKX (Accenture Knowledge Exchange).
Goal: Increase weekly active users (WAU) from 43% to 60%.

## My Role
Senior Product Owner at Accenture, leading AKX and ADH

## Key Stakeholders
- VP Product (Sarah) - Executive sponsor
- Engineering Lead (Marcus) - 3 engineers allocated
- Design Lead (Jessica) - Design support

## User Personas
1. Sarah Chen - Enterprise Admin (security-focused)
2. Mike Rodriguez - IC Engineer (efficiency-focused)
3. Alex Thompson - Team Lead (visibility-focused)

## Current Metrics
- Weekly Active Users (WAU): 43% (target: 60%)
- Time to first value: 15 min (target: 5 min)
- 7-day retention: 20% (target: 35%)

## Key Terms
- "WAU" = Weekly Active Users
- "TTV" = Time to Value
- "AKX" = Accenture Knowledge Exchange
- "ADH" = Accenture Delivery Hub

## Current Sprint Focus
Improving the AKX onboarding experience with guided tooltips
```

---

## Exercise 2: Create and Use a Context Document

**Do this now:**

1. Open Microsoft Word
2. Create a new document called "AKX-Context.docx"
3. Paste the context template above (or create your own)
4. Save to OneDrive
5. In Copilot Chat, upload the document
6. Then ask:

```
Based on the context document I just uploaded, suggest 3 experiments
we could run to improve AKX weekly active users from 43% to 60%.
```

**What to notice:**
- Copilot uses the specific context you provided
- Suggestions are tailored to AKX
- Metrics and personas are referenced

---

## Memory vs Context Documents

Use both strategically:

| Use Memory For | Use Context Documents For |
|----------------|---------------------------|
| Your role and preferences | Specific project details |
| Working style | Current metrics and goals |
| Recurring information | Stakeholder information |
| General context | Complex background |
| Persistent across all chats | Per-project/per-session |

### Best Practice: Layered Context

1. **Memory** holds your permanent context (role, style, preferences)
2. **Context Documents** hold project-specific details (upload as needed)
3. **Prompt Instructions** hold task-specific needs (in each prompt)

---

## Limitations of Memory

Be aware of these limitations:

### What Memory Doesn't Do Well:
- ❌ Store complex data structures
- ❌ Remember exact documents or files
- ❌ Maintain hierarchical organization
- ❌ Guarantee what's remembered
- ❌ Replace actual documentation

### What This Means for You:
- Don't rely solely on Memory for critical info
- Use context documents for important project details
- Verify Memory hasn't "forgotten" key facts
- Maintain your own documentation as source of truth

> **What Not to Store in Memory:**
> - Client names or confidential project codes
> - Personal data about colleagues or stakeholders
> - Proprietary financial figures (specific deal values, budgets)
> - Anything marked Confidential or Highly Confidential per your organization's data policy
>
> Memory is appropriate for: your role, your preferences, working style, and general product context.

---

## Managing Memory Over Time

As you work with Copilot, your Memory will grow. Maintain it:

### Monthly Memory Review

1. Check what's stored in Memory
2. Remove outdated information
3. Add any missing key context
4. Verify preferences are correct

### When Projects Change

1. Update your context documents
2. Tell Copilot about the change:
   ```
   Update: I'm now focused on the Reporting feature instead of Onboarding.
   My new goal is to improve dashboard performance by 50%.
   ```

---

## Module Complete!

You now know:
- ✅ How Copilot Memory works (persistent key facts)
- ✅ How to teach Copilot about your role and preferences
- ✅ How to create context documents for detailed info
- ✅ The difference between Memory and context documents
- ✅ How to manage Memory over time

---

## Next Steps

Continue to **Module 1.7: Copilot Across M365 Apps**

In Module 1.7, you'll learn how to:
- Use Copilot inside Word, Excel, PowerPoint
- Leverage app-specific Copilot features
- Create documents, analyze data, build presentations
- Navigate the M365 Copilot ecosystem

---

## Quick Reference: Memory Commands

| What You Want | Example Prompt |
|---------------|----------------|
| Teach about your role | "I'm a Product Owner focused on AKX adoption at Accenture..." |
| Set preferences | "I prefer concise responses with bullet points..." |
| Update context | "Update: My focus has shifted to the Reports feature..." |
| Check understanding | "What do you remember about my role and projects?" |

---

**Ready to explore Copilot everywhere? Let's go to Module 1.7!**
