# Project Guidelines for Echo42Null

## Project Overview
Echo42Null is a Jekyll-based static website project. The site was initialized on July 31, 2025, and is currently using the default Jekyll configuration with the Minima theme. The project is in its early stages with no customization applied yet to the default Jekyll template.

## Project Structure
- `_config.yml`: Main configuration file for the Jekyll site
- `_posts/`: Directory containing blog posts (currently has only the welcome post)
- `about.markdown`: About page content
- `index.markdown`: Home page content
- `Gemfile` & `Gemfile.lock`: Ruby dependencies for the project
- `_site/`: Generated static site files (created when building the site)

## Development Guidelines
- **Local Development**: Use `bundle exec jekyll serve` to run the site locally
- **Content Creation**: Add new posts in the `_posts` directory following the naming convention `YYYY-MM-DD-title.markdown`
- **Configuration**: Site-wide settings should be modified in `_config.yml`

## Testing Guidelines
- No automated tests are required for this project
- Visual inspection of the site is sufficient for verifying changes
- Test the site locally before deploying by running `bundle exec jekyll serve` and checking the site at http://localhost:4000

## Build Guidelines
- The site is built automatically when using `jekyll serve` or explicitly with `jekyll build`
- No special build steps are required beyond the standard Jekyll build process

## Code Style Guidelines
- Follow standard Markdown syntax for content files
- For HTML/CSS modifications, follow the conventions established in the Minima theme
- Maintain clean, well-commented front matter in all Jekyll pages and posts
