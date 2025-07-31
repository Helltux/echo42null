# Hacker Style Documentation

This document provides information on how to use the hacker style features implemented in the Echo42Null Jekyll site.

## Features

The hacker style implementation includes the following features:

1. JetBrains Mono font (Nerd Font) for all text
2. IntelliJ IDEA dark theme color scheme
3. A crosshair cursor that follows the mouse
4. Custom text selection color matching the theme
5. Popup functionality that can be triggered from markdown files
6. Styled content blocks with borders similar to popups

## Crosshair Cursor

The crosshair cursor is automatically applied to all pages that use the hacker-style layouts:

- `hacker-default.html`
- `hacker-home.html`
- `hacker-page.html`

The cursor is designed to stay within the viewport without causing unnecessary scrollbars. It uses fixed positioning and is constrained to the visible area of the page.

To use the hacker style on a page, simply set the layout in the front matter:

```yaml
---
layout: hacker-page
title: Your Page Title
---
```

## Popup Functionality

The hacker style includes a popup system that can be triggered from any markdown file. This allows you to create interactive content without writing custom HTML or JavaScript.

### Using Popups in Markdown

To add a popup to your markdown file, use the `popup.html` include with the following parameters:

```liquid
{% include popup.html 
   id='unique-popup-id'
   trigger_text='Click to open popup'
   title='Popup Title'
   content='Your popup content here. You can include <strong>HTML</strong> formatting.'
%}
```

### Parameters

- `id`: A unique identifier for the popup (required)
- `trigger_text`: The text that will be displayed on the button that triggers the popup (required)
- `title`: The title displayed at the top of the popup (required)
- `content`: The content of the popup, can include HTML formatting (required)

### Example

Here's an example of how to use the popup include in a markdown file:

```markdown
## Interactive Content

Click the button below to learn more:

{% include popup.html 
   id='info-popup'
   trigger_text='Learn More'
   title='Additional Information'
   content='This is additional information that appears in a popup. <br><br>You can add <strong>formatted text</strong>, lists, and other HTML elements.'
%}
```

### Important Notes

1. Always use single quotes (`'`) for parameter values, not double quotes (`"`).
2. If you need to include HTML in your content, it will be rendered properly.
3. Each popup must have a unique ID to function correctly.
4. The popup content is limited to text and basic HTML. For complex content, consider creating a custom include.

## JetBrains Mono Font

The site uses JetBrains Mono, a free and open-source typeface designed for developers by JetBrains. This monospaced font features clear distinctions between similar characters and increased letter height for better readability.

The font is loaded from Google Fonts and applied to all text elements on the site.

## IntelliJ IDEA Dark Theme

The site uses a color scheme inspired by IntelliJ IDEA's dark theme, featuring:

- Dark backgrounds (`#2b2b2b`, `#1e1e1e`)
- Light text (`#a9b7c6`)
- Blue accent color (`#4e94ce`)
- Subtle borders and highlights

The theme is applied to all elements including:
- Page backgrounds and text
- Buttons and interactive elements
- Code blocks and syntax highlighting
- The crosshair cursor
- Text selection

## Text Selection Styling

The site features custom text selection styling that matches the theme:

- Selected text has a blue background color matching the crosshair (`#4e94ce`)
- Text color changes to white for better contrast when selected
- The selection has a slight transparency (opacity: 0.7) to maintain visual harmony with the crosshair

This consistent styling helps maintain the cohesive look and feel of the hacker theme throughout the user experience.

## Styled Content Blocks

All content blocks (articles with class="post") feature:
- Dark background with subtle borders
- Blue accent border at the top
- Styled headers and content sections
- Enhanced code block styling

## Customization

The hacker style can be customized by modifying the following files:

- `assets/css/hacker-style.css`: Contains all the CSS for the hacker style
- `assets/js/hacker-script.js`: Contains the JavaScript for the cursor and popup functionality
- `_includes/hacker-elements.html`: Contains the HTML elements for the cursor and popup container
- `_includes/popup.html`: Contains the implementation of the popup include

## Troubleshooting

If the hacker style features are not working correctly:

1. Make sure you're using one of the hacker layouts (`hacker-home`, `hacker-page`, etc.)
2. Check that the `hacker-head.html` include is properly included in your layout
3. Verify that the popup IDs are unique across the page
4. Check the browser console for any JavaScript errors