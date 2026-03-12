# Module 3.1: Image Generation Basics with Copilot

**Duration:** 20 minutes
**Prerequisites:** *This module builds on Module 1.2 (file uploads) and Module 2.3 (strategic visuals). No image experience needed.*

---

## What You'll Learn

By the end of this module, you will:
1. Understand Copilot's image generation capabilities
2. Generate your first image with DALL-E 3
3. Learn effective prompting for images
4. Iterate and refine image outputs
5. Understand credit limits and best practices

---

## Image Generation in Copilot

Microsoft Copilot uses **DALL-E 3** and **Microsoft Designer** for image creation.

### What You Can Create

- Product mockups and wireframes
- User persona illustrations
- Diagrams and flowcharts
- Marketing visuals
- Presentation graphics
- Icons and simple graphics

### Image Credits

| License | Monthly Credits | Notes |
|---------|-----------------|-------|
| Free Copilot | 15 credits | Refreshes monthly |
| Copilot Pro | 100 credits | Refreshes monthly |
| M365 Copilot | 60+ credits | Verify current limit — Microsoft updates this |

**Important:** If you hit your limit, you'll see a message like *"Image generation is temporarily unavailable."* Credits refresh at the start of each calendar month.

**To conserve credits:** Write detailed prompts (to avoid regenerating), use variations sparingly, and batch similar image requests together.

> **What if my credits run out?** Describe your intended image in text and proceed with the rest of the module conceptually. The prompt-writing skill is the primary learning objective, not the image output itself.

---

## Your First Image

### Basic Prompt Structure

```
Create an image of [SUBJECT] that is [STYLE], [MOOD], [ADDITIONAL DETAILS]
```

### Example

```
Create an image of a modern project management dashboard 
that is clean and minimal, professional, showing tasks 
organized in columns with a blue and white color scheme
```

> *This exercise uses 1 image credit. You have 60+ credits per month — enough for this entire course if used strategically.*

### Exercise 1: Generate Your First Image

**Do this now:**

1. Open Copilot Chat
2. Enter this prompt:

```
Create an image of a diverse remote team collaborating on a 
video call, shown on a laptop screen. The style should be 
modern and professional, with a clean office background.
```

3. Wait for image generation
4. Review the result

**What to notice:**
- Image appears in the chat
- You can download it
- You can ask for variations

---

## Effective Image Prompts

### The SSMD Framework

**S** - Subject (What's in the image)
**S** - Style (Artistic style)
**M** - Mood (Feeling/atmosphere)
**D** - Details (Specific elements)

### Good vs. Bad Prompts

| Bad Prompt | Good Prompt |
|------------|-------------|
| "A dashboard" | "A clean, modern SaaS dashboard with task cards, a sidebar navigation, and a blue/white color scheme, flat design style" |
| "A person working" | "A product manager presenting to stakeholders in a modern conference room, professional and confident, photographically realistic" |
| "A flow chart" | "A simple user onboarding flow diagram with 5 steps, minimal style, using icons and arrows, on a white background" |

### Style Options

| Style | Description | Best For |
|-------|-------------|----------|
| **Photorealistic** | Looks like a photo | Team photos, product shots |
| **Flat design** | Clean, minimal, 2D | UI mockups, icons |
| **Isometric** | 3D-like from an angle | Diagrams, infographics |
| **Illustration** | Hand-drawn style | Personas, stories |
| **Corporate** | Professional, stock-like | Presentations |

*These style options map to the SSMD framework's "Style" component.*

---

## Iterating on Images

Often the first image isn't perfect. Here's how to iterate:

### Request Variations

```
Generate 3 variations of this image with different color schemes
```

### Make Specific Changes

```
Regenerate this but:
- Make the background lighter
- Add more diversity to the team
- Make it feel more energetic
```

### Start Fresh with Refinements

```
Create a new image similar to the previous one but with [changes]
```

---

## Exercise 2: Image Iteration

Let's practice refining an image.

**Step 1: Generate base image**
```
Create an image of a mobile app onboarding screen showing a 
welcome message, in a modern flat design style with a gradient 
purple to blue background
```

**Step 2: Request changes**
```
This is good, but please:
- Add a friendly mascot character
- Include progress dots at the bottom
- Make the text placeholder visible
```

**Step 3: Create variations**
```
Generate 2 more variations: one with a green color scheme, 
one with an orange color scheme
```

---

> **Microsoft Designer Access**
> Designer (designer.microsoft.com) is included with Microsoft 365 Business Standard, Business Premium, and M365 Copilot licenses. To check if you have access:
> 1. Go to designer.microsoft.com and sign in with your M365 account
> 2. If you see a "Get access" page, Designer is not included in your current license
>
> **If Designer is not available:** Use Copilot Chat for image generation (DALL-E 3 is available in the main Copilot interface without Designer). You can add text and polish images using PowerPoint's built-in design tools as an alternative.

## Microsoft Designer Integration

For more editing control, use Microsoft Designer.

### What Designer Adds

- Image editing and enhancement
- Background removal
- Text overlays
- Templates and layouts
- Brand kit integration

### Accessing Designer

1. Go to designer.microsoft.com
2. Sign in with your M365 account
3. Create new designs or edit Copilot images

### When to Use Designer

| Task | Use |
|------|-----|
| Quick image generation | Copilot Chat |
| Image with text overlays | Designer |
| Social media graphics | Designer |
| Brand-consistent visuals | Designer |
| Image editing/enhancement | Designer |

---

## Prompting Best Practices

### Be Specific

```
✅ "A bar chart showing user growth from 1,000 to 10,000 users 
   over 6 months, with blue bars on a white background, clean 
   and corporate style"

❌ "A chart"
```

### Describe Composition

```
✅ "A laptop on a desk, viewed from a 45-degree angle, 
   showing a dashboard on screen, with a coffee cup to 
   the right and a notepad to the left"

❌ "A laptop with dashboard"
```

### Specify Colors

```
✅ "Use TaskFlow's brand colors: primary blue (#2563EB), 
   accent purple (#7C3AED), on a white (#FFFFFF) background"

❌ "Make it look nice"
```

> **Responsible Image Generation:**
> - Use illustration styles (flat design, corporate illustration) rather than photorealistic for personas — this avoids creating images that look like real people
> - Do not generate images of real, identifiable people by name
> - For internal enterprise use, illustration styles are generally more appropriate than photorealistic portraits

### Include Context

```
✅ "This is for a SaaS product called TaskFlow that helps 
   remote teams manage projects. The image will be used 
   in a pitch deck for investors."

❌ "Make a business image"
```

---

## Image Use Cases for PMs

| Use Case | Prompt Direction |
|----------|------------------|
| **Pitch decks** | Professional, clean, corporate photos |
| **Personas** | Illustrated or photorealistic portraits |
| **Wireframes** | Flat, minimal, UI-focused |
| **Journey maps** | Sequential, icon-based, clear flow |
| **Competitive analysis** | Comparison layouts, side-by-side |
| **Marketing** | Eye-catching, brand-aligned, emotional |

---

## Limitations and Workarounds

### What DALL-E Struggles With

| Limitation | Workaround |
|------------|------------|
| Accurate text in images | Add text in Designer after |
| Exact UI details | Use for concepts, not specs |
| Brand-perfect logos | Add logos in Designer |
| Precise data visualizations | Create in Excel, export |
| Consistent characters | Describe in detail each time |

### Credit Conservation

- Don't regenerate unnecessarily
- Be specific in first prompt
- Use iterations wisely
- Save successful prompts for reuse

---

## Module Complete!

You can now generate and iterate on images. In Module 3.2, you'll apply these skills to create specific enterprise PM visual types: persona illustrations, roadmaps, and governance diagrams.

**Quick Self-Check**
Before moving on, can you:
- [ ] Write a detailed image prompt using Subject, Style, Mood, and Details (SSMD)
- [ ] Explain what to do if you run out of image credits mid-exercise
- [ ] Describe why illustration styles are preferred over photorealistic for persona images

*If you're unsure about any of these, re-read that section before continuing.*

---

## Next Steps

Continue to **Module 3.2: PM Visuals**

In Module 3.2, you'll create specific PM visuals:
- User persona illustrations
- Journey maps and flows
- Product roadmap visuals
- Marketing and launch assets

---

## Quick Reference: Prompt Elements

| Element | Examples |
|---------|----------|
| Style | Photorealistic, flat design, isometric, illustration |
| Mood | Professional, friendly, energetic, calm |
| Composition | Close-up, wide shot, 45-degree angle |
| Colors | Specific hex codes, "blue and white", "warm tones" |
| Context | "For a pitch deck", "App store screenshot" |

---

**Ready to create PM-specific visuals? Let's go to Module 3.2!**
