# Module 2.2: Analyzing Product Data with Copilot (Enterprise Edition)

**Duration:** 30 minutes
**Prerequisites:** Module 2.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Analyze enterprise adoption funnels and utilization data
2. Use Excel Copilot for enterprise metrics analysis
3. Interpret pilot test results for internal tools
4. Calculate ROI for steering committee presentations
5. Use the Analyst agent for complex business reasoning

---

> **Environment note:** Keyboard shortcuts may vary. If Alt+I does not work, use the Copilot icon in the Excel ribbon (Home tab). See Module 1.7 for full shortcut troubleshooting.

## Why Enterprise PMs Need Data Analysis

> **Enterprise data guidance:** The financial figures, metrics, and business data used throughout this module are realistic examples for learning purposes. In real use, replace with your organization's actual data. Always verify calculations independently before presenting to stakeholders.

Enterprise internal product decisions require strong data support:

| Decision Type | Data Needed |
|--------------|-------------|
| **Investment justification** | ROI calculations, productivity gains |
| **Steering committee updates** | Adoption trends, utilization metrics |
| **Change management** | Adoption funnel analysis, barrier identification |
| **Portfolio prioritization** | Comparative feature impact, resource efficiency |
| **Business case validation** | Pilot results, projected benefits |

Copilot makes enterprise data analysis accessible without needing SQL or Python.

---

## Enterprise Metrics That Matter

Unlike external products focused on revenue and growth, enterprise internal tools track:

### Adoption Metrics
- **Weekly Active Users (WAU)** - Consistent platform usage
- **Provisioned vs. Active** - How many with access actually use it
- **Feature Adoption** - Which capabilities are being used
- **Adoption by Role** - Partners vs. Consultants vs. Delivery Managers

### Utilization Metrics
- **Search Success Rate** - Finding what you need
- **Time to Find Expert** - Expert discovery efficiency
- **Content Quality Scores** - Relevance and freshness
- **Workflow Completion** - End-to-end task completion

### Business Impact Metrics
- **Time Savings** - Hours saved per user per week
- **Deals Won** - Impact on competitive wins
- **Productivity Gain** - Billable hour efficiency
- **Talent Retention** - Employee satisfaction correlation

---

## Three Ways to Analyze Enterprise Data

| Method | Best For | How |
|--------|----------|-----|
| **Copilot Chat** | Quick analysis, summaries | Upload file to chat |
| **Excel Copilot** | Spreadsheet work, formulas | Alt+I in Excel (or Copilot button in Home tab) |
| **Analyst Agent** | Complex reasoning, ROI | Left panel → Analyst |

> **Which method should I use?**
> - Have a spreadsheet open and want in-context analysis → **Excel Copilot**
> - Need to upload a file and get a quick summary → **Copilot Chat**
> - Need statistical validation, ROI calculations, or complex multi-step reasoning → **Analyst Agent**
> - Unsure? Start with **Copilot Chat** — if the question requires deeper analysis, switch to **Analyst Agent**

---

## Method 1: Adoption Funnel Analysis

### Exercise 1: Analyze AKX Adoption Funnel

Let's analyze AKX's adoption funnel - a critical metric for internal tools.

**Sample Data (or use `sample-files/data/adoption-funnel.csv`):**

```
Week,Provisioned_Users,Logged_In,Searched,Found_Useful,Returned_Next_Week,WAU_Rate
Week 1,680000,340000,238000,166600,119952,17.6%
Week 2,682000,347000,250000,175000,131250,19.2%
Week 3,685000,356000,263000,189360,142020,20.7%
Week 4,687000,370000,281000,210750,163000,23.7%
...
Week 24,700000,448000,358000,286000,294000,42.0%
```

**Do this now:**

1. Upload the adoption funnel data to Copilot
2. Use this prompt:

```
Analyze this AKX (Accenture Knowledge Exchange) adoption funnel data.

Context: AKX is an internal knowledge management platform for 700,000 Accenture employees.
Our target is 60% WAU. Current state shown in data.

Please provide:

1. **Funnel Health Assessment**
   - Current conversion rates at each stage
   - Where are the biggest drop-offs?
   - What's the overall provisioned-to-WAU rate?

2. **Trend Analysis**
   - Is adoption improving over time?
   - What's the weekly growth rate?
   - Project when we'll hit 60% WAU at current trajectory

3. **Bottleneck Identification**
   - Which funnel stage has the biggest opportunity?
   - If we improve "Found Useful" from 70% to 80%, what's the impact on WAU?
   - Quantify the opportunity for each stage

4. **Segment Analysis**
   - Any patterns in the data suggesting user segment differences?
   - What would you want to slice by (role, practice, geography)?

5. **Steering Committee Summary**
   - 3-sentence summary for executive sponsors
   - Key metric trend to highlight
   - Primary recommendation

Format as a report suitable for a steering committee update.
```

---

## Exercise 2: Utilization Data Analysis

Internal tools also need to track productivity impact.

**Sample Data (or use `sample-files/data/utilization-data.csv`):**

```
Practice,Consultants,AKX_Active_Users,Avg_Searches_Week,Avg_Search_Time_Min,Expert_Connections,Utilization_Rate
Technology,85000,38250,12.5,2.8,1250,92%
Strategy,35000,14000,8.2,3.4,890,89%
Operations,45000,15750,6.1,4.2,450,87%
Financial Services,55000,23100,10.8,2.1,980,91%
Health & Public Service,40000,14000,7.5,3.8,560,88%
```

**Do this now:**

Use this prompt:

```
Analyze this AKX utilization data by practice at Accenture.

Please provide:

1. **Practice Comparison**
   - Which practices have highest/lowest AKX adoption?
   - Correlation between AKX usage and practice utilization rate?
   - Are high-utilization practices using AKX more?

2. **Search Efficiency Analysis**
   - Which practices have most efficient search (lowest time)?
   - What might explain the differences?
   - Benchmark: Target is 2 minutes average. Who's meeting it?

3. **Expert Connection Analysis**
   - Expert connections per active user by practice
   - Which practices are getting most value from expert discovery?

4. **ROI Estimation**
   - If Technology practice saves 5 min/search vs. old system (8 min)
   - Calculate weekly time savings across all 38,250 active users
   - At $300/hour billing rate, what's the annual value?

5. **Recommendations**
   - Which practices need adoption support?
   - What best practices from Technology should be shared?
   - Priority actions for Change Management team
```

---

## Method 2: Excel Copilot for Enterprise Data

### How to Access

1. Open your data file in Excel
2. Press **Alt+I** to open Copilot, or click the **Copilot button** in the Home tab of the Excel ribbon

### Enterprise-Specific Excel Tasks

| Task | Example Prompt |
|------|----------------|
| Add ROI formulas | "Add column calculating time savings value at $300/hour" |
| Create adoption charts | "Create trend chart showing WAU over 24 weeks" |
| Practice comparison | "Create pivot table by practice with average adoption" |
| Highlight concerns | "Highlight practices where adoption < 30%" |
| Forecast | "Project WAU for next 12 weeks based on trend" |
| Executive summary | "Create summary statistics for steering committee" |

### Exercise 3: Excel Copilot for Enterprise Metrics

**Do this now:**

1. Open utilization data in Excel
2. Press Alt+I to open Copilot, or click the **Copilot button** in the Home tab of the Excel ribbon
3. Try these prompts:

```
Add a column calculating the ROI per practice assuming:
- Time saved per search: 5 minutes
- Billing rate: $300/hour
- Formula: Active_Users × Avg_Searches_Week × 5/60 × $300 × 52 weeks
```

```
Create a scatter chart showing relationship between AKX_Active_Users
and Utilization_Rate by practice
```

```
Create a pivot table summarizing total time savings by practice,
sorted from highest to lowest
```

---

## Method 3: Analyst Agent for Business Cases

For complex reasoning, ROI validation, and statistical analysis, use the Analyst agent.

### When to Use Analyst for Enterprise

- Validating business case assumptions
- Statistical significance of pilot results
- Multi-variable analysis
- ROI projections with scenarios
- Pre/post comparisons

### Exercise 4: Pilot Test Analysis

**Scenario:** You ran a pilot of AI-powered search with the Technology practice.

**Sample Data (or use `sample-files/data/expert-search-metrics.csv`):**

```
Control Group (Old Search):
- 5,000 consultants in pilot
- Average search time: 8.2 minutes
- Search success rate: 67%
- Time to find expert: 55 hours average
- User satisfaction: 3.2/5
- Weekly searches per user: 6.5

Test Group (AI-Powered Search):
- 5,000 consultants in pilot
- Average search time: 2.4 minutes
- Search success rate: 82%
- Time to find expert: 12 hours average
- User satisfaction: 4.1/5
- Weekly searches per user: 9.2
```

**Do this now:**

1. Click **Analyst** in the left panel
2. Enter this prompt:

```
Analyze this pilot test result for AKX AI-Powered Search at Accenture.

Control Group (Old Search): 5,000 users
- Average search time: 8.2 minutes
- Search success rate: 67%
- Time to find expert: 55 hours
- User satisfaction: 3.2/5
- Weekly searches: 6.5 per user

Test Group (AI-Powered Search): 5,000 users
- Average search time: 2.4 minutes
- Search success rate: 82%
- Time to find expert: 12 hours
- User satisfaction: 4.1/5
- Weekly searches: 9.2 per user

Please provide:

1. **Statistical Significance**
   - Is the improvement in search time statistically significant?
   - Is the improvement in satisfaction significant?
   - Show your calculations

2. **Efficiency Gains**
   - Time saved per search: [calculate]
   - Additional searches enabled per user per week
   - Total time savings across 5,000 pilot users

3. **ROI Projection for Full Rollout**
   - If rolled out to all 300,000 potential weekly active users
   - Average consultant billing rate: $300/hour
   - Calculate annual productivity value
   - Include conservative, moderate, and optimistic scenarios

4. **Business Case Validation**
   - Does this justify the $2M investment?
   - What's the payback period?
   - What's the ROI multiple?

5. **Steering Committee Recommendation**
   - Should we proceed with full rollout?
   - What metrics should we track post-rollout?
   - Any risks or caveats to mention?

Show your reasoning step by step. This will be presented to the CKO sponsor.
```

---

## Common Enterprise Data Scenarios

### Scenario 1: Adoption Cohort Analysis

```
Analyze adoption cohorts for new hires at Accenture:

September cohort: 5,000 new hires
- 68% logged in first week
- 44% performed a search
- 22% weekly active at 30 days

October cohort: 5,500 new hires
- 70% logged in first week
- 50% performed a search
- 26% weekly active at 30 days

November cohort: 4,800 new hires
- 75% logged in first week
- 60% performed a search
- 33% weekly active at 30 days

Questions:
1. Is the improvement trend significant?
2. What's driving better activation for newer cohorts?
3. Project December cohort performance
4. What should we present to Change Management?
```

### Scenario 2: Practice Benchmarking

```
Compare AKX performance across Accenture practices:

For each practice, analyze:
- Adoption rate vs. company average
- Search efficiency metrics
- Expert connection rates
- Correlation with practice performance metrics

Identify:
- Best-in-class practices (what are they doing?)
- Practices needing support
- Recommendations for practice-specific interventions
```

### Scenario 3: Feature ROI Analysis

```
Analyze ROI of AKX features to inform roadmap prioritization:

Features and usage data:
- Basic Search: 85% of users, 3.5 satisfaction
- Expert Finder: 35% of users, 4.2 satisfaction
- Content Curation: 20% of users, 3.8 satisfaction
- AI Recommendations: 15% of users (pilot), 4.5 satisfaction

Questions:
1. Which features drive the most value?
2. What's the potential if we increased Expert Finder adoption?
3. Should we expand AI Recommendations?
4. Investment recommendations for steering committee?
```

### Scenario 4: Competitive Benchmark Analysis

```
Benchmark AKX against what we know about competitor platforms:

Our metrics:
- WAU: 43%
- Search time: 3.5 minutes
- Search satisfaction: 3.8/5
- Expert discovery time: 18 hours

Industry benchmarks (consulting firms):
- McKinsey Knowledge Center: ~65% WAU (estimated)
- BCG internal tools: ~55% WAU (estimated)
- Deloitte knowledge platform: ~50% WAU (estimated)

Analysis:
1. How do we compare?
2. What gap needs to close?
3. What's the business impact of the gap?
4. Recommendation for steering committee
```

---

## Data Analysis Workflow for Enterprise PMs

### Step 1: Define the Business Question
- What decision needs data support?
- Who is the audience (steering committee, sponsors, change management)?
- What would change our recommendation?

### Step 2: Gather Enterprise Data
- Export from internal analytics platforms
- Combine multiple data sources if needed
- Note data limitations and gaps

### Step 3: Explore and Validate
```
Summarize this data. What patterns do you see?
Flag any data quality issues.
What's surprising or concerning?
```

### Step 4: Answer Business Questions
```
Based on this data:
- Should we increase investment in AI Search?
- Which practices need adoption support?
- What's the ROI case for steering committee?
```

### Step 5: Stress-Test Findings
- Are sample sizes sufficient?
- What assumptions are we making?
- What would skeptics challenge?

### Step 6: Package for Stakeholders
- Executive summary for steering committee
- Detailed backup for questions
- Clear recommendation with data support

---

## Best Practices for Enterprise Data Analysis

### Do:
- ✅ Connect analysis to business outcomes (revenue, efficiency, talent)
- ✅ Use Analyst for complex ROI calculations
- ✅ Compare to industry benchmarks
- ✅ Show confidence levels and scenarios
- ✅ Prepare for steering committee questions

### Don't:
- ❌ Present data without business context
- ❌ Skip statistical validation for pilots
- ❌ Ignore practice/segment differences
- ❌ Assume correlation means causation
- ❌ Hide limitations or data gaps

> *For your organization's guidance on AI usage and data handling, refer to your Responsible AI policy (search "Responsible AI guidelines" on your internal intranet).*

---

## Module Complete!

You now know:
- ✅ How to analyze enterprise adoption funnels
- ✅ How to use Excel Copilot for utilization metrics
- ✅ How to interpret pilot test results with statistical rigor
- ✅ How to calculate ROI for steering committee presentations
- ✅ The enterprise data analysis workflow

**Quick Self-Check**
Before moving on, can you:
- [ ] Choose the right analysis method (Chat vs. Excel Copilot vs. Analyst) for a given scenario
- [ ] Open Copilot in Excel using either the keyboard shortcut or the ribbon icon
- [ ] Explain how to validate Copilot's statistical claims before presenting to stakeholders

*If you're unsure about any of these, re-read that section before continuing.*

---

## Next Steps

Continue to **Module 2.3: Enterprise Product Strategy with Copilot**

In Module 2.3, you'll learn:
- Enterprise portfolio strategy (vs. product-market fit)
- Governance and steering committee alignment
- Strategic frameworks for internal tools
- Multi-stakeholder strategy communication

---

## Quick Reference: Enterprise Data Prompts

| Analysis Type | Tool | Example Prompt |
|---------------|------|----------------|
| Adoption funnel | Copilot Chat | "Analyze this adoption funnel data..." |
| Utilization trends | Excel Copilot | "Create pivot table by practice..." |
| Pilot validation | Analyst | "Is this pilot result significant?" |
| ROI calculation | Analyst | "Calculate ROI for steering committee..." |
| Practice benchmarking | Copilot Chat | "Compare performance across practices..." |

---

**Ready for enterprise strategy? Let's go to Module 2.3!**
