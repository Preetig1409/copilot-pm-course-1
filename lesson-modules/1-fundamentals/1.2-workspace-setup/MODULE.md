# Module 1.2: Setting Up Your Copilot Workspace

**Duration:** 15 minutes
**Prerequisites:** Module 1.1 completed, Microsoft 365 Copilot access

---

## What You'll Learn

By the end of this module, you will:
1. Set up an optimal workspace for Copilot productivity
2. Understand how to upload files to Copilot
3. Know how OneDrive integrates with Copilot
4. Use Copilot Chat alongside M365 apps
5. Master the ContextIQ feature for adding content

---

## The Optimal Workspace Setup

Unlike command-line tools, Microsoft Copilot works best when you have:

1. **Browser with Copilot Chat open** (copilot.microsoft.com)
2. **M365 apps ready** (Word, Excel for outputs)
3. **Files organized in OneDrive** (for easy access)

### Recommended Screen Layout

**Option A: Split Screen**
- Left half: Copilot Chat (browser)
- Right half: Word/Excel for outputs

**Option B: Dual Monitors**
- Monitor 1: Copilot Chat
- Monitor 2: M365 apps and file explorer

**Option C: Side-by-Side in M365 Apps**
- Open Word/Excel
- Press Alt+I to open Copilot panel
- Work with document and Copilot together

---

## Understanding File Handling in Copilot

Copilot handles files differently than local tools. Here's what you need to know:

### File Upload Methods

**Method 1: Direct Upload in Chat**
1. Click the attachment icon (📎) in the chat input
2. Select file from your computer
3. File is uploaded to OneDrive automatically
4. Copilot can now analyze it

**Method 2: Drag and Drop**
1. Drag a file from your desktop or File Explorer
2. Drop it into the Copilot chat input area (you'll see a highlight indicating the drop zone)
3. The file uploads and appears as an attachment above the chat input
4. Type your prompt and press Enter — Copilot will analyze the attached file

**Method 3: OneDrive Reference**
1. Files in OneDrive can be referenced via ContextIQ
2. Type `/` in chat to see content options
3. Select "Files" and browse OneDrive

### Supported File Types

| File Type | What Copilot Can Do |
|-----------|---------------------|
| **Word (.docx)** | Read, summarize, analyze, extract data |
| **Excel (.xlsx)** | Analyze data, create charts, find patterns |
| **PowerPoint (.pptx)** | Summarize, extract key points, analyze images |
| **PDF** | Read, summarize, extract text and images |
| **Images (.png, .jpg)** | Analyze, describe, extract text (OCR) |
| **CSV** | Analyze data, find patterns, calculations |

### File Limits

- **Size:** Up to 512 MB per file (Enterprise)
- **Pages:** Up to 300 pages for document analysis
- **Multi-file:** Can analyze multiple files at once (typically 5–10 depending on file size and your license)

> *Note: Microsoft updates file limits periodically. If you're unsure of your current limit, test by uploading additional files and observing whether Copilot accepts them.*

---

## Exercise 1: Upload Your First File

Let's practice uploading a file to Copilot.

**Do this now:**

1. Download this sample meeting notes file (or create a simple text file with meeting notes)
2. Open Copilot Chat at copilot.microsoft.com
3. Click the 📎 attachment icon
4. Select your file
5. Once uploaded, type this prompt:

```
Please analyze this meeting notes file and:
1. Extract all action items
2. Identify who is responsible for each
3. Note any decisions that were made
4. Flag any items that need follow-up
```

6. Review Copilot's analysis

**What you should notice:**
- Copilot reads the entire document
- It structures the output clearly
- It identifies patterns and key information

---

## ContextIQ: Adding Content to Prompts

ContextIQ is a powerful feature that lets you add context from your work environment.

### How to Use ContextIQ

1. In Copilot Chat, type `/` (forward slash)
2. A menu appears with options:
   - **Files** - Browse OneDrive files
   - **People** - Reference colleagues
   - **Meetings** - Access meeting transcripts
   - **Emails** - Reference recent emails

3. Select what you want to add
4. It becomes part of your prompt context

> **Enterprise Note:** The `/` ContextIQ menu may be restricted in some enterprise tenants or may require specific Copilot license tiers. If the menu does not appear:
> - Use the 📎 attachment icon to upload files directly
> - In the chat, paste a document summary inline as context
> - Check with your IT administrator whether ContextIQ is enabled for your account

### Example: Reference Multiple Sources

```
Based on /[meeting transcript from yesterday] and /[Q4 planning doc],
summarize the key priorities for our team this quarter.
```

---

## Exercise 2: Use ContextIQ

Let's try using ContextIQ to reference your work content.

**Do this now:**

1. In Copilot Chat, type: `/`
2. Select "Files" from the menu
3. Browse to any document in your OneDrive
4. Select it to add as context
5. Now type a prompt like:

```
Summarize the key points from this document in 3 bullet points.
```

**Note:** If you don't have files in OneDrive yet, you can upload the sample files from this course first.

---

## OneDrive Integration

When you use Copilot, your files are automatically connected to OneDrive.

### What This Means

1. **Uploaded files are saved** - Files you upload go to "Microsoft Copilot Chat Files" folder in OneDrive
2. **You can re-access them** - Find previous uploads in OneDrive
3. **Enterprise security** - Your data stays within your tenant
4. **Not used for training** - Microsoft doesn't train models on your data

### Setting Up Your Course Files

For this course, we recommend creating a folder structure:

```
OneDrive/
├── Copilot-Course/
│   ├── TaskFlow-Context/
│   │   ├── COMPANY.md
│   │   ├── PRODUCT.md
│   │   └── PERSONAS.md
│   ├── Meeting-Notes/
│   ├── User-Interviews/
│   └── Data-Files/
```

**Action:** Create this folder structure in your OneDrive and upload the course sample files.

> ---
> **Enterprise Data Guidance**
> Before uploading files or sharing data with Copilot:
> - Copilot operates within your Microsoft 365 tenant — data is not shared externally
> - Files labeled "Highly Confidential — Encrypted" may be blocked by Copilot due to sensitivity policies
> - Do not share client names, deal values, or engagement codes in Copilot prompts
> - For your organization's Responsible AI policy, consult your internal guidelines
> ---

---

## Copilot in M365 Apps vs Browser Chat

You have two main ways to use Copilot. Here's when to use each:

### Browser Chat (copilot.microsoft.com)

**Best for:**
- Research and exploration
- Multi-file analysis
- Complex questions
- Deep Research tasks
- Starting new work

### In-App Copilot (Alt+I)

**Best for:**
- Working within a specific document
- Generating content for the current file
- Rewriting or editing existing text
- Creating charts from data in Excel
- Document-specific questions

---

## Exercise 3: Try In-App Copilot

Let's experience Copilot inside a Microsoft 365 app.

**Do this now:**

1. Open Microsoft Word
2. Create a new document
3. Press **Alt+I** (Windows) or **Option+I** (Mac)
4. The Copilot panel opens on the right
5. Type this prompt:

```
Write a brief executive summary for a product called TaskFlow -
a project management tool for remote teams. Include: what it does,
who it's for, and key differentiators. Keep it to 3 paragraphs.
```

6. Copilot generates content directly in your document!

**What you should notice:**
- Content appears right in your Word document
- You can edit it immediately
- Copilot understands document context

---

## Workspace Tips for PMs

### Tip 1: Pin Copilot Chat
- Keep copilot.microsoft.com as a pinned tab
- Quick access whenever you need it

### Tip 2: Create a "Context" Document
- Make a Word doc with your project context
- Upload it at the start of important sessions
- Copilot will reference it throughout

### Tip 3: Use Voice Input
- Hold Alt+Spacebar for 2 seconds
- Speak your prompt
- Great for quick questions while multitasking

### Tip 4: Save Successful Prompts
- When a prompt works well, save it
- Create a "Prompt Library" document
- Reuse for similar tasks

---

## Module Complete!

You now know:
- ✅ How to set up an optimal Copilot workspace
- ✅ Three methods for uploading files
- ✅ How to use ContextIQ (/) for adding content
- ✅ The difference between browser chat and in-app Copilot
- ✅ OneDrive integration for file management

---

## Next Steps

Continue to **Module 1.3: Your First PM Tasks with Copilot**

In Module 1.3, you'll do real PM work:
- Process messy meeting notes into action items
- Synthesize multiple user interviews
- Transform content for different audiences
- Analyze design mockups
- Perform web research

This is where things get practical!

---

## Quick Reference

| Action | How To |
|--------|--------|
| Upload file | Click 📎 or drag & drop |
| Add context | Type `/` for ContextIQ |
| Open in-app Copilot | Alt+I (Win) / Option+I (Mac) |
| Voice input | Hold Alt+Spacebar 2 seconds |
| Find uploads | OneDrive > Microsoft Copilot Chat Files |

---

**Ready for real PM work? Let's go to Module 1.3!**
