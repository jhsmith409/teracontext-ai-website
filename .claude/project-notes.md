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

## Next Steps
1. Generate/acquire images per IMAGE_REQUIREMENTS.md
2. Place images in images/ directory
3. Update pages to reference image paths
4. Create GitHub repository: teracontext-ai-website
5. Add remote: `git remote add origin https://github.com/jhsmith409/teracontext-ai-website.git`
6. Push to GitHub: `git push -u origin main`
7. Configure GitHub Pages or deployment method
8. Set up custom domain (teracontext.ai)
9. Configure analytics if desired

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
