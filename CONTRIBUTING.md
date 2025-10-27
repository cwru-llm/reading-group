# Contributing to LLM Reading Group

Thank you for your interest in presenting at the LLM Reading Group at Case Western Reserve University! This guide will walk you through the process of submitting your presentation.

## Table of Contents

- [How to Submit a Presentation](#how-to-submit-a-presentation)
- [Presentation Guidelines](#presentation-guidelines)
- [Step-by-Step Instructions](#step-by-step-instructions)
- [JSON Format Reference](#json-format-reference)
- [Need Help?](#need-help)

## How to Submit a Presentation

We use a pull request (PR) workflow to manage presentations. This ensures:
- Transparent scheduling
- Version control of all presentations
- Easy review process
- Automatic website updates when PRs are merged

## Presentation Guidelines

### What to Present

We welcome presentations on:
- Recent LLM research papers
- Novel applications and use cases
- Technical deep dives and tutorials
- Ethical considerations and societal impacts
- Your own research and projects
- Industry perspectives on LLMs

### Time and Format

- **Duration:** 45-50 minutes presentation + 10-15 minutes Q&A
- **Schedule:** Every Friday, 2:00 PM - 3:00 PM
- **Location:** Olin Building, Room 402
- **Virtual Option:** Available via Zoom (link on the website)

### Requirements

- Clear, descriptive title
- Informative abstract (3-5 sentences)
- Any relevant materials (papers, slides, code) linked
- Availability on the scheduled date

## Step-by-Step Instructions

### Step 1: Fork the Repository

1. Navigate to the [reading-group repository](https://github.com/cwru-llm/reading-group)
2. Click the "Fork" button in the top right corner
3. This creates a copy of the repository in your GitHub account

### Step 2: Clone Your Fork

```bash
git clone git@github.com:YOUR-USERNAME/reading-group.git
cd reading-group
```

### Step 3: Create a New Branch

```bash
git checkout -b presentation-your-name
```

### Step 4: Add Your Presentation

1. Open `presentations.json` in your favorite text editor
2. Add your presentation entry in **chronological order** by date
3. Follow the [JSON format](#json-format-reference) exactly

**Example:**

```json
{
  "date": "2025-11-15",
  "time": "2:00 PM - 3:00 PM",
  "presenter": "Jane Doe",
  "title": "Exploring In-Context Learning in Large Language Models",
  "abstract": "This presentation examines the phenomenon of in-context learning in LLMs, where models learn to perform tasks from examples provided in the prompt without parameter updates. We'll discuss recent findings on how LLMs achieve this capability and its implications for few-shot learning applications.",
  "links": [
    {
      "title": "ArXiv Paper",
      "url": "https://arxiv.org/abs/2301.00234"
    },
    {
      "title": "Slides",
      "url": "https://example.com/slides.pdf"
    }
  ]
}
```

### Step 5: Validate Your JSON

Before committing, ensure your JSON is valid:
- Use a JSON validator like [JSONLint](https://jsonlint.com/)
- Check that all commas, brackets, and quotes are correct
- Ensure your entry is in chronological order

### Step 6: Commit Your Changes

```bash
git add presentations.json
git commit -m "Add presentation: [Your Title]"
```

### Step 7: Push to Your Fork

```bash
git push origin presentation-your-name
```

### Step 8: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request" or "Compare & pull request"
3. Fill out the PR template with your presentation details
4. Submit the pull request

### Step 9: Wait for Review

- A maintainer will review your PR
- They may ask for clarifications or changes
- Once approved, your PR will be merged
- The website will automatically update with your presentation!

## JSON Format Reference

Each presentation entry must follow this exact format:

```json
{
  "date": "YYYY-MM-DD",
  "time": "2:00 PM - 3:00 PM",
  "presenter": "Your Full Name",
  "title": "Your Presentation Title",
  "abstract": "A concise abstract describing your presentation (3-5 sentences). Make it informative and engaging!",
  "links": [
    {
      "title": "Descriptive Link Title",
      "url": "https://actual-url.com"
    }
  ]
}
```

### Field Descriptions

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `date` | String | Presentation date in YYYY-MM-DD format (must be a Friday) | Yes |
| `time` | String | Always "2:00 PM - 3:00 PM" | Yes |
| `presenter` | String | Your full name | Yes |
| `title` | String | Clear, descriptive title | Yes |
| `abstract` | String | 3-5 sentence description | Yes |
| `links` | Array | Array of link objects | Optional but recommended |

### Link Object Format

```json
{
  "title": "Display text for the link",
  "url": "https://full-url.com"
}
```

Common link types:
- ArXiv Paper
- Slides
- Code Repository
- Blog Post
- Documentation
- Dataset

## Common Mistakes to Avoid

1. **Invalid JSON syntax** - Always validate before submitting
2. **Wrong date format** - Use YYYY-MM-DD (e.g., 2025-11-15, not 11/15/2025)
3. **Non-Friday dates** - Presentations are only on Fridays
4. **Out of order entries** - Keep presentations in chronological order
5. **Missing commas** - Don't forget commas between entries
6. **Placeholder content** - Use real, meaningful information

## Troubleshooting

### My PR has merge conflicts

```bash
# Update your fork
git checkout main
git pull upstream main
git checkout presentation-your-name
git rebase main

# Resolve conflicts in presentations.json
# Then continue
git rebase --continue
git push -f origin presentation-your-name
```

### I need to change my presentation date

Simply update the date in your PR and push the changes. The PR will automatically update.

### I made a mistake in my abstract

You can edit your PR at any time before it's merged. Just make the changes and push them.

## Need Help?

If you encounter any issues:
1. Check this guide again carefully
2. Look at existing entries in `presentations.json` for examples
3. Open an issue on GitHub
4. Contact the reading group organizers

## After Your PR is Merged

Once your PR is merged:
- Your presentation will appear on the website within minutes
- The schedule will automatically update
- You'll receive a confirmation

**Important:** Please ensure you're available on the date you specified!

## Questions?

Feel free to reach out to the reading group organizers or open an issue on GitHub.

---

Thank you for contributing to the LLM Reading Group! We look forward to your presentation!

