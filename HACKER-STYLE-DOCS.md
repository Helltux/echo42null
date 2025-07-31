# Hacker Style Documentation

This document provides information on how to use the hacker style features implemented in the Echo42Null Jekyll site.

## Features

The hacker style implementation includes two main features:

1. A crosshair cursor that follows the mouse
2. Popup functionality that can be triggered from markdown files

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