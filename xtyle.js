const affectedElements = document.querySelectorAll(
  "[style-hover], [style-active], [style-focus]"
);

if (!affectedElements.length) {
  console.warn(
    "No EIS tags detected! try adding a `style-hover` attribute to an element"
  );
} else {
  affectedElements.forEach((e) => {
    const initialStyles = e.getAttribute("style") || "";

    const hoverStyles = e.getAttribute("style-hover");
    const activeStyles = e.getAttribute("style-active");
    const focusStyles = e.getAttribute("style-focus");

    const updateStyles = () => {
      let styles = initialStyles;
      if (e._hover) styles += "; " + hoverStyles;
      if (e._active) styles += "; " + activeStyles;
      if (e._focus) styles += "; " + focusStyles;
      e.setAttribute("style", styles);
    };

    // hover
    if (hoverStyles) {
      e.onmouseenter = () => {
        e._hover = true;
        updateStyles();
      };
      e.onmouseleave = () => {
        e._hover = false;
        updateStyles();
      };
    }

    // active
    if (activeStyles) {
      e.onmousedown = () => {
        e._active = true;
        updateStyles();
      };
      e.onmouseup = () => {
        e._active = false;
        updateStyles();
      };
    }

    // focus
    if (focusStyles) {
      e.onfocus = () => {
        e._focus = true;
        updateStyles();
      };
      e.onblur = () => {
        e._focus = false;
        updateStyles();
      };
    }
  });
}
