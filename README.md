# xtyle.js

Xtyle is a JavaScript library to extend the capabilities of inline styling, it adds support for hover, active, and focus state styling via attributes.

## How it works

It selects elements in the DOM that have attributes `style-hover`, `style-active`, or `style-focus`. It then listens for relevant events (mouseenter, mouseleave, mousedown, mouseup, focus, blur) on these elements and updates their styles accordingly.

## Usage

To use this code in your project:

1. Include the JavaScript file `xtyle.js` in your project.
2. Add xtyle attributes (`style-hover`, `style-active`, `style-focus`) to the HTML elements you want to style dynamically.

### Example:

```html
<div
  style-hover="background-color: blue;"
  style-active="border: 2px solid red;"
  style-focus="color: green;">
    Hover over me!
</div>
```

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.
