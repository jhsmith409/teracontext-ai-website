# TeraContext.AI Website Project

## Project Overview
This is the Jekyll-based website for teracontext.ai, created from the joshua8.ai (j8web) structure.

## Directory Structure
- `_layouts/` - Page layouts (default.html, post.html)
- `_includes/` - Reusable components (header.html, footer.html, breadcrumbs.html, schema.html)
- `_posts/` - Blog posts (markdown files)
- `css/` - Stylesheets
- `js/` - JavaScript files
- `images/` - Image assets
- `_config.yml` - Jekyll configuration

## Configuration
- **Site Title**: TeraContext.AI
- **URL**: https://teracontext.ai
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag

## Git Setup
- **Repository**: Initialized with main branch
- **User**: jhsmith409 (j.h.smith@ieee.org)
- **Initial Commit**: Completed
- **GitHub Remote**: Not yet configured - needs to be set up at https://github.com/jhsmith409/teracontext-ai-website.git

## Content Status
- ✅ Homepage (index.md) - Complete with comprehensive content
- ✅ About page (about.md) - Company overview and services
- ✅ Solutions page (solutions.md) - Technical approaches (RAG, GraphRAG, RAPTOR, etc.)
- ✅ Use Cases page (use-cases.md) - Industry-specific applications
- ✅ Contact page (contact.md) - Contact information and inquiry guidance
- ✅ Blog page (blog.md) - Blog index with post listing
- ✅ Blog Posts - Three initial posts:
  - Context Window Evolution (2025-10-01)
  - RAG vs GraphRAG (2025-10-05)
  - RAPTOR Multi-Layer Summarization (2025-10-10)
- ✅ Configuration (_config.yml) - Enhanced with SEO, social, and metadata
- ✅ Image Requirements (IMAGE_REQUIREMENTS.md) - Detailed specifications for ~25-30 images

## Deployment Status

### ✅ Completed (October 13, 2025)
- ✅ All content pages created with comprehensive writeups
- ✅ 3 blog posts published (Context Windows, RAG vs GraphRAG, RAPTOR)
- ✅ 10 images deployed to /images/ directory
  - hero-context-scale.png (homepage hero)
  - document-complexity.jpg (problem visualization)
  - industry-legal.jpg, industry-construction.jpg, industry-systems-engineering.jpg, industry-enterprise.jpg
  - bg-texture-1/2/3.jpg (backgrounds)
  - logo-teracontext.jpg
- ✅ Site configuration enhanced with SEO, metadata, social links
- ✅ Documentation created (IMAGE_REQUIREMENTS.md, IMAGE_STATUS.md, CONTENT_SUMMARY.md)
- ✅ Git repository initialized and committed
- ✅ GitHub repository created: https://github.com/jhsmith409/teracontext-ai-website
- ✅ Pushed to GitHub successfully
- ✅ Jekyll site building successfully
- ✅ Local preview running on http://localhost:4001 (port 4001 - j8web on 4000)

### Next Steps to Go Live
1. **Configure GitHub Pages:**
   - Repository Settings → Pages
   - Set source to "main" branch
   - Site will be live at https://jhsmith409.github.io/teracontext-ai-website/

2. **Custom Domain Setup:**
   - Add CNAME file to repository with "teracontext.ai"
   - Configure DNS A records to point to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or CNAME record pointing to jhsmith409.github.io
   - Enable HTTPS in GitHub Pages settings

3. **Optional Image Enhancements** (can launch without):
   - Technical diagrams: RAG architecture, GraphRAG, RAPTOR, Hybrid (4 diagrams)
   - Icon set (12 icons)
   - Blog post headers (3 images)
   - Social share image
   - See IMAGE_STATUS.md for details

### Repository Structure
```
/home/jhsmith/tcweb/
├── index.md (homepage)
├── about.md
├── solutions.md
├── use-cases.md
├── contact.md
├── blog.md
├── _posts/ (3 blog posts)
├── images/ (10 images)
├── _config.yml (configured)
├── _layouts/ (from j8web)
├── _includes/ (from j8web)
├── css/, js/ (from j8web)
├── IMAGE_REQUIREMENTS.md
├── IMAGE_STATUS.md
├── CONTENT_SUMMARY.md
└── .claude/project-notes.md (this file)
```

### Testing Locally
```bash
cd /home/jhsmith/tcweb
bundle exec jekyll serve --port 4001
# Visit: http://localhost:4001
```

### Git Operations
```bash
# Already configured:
git remote -v
# origin  https://github.com/jhsmith409/teracontext-ai-website.git

# To update after changes:
git add .
git commit -m "Description"
git push origin main
```

## Site Pages
- `index.md` - Homepage with hero content and overview
- `about.md` - About TeraContext.AI and services
- `solutions.md` - Technical solutions and approaches
- `use-cases.md` - Industry-specific use cases
- `contact.md` - Contact information
- `blog.md` - Blog index page
- `404.html` - Error page
- `sitemap.xml` - Sitemap template

## Development
To run locally:
```bash
bundle install
bundle exec jekyll serve
```

## Based On
This structure was copied from the j8web project (joshua8.ai website) located at /home/jhsmith/j8web
