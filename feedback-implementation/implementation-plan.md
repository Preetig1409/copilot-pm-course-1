# Implementation Plan: Alpha Testing Feedback
## Microsoft Copilot for Product Managers Course

**Generated:** 2026-03-12
**Source data:** 131 actionable findings (4 teams), 15 priority themes (unified Excel), 7 March 10 feedback items
**Modules validated against:** All 15 MODULE.md files read and verified

---

## Summary

| Metric | Count |
|--------|-------|
| Total actionable findings processed | 131 |
| Implementation items (after deduplication) | 57 |
| Critical severity | 4 |
| Major severity | 10 |
| Moderate severity | 30 |
| Minor severity | 13 |
| Cross-module items | 4 (IMP-054 through IMP-057) |
| Source findings mapped to items | 131 / 131 |

### Items by Module

| Module | Items | Highest Severity |
|--------|-------|-----------------|
| 1.1 Welcome | 8 | Critical |
| 1.2 Workspace Setup | 4 | Major |
| 1.3 First Tasks | 3 | Moderate |
| 1.4 Researcher & Analyst Agents | 3 | Moderate |
| 1.5 Persona Prompting | 3 | Moderate |
| 1.6 Copilot Memory | 3 | Major |
| 1.7 M365 Navigation | 4 | Critical |
| 1.8 Teams Integration | 2 | Moderate |
| 1.9 Outlook Integration | 3 | Major |
| 1.10 SharePoint Collaboration | 3 | Moderate |
| 2.1 Write PRD | 4 | Moderate |
| 2.2 Analyze Data | 3 | Critical |
| 2.3 Product Strategy | 3 | Moderate |
| 3.1 Image Basics | 4 | Moderate |
| 3.2 PM Visuals | 3 | Moderate |
| Cross-Module | 4 | Major |

### Deduplication Notes

Several root issues produced clusters of findings across teams. The major collapsing operations were:
- **Keyboard shortcuts** (T1-02, T1-03, T1-15, T2-04, T2-05, T2-20, T3-05, T3-07, T3-08, T4-17, T4-18, T4-19, T1-13, T3-49) — 14 findings → 2 items (module-level vs. cross-module)
- **Role terminology PM/PO** (T3-01, T3-09, T4-09, T4-12, T4-25, T4-26) — 6 findings → 1 item
- **Time savings inconsistency** (T2-01, T2-11) — 2 findings → 1 item
- **Level 1 Complete misplacement** (T2-22, T2-24) — 2 findings → 1 item
- **Memory settings navigation** (T1-05, T2-19, T4-13) — 3 findings → 1 item
- **Workflow Agent unavailability** (T3-17, T4-08, March 10 item 7) — 3 findings → 1 item
- **Image generation credit limits** (T3-60, T3-61, T3-62, T3-64, T2-38) — 5 findings → 1 item
- **Module length / cognitive load** (T2-28, T2-29, T2-37, T4-31, T4-37, T4-38) — 6 findings → 2 items (2.1 and 2.3 are distinct)

---

## Module 1.1: Welcome to Microsoft Copilot

---

### IMP-001
**Module:** 1.1
**Severity:** Critical
**Title:** GPT-5 and o3 model references are too specific and will become stale

**Finding IDs:** T2-06, T2-17
**Priority Theme:** #9 (Moderate)

**Issue (validated against module):**
Module 1.1 line 33 states: *"Microsoft Copilot is an AI assistant powered by GPT-5 that's built into Microsoft 365."*
Module 1.4 comparison table states: *"Uses reasoning models (o3)"* in the Agents column vs. *"Uses GPT-5"* in the Regular Chat column.
Both references are too specific — they will become inaccurate as Microsoft updates the underlying models, and they introduce unnecessary technical jargon for a PM audience.

**Proposed Resolution:**
In Module 1.1, replace:
> `"Microsoft Copilot is an AI assistant powered by GPT-5 that's built into Microsoft 365."`

With:
> `"Microsoft Copilot is an AI assistant powered by advanced large language models and built into Microsoft 365. Microsoft periodically updates the underlying models to deliver the latest capabilities."`

In Module 1.4, in the comparison table replace the "Uses GPT-5" cell and "Uses reasoning models (o3)" cell with "Latest Microsoft language model" and "Advanced reasoning model" respectively.

**Coherence:** Pairs with IMP-014 (same fix applies to the 1.4 table). Both edits should be made together.

---

### IMP-002
**Module:** 1.1
**Severity:** Critical
**Title:** Time savings numbers are internally inconsistent within the module

**Finding IDs:** T2-01, T2-11
**Priority Theme:** #14 (Moderate)

**Issue (validated against module):**
Module 1.1 Introduction (line 23) claims: *"save you 10-20 hours per week as a Product Manager."*
The same module's "Time Savings You'll Gain" table (line 229) totals to *"Estimated weekly savings: 5-8 hours."*
These two numbers contradict each other within the same module. Additionally, Module 1.9 (end section) claims *"10+ hours/week"* and Module 1.10 final table totals *"11+ hrs/week"* — a third, different figure.

**Proposed Resolution:**
The per-task table in Module 1.1 is the most grounded figure (5-8 hours). The 10-20 figure in the introduction is aspirational and refers to a fully proficient user across all tools.

1. In Module 1.1 introduction, revise to:
   > *"...that can save you **5-8 hours per week** on core PM tasks — and up to 10+ hours per week once you master all the tools in this course."*

2. Keep the "Estimated weekly savings: 5-8 hours" in the Time Savings table as-is (it is the verifiable figure).

3. In Module 1.9 end section ("Time Savings from Level 1: 10+ hours/week") — this is the cumulative total across all Level 1 modules and is coherent. Add a parenthetical: *(cumulative across all Level 1 modules)*.

4. In Module 1.10 final table total row (11+ hrs/week) — add a note: *(full Level 1 cumulative)*.

**Coherence:** This is a cross-module consistency fix. The 5-8 hrs (Module 1.1 intro) and 10-20 hrs figures create learner confusion at the very start. Priority: fix the introduction first.

---

### IMP-003
**Module:** 1.1
**Severity:** Major
**Title:** Alt+Spacebar and Alt+I keyboard shortcuts are unreliable in enterprise environments

**Finding IDs:** T1-02, T1-03, T2-04, T2-05, T3-05, T3-07, T3-08
**Priority Theme:** #1 (Critical — this item covers the 1.1-specific findings; see IMP-019 for the 1.7-specific findings and IMP-029 for the 2.2 finding)

**Issue (validated against module):**
Module 1.1 Quick Reference table (line 280-284) and the "How to Access Copilot" section (lines 57-67) document:
- Windows: `Alt + Spacebar` — opens Copilot anywhere on Windows
- Mac: `Option + Spacebar`
- M365 apps: `Alt + I` (Word, Excel, PowerPoint)

Multiple teams confirm these shortcuts do not work reliably:
- Alt+Spacebar opens Window management menu on many Windows builds instead of Copilot
- Alt+I is inconsistent across different Microsoft 365 versions (T3-07: "Alt+L doesn't work in excel or word" — note: this tester may be on a different keyboard layout)
- Mac keyboard shortcut could not be tested by one team (T3-06)
- Team 1 verified: shortcut works in Word but not Excel/PPT (T1-03)

**Proposed Resolution:**
In "How to Access Copilot," add a callout box after the shortcuts section:

> **Note on keyboard shortcuts:**
> Keyboard shortcuts vary by Microsoft 365 version, Windows build, and enterprise configuration. If `Alt + I` does not open Copilot:
> - Click the **Copilot icon** in the app ribbon (Home tab or right side of toolbar)
> - In Word/Excel/PowerPoint, look for the purple Copilot icon in the ribbon's Home tab
> - Shortcut availability may also depend on your Accenture license tier

In the Quick Reference table at module end, add a third column "If shortcut fails" pointing to the ribbon icon method.

Remove the instruction to "Hold for 2 seconds for voice input" on Alt+Spacebar — this behavior is environment-specific and confusing as a primary instruction.

**Coherence:** The same ribbon-icon fallback note should be added to Module 1.7 (IMP-019) and Module 2.2 (IMP-029) where the same shortcut is used in exercises.

---

### IMP-004
**Module:** 1.1
**Severity:** Major
**Title:** "What You'll Learn" objective #3 is confusingly worded

**Finding IDs:** T2-08
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.1 line 13, objective #3 reads:
> *"Meet Accenture's Internal Digital Products team - your role throughout this course"*

Testers found this ambiguous — "meet your role" is oddly phrased. The course uses "Senior Product Owner" and "PM" interchangeably, and this objective doesn't clearly state that the learner will be assigned a simulated role.

**Proposed Resolution:**
Replace objective #3 with:
> *"Step into your simulated role: Senior Product Owner at Accenture's Internal Digital Products team"*

**Coherence:** Standalone fix. Low risk.

---

### IMP-005
**Module:** 1.1
**Severity:** Major
**Title:** Personas section lacks link to persona detail resources

**Finding IDs:** T2-10
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.1 "Your Users (3 Personas)" section (lines 124-138) provides a brief description of Priya, Marcus, and Elena but does not direct learners to the full persona documents in the course resources (`company-context/PERSONAS.md`).

**Proposed Resolution:**
After the personas section, add:
> *"These three personas appear throughout the course. For their full background, motivations, and pain points, see the **Resources** section → Company Context → Personas."*

**Coherence:** Standalone. Consistent with how the March 10 feedback (#1) also asked for better persona scaling context — deeper profiles in resources addresses this.

---

### IMP-006
**Module:** 1.1
**Severity:** Moderate
**Title:** "6 hours" course duration claim is unexplained on index/landing page

**Finding IDs:** T2-07
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Tester T2-07 reports seeing "6 hours" on the course index page without context for what it represents (total course time? per-module?). Module 1.1 itself does not mention "6 hours." This is a course-level navigation/metadata issue — the landing page or course structure display needs a brief explanation.

**Proposed Resolution:**
In Module 1.1's "How This Course Works" section, add to the Course Structure sub-section:
> *"Total estimated time: ~6 hours (15–35 minutes per module)"*

Also verify the course index page/landing page has a "Estimated duration: 6 hours total" label visible to learners arriving at the home screen.

**Coherence:** Minor structural addition. Pairs with IMP-007 (syllabus listing).

---

### IMP-007
**Module:** 1.1
**Severity:** Moderate
**Title:** Course syllabus in Module 1.1 omits some module names from navigation sidebar

**Finding IDs:** T3-02
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.1 "Course Structure" section (lines 185-200) lists modules in the Level 1 Foundation group. Tester T3-02 notes the syllabus is missing entries like "Using Researcher & Analyst Agents" (shows as "1.4 Using Researcher & Analyst Agents" in navigation but listed inconsistently). The course structure list in 1.1 reads *"1.4 Using Researcher & Analyst Agents"* — this is correct. However the tester also notes "Missing 'Using', persona prompting, Teams Integration" which suggests the sidebar navigation names may differ from what is in the module content.

**Validated status:** The Module 1.1 course structure list matches module titles correctly. The issue is likely in the site navigation labels in `courseStructure.ts`, not in the module markdown. This is a navigation layer fix, not a content fix.

**Proposed Resolution:**
Verify `viewer/src/data/courseStructure.ts` module titles match the H1 headings in each MODULE.md file exactly. Specifically check:
- Module 1.4 listed as "Using Researcher & Analyst Agents" (not just "Researcher & Analyst Agents")
- Module 1.5 listed as "Persona Prompting for Different Perspectives"

**Coherence:** This is a code/data fix in `courseStructure.ts`, not a markdown fix. Assign separately to whoever manages the site code.

---

### IMP-008
**Module:** 1.1
**Severity:** Minor
**Title:** "Full chat interface with file upload" needs a screenshot or visual explanation

**Finding IDs:** T1-01, T4-02
**Priority Theme:** #15 (Minor)

**Issue (validated against module):**
Module 1.1 web browser access section (line 55) states: *"Full chat interface with file upload"* with no visual. Exercise 1 ("Open Copilot") describes what learners should see (lines 87-92) but relies entirely on text. First-time users have no visual anchor.

**Proposed Resolution:**
After the Exercise 1 "What you should see" list, add a note:
> *"The Copilot interface looks like this: [screenshot placeholder — add annotated screenshot showing chat input, left panel, and the attachment/file upload icon (📎)]"*

Until actual screenshots are added, add a descriptive callout:
> *"If you're unsure you're in the right place: look for a text input bar at the bottom of the page and a paper clip (📎) icon to its left. That's the file upload button."*

**Coherence:** Part of the broader screenshot gap identified in Priority Theme #15. Pairs with IMP-028 (1.9 Outlook screenshot request) and IMP-032 (1.6 memory settings screenshot).

---

## Module 1.2: Setting Up Your Copilot Workspace

---

### IMP-009
**Module:** 1.2
**Severity:** Major
**Title:** File upload limit is stated as 5 but actual limit is higher

**Finding IDs:** T2-14, T4-05
**Priority Theme:** #5 (Major)

**Issue (validated against module):**
Module 1.2 "File Limits" section (line 81) states: *"Multi-file: Can analyze up to 5 files at once."*
Module 1.3 Task 2 (line 130) states: *"Copilot can analyze up to 5 files at once."*
Tester T4-05 reports successfully uploading more than 5 files. Tester T2-14 provides updated information suggesting limits may have changed.

**Proposed Resolution:**
1. In Module 1.2 "File Limits" section, replace:
   > `Multi-file: Can analyze up to 5 files at once`

   With:
   > `Multi-file: Can analyze multiple files at once (typically 5–10 depending on file size and your license; verify current limits at [Microsoft Copilot documentation])`

2. Add a note:
   > *"Note: Microsoft updates these limits periodically. If you're unsure of your current limit, test by uploading 6 files and observing whether Copilot accepts all of them."*

3. Apply the same fix to Module 1.3 Task 2 Step 1 instruction.

**Coherence:** Must be fixed in both Module 1.2 and Module 1.3 simultaneously. See IMP-012 for the corresponding Module 1.3 fix.

---

### IMP-010
**Module:** 1.2
**Severity:** Moderate
**Title:** ContextIQ "/" slash feature may not work in enterprise tenant environments

**Finding IDs:** T3-12
**Priority Theme:** #13 (Moderate)

**Issue (validated against module):**
Module 1.2 "ContextIQ: Adding Content to Prompts" section (lines 120-136) instructs learners to type `/` to access a menu with Files, People, Meetings, Emails options. Exercise 2 (lines 143-155) asks learners to try this. Tester T3-12 reports the `/` menu does not appear in their enterprise environment.

**Proposed Resolution:**
After the "How to Use ContextIQ" steps in Module 1.2, add:
> **Enterprise Note:** The `/` ContextIQ menu may be restricted in some enterprise tenants or may require specific Copilot license tiers. If the menu does not appear:
> - Use the 📎 attachment icon to upload files directly
> - In the chat, paste a document summary inline as context
> - Check with your IT administrator whether ContextIQ is enabled for your account

**Coherence:** This is a standalone note addition. Low risk.

---

### IMP-011
**Module:** 1.2
**Severity:** Moderate
**Title:** Data sensitivity warning missing from file upload section

**Finding IDs:** T4-04
**Priority Theme:** #2 (Critical — this is the 1.2-specific instance; see IMP-036 for the cross-module treatment)

**Issue (validated against module):**
Module 1.2 covers file upload extensively but contains no guidance on what types of files are appropriate to upload to Copilot. In an enterprise environment, uploading highly confidential or client-restricted documents poses data governance risk.

**Proposed Resolution:**
After the "OneDrive Integration" section in Module 1.2, add a boxed callout:
> **Enterprise Data Guidance:**
> Before uploading files to Copilot, consider:
> - Files marked "Highly Confidential — Encrypted" may be blocked by Copilot due to sensitivity labels
> - Copilot operates within your tenant — files are not shared externally
> - For Accenture-specific data handling policies, refer to the Responsible AI guidelines
> - When in doubt about a file's sensitivity classification, ask your team lead before uploading

**Coherence:** This is one instance of the broader cross-module security theme (IMP-036). Should be added to 1.2 first as it is the first module where file uploads are taught.

---

### IMP-012
**Module:** 1.2
**Severity:** Minor
**Title:** Method 2 "Drag and Drop" description is incomplete

**Finding IDs:** T2-13
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.2 "Method 2: Drag and Drop" (lines 56-59) has only 3 steps. Tester T2-13 notes the description is incomplete — specifically that after dragging, a Copilot-specific confirmation step or progress indicator should be mentioned.

**Proposed Resolution:**
Update Method 2 to 4 steps:
> 1. Drag a file from your desktop or File Explorer
> 2. Drop it into the Copilot chat input area (you'll see a highlight indicating the drop zone)
> 3. The file uploads and appears as an attachment above the chat input
> 4. Type your prompt and press Enter — Copilot will analyze the attached file

**Coherence:** Standalone minor fix.

---

## Module 1.3: Your First PM Tasks

---

### IMP-013
**Module:** 1.3
**Severity:** Moderate
**Title:** Batch 2 interview upload instruction is ambiguous ("analyze these using the same format")

**Finding IDs:** T1-04, T2-16
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.3 Task 2 "Batch 2" step (line 154-155) reads:
> *"Ask Copilot to analyze these using the same format"*

This is vague — learners do not have a prompt to use. The Batch 1 prompt is long and detailed; the instruction assumes learners will re-type or reconstruct it.

**Proposed Resolution:**
Replace the vague instruction with a specific prompt block:

> **Batch 2: Upload remaining 3 interviews**
> Upload the final 3 interview files, then use this prompt:
>
> ```
> Analyze these 3 additional stakeholder interviews from Accenture.
> Use the same format as your previous analysis: identify pain points
> by role, feature requests, competitive comparisons, adoption barriers,
> and quick wins. Include quotes and note business impact.
> ```

**Coherence:** Standalone. Low risk.

---

### IMP-014
**Module:** 1.3
**Severity:** Minor
**Title:** Task 4 (Design Mockup Feedback) suggests uploading a mockup image but provides no sample image

**Finding IDs:** T4-06
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.3 Task 4 (lines 259-264) instructs learners to "upload the design image" or "drag & drop the mockup image." However, no sample mockup image is provided with the course files. The module acknowledges this via a "Sample Mockup Exercise" fallback (lines 295-309) but treats the fallback as secondary.

**Proposed Resolution:**
In Task 4 Step 1, revise the instruction to make the text-description fallback the primary path:
> *"If you have access to a design mockup file, upload it here. If not, use the text description below — Copilot can analyze described mockups just as effectively for learning purposes."*

Then promote the "Sample Mockup Exercise" block as the primary exercise rather than a fallback.

**Coherence:** Standalone. Does not require creating new files.

---

### IMP-015
**Module:** 1.3
**Severity:** Minor
**Title:** Long action item lists from meeting notes prompt lack priority framing

**Finding IDs:** T3-13
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.3 Task 1 meeting notes prompt (lines 54-84) asks Copilot to flag priority as "Critical/High/Medium" on action items. Tester T3-13 reports that Copilot's prioritization output did not match expected priorities — the LLM's priority judgments differed from what a human PM would assign based on context.

**Proposed Resolution:**
After the Task 1 prompt block, add a "Refine" step:
> *"After reviewing Copilot's initial output, you may want to verify the priorities reflect your actual context. Try a follow-up prompt:"*
>
> ```
> The priorities look reasonable. However, please reprioritize [item X]
> as Critical because [reason]. Update the action item list.
> ```
>
> *Note: Copilot assigns priorities based on language in the source text. Always review AI-generated priorities against your own judgment of urgency.*

**Coherence:** Standalone guidance addition.

---

## Module 1.4: Researcher & Analyst Agents

---

### IMP-016
**Module:** 1.4
**Severity:** Moderate
**Title:** Workflow Agent is described but not available in Accenture tenant

**Finding IDs:** T3-17, T4-08
**Priority Theme:** #12 (Moderate); March 10 feedback item #7 (Workflow Frontier alignment)

**Issue (validated against module):**
Module 1.4 "The Workflows Agent" section (lines 253-278) describes Workflows as one of three available agents and includes an exercise prompt. Finding T3-17 (Priority: High) states the Workflows Agent is not visible in the M365 Copilot tenant as documented. The March 10 report identifies this as "Workflow Frontier" — a different agent with different capabilities.

The module's "Available Agents in M365 Copilot" table (line 35-38) lists Researcher, Analyst, and Workflows as a fixed set.

**Proposed Resolution:**
1. In the "Available Agents" table, rename "Workflows" to "Workflows (availability varies by tenant)" and add a note:
   > *"Note: Availability of the Workflows agent depends on your Accenture tenant configuration. If you see 'Workflow Frontier' instead, this is an alternative no-code automation agent — use the same prompt patterns."*

2. In "The Workflows Agent" section header, add:
   > *"Environment note: This section covers the standard Workflows agent. In some Accenture environments you may see 'Workflow Frontier' — the concepts and prompt patterns apply to both."*

3. Mark the Workflows exercise as optional: *"(Complete this exercise if Workflows/Workflow Frontier is available in your environment)"*

**Coherence:** Pairs with March 10 feedback item 7. This is a content accuracy fix, not a structural change.

---

### IMP-017
**Module:** 1.4
**Severity:** Moderate
**Title:** Researcher and Analyst agent sequence for combined tasks is not explained

**Finding IDs:** T2-17 (partial), March 10 feedback item #4
**Priority Theme:** March 10 feedback item #4 (High confidence)

**Issue (validated against module):**
Module 1.4 covers Researcher and Analyst in separate sections but does not explain when to use them sequentially versus independently. The March 10 report explicitly calls out: *"Both Researcher and Analyst agents are visible, but it is unclear if they should be used in a specific sequence for the task."*

The "When to Use Each Tool" decision tree (lines 282-297) is helpful but doesn't cover the combined workflow: Researcher first for gathering data, then Analyst for synthesis.

**Proposed Resolution:**
After the "When to Use Each Tool" section, add a new sub-section:

> **Combined Agent Workflow: Research + Analysis**
> For complex enterprise analysis tasks (e.g., market research into a recommendation), use both agents in sequence:
>
> **Step 1 — Researcher:** Use for data gathering and source retrieval
> *"Research best practices for enterprise knowledge management adoption..."*
>
> **Step 2 — Analyst:** Pass Researcher output into Analyst for synthesis and recommendation
> *"Based on the research above, analyze which strategies apply to Accenture's context and calculate the ROI impact..."*
>
> This sequencing produces richer, more analytically sound outputs than either agent alone.

**Coherence:** Standalone addition. Strongly recommended given that two independent sources (tester T2-17 and March 10 report) independently identified this gap.

---

### IMP-018
**Module:** 1.4
**Severity:** Minor
**Title:** Analyst exercise uses enterprise operational data framing that feels like a PO assessment

**Finding IDs:** T3-19
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.4 Analyst example "Adoption Cohort Analysis" (lines 167-196) uses realistic Accenture cohort numbers. Tester T3-19 notes it reads more like an assessment than a learning exercise and suggests the framing could be more explicitly educational.

**Proposed Resolution:**
Before the Analyst example prompt, add context framing:
> *"This is a realistic scenario you'll encounter as an enterprise PM. The numbers are illustrative — your actual data will vary. The goal is to practice the prompt structure, not to memorize these specific figures."*

**Coherence:** Standalone framing note. No content change needed.

---

## Module 1.5: Persona Prompting

---

### IMP-019
**Module:** 1.5
**Severity:** Moderate
**Title:** Persona prompts are focused on PM/Chief Officer roles; PO, BA, and Scrum Master roles are absent

**Finding IDs:** T1-12, T4-09, T4-10, T4-12, T3-23, T3-24
**Priority Theme:** March 10 feedback item #1 (High confidence — Persona Scaling)

**Issue (validated against module):**
Module 1.5 "Quick Reference: Core Enterprise Personas" table (lines 385-395) lists: Managing Director, Chief Knowledge Officer, Senior Consultant, Partner, Delivery Manager, Change Management. These are all senior/external-facing Accenture roles.

Multiple testers note that the course targets PM/PO/BA roles but the available persona prompts do not include:
- Team-level Product Owner (PO) reviewing at sprint/backlog level
- Business Analyst (BA) focused on requirements and user stories
- Program-level PO managing across multiple squads

Additionally, T4-10 notes that learners cannot always predict what output they should expect from persona prompts, making it hard to evaluate quality.

**Proposed Resolution:**
1. Add three new personas to the "Creating Enterprise-Specific Personas" section:

   **Team-Level Product Owner:**
   > ```
   > You are a Product Owner on a 2-pizza agile team at Accenture,
   > managing a backlog of 80+ user stories across 4 sprints.
   > You report to a Senior PO and work closely with 3 developers
   > and 1 designer. You think in terms of sprint velocity, story
   > points, and user value. Review this [document] and identify
   > sprint-level implications and backlog prioritization concerns.
   > ```

   **Business Analyst:**
   > ```
   > You are a Business Analyst at Accenture bridging the gap between
   > stakeholder needs and technical teams. You focus on requirements
   > clarity, edge cases, and acceptance criteria. Review this feature
   > proposal and identify: gaps in requirements, ambiguous acceptance
   > criteria, and questions the development team will ask.
   > ```

2. After each persona exercise, add a 2-bullet "What good output looks like" guide so learners can self-assess.

**Coherence:** Aligns with Priority Theme #4 (role terminology) and March 10 item #1. The role terminology fix (IMP-037) should be applied before or alongside this fix.

---

### IMP-020
**Module:** 1.5
**Severity:** Minor
**Title:** Industry-specific persona examples are missing (Finance, Pharma, Manufacturing)

**Finding IDs:** T3-23, T3-24
**Priority Theme:** None (standalone suggestion)

**Issue (validated against module):**
Module 1.5 personas are entirely Accenture-consulting-context. Testers from Teams 3 suggest adding industry-specific variations for learners who work in Finance, Pharma, or Manufacturing contexts within Accenture.

**Proposed Resolution:**
In the "Creating Enterprise-Specific Personas" section, add a brief note:
> *"These personas are framed for consulting contexts. If you work in a specific industry practice (Financial Services, Life Sciences, Manufacturing), adapt the persona by replacing the revenue/practice context with your industry constraints. Example for Financial Services: replace 'winning consulting deals' with 'regulatory compliance and risk management'."*

This is a guidance note, not new persona content. It empowers learners to adapt without requiring the course to maintain industry-specific variants.

**Coherence:** Standalone note. Low effort.

---

### IMP-021
**Module:** 1.5
**Severity:** Minor
**Title:** Feature Proposal prompt is referenced but not clearly defined earlier in the course

**Finding IDs:** T1-12
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.5 Exercise 1 asks learners to use a "feature proposal" as input for the Managing Director persona (lines 141-159). Tester T1-12 asks whether feature proposals were covered in an earlier module. They were not — Module 1.3 covers design mockup feedback (Task 4) but not feature proposal writing.

**Proposed Resolution:**
At the start of Exercise 1, add:
> *"A feature proposal is a brief description of a product feature you want to build. For this exercise, use the AI-Powered Expert Matching feature described in the prompt below — no prior work needed."*

**Coherence:** Standalone clarification.

---

## Module 1.6: Building Context with Copilot Memory

---

### IMP-022
**Module:** 1.6
**Severity:** Major
**Title:** Memory settings navigation steps do not match current Copilot UI

**Finding IDs:** T1-05, T2-19, T4-13
**Priority Theme:** #6 (Major)

**Issue (validated against module):**
Module 1.6 "Checking Your Memory" section (lines 100-113) instructs:
> *"1. Go to copilot.microsoft.com / 2. Click your profile icon (top right) / 3. Select 'Settings' or 'Manage memory'"*

All three finding reports (from different teams) independently confirm these steps do not match the actual current UI. Tester T2-19 provides the correct path: *"Go to copilot.microsoft.com → Click your profile icon (bottom left, not top right)"*. Tester T4-13 notes the UI may differ across versions.

**Proposed Resolution:**
Replace the navigation steps with verified current steps and a fallback:
> **To view and manage your Memory settings:**
> 1. Go to **copilot.microsoft.com**
> 2. Look for your profile icon — it may appear in the **top right** or **bottom left** depending on your interface version
> 3. Click it and look for **Settings**, **Memory**, or **Manage memory**
> 4. If you don't see "Memory" in settings, it may not yet be enabled for your account
>
> *Note: The Copilot interface is updated frequently. If these steps have changed, look for a settings gear icon or contact your IT helpdesk.*

**Coherence:** Pairs with IMP-008 (screenshot request). A screenshot of the current memory settings path would significantly improve this section.

---

### IMP-023
**Module:** 1.6
**Severity:** Moderate
**Title:** Context document example uses "TaskFlow" (generic SaaS) not Accenture/AKX context

**Finding IDs:** T2-21 (implicit — data consistency issue)
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.6 Exercise 1 (lines 64-88) instructs learners to teach Copilot about "TaskFlow" — a generic SaaS PM context — rather than the Accenture/AKX context established in Module 1.1. The example context document (lines 133-166) also uses TaskFlow metrics (35% activation rate, onboarding wizard).

This creates a context-switching problem: learners have been building the Accenture/AKX mental model since Module 1.1, but Module 1.6 introduces an entirely different fictional product. Module 1.7 then references "50% activation rate" data that matches neither context.

**Proposed Resolution:**
Update Exercise 1 to use the Accenture/AKX context:
> Replace "I'm a Senior Product Manager at TaskFlow" with "I'm a Senior Product Owner at Accenture"
> Replace TaskFlow metrics with AKX metrics (43% WAU, target 60%, AKX and ADH products)
> Update the example context document template to use AKX/ADH terminology

**Coherence:** Important for pedagogical consistency. Module 1.7's Excel exercise also uses different metrics (55% activation rate for "May"). After fixing 1.6, verify 1.7 data consistency (see IMP-024).

---

### IMP-024
**Module:** 1.6
**Severity:** Minor
**Title:** No warning about storing sensitive data in Copilot memory

**Finding IDs:** T4-16
**Priority Theme:** Part of Theme #2 (Critical — data sensitivity)

**Issue (validated against module):**
Module 1.6 "Limitations of Memory" section (lines 216-229) lists technical limitations but contains no guidance on what types of information should not be stored in memory. In enterprise use, storing client names, confidential project details, or PII in memory poses risk.

**Proposed Resolution:**
In the "Limitations of Memory" section, add a "What Not to Store" callout:
> **Do not store in Memory:**
> - Client names or confidential project codes
> - Personal data about colleagues or stakeholders
> - Proprietary financial figures (specific deal values, budgets)
> - Anything marked Confidential or Highly Confidential per Accenture data policy
>
> Memory is appropriate for: your role, your preferences, working style, and general product context.

**Coherence:** Part of the cross-module security theme (IMP-036). Should be consistent with the note added to Module 1.2 (IMP-011).

---

## Module 1.7: Copilot Across M365 Apps

---

### IMP-025
**Module:** 1.7
**Severity:** Critical
**Title:** Alt+I shortcut in M365 apps unreliable; module exercises break when it fails

**Finding IDs:** T1-15, T1-16, T1-17, T2-20, T3-32, T4-17, T4-18, T4-19, T4-20
**Priority Theme:** #1 (Critical — this is the 1.7-specific cluster)

**Issue (validated against module):**
Module 1.7 "Universal Shortcut" section (lines 38-41) states:
> *"Windows: Alt + I / Mac: Option + I / This opens the Copilot sidebar in Word, Excel, and PowerPoint."*

Multiple teams across exercises report Alt+I either does not work or opens something other than Copilot. Specific failures:
- T1-16: Excel Copilot data analysis exercise fails ("I don't yet have the activation dataset itself")
- T1-17: PowerPoint presentation exercise fails ("Failed to load PowerPoint preview")
- T4-17, T4-18, T4-19: All three app exercises (Word, Excel, PowerPoint) report Alt+I failures
- T3-32: Sensitivity label blocker identified — "Highly Confidential - Encrypted" files block Copilot access

Additionally, T2-20 provides corrected step-by-step guidance with the correct shortcut wording: *"Alt + I opens the Copilot chat workspace in Word, Excel, PowerPoint"* — suggesting the description in the module is imprecise.

**Proposed Resolution:**
1. In the "Universal Shortcut" section, rewrite as:
   > **Windows:** Alt + I
   > **Mac:** Option + I
   > This opens the Copilot panel in Word, Excel, and PowerPoint.
   >
   > **If the shortcut does not work:**
   > - Look for the purple **Copilot icon** in the Home tab of the ribbon
   > - In Excel, also check the **Review** tab for Copilot
   > - Shortcut availability depends on your Microsoft 365 version and admin settings

2. Before the three app exercises, add a prerequisites callout:
   > **Before these exercises:**
   > - Ensure your files are saved (not in "Protected View")
   > - Files with sensitivity labels "Highly Confidential - Encrypted" may block Copilot
   > - If Copilot appears greyed out or unavailable, check with your IT team

3. For the Excel exercise, add an alternative approach: *"If Alt+I does not work, open the file in Excel, then go to Home tab → click the Copilot button in the ribbon."*

**Coherence:** This is the core issue for Module 1.7. Pairs with IMP-003 (Module 1.1 shortcuts) and IMP-029 (Module 2.2 shortcuts). The sensitivity label blocker (T3-32) is also addressed in IMP-036 (cross-module security).

---

### IMP-026
**Module:** 1.7
**Severity:** Major
**Title:** "Congratulations! Level 1 Complete!" appears prematurely at end of Module 1.7

**Finding IDs:** T2-22
**Priority Theme:** #3 (Major)

**Issue (validated against module):**
Module 1.7 ends with (lines 334-356):
> *"Congratulations! Level 1 Complete! / You've finished the Foundation level!"*

This is factually incorrect — Modules 1.8, 1.9, and 1.10 are still part of Level 1. The same premature celebration appears in Module 1.9 (see IMP-028).

**Proposed Resolution:**
In Module 1.7, replace the "Congratulations! Level 1 Complete!" section with:
> **Great work on Module 1.7!**
> You now know how to use Copilot across Word, Excel, and PowerPoint.
> Three more modules remain in Level 1:
> - 1.8: Teams Integration
> - 1.9: Outlook Integration
> - 1.10: SharePoint & Collaboration
>
> **Continue to Module 1.8: Copilot in Microsoft Teams →**

**Coherence:** Must also fix Module 1.9 (IMP-028). Level 1 Complete celebration should only appear in Module 1.10, which already has it correctly.

---

### IMP-027
**Module:** 1.7
**Severity:** Moderate
**Title:** Excel exercise data (55% activation rate for May) conflicts with Module 1.6 data (50%)

**Finding IDs:** T2-21
**Priority Theme:** None (standalone consistency finding)

**Issue (validated against module):**
Module 1.7 Excel exercise table (lines 119-126) includes:
> `| May | 620 | 341 | 55% |`

Module 1.6 memory exercise references a 50% metric in context. Tester T2-21 specifically identifies this: *"The activation rate for May is 55%, but in Module 1.6 it was 50%. This is not consistent."*

After review: Module 1.6 uses TaskFlow context (a separate fictional product). Module 1.7 uses a different unnamed product's data. The inconsistency is real but stems from the context-switching problem (IMP-023). If Module 1.6 is updated to use AKX context, this inconsistency would be resolved by aligning both modules to AKX/ADH metrics.

**Proposed Resolution:**
If IMP-023 (Module 1.6 context alignment) is implemented, update Module 1.7 Excel exercise data to use AKX WAU metrics:
> Replace the generic activation table with:
>
> | Month | Provisioned Users | Weekly Active | WAU Rate |
> |-------|------------------|---------------|----------|
> | Jan   | 695,000          | 122,000       | 17.6%    |
> | Feb   | 697,000          | 134,000       | 19.2%    |
> | Mar   | 699,000          | 145,000       | 20.7%    |
> | Apr   | 700,000          | 163,000       | 23.3%    |
> | May   | 700,000          | 196,000       | 28.0%    |
>
> This aligns with AKX context (700K users, 43% target WAU) and provides coherent data for the analytical exercise.

**Coherence:** Depends on IMP-023 being implemented. If IMP-023 is deferred, at minimum change Module 1.7's May value to 50% to match Module 1.6.

---

## Module 1.8: Teams Integration

---

### IMP-028
**Module:** 1.8
**Severity:** Moderate
**Title:** "Catching Up on Missed Meetings" exercise lacks prerequisite for transcript availability

**Finding IDs:** T2-23, T3-34
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 1.8 "Catching Up on Missed Meetings" section (lines 103-139) tells learners to:
> *"Find a meeting you were invited to but didn't attend"*

The exercise does not state that transcription must have been enabled on that meeting. Without a transcript, Copilot cannot summarize missed meetings. Tester T2-23 reports this step "does not mention the pre-requisite and fails."

Tester T3-34 additionally raises an issue about Copilot in meetings not capturing context that is shown visually on screen without verbal description — a known limitation.

**Proposed Resolution:**
Update the Exercise 2 instructions (Module 1.8, lines 124-138):
> **Before this exercise:**
> - Find a meeting where **transcription was enabled** (you'll see a transcript icon in the meeting recap)
> - If no such meeting exists yet, use the Exercise 1 meeting summary instead
>
> *Note: Copilot can only summarize meetings that were transcribed. Enable transcription by default on your Teams meetings for future use.*

After the exercise, add a limitations note:
> *"Copilot transcribes spoken words. If a presenter shares their screen and points to items without describing them verbally, those details won't appear in summaries."*

**Coherence:** Standalone fix.

---

### IMP-029
**Module:** 1.8
**Severity:** Moderate
**Title:** Teams channel Copilot visibility restricted in some enterprise environments

**Finding IDs:** T4-21, T4-22
**Priority Theme:** March 10 feedback item #6 (Medium confidence — Teams Channel Policy)

**Issue (validated against module):**
Module 1.8 Section 3 "Channel Workflows" (lines 200-232) instructs learners to click "Copilot in the channel header." Tester T4-21 reports incorrect instructions in Section 2 (Chat Assistance). Tester T4-22 reports Copilot is not visible in Teams channels.

The March 10 report confirms: *"Copilot is accessible in chats but remains invisible within specific Teams channels"* due to tenant policy.

**Proposed Resolution:**
At the start of Section 3: Channel Workflows, add:
> **Enterprise Note:** Copilot in Teams **channels** may be restricted by your Accenture tenant configuration, even if Copilot is available in personal chats.
>
> **If Copilot is not visible in a channel:**
> - Check that Copilot is enabled for that specific channel (requires channel owner or admin action)
> - As an alternative, use **Copilot Chat** (copilot.microsoft.com) with the Teams integration to query channel content
> - Contact your IT helpdesk to request Copilot be enabled for your team's channels

In Section 2, update the "Accessing Copilot in Chat" steps to clarify: *"Look for the Copilot icon below the message box or in the message toolbar — its position varies by Teams version."*

**Coherence:** Standalone. This is the most commonly reported Teams-specific blocker.

---

## Module 1.9: Copilot in Outlook

---

### IMP-030
**Module:** 1.9
**Severity:** Major
**Title:** "Congratulations! Level 1 Complete!" appears prematurely at end of Module 1.9

**Finding IDs:** T2-24
**Priority Theme:** #3 (Major)

**Issue (validated against module):**
Module 1.9 ends with (line 376-390):
> *"Level 1 Complete! 🎉 / Congratulations! You've completed all of Level 1: Foundation."*

Module 1.10 still remains in Level 1. The module lists only 8 out of 10 Level 1 modules in its "You've mastered" summary, omitting 1.9 itself and 1.10.

**Proposed Resolution:**
Replace the "Level 1 Complete!" section in Module 1.9 with:
> **Great work on Module 1.9!**
> You now know how to use Copilot in Outlook for email drafting and thread summarization.
>
> **One module remaining in Level 1:**
> Module 1.10: SharePoint & Collaboration
>
> **Continue to Module 1.10 →**

**Coherence:** Paired with IMP-026 (Module 1.7 same issue). Level 1 Complete messaging should appear only in Module 1.10.

---

### IMP-031
**Module:** 1.9
**Severity:** Moderate
**Title:** "Make it a poem" Copilot suggestion appears in email drafting but is not addressed in the module

**Finding IDs:** T1-10
**Priority Theme:** None (standalone observation)

**Issue (validated against module):**
Tester T1-10 reports that when using Copilot's draft adjustment UI in Outlook, a "Make it a poem" option appears in the tone/adjustment suggestions. This is jarring in a professional enterprise context and the module does not explain it or how to avoid it.

**Proposed Resolution:**
In Module 1.9 "Adjusting Drafts" section, add:
> *"You may see playful options like 'Make it a poem' or 'Make it funnier' in the Copilot suggestions panel. These are standard Copilot options available to all users — simply ignore them and use the tone/length adjustments that fit your enterprise communication needs."*

**Coherence:** Standalone clarification. Low effort.

---

### IMP-032
**Module:** 1.9
**Severity:** Moderate
**Title:** No visual guide showing where Copilot appears in the Outlook interface

**Finding IDs:** T3-38
**Priority Theme:** #15 (Minor — part of broader screenshot theme)

**Issue (validated against module):**
Module 1.9 "Accessing Copilot in Outlook" section (lines 36-47) describes where to find the Copilot icon in text only. Tester T3-38 asks for a screenshot or diagram showing where Copilot appears (new email, reply, reading pane).

**Proposed Resolution:**
After the "Accessing Copilot in Outlook" section, add a callout:
> **Where to find Copilot in Outlook:**
> - **New email:** Copilot icon appears in the message toolbar (typically a purple sparkle icon)
> - **Replying:** After clicking Reply, look for Copilot icon in the compose window toolbar
> - **Reading pane:** Copilot icon may appear at the top of the email or in the toolbar
>
> *[Screenshot placeholder: Add annotated screenshot of Outlook showing Copilot icon locations in new email and reply views]*

**Coherence:** Part of the broader screenshot gap (Priority Theme #15). Similar note should be added to 1.8 for Teams icon location.

---

### IMP-033
**Module:** 1.9
**Severity:** Minor
**Title:** Long email chain action items extraction may produce incomplete results — no guidance given

**Finding IDs:** T4-23, T4-24
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Tester T4-23 reports that with a long email chain, the action items prompt returns incomplete results. Tester T4-24 reports that requesting a 3-paragraph draft produced a 5-paragraph output.

These are expected Copilot behaviors — the module does not prepare learners for these common divergences from instructions.

**Proposed Resolution:**
In the Section 2 (Email Summarization) "Tips" or Best Practices section, add:
> *"Copilot may not capture every action item in very long threads (100+ messages). For complete accuracy on critical threads, ask Copilot to process sections: 'Summarize only the last 10 messages first.'"*

In Section 1 (Email Drafting) Adjusting Drafts, add:
> *"If Copilot generates more paragraphs than requested, follow up with: 'Shorten this to exactly 3 paragraphs — combine the middle sections.'"*

**Coherence:** Standalone guidance notes. Sets realistic expectations.

---

## Module 1.10: SharePoint & Collaboration

---

### IMP-034
**Module:** 1.10
**Severity:** Moderate
**Title:** Module jumps into SharePoint prompts without explaining setup prerequisites

**Finding IDs:** T1-06, T4-28, March 10 feedback item #3
**Priority Theme:** March 10 feedback item #3 (High confidence — SharePoint Prerequisites)

**Issue (validated against module):**
Module 1.10 begins directly with "Document Discovery" exercises (lines 33-53) using prompts like "Find the product roadmap document from Q4 2025." The module has no prerequisite section explaining:
- That SharePoint Copilot integration must be enabled at the tenant level
- That the learner needs actual SharePoint content to query
- That this module requires a configured M365 environment, not just Copilot access

Tester T1-06 specifically flags this as a missing precondition. March 10 report item #3 says: *"The module enters directly into prompts without explaining the necessary steps for SharePoint enablement."*

**Proposed Resolution:**
Add a "Technical Prerequisites" section immediately after the "What You'll Learn" section:

> **Technical Prerequisites for this Module**
>
> Before starting Module 1.10, confirm:
>
> 1. **SharePoint access** — You have access to at least one SharePoint site (check via sharepoint.com)
> 2. **Copilot for SharePoint** — Copilot's ability to search SharePoint content is part of M365 Copilot Enterprise; confirm it's enabled by trying: go to copilot.microsoft.com and typing "Find a recent document" — if Copilot returns results from your SharePoint, you're ready
> 3. **Content to search** — You'll need some existing SharePoint content. If you're in a new environment with no content, the exercises will use generic prompts you can observe rather than execute
>
> *If SharePoint Copilot integration is not enabled in your Accenture tenant, contact your IT helpdesk or use the alternative prompts provided in each exercise.*

**Coherence:** High priority given that this was flagged by March 10 report as one of the top 3 highest-impact items.

---

### IMP-035
**Module:** 1.10
**Severity:** Moderate
**Title:** Module overview description is absent; learners cannot get a quick sense of what the module covers

**Finding IDs:** T4-26
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Tester T4-26 notes: *"Module 1.10 (SharePoint & Collaboration) doesn't provide a concise module overview."* Looking at the module, it does have a "What You'll Learn" section with 5 objectives, but no introductory paragraph explaining the value proposition in everyday terms before diving into objectives.

**Proposed Resolution:**
Add an introductory paragraph after the module title and before "What You'll Learn":
> *"SharePoint is where your organization's institutional knowledge lives — PRDs, meeting notes, research, project files. This module teaches you to use Copilot as a universal search layer across all of it, letting you find and query documents in seconds using plain English instead of folder browsing."*

**Coherence:** Standalone minor addition.

---

### IMP-036
**Module:** 1.10
**Severity:** Minor
**Title:** Role terminology inconsistency (PM vs PO) continues into 1.10

**Finding IDs:** T4-25
**Priority Theme:** #4 (Major — see IMP-037 for the cross-module resolution)

**Issue (validated against module):**
Tester T4-25 notes that Module 1.10 mostly refers to "PM" rather than PO/BA/SM. This is part of the broader terminology issue addressed in IMP-037.

**Proposed Resolution:**
Apply the same terminology note from IMP-037 to Module 1.10. This will be resolved by the cross-module fix. No module-specific change needed beyond IMP-037.

**Coherence:** Dependent on IMP-037.

---

## Module 2.1: Writing PRDs with Copilot

---

### IMP-037
**Module:** 2.1
**Severity:** Moderate
**Title:** Learning objectives are not measurable and read as brief phrases

**Finding IDs:** T2-26
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 2.1 "What You'll Learn" section (lines 8-16) objectives read as:
1. "Use Copilot as a thinking partner (not ghostwriter) for enterprise PRDs"
2. "Include business cases with ROI calculations"

These are directional but not measurable outcomes. Tester T2-26 notes they are not "articulated as completed sentences" and are not verifiable.

**Proposed Resolution:**
Rewrite the "What You'll Learn" objectives as measurable outcomes:

> 1. Draft a business case section of an enterprise PRD including ROI calculations using Copilot prompts
> 2. Create a RACI matrix for a major internal product initiative
> 3. Build a stakeholder engagement plan that maps decision-makers to their concerns
> 4. Assess your own PRD draft for steering committee readiness using the quality checklist
> 5. Get multi-perspective feedback from MD, CKO, and Consultant personas on a PRD section

**Coherence:** Standalone improvement. Applies the same measurability standard to 2.1 that could also be applied across other modules — but given the density of 2.1 findings, start here.

---

### IMP-038
**Module:** 2.1
**Severity:** Moderate
**Title:** "Standard PRD vs Enterprise PRD" table and "Key Additions" section are repetitive

**Finding IDs:** T2-27
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 2.1 has two sections covering the same ground:
1. "Enterprise PRDs Are Different" comparison table (lines 22-30) — maps Standard PRD elements to Enterprise equivalents
2. "Key Additions for Enterprise PRDs" list (lines 32-39) — lists Business Case, Stakeholder Analysis, Governance, Change Management, RACI

These are redundant — the five "Key Additions" items are already implied by the right column of the table above.

**Proposed Resolution:**
Merge the two sections. Remove the "Key Additions for Enterprise PRDs" list as a separate section. Instead, annotate the table's right column entries with a brief "(see Phase X)" cross-reference to where in the module each element is taught:

| Standard PRD | Enterprise Internal PRD | Where in This Module |
|---|---|---|
| Problem statement | Problem + Business case | Phase 1, Step 2 |
| User stories | Stakeholder analysis | Phase 1, Step 3 |
| Success metrics | Adoption metrics + ROI | Phase 2 |
| ... | ... | ... |

**Coherence:** Standalone restructure. Reduces visual bulk without losing content.

---

### IMP-039
**Module:** 2.1
**Severity:** Moderate
**Title:** Dense "wall of text" sections need visual structure

**Finding IDs:** T2-28, T2-29, T4-31
**Priority Theme:** #8 (Moderate — module length/cognitive overload)

**Issue (validated against module):**
Sections flagged by testers as overwhelming:
- "Enterprise PRDs Are Different" + "The Right Mindset" + "The Enterprise PRD Workflow" appear back-to-back as unbroken text
- "The Enterprise PRD Workflow" (lines 56-76) is a four-phase description with no visual break

Tester T4-31 notes the module is "extremely long vertical" — the module is approximately 500 lines.

**Proposed Resolution:**
1. Add a horizontal rule between major sections ("Enterprise PRDs Are Different", "The Right Mindset", "The Enterprise PRD Workflow")
2. Convert "The Enterprise PRD Workflow" four phases into a numbered callout block:

   > **The Enterprise PRD Workflow (4 Phases)**
   > **Phase 1:** Business Context — define the problem, build ROI case, identify stakeholders
   > **Phase 2:** Solution & Impact — explore options, define metrics, plan change management
   > **Phase 3:** Document & Governance — write the PRD with enterprise sections, create RACI
   > **Phase 4:** Review & Alignment — stakeholder review, governance approval, steering committee

3. Add a "Jump to:" anchor note at the top of the module:
   > *Quick navigation: [Phase 1 Business Context](#phase-1) | [Phase 2 Solution](#phase-2) | [Phase 3 Document](#phase-3) | [Phase 4 Review](#phase-4) | [Quality Checklist](#checklist)*

**Coherence:** Part of the broader module length theme (Priority Theme #8). Similar treatment recommended for Module 2.3 (IMP-042).

---

### IMP-040
**Module:** 2.1
**Severity:** Minor
**Title:** RACI and steering committee terms used without definitions for learners unfamiliar with enterprise governance

**Finding IDs:** T4-30
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 2.1 uses RACI (lines 278-346), "steering committee" (lines 379-401), and governance terms extensively without defining them. Tester T4-30 notes: *"Not all learners will know RACI."*

**Proposed Resolution:**
In the "Key Additions for Enterprise PRDs" section (or the merged table per IMP-038), add a brief glossary note:
> *"New to enterprise governance? Quick definitions:"*
> - **RACI**: Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), Informed (needs to know)
> - **Steering Committee**: Senior stakeholder group with budget authority and strategic oversight
> - **Governance**: The process by which decisions are made, approved, and tracked in an organization

**Coherence:** Standalone addition. Could also be added to the course-level Resources section as a glossary.

---

## Module 2.2: Analyzing Product Data

---

### IMP-041
**Module:** 2.2
**Severity:** Critical
**Title:** Alt+I shortcut for Excel Copilot is flagged as not working; exercise fails without fallback

**Finding IDs:** T1-13, T3-49, T4-33
**Priority Theme:** #1 (Critical — this is the 2.2-specific instance)

**Issue (validated against module):**
Module 2.2 Exercise 3 (lines 199-223) instructs: *"Open utilization data in Excel / Press Alt+I to open Copilot"*. Tester T1-13 confirms Alt+I does not work in Excel. Tester T3-49 confirms this shortcut is inconsistent across M365 builds.

**Proposed Resolution:**
In Exercise 3 and all Alt+I references in Module 2.2, add the ribbon icon fallback:
> *"Press Alt+I to open Copilot, or click the **Copilot button** in the Home tab of the Excel ribbon."*

Add a disclaimer note in the module intro:
> **Environment note:** Keyboard shortcuts may vary. If Alt+I does not work, use the Copilot icon in the Excel ribbon (Home tab). See Module 1.7 for full shortcut troubleshooting.

**Coherence:** Same fix pattern as IMP-025 (1.7) and IMP-003 (1.1). Apply the same language for consistency.

---

### IMP-042
**Module:** 2.2
**Severity:** Moderate
**Title:** "Three Ways to Analyze Enterprise Data" — no guidance on which method to use when

**Finding IDs:** T4-34
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 2.2 "Three Ways to Analyze Enterprise Data" table (lines 60-65) presents three methods (Copilot Chat, Excel Copilot, Analyst Agent) but does not give clear decision guidance for choosing between them. Tester T4-34 notes: *"It's not clear which method to use in which scenario."*

**Proposed Resolution:**
After the three-method table, add a decision aid:
> **Which method should I use?**
> - Have a spreadsheet file open and want in-context analysis → **Excel Copilot**
> - Need to upload a file and get a quick summary → **Copilot Chat**
> - Need statistical validation, ROI calculations, or complex multi-step reasoning → **Analyst Agent**
> - Unsure? Start with **Copilot Chat** — if the question requires deeper analysis, switch to **Analyst Agent**

**Coherence:** Standalone addition. Supplements the existing table.

---

### IMP-043
**Module:** 2.2
**Severity:** Minor
**Title:** Responsible AI policy link recommended but not present

**Finding IDs:** T3-52
**Priority Theme:** Part of Theme #2 (Critical — data sensitivity)

**Issue (validated against module):**
Tester T3-52 recommends adding a hyperlink to Accenture's RAI (Responsible AI) policy in the module.

**Proposed Resolution:**
In Module 2.2's Best Practices "Don't" section, add an additional note:
> *"For Accenture-specific guidance on AI usage and data handling, refer to your Responsible AI policy (available on the Accenture internal intranet — search 'Responsible AI guidelines')."*

**Coherence:** Part of cross-module security theme (IMP-036). Similar note should appear in Module 2.3 (IMP-044).

---

## Module 2.3: Product Strategy

---

### IMP-044
**Module:** 2.3
**Severity:** Moderate
**Title:** Corporate priorities used in examples are presented as facts without flagging they are illustrative

**Finding IDs:** T4-36
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 2.3 "Strategic Alignment Analysis" prompt (lines 43-49) presents:
> *"Accenture Corporate Priorities (Current Year): 1. GenAI Leadership, 2. Talent Retention — Reduce attrition from 16% to 12%, 3. Operational Efficiency — 5% productivity improvement, 4. Competitive Positioning"*

Tester T4-36 flags: *"Corporate priorities (GenAI Leadership, 5% productivity improvement, attrition targets) are presented as real facts."* These are plausible but illustrative — not official Accenture corporate targets.

**Proposed Resolution:**
Add a parenthetical to the prompt block header:
> *(Note: The priorities and metrics below are illustrative for this exercise. In real use, replace with your organization's actual current strategic priorities.)*

And in the framework description before the prompt:
> *"Use this framework with your organization's actual strategic priorities, not the illustrative examples shown."*

**Coherence:** Standalone disclaimer. Low risk, high trust value.

---

### IMP-045
**Module:** 2.3
**Severity:** Moderate
**Title:** Module is extremely dense and would benefit from navigation aids

**Finding IDs:** T4-37, T4-38
**Priority Theme:** #8 (Moderate — module length/cognitive overload)

**Issue (validated against module):**
Module 2.3 is 603 lines. Testers describe it as "effectively a 3-4 hour workshop compressed into 35 minutes" and expect learners to skim or copy prompts without understanding frameworks.

**Proposed Resolution:**
1. Add a "Quick Navigation" anchor section at the top after "What You'll Learn":
   > *Jump to: [Strategic Frameworks](#frameworks) | [Portfolio Strategy](#portfolio) | [Governance](#governance) | [Competitive Strategy](#competitive) | [Communication](#communication) | [Exercise](#exercise)*

2. Add a brief "Time Estimate" note at the start of each major section:
   > *(~5 min) Framework 1: Strategic Alignment Analysis*

3. Consider separating the "Exercise: Strategic Planning Session" (lines 479-542) into a standalone "Module 2.3 Workshop" section that learners can return to separately.

**Coherence:** Part of Priority Theme #8 (module length). Module 2.3 is the most extreme case. Splitting into sub-modules is a larger architectural decision — recommend navigation aids as the immediate fix, with the split as a follow-up consideration.

---

### IMP-046
**Module:** 2.3
**Severity:** Moderate
**Title:** Strategy module is entirely text-based; visual frameworks would aid comprehension

**Finding IDs:** T4-39
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 2.3 covers strategic frameworks (SWOT, value chain, portfolio matrix) but presents them entirely as text prompts. Tester T4-39 notes: *"Strategy thinking benefits from diagrams: portfolio maps, value chains, priority matrices."*

**Proposed Resolution:**
For each of the three frameworks, add a brief visual description or ASCII diagram:

For the Enterprise SWOT (lines 78-100), before the prompt:
> *"A SWOT analysis is a 2x2 grid: Strengths and Weaknesses are internal; Opportunities and Threats are external. Run the prompt below to generate your SWOT content."*

For the Value Chain (lines 102-122):
> *"The AKX value chain flows left to right: Content Creation → Curation → Search → Expert Connection → Knowledge Application."*

Full diagrams are best produced by learners using the prompts in Level 3 (Module 3.2) — reference this:
> *"Once you've worked through this module, use the prompts in Module 3.2 to create visual versions of these frameworks for your steering committee presentations."*

**Coherence:** Cross-reference to Module 3.2 (PM Visuals) is appropriate and reinforces the course flow.

---

## Module 3.1: Image Generation Basics

---

### IMP-047
**Module:** 3.1
**Severity:** Moderate
**Title:** Microsoft Designer assumed available but may not be accessible in Accenture tenant

**Finding IDs:** T2-30, T4-41, T4-44
**Priority Theme:** #10 (Moderate)

**Issue (validated against module):**
Module 3.1 "Microsoft Designer Integration" section (lines 167-193) instructs learners to go to designer.microsoft.com. The module does not state that Designer requires a separate license or that it may not be available in enterprise tenants.

**Proposed Resolution:**
Add a prerequisite callout before the Designer section:
> **Microsoft Designer Access**
> Designer (designer.microsoft.com) is included with Microsoft 365 Business Standard, Business Premium, and M365 Copilot licenses. To check if you have access:
> 1. Go to designer.microsoft.com and sign in with your Accenture M365 account
> 2. If you see a "Get access" page, Designer is not included in your current license
>
> **If Designer is not available:** Use Copilot Chat for image generation (DALL-E 3 is available in the main Copilot interface without Designer). You can add text and polish images using PowerPoint's built-in design tools as an alternative.

**Coherence:** Pairs with IMP-050 (Module 3.2 same issue). Both modules reference Designer — the prerequisite note in 3.1 covers both.

---

### IMP-048
**Module:** 3.1
**Severity:** Moderate
**Title:** Image generation credit limits not sufficiently explained; exercises fail silently when credits run out

**Finding IDs:** T2-38, T3-60, T3-61, T3-62, T3-64
**Priority Theme:** #11 (Moderate)

**Issue (validated against module):**
Module 3.1 "Image Credits" table (lines 34-39) states M365 Copilot gets "60+ credits" per month. Multiple testers (T3-60, T3-61, T3-62) hit the credit limit mid-exercise and received the message *"image generation has hit a limit for now."* The module does not explain:
- What happens when credits run out
- How to conserve credits during the course
- That credits are per-calendar-month and may already be partially consumed

**Proposed Resolution:**
1. Expand the "Image Credits" section:
   > | License | Monthly Credits | Notes |
   > |---------|-----------------|-------|
   > | Free Copilot | 15 credits | Refreshes monthly |
   > | Copilot Pro | 100 credits | Refreshes monthly |
   > | M365 Copilot | 60+ credits | Verify current limit — Microsoft updates this |
   >
   > **Important:** If you hit your limit, you'll see a message like *"Image generation is temporarily unavailable."* Credits refresh at the start of each calendar month.
   > **To conserve credits:** Write detailed prompts (to avoid regenerating), use variations sparingly, and batch similar image requests together.

2. Before Exercise 1, add:
   > *"This exercise uses 1 image credit. You have [60+] credits per month — enough for this entire course if used strategically."*

3. After the credit table, add a "What if my credits run out?" note:
   > *"If credits run out: describe your intended image in text and proceed with the rest of the module conceptually. The prompt-writing skill is the primary learning objective, not the image output itself."*

**Coherence:** Standalone fix. Pairs with IMP-047 (Designer availability).

---

### IMP-049
**Module:** 3.1
**Severity:** Moderate
**Title:** Missing prerequisite context linking to prior modules and missing forward-looking "what's next"

**Finding IDs:** T2-31, T2-32, T2-33, T2-34, T2-35
**Priority Theme:** None (cluster of Module 3.1 instructional design findings)

**Issue (validated against module):**
Five related instructional design gaps in Module 3.1:
- T2-31: Module references "prerequisite completion" but doesn't specify which prior modules are relevant
- T2-32: Module ends without guiding learners to 3.2
- T2-33: "Style Options" section (SSMD framework) is not connected to the framework name
- T2-34: Module close uses backward-facing language ("You now know...") without forward momentum
- T2-35: Exercises don't show what "good" looks like

**Proposed Resolution:**
1. In the prerequisites, change "Levels 1-2 completed" to a brief note: *"This module builds on Module 1.2 (file uploads) and Module 2.3 (strategic visuals). No image experience needed."*

2. In the Style Options table (lines 104-108), add a column header note: *"These style options map to the SSMD framework's 'Style' component."*

3. After each exercise, add one example of a high-quality output description:
   > *"A well-generated image from this prompt should show: [brief description of expected output quality for the specific prompt]"*

4. Replace the module-end "You now know" summary with:
   > *"You can now generate and iterate on images. In Module 3.2, you'll apply these skills to create specific enterprise PM visual types: persona illustrations, roadmaps, and governance diagrams."*

**Coherence:** All five sub-items are instructional design improvements. Can be addressed together in a single editing pass.

---

### IMP-050
**Module:** 3.1
**Severity:** Minor
**Title:** AI-generated persona images: no warning about realistic face generation and identity concerns

**Finding IDs:** T4-43
**Priority Theme:** None (standalone finding)

**Issue (validated against module):**
Module 3.1 (and 3.2) encourage generating persona illustrations including photorealistic portraits. Tester T4-43 notes: *"Module encourages generating personas and visuals but never warns about generating realistic-looking people who could be mistaken for real individuals."*

**Proposed Resolution:**
In Module 3.1 "Prompting Best Practices" section, add:
> **Responsible Image Generation:**
> - Use illustration styles (flat design, corporate illustration) rather than photorealistic for personas — this avoids creating images that look like real people
> - Do not generate images of real, identifiable people by name
> - For internal enterprise use, illustration styles are generally more appropriate than photorealistic portraits
> - DALL-E 3 has built-in restrictions on generating realistic likenesses of real people

**Coherence:** Pairs with Module 3.2 persona exercises. Standalone ethical guidance note.

---

## Module 3.2: PM Visuals

---

### IMP-051
**Module:** 3.2
**Severity:** Moderate
**Title:** Module is prompt-heavy but shows no "before/after" or examples of quality output

**Finding IDs:** T2-36, T3-65, T3-66
**Priority Theme:** Part of Theme #7 (assessments / what good looks like)

**Issue (validated against module):**
Module 3.2 contains extensive prompt libraries for enterprise visuals but never shows what a good output looks like. Testers T3-65 and T3-66 specifically raise the "Visual Thinking Partner" vs. "graphic designer" distinction — the module doesn't help learners calibrate their expectations.

**Proposed Resolution:**
After each major visual type section (Stakeholder Personas, Adoption Journeys, Roadmaps, Launch Assets), add a brief "What to expect" note:
> *"Copilot will produce a [illustration/diagram/map] that serves as a working draft — not a final deliverable. Plan to refine in Microsoft Designer or your presentation software."*

After the Stakeholder Personas section, add:
> *"Generated persona illustrations work well for: internal presentations, team alignment workshops, change management materials. They are not production-ready brand assets — for those, involve your communications team."*

**Coherence:** Addresses a recurring calibration gap across 3.1 and 3.2. Connects to Priority Theme #7 (assessment / what good looks like).

---

### IMP-052
**Module:** 3.2
**Severity:** Moderate
**Title:** Data hygiene requirement for accurate AI-generated visuals is mentioned but not actionized

**Finding IDs:** T3-67, T3-68
**Priority Theme:** None (standalone findings)

**Issue (validated against module):**
Testers T3-67 and T3-68 raise that the module mentions visuals depend on clean data input but does not give learners a practical checklist. Specifically, the module's roadmap visual prompt (lines 155-176) assumes learners will input their own data but gives no guidance on how to prepare it.

**Proposed Resolution:**
Before the Roadmap Visuals section, add a brief "Data Preparation" note:
> **Before creating data-driven visuals, prepare your data:**
> - Roadmaps: List your initiatives with quarter, team/track, and status (committed vs. planned)
> - Adoption funnels: Have your actual stage percentages ready (provisioned → active → WAU)
> - Priority matrices: Score each initiative on both axes before prompting
>
> *Copilot can generate accurate visuals when given clean, structured input. Vague inputs produce generic visuals.*

**Coherence:** Standalone addition. Sets learners up for better prompt results.

---

### IMP-053
**Module:** 3.2
**Severity:** Moderate
**Title:** No guidance on pacing/practice breaks; module introduces too many visual types at once

**Finding IDs:** T2-37
**Priority Theme:** Part of Theme #8 (module length/cognitive overload)

**Issue (validated against module):**
Module 3.2 introduces 5 visual categories (Personas, Journey Maps, Roadmaps, Launch Assets, Presentation Graphics) with 15+ prompts in 25 minutes. Tester T2-37 notes: *"No clear breaks or 'stop and try' moments."*

**Proposed Resolution:**
1. Add a "Suggested Pacing" note at the module start:
   > *"This module has 5 sections. You don't need to complete all of them in one session — each section is self-contained. Work through Sections 1 and 2 first, then return for others as your work requires."*

2. Mark exercises as "Try this now" vs. "Reference for later":
   - Section 1 (Stakeholder Personas): **Try this now** — essential for the course context
   - Section 2 (Adoption Journeys): **Try this now** — directly applicable to AKX context
   - Sections 3-5: **Reference for later** — return when you have a specific visual need

**Coherence:** Part of Priority Theme #8. Complements IMP-045 (Module 2.3 pacing).

---

## Cross-Module Items

---

### IMP-054
**Module:** All modules
**Severity:** Major
**Title:** PM vs PO/BA role terminology is inconsistent across all modules

**Finding IDs:** T3-01, T3-09, T4-09, T4-12, T4-25, T4-26
**Priority Theme:** #4 (Major)

**Issue (validated against modules):**
The course is titled "Microsoft Copilot for Product Managers" and the course describes the learner's role as "Senior Product Owner" (Module 1.1 line 25). Throughout modules, the learner role is variously called:
- "Senior Product Owner" (Module 1.1)
- "Product Manager" or "PM" (most modules)
- Module 1.5 has persona prompts for "Managing Director" but not for PO/BA roles
- Module 1.10 (tester T4-25): *"Most of the time it's referred to as PM's content, not PO/BA"*
- Module 1.2 (tester T3-09): "Roles not clear"

**Proposed Resolution:**
1. In Module 1.1, add an explicit "About Course Terminology" note after the "Your Role" section:
   > *"Throughout this course, we use 'PM' (Product Manager) as a shorthand term that includes Product Owners (POs), Business Analysts (BAs), Scrum Masters, and anyone in a product leadership role. When you see 'PM' in prompts or exercises, replace it with your actual title — the skills apply equally."*

2. Standardize the learner role description in Module 1.1 as: *"Senior Product Owner (referred to as 'PM' throughout the course)"*

3. Conduct a find-and-replace review: In exercise prompts across all modules, verify that "I'm a Senior Product Manager" references are consistent. Add a parenthetical where PM is used: *"(or Product Owner/BA — adjust to your role)"* on first use in each module.

**Coherence:** This is a course-level change. Prioritize Module 1.1 first, then add the parenthetical on first-use in each module. Full uniformity across all 15 modules is a lower-priority pass.

---

### IMP-055
**Module:** All modules
**Severity:** Major
**Title:** No assessments or success criteria anywhere in the course

**Finding IDs:** T2-25, T2-35, T2-36
**Priority Theme:** #7 (Major)

**Issue (validated against modules):**
The course has no self-assessment mechanism. There are exercises ("Do this now") but no way for learners to verify they've achieved the learning objectives. Tester T2-25 identifies this as a gap across all modules.

**Proposed Resolution:**
For each module, add a 3-question self-check at the end of the "Module Complete!" section. This should be low-effort to implement. Format:

> **Quick Self-Check**
> Before moving on, can you:
> - [ ] [Specific verifiable action from the module]
> - [ ] [Second specific action]
> - [ ] [Third specific action]
>
> *If you're unsure about any of these, re-read that section before continuing.*

Example for Module 1.1:
> - [ ] Open copilot.microsoft.com and see the chat interface with file upload
> - [ ] Name the three Accenture personas in this course and their main pain points
> - [ ] Identify which level and module covers PRD writing

Prioritize: Module 1.1, 1.3, 1.4, 1.6 first (highest finding density).

**Coherence:** Large scope change — affects all 15 modules. Recommend starting with the 5 highest-complexity modules (1.3, 1.4, 2.1, 2.2, 3.1) as a first pass.

---

### IMP-056
**Module:** 1.2, 1.6, 1.7, 2.2, 2.3 (and all modules handling data)
**Severity:** Major
**Title:** Enterprise data sensitivity and security warnings are absent across data-handling modules

**Finding IDs:** T3-32, T3-52, T3-56, T4-04, T4-16
**Priority Theme:** #2 (Critical)

**Issue (validated against modules):**
No module currently includes guidance on:
- Sensitivity labels that block Copilot (T3-32: files tagged "Highly Confidential - Encrypted" are blocked)
- What data is appropriate to upload to Copilot in an enterprise environment (T4-04, T4-16)
- Accenture's Responsible AI policy and data handling requirements (T3-52)
- Data sensitivity considerations when building product strategy with real business data (T3-56)

**Proposed Resolution:**

Create a reusable "Enterprise Data Guidance" callout block that is referenced at the beginning of every module involving file uploads or data handling:

> ---
> **Enterprise Data Guidance**
> Before uploading files or sharing data with Copilot in this module:
> - Copilot operates within your Accenture Microsoft 365 tenant — data is not shared externally
> - Files labeled "Highly Confidential — Encrypted" may be blocked by Copilot due to sensitivity policies
> - Do not share client names, deal values, or engagement codes in Copilot prompts
> - For Accenture's Responsible AI policy, search "RAI guidelines" on the internal intranet
> ---

Insert this callout in:
- Module 1.2 (before file upload section) — IMP-011
- Module 1.6 (in memory limitations section) — IMP-024
- Module 1.7 (before M365 app exercises)
- Module 2.1 (before business case data examples)
- Module 2.2 (in the data analysis intro section) — IMP-043
- Module 2.3 (before strategy framework prompts) — IMP-044

**Coherence:** This is the highest-impact cross-module change. It is also the only Critical-rated theme (Priority Theme #2) that does not have a single-module fix. Implement as a single content block copy-pasted to all relevant modules.

---

### IMP-057
**Module:** All modules
**Severity:** Moderate
**Title:** System latency (10-20 second response times) not set as an expectation anywhere

**Finding IDs:** March 10 feedback item (latency note)
**Priority Theme:** March 10 feedback (Technical Environment section)

**Issue (validated against modules):**
The March 10 report specifically calls out: *"AI outcomes typically take 10-20 seconds (and occasionally as little as 5 seconds). This should be integrated as a 'System Responsiveness' note to prevent users from perceiving delays as technical failures."*

No module currently sets this expectation. Learners who see a 15-second wait after submitting a prompt may assume something is wrong.

**Proposed Resolution:**
In Module 1.1 "Exercise 1: Open Copilot" (lines 80-93), add after step 3:
> *"Copilot responses typically take 5-20 seconds depending on the task complexity. Agents (Researcher, Analyst) may take 2-10 minutes. This is normal — do not refresh the page while waiting."*

In Module 1.4 (before agent exercises), add:
> *"Agents take significantly longer than regular chat: Researcher typically takes 5-10 minutes, Analyst 2-5 minutes. This is expected."*

**Coherence:** Short additions in two places. High learner experience value for low effort.

---

## Implementation Order Recommendation

The following sequencing is suggested based on severity and interdependencies:

### Tier 1 — Fix Immediately (Blockers and Highest Severity)

| Item | Module | Severity | Why First |
|------|--------|----------|-----------|
| IMP-003 | 1.1 | Major | Shortcuts fail in exercises; learners cannot proceed |
| IMP-025 | 1.7 | Critical | Multiple exercise failures due to Alt+I not working |
| IMP-041 | 2.2 | Critical | Excel Copilot exercise fails without fallback |
| IMP-022 | 1.6 | Major | Memory navigation is confirmed wrong by 3 teams |
| IMP-034 | 1.10 | Moderate | SharePoint exercises fail without prerequisites |
| IMP-026 | 1.7 | Major | False "Level 1 Complete" message is factually wrong |
| IMP-030 | 1.9 | Major | False "Level 1 Complete" message is factually wrong |
| IMP-016 | 1.4 | Moderate | Workflow Agent unavailability is a known blocker |

### Tier 2 — High Value / Low Effort (Before Next Testing Cycle)

| Item | Module | Severity | Why |
|------|--------|----------|-----|
| IMP-001 | 1.1 | Critical | Model naming is a factual accuracy issue |
| IMP-002 | 1.1 | Critical | Internal inconsistency damages course credibility |
| IMP-009 | 1.2 | Major | File limit claim is verifiably incorrect |
| IMP-054 | All | Major | Role terminology sets learner expectations |
| IMP-056 | Multiple | Major | Security guidance is an enterprise risk item |
| IMP-057 | 1.1, 1.4 | Moderate | Latency expectation is 2-line addition |
| IMP-010 | 1.2 | Moderate | ContextIQ failure is reported by one team |
| IMP-028 | 1.8 | Moderate | Missing prerequisite causes exercise failure |
| IMP-029 | 1.8 | Moderate | Teams channel Copilot restriction is confirmed |

### Tier 3 — Important Quality Improvements

| Item | Module | Severity | Notes |
|------|--------|----------|-------|
| IMP-017 | 1.4 | Moderate | Agent sequencing gap confirmed by March 10 report |
| IMP-019 | 1.5 | Moderate | PO/BA persona gap confirmed by March 10 report |
| IMP-037 | 2.1 | Moderate | Learning objectives improvement |
| IMP-038 | 2.1 | Moderate | Content reduction (repetitive sections) |
| IMP-039 | 2.1 | Moderate | Navigation aids for long module |
| IMP-042 | 2.2 | Moderate | Decision guidance for method selection |
| IMP-045 | 2.3 | Moderate | Navigation aids for very long module |
| IMP-047 | 3.1 | Moderate | Designer prerequisite |
| IMP-048 | 3.1 | Moderate | Credit limits and exercise fallback |

### Tier 4 — Polish and Enhancements

| Item | Module | Notes |
|------|--------|-------|
| IMP-004 | 1.1 | Objective wording |
| IMP-005 | 1.1 | Persona link |
| IMP-006 | 1.1 | Duration label |
| IMP-007 | 1.1 | Navigation data fix (code layer) |
| IMP-008 | 1.1 | Screenshots (ongoing effort) |
| IMP-011 | 1.2 | Data sensitivity (covered by IMP-056) |
| IMP-012 | 1.2 | Method 2 drag-drop steps |
| IMP-013 | 1.3 | Batch 2 prompt |
| IMP-014 | 1.3 | Mockup exercise |
| IMP-015 | 1.3 | Priority framing |
| IMP-018 | 1.4 | Exercise framing note |
| IMP-020 | 1.5 | Industry persona guidance |
| IMP-021 | 1.5 | Feature proposal clarification |
| IMP-023 | 1.6 | Context alignment (TaskFlow→AKX) |
| IMP-024 | 1.6 | Memory sensitive data note |
| IMP-027 | 1.7 | Data consistency (depends on IMP-023) |
| IMP-031 | 1.9 | "Make it a poem" note |
| IMP-032 | 1.9 | Outlook screenshot |
| IMP-033 | 1.9 | Long chain handling guidance |
| IMP-035 | 1.10 | Module intro paragraph |
| IMP-036 | 1.10 | Role terminology (covered by IMP-054) |
| IMP-040 | 2.1 | Governance glossary |
| IMP-043 | 2.2 | RAI policy link |
| IMP-044 | 2.3 | Corporate priorities disclaimer |
| IMP-046 | 2.3 | Visual framework references |
| IMP-049 | 3.1 | Instructional design improvements |
| IMP-050 | 3.1 | Responsible image generation note |
| IMP-051 | 3.2 | Output calibration notes |
| IMP-052 | 3.2 | Data hygiene prep guidance |
| IMP-053 | 3.2 | Pacing/practice break notes |
| IMP-055 | All | Self-assessments (large scope, Tier 4 start) |

---

## Findings Not Mapped to Implementation Items

The following findings were reviewed and determined to require no content change:

| Finding ID | Reason |
|-----------|--------|
| T1-16 | Peer review confirmed the exercise works — environment issue, not content issue |
| T1-17 | Peer review confirmed PowerPoint exercise works — environment issue |
| T1-08 | Flowchart quality expected to vary — no content change recommended by tester |
| T2-07 | Addressed by IMP-006 (6-hour label) — no additional change needed |
| T3-06 | Mac testing limitation — not a content fix; add "Mac tested separately" note if desired |
| T3-40 | Request for embedded trial Outlook session — out of scope for markdown course format |
| T3-48 | Positive feedback ("helps understanding") — no action needed |
| T4-07 | Progress tracking not synced between Chrome and Edge — this is a known localStorage limitation; address in viewer code if desired, not in module content |
| T4-35 | "Missing topics" with no specific observation provided — insufficient information to act on |

---

*End of Implementation Plan — 42 items across 15 modules + 4 cross-module items*
