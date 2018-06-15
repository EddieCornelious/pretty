const Pretty = (function() {
  if (!console || !console.log) {
    throw new Error('Console and console.log are needed to run this module');
  }

  function toCSS(prop, value) {
    return prop + ':' + value + ';';
  }

  function mod(a, b) {
    return a % b;
  }

  function formatOutput(w, colors, sizes) {
    let res = '';
    const css = [];
    const word = w.toString().substring(0, 250);
    for (let i = 0; i < word.length; i += 1) {
      const chosenColorIndex = mod(i, colors.length);
      const chosenSizeIndex = mod(i, sizes.length);
      css.push(
        toCSS('color', colors[chosenColorIndex]) +
          toCSS('font-size', sizes[chosenSizeIndex])
      );
      res += '%c' + word[i];
    }
    css.unshift(res);
    return css;
  }
  const rainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];
  const defaultText = 'You forgot to enter a string to print!!';
  const defaultSize = ['25px'];

  function log(word = defaultText, colors = rainbow, sizes = defaultSize) {
    const format = formatOutput(word, colors, sizes);
    console.log.apply(console, format);
    return this;
  }
  return { log };
})();
