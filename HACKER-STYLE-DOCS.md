# Hacker Style Documentation

This document provides information on how to use the hacker style features implemented in the Echo42Null Jekyll site.

## Features

The hacker style implementation includes the following features:

1. JetBrains Mono font (Nerd Font) for all text
2. IntelliJ IDEA dark theme color scheme
3. A crosshair cursor that follows the mouse
4. Custom text selection color matching the theme
5. Glitch effect for the site title
6. Popup functionality that can be triggered from markdown files
7. Styled content blocks with borders similar to popups

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

The hacker style includes a popup system that can be triggered from any markdown file. This allows you to create interactive content without writing custom HTML or JavaScript. The popups feature a resizable interface with improved readability and can be customized to fit your content needs.

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

### Resizable Popup Features

The popup interface includes advanced resizing capabilities:

1. **Resize Handles**: The popup is surrounded by numbered divs (1-9) that act as resize handles:
   - Top edge (div 2): Resize vertically from the top
   - Bottom edge (div 8): Resize vertically from the bottom
   - Left edge (div 4): Resize horizontally from the left
   - Right edge (div 6): Resize horizontally from the right
   - Corner divs (1, 3, 7, 9): Resize diagonally

2. **How to Resize**:
   - Hover over any of the numbered border divs to see the resize cursor
   - Click and drag to resize the popup in the corresponding direction
   - The popup maintains a minimum size (200px width, 100px height) to ensure content remains readable
   - Resizing operations will not cause the popup to close

3. **Dragging**: You can click and drag the popup header (title area) to move the entire popup around the screen.

4. **Closing the Popup**: 
   - Each popup has a dedicated close button (×) in the top-right corner
   - Press the Escape key to close any open popup
   - Click outside the popup area to close it

5. **Content Sizing**:
   - The popup has a minimum height of 300px and minimum width of 400px
   - Content that exceeds the popup dimensions will be scrollable
   - The popup has a maximum height of 80% of the viewport height

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

## Glitch Effect for Site Title

The site features a glitch effect for the main title "echo42null" in the header:

- The title text appears to "glitch" with red and blue shadow effects
- The effect uses CSS animations with clip paths to create the glitchy appearance
- The glitch is created using pseudo-elements (::before and ::after) with different animations
- The Varela font is used specifically for the glitch effect

The glitch effect is implemented in:
- `_includes/glitch-title.html`: Contains the HTML structure for the glitched title
- `assets/css/hacker-style.css`: Contains the CSS animations and styling for the glitch effect

### Customizing the Glitch Effect

To modify the glitch effect:

1. Edit the text in `_includes/glitch-title.html` by changing both the text content and the `data-text` attribute
2. Adjust the colors in the CSS by modifying the `text-shadow` properties in the `.glitch:before` and `.glitch:after` selectors
3. Change the animation timing by modifying the animation duration values in the CSS (currently set to 5s and 7.5s for a slower, more subtle effect)

## Text Selection Styling

The site features custom text selection styling that matches the theme:

- Selected text has a blue background color matching the crosshair (`#4e94ce`)
- Text color changes to white for better contrast when selected
- The selection has a slight transparency (opacity: 0.7) to maintain visual harmony with the crosshair

This consistent styling helps maintain the cohesive look and feel of the hacker theme throughout the user experience.

## Link Hover Styling

Links have a special hover effect that matches the text selection styling:

- When hovering over a link, the background changes to the accent color (`#4e94ce`)
- Text color changes to white for better contrast
- The hover effect has a slight transparency (opacity: 0.7)
- The underline is removed and replaced with padding and rounded corners
- This creates a cohesive experience where links and selections share a similar visual language

## Styled Content Blocks

All content blocks (articles with class="post") feature:
- Dark background with subtle borders
- Blue accent border at the top
- Styled headers and content sections
- Enhanced code block styling

## Customization

The hacker style can be customized by modifying the following files:

- `assets/css/hacker-style.css`: Contains all the CSS for the hacker style
- `assets/js/hacker-script.js`: Contains the JavaScript for the cursor and popup functionality, including resize and drag features
- `_includes/hacker-elements.html`: Contains the HTML elements for the cursor and popup container with numbered divs for resizing
- `_includes/popup.html`: Contains the implementation of the popup include

### Customizing Popup Behavior

To customize the popup resize behavior:

1. **Minimum Dimensions**: In `assets/js/hacker-script.js`, you can modify the minimum width (200px) and height (100px) values in the resize handlers.
2. **Initial Size**: The default width is set to 500px in the HTML. You can change this in `_includes/hacker-elements.html`.
3. **Background Opacity**: The popup content background opacity (95%) can be adjusted in the CSS file.
4. **Resize Handles**: The numbered divs (1-9) that act as resize handles can be styled differently by modifying their CSS classes.

## Troubleshooting

If the hacker style features are not working correctly:

1. Make sure you're using one of the hacker layouts (`hacker-home`, `hacker-page`, etc.)
2. Check that the `hacker-head.html` include is properly included in your layout
3. Verify that the popup IDs are unique across the page
4. Check the browser console for any JavaScript errors