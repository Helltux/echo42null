---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: hacker-home
title: Echo42Null - Hacker Style
---

Welcome to Echo42Null with hacker style! This site demonstrates a custom hacker-themed design with crosshair cursor and popup functionality.

## Popup Demo

Below is a demonstration of how to create popups directly from markdown:

{% include popup.html 
   id='demo-popup'
   trigger_text='Click to open a demo popup'
   title='Demo Popup'
   content='This popup was created directly from markdown content using the popup include. <br><br>You can add <strong>formatted text</strong> and other HTML elements here.'
%}

{% include popup.html 
   id='code-popup'
   trigger_text='Show Code Example'
   title='Markdown Code Example'
   content='To add a popup to your markdown file, use this code:<br><pre>&#123;% include popup.html id="unique-id" trigger_text="Click to open popup" title="Popup Title" content="Your content here" %&#125;</pre>'
%}
