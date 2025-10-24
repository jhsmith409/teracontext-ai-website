# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based marketing website for TeraContext.AI, a specialized AI solutions provider focused on large-context document processing. The site is built using Jekyll 4.3.2 and is deployed on Vercel. TeraContext.AI is part of the Joshua8.AI product line.

**Domain**: https://teracontext.ai
**Framework**: Jekyll 4.3.2 (Ruby-based static site generator)
**Deployment**: Vercel (auto-deploys from main branch)
**Parent Organization**: Joshua8.AI

**Important**: README.md is excluded from the build in _config.yml, so documentation can be added there without affecting the site.

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
  - `header.html`: Navigation with mobile menu, logo, and dropdown resources menu (includes inline JavaScript for mobile toggle)
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
- **CSS**: `css/styles.min.css` (minified production version)
  - Source: `css/styles.css` (edit this, then minify)
  - Some component styles are inline in `_layouts/default.html` and `_includes/header.html`
- **JavaScript**:
  - `js/search.min.js`: Client-side search (source: `js/search.js`)
  - Mobile menu toggle is inline in `_includes/header.html`
- **Fonts**: Google Fonts (Inter) loaded from CDN
- **Images**: Stored in `images/` directory
  - Hero images, industry visuals, backgrounds, logo
  - Note: Logo in _config.yml references .png but actual file is .jpg
  - See IMAGE_REQUIREMENTS.md (in .gitignore) for specifications

### Configuration (`_config.yml`)
Key settings:
- Site metadata: title, description, tagline, URL
- Social links: Twitter, GitHub, LinkedIn
- Plugins: jekyll-feed, jekyll-sitemap, jekyll-seo-tag
- Permalinks:
  - Pages: `/:title/` (e.g., `/about/`, `/solutions/`)
  - Posts: `/blog/:year/:month/:day/:title/`
- Collections: Posts output to blog directory structure
- Build exclusions: README.md, Gemfile, internal docs (CONTENT_SUMMARY.md, IMAGE_REQUIREMENTS.md, etc.), .claude workspace

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
4. Page will be accessible at `/page-name/` (based on `permalink: /:title/` in _config.yml)
5. Update navigation in `_includes/header.html` if needed

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

### Modifying Styles
1. Edit `css/styles.css` (source file)
2. Minify to `css/styles.min.css` for production
3. Note: Some component-specific styles are inline in `_layouts/default.html` and `_includes/header.html`

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

### Images & Assets
- Logo: `/images/logo-teracontext.jpg` (note: _config.yml references .png but actual file is .jpg)
- Hero images, industry visuals, and backgrounds are in `/images/`
- IMAGE_REQUIREMENTS.md contains detailed specifications for missing/future images (gitignored, not in repo)

### SEO & Metadata
- All pages have comprehensive Open Graph and Twitter Card meta tags
- Structured data (Schema.org) included via `_includes/schema.html`
- Social share default image: `/images/social-share-default.jpg`
- Canonical URLs configured for all pages
- SEO plugin (jekyll-seo-tag) installed
- **robots.txt**: Optimized for 15+ AI/LLM crawlers (GPTBot, ClaudeBot, Google-Extended, etc.) with explicit permissions
- **sitemap.xml**: Custom sitemap with prioritized pages (homepage: 1.0, solutions/use-cases: 0.9, blog/about/contact: 0.8, FAQ: 0.7, posts: 0.6)
- **llms.txt**: Comprehensive AI/LLM metadata file with company info, FAQ, technical specs, and structured data for AI model training

### Search
- Client-side search using Lunr.js
- Implementation: `js/search.min.js` (source: `js/search.js`)
- Loaded in default layout

### External References
- Parent company: https://joshua8.ai
- RAPTOR paper: https://arxiv.org/html/2401.18059v1
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
