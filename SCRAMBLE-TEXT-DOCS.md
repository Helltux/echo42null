# ScrambleText Plugin Documentation

## Overview

The ScrambleText plugin adds a hover effect to text that scrambles the characters with random symbols before revealing the original text from left to right. This creates an engaging visual effect for headings and important text.

## Usage

To use the ScrambleText plugin, wrap your text with the `scramble_text` Liquid tag:

```markdown
{% scramble_text %}Your Text Here{% endscramble_text %}
```

### Example

```markdown
# {% scramble_text %}Hover Over This Title{% endscramble_text %}

## {% scramble_text %}ScrambleText Demo{% endscramble_text %}
```

## How It Works

When a user hovers over text wrapped in the `scramble_text` tag:

1. Only characters near the cursor position (±3 characters) get scrambled with random symbols
2. Characters closest to the cursor have a higher chance of being scrambled
3. As the user moves the cursor over the text, the scramble effect follows the cursor
4. The scramble effect automatically stops after a short duration (0.85 seconds by default)
5. When the user moves the cursor away, the text immediately returns to its original state

## Technical Details

The plugin:

- Wraps each character in a `<span>` with the class `scramble-text__char`
- Adds CSS for styling and subtle animations
- Uses JavaScript to handle the scramble effect on hover

## Customization

You can customize the appearance by modifying the CSS in `assets/css/hacker-style.css`:

- `.scramble-text` - Controls the overall container
- `.scramble-text__char` - Controls individual character spans
- `.scramble-text:hover .scramble-text__char` - Controls hover effects

The JavaScript behavior can be customized in `assets/js/hacker-script.js` by modifying:

- `DEFAULT_CHARS` - The set of random characters used for scrambling
- `STEP_MS` - The interval between jitter steps
- `SCRAMBLE_RANGE` - The number of characters to scramble on each side of the cursor (default: 3)
- `SCRAMBLE_DURATION_MS` - The duration in milliseconds before the scramble effect stops (default: 850)

## Compatibility

The ScrambleText plugin is compatible with:

- Jekyll 4.x and above
- All modern browsers that support CSS transitions and JavaScript ES6 features