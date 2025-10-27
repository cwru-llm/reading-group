# LLM Reading Group - Case Western Reserve University

Welcome to the repository for the Large Language Model (LLM) Reading Group at Case Western Reserve University!

## Meeting Information

- **Schedule:** Every Friday, 2:00 PM - 3:00 PM
- **Starting Date:** October 31, 2025
- **Location:** Olin Building, Room 402
  - Address: 2101 Martin Luther King Jr Dr, Cleveland, OH 44106
- **Virtual Option:** [Join via Zoom](https://cwru.zoom.us/j/93656550836?pwd=TpVqWeQKvkXbxfoIzr8qNfuTjyDxFg.1&jst=2#success)

## Website

Visit our website to see the full schedule and upcoming presentations:  
**[https://cwru-llm.github.io/reading-group](https://cwru-llm.github.io/reading-group)**

## Want to Present?

We welcome presentations from students, researchers, and anyone interested in LLMs! Topics include:

- Recent LLM research papers
- Novel applications and use cases
- Technical deep dives and tutorials
- Ethical considerations and societal impacts
- Your own research and projects

### How to Submit a Presentation

1. Read our [Contributing Guide](CONTRIBUTING.md)
2. Fork this repository
3. Add your presentation details to `presentations.json`
4. Submit a pull request using our template
5. Wait for approval and your presentation will appear on the website!

See detailed instructions in [CONTRIBUTING.md](CONTRIBUTING.md).

## Repository Structure

```
reading-group/
├── index.html              # Main website page
├── styles.css              # Website styling
├── script.js               # JavaScript for dynamic content
├── presentations.json      # Schedule data (add your presentation here!)
├── CONTRIBUTING.md         # Detailed contribution guide
├── README.md               # This file
└── .github/
    └── PULL_REQUEST_TEMPLATE.md  # PR template for presentations
```

## Quick Start for Contributors

```bash
# Fork and clone the repository
git clone git@github.com:YOUR-USERNAME/reading-group.git
cd reading-group

# Create a new branch
git checkout -b presentation-your-name

# Edit presentations.json and add your entry

# Commit and push
git add presentations.json
git commit -m "Add presentation: Your Title"
git push origin presentation-your-name

# Create a PR on GitHub
```

## Presentation Format

Each presentation entry in `presentations.json` follows this format:

```json
{
  "date": "YYYY-MM-DD",
  "time": "2:00 PM - 3:00 PM",
  "presenter": "Your Name",
  "title": "Your Presentation Title",
  "abstract": "A brief abstract describing your presentation",
  "links": [
    {
      "title": "Paper",
      "url": "https://arxiv.org/abs/example"
    }
  ]
}
```

## Quick Links

- [Add to Google Calendar](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2t1YnNiZzZxdnMzbzhrdmJkNG41cHAxYm9fMjAyNTEwMzFUMTgwMDAwWiBteGgxMDI5QGNhc2UuZWR1&tmsrc=mxh1029%40case.edu)
- [Join Zoom Meeting](https://cwru.zoom.us/j/93656550836?pwd=TpVqWeQKvkXbxfoIzr8qNfuTjyDxFg.1&jst=2#success)
- [Contributing Guide](CONTRIBUTING.md)

## Local Development

To test the website locally:

```bash
# Simple Python HTTP server
python3 -m http.server 8000

# Or using Node.js
npx serve

# Then visit http://localhost:8000
```

## GitHub Pages Setup

To enable GitHub Pages for this repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be available at `https://cwru-llm.github.io/reading-group/`

## Community Guidelines

- Be respectful and inclusive
- Ask questions and engage in discussions
- Share knowledge and learn together
- Provide constructive feedback

## Contact

For questions or issues:
- Open an issue on this repository
- Contact the reading group organizers
- Attend our Friday sessions!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Thank you to all presenters and participants who make this reading group possible!

---

**Join us every Friday to explore the fascinating world of Large Language Models!**


