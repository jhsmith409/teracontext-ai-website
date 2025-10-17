# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based marketing website for TeraContext.AI, a specialized AI solutions provider focused on large-context document processing. The site is built using Jekyll 4.3.2 and is deployed on Vercel. TeraContext.AI is part of the Joshua8.AI product line.

**Domain**: https://teracontext.ai
**Framework**: Jekyll (Ruby-based static site generator)
**Deployment**: Vercel
**Parent Organization**: Joshua8.AI

## Development Commands

### Local Development
```bash
# Install dependencies (first time only)
gem install bundler
bundle install

# Run local development server
bundle exec jekyll serve

# Run on specific port (default is 4000)
bundle exec jekyll serve --port 4001

# Build site (output to _site/)
bundle exec jekyll build

# Build with verbose output for debugging
bundle exec jekyll build --verbose
```

### Deployment
The site deploys automatically to Vercel when changes are pushed to the main branch. No manual build/deploy commands are needed.

## Architecture & Structure

### Jekyll Architecture
This is a standard Jekyll site with the following key components:

- **Layouts** (`_layouts/`): Page templates that wrap content
  - `default.html`: Main layout with header, footer, SEO tags, and Vercel analytics
  - `post.html`: Blog post layout with structured data

- **Includes** (`_includes/`): Reusable components
  - `header.html`: Navigation with mobile menu, logo, and dropdown resources menu
  - `footer.html`: Footer with links and company info
  - `breadcrumbs.html`: Breadcrumb navigation
  - `schema.html`: Schema.org structured data for SEO

- **Content**: Markdown files in root directory (`.md` files)
  - `index.md`: Homepage
  - `about.md`, `solutions.md`, `use-cases.md`, `contact.md`: Main pages
  - `blog.md`: Blog index
  - `faq.md`: FAQ page

- **Posts** (`_posts/`): Blog posts in format `YYYY-MM-DD-title.md`
  - Currently 4 posts covering context windows, RAG, GraphRAG, RAPTOR, and Mamba vs Transformers
  - All posts use `layout: post` and include frontmatter with title, date, categories, author, description

### Content Strategy
The site focuses on:
- **Technical Depth**: Explaining RAG, GraphRAG, RAPTOR, and other large-context AI techniques
- **Industry Focus**: Legal, construction, systems engineering, and enterprise applications
- **Educational Tone**: Professional but accessible technical content
- **SEO Optimization**: Comprehensive meta tags, Open Graph, Twitter Cards, structured data

### Styling & Assets
- **CSS**: `css/styles.min.css` (minified, with backup at `styles.css`)
- **JavaScript**: `js/search.min.js` for client-side search functionality
- **Fonts**: Google Fonts (Inter) loaded from CDN
- **Images**: Stored in `images/` directory
  - Hero images, industry visuals, backgrounds, logo
  - See IMAGE_REQUIREMENTS.md (in .gitignore) for specifications

### Configuration (`_config.yml`)
Key settings:
- Site metadata: title, description, tagline, URL
- Social links: Twitter, GitHub, LinkedIn
- Plugins: jekyll-feed, jekyll-sitemap, jekyll-seo-tag
- Permalinks: Posts use `/blog/YYYY/MM/DD/title/`
- Collections: Posts output to blog directory structure
- Exclusions: Internal docs (CONTENT_SUMMARY.md, IMAGE_REQUIREMENTS.md, etc.) excluded from build

### Analytics & Monitoring
- Vercel Analytics and Speed Insights integrated in `default.html`
- No Google Analytics currently configured (placeholder in _config.yml)

## Key Development Patterns

### Adding New Pages
1. Create markdown file in root: `page-name.md`
2. Add frontmatter:
   ```yaml
   ---
   layout: default
   title: Page Title
   description: SEO description for the page
   ---
   ```
3. Add content in markdown
4. Update navigation in `_includes/header.html` if needed

### Adding Blog Posts
1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add frontmatter:
   ```yaml
   ---
   layout: post
   title: "Post Title"
   date: YYYY-MM-DD
   categories: [category1, category2]
   author: TeraContext.AI Team
   description: Post description for SEO
   ---
   ```
3. Write content in markdown
4. Jekyll automatically adds to blog index and RSS feed

### Styling Changes
- Edit `css/styles.css` for development
- Minify to `css/styles.min.css` for production
- Some component-specific styles are inline in `_layouts/default.html` and `_includes/header.html`

### Navigation Structure
- Main nav: Solutions, Use Cases, Resources (dropdown), About
- Resources dropdown: Blog, FAQ
- CTA button: "Get Started" → /contact
- Mobile menu with hamburger toggle

## Content Guidelines

### Brand Voice
- Professional but accessible
- Technical depth without jargon overload
- Focus on business outcomes and practical results
- Educational approach to complex AI concepts
- Connection to parent company Joshua8.AI

### Technical Topics
The site focuses on large-context document processing techniques:
- **RAG (Retrieval-Augmented Generation)**: Intelligent document retrieval
- **GraphRAG**: Knowledge graph-based context
- **RAPTOR**: Recursive abstractive processing for multi-layer summarization
- **Multi-Layer Summarization**: Hierarchical document understanding
- **Adaptive Context Assembly**: Dynamic context construction

### Target Industries
- Legal & Regulatory (M&A due diligence, compliance)
- Commercial Construction (specs, RFIs, code compliance)
- Systems Engineering (aerospace, defense requirements)
- Enterprise Documentation (knowledge bases, policies)

## Git Workflow

### Branch Strategy
- `main`: Production branch (auto-deploys to Vercel)
- Work directly on main for small changes
- Use feature branches for larger updates

### Files Excluded from Git
The `.gitignore` excludes:
- Jekyll build artifacts: `_site/`, `.jekyll-cache/`, `.sass-cache/`
- Internal documentation: `CONTENT_SUMMARY.md`, `IMAGE_REQUIREMENTS.md`, `IMAGE_STATUS.md`
- Project notes: `*NOTES*.md`, `*TODO*.md`
- Claude workspace: `.claude/`
- Backup files: `*.backup`

### Commit Messages
Recent commits show clear, descriptive messages focused on specific changes.

## Important Notes

### Images
- Logo is at `/images/logo-teracontext.jpg`
- Hero images, industry visuals, and backgrounds are in `/images/`
- IMAGE_REQUIREMENTS.md contains detailed specifications for missing/future images (not in repo due to .gitignore)

### SEO & Social
- All pages have Open Graph and Twitter Card meta tags
- Structured data (Schema.org) included via `schema.html`
- Social share default image: `/images/social-share-default.jpg`
- Canonical URLs configured for all pages

### Search Functionality
- Client-side search using Lunr.js
- Search script at `js/search.min.js`
- Loaded in default layout

### External Links
- Link to parent company Joshua8.AI: https://joshua8.ai
- RAPTOR paper reference: https://arxiv.org/html/2401.18059v1
- All external links use `target="_blank" rel="noopener noreferrer"`

## Vercel Configuration

The `vercel.json` specifies:
- Build command: `bundle install && bundle exec jekyll build`
- Output directory: `_site`
- Install command: `gem install bundler`
- Dev command: `bundle exec jekyll serve --port $PORT`

## Testing Before Deployment

Always test locally before pushing:
```bash
bundle exec jekyll build --verbose  # Check for build errors
bundle exec jekyll serve            # Preview at http://localhost:4000
```

Common issues:
- Missing frontmatter in markdown files
- Incorrect liquid template syntax
- Missing images referenced in content
- Plugin errors (check Gemfile and _config.yml match)
