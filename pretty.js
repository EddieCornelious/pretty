var Pretty =
  Pretty ||
  (function() {
    if (!console || !console.log) {
      throw new Error(
        'window.console and console.log are needed to run this module'
      );
    }

    function toCSS(prop, value) {
      return prop + ':' + value + ';';
    }

    function mod(a, b) {
      return a % b;
    }

    function formatOutput(message, colors, sizes) {
      var res = '';
      var css = [];
      var word = message.toString().substring(0, 250);
      for (var i = 0; i < word.length; i += 1) {
        var chosenColorIndex = mod(i, colors.length);
        var chosenSizeIndex = mod(i, sizes.length);
        css.push(
          toCSS('color', colors[chosenColorIndex]) +
            toCSS('font-size', sizes[chosenSizeIndex])
        );
        res += '%c' + word[i];
      }
      css.unshift(res);
      return css;
    }
    var rainbow = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet'
    ];
    var defaultText = 'You forgot to enter a string to print!!';
    var defaultSize = ['25px'];

    function log(message, colorArray, sizeArray) {
      var word = message === undefined ? defaultText : message;
      var colors = colorArray === undefined ? rainbow : colorArray;
      var sizes = sizeArray === undefined ? defaultSize : sizeArray;
      var format = formatOutput(word, colors, sizes);
      console.log.apply(console, format);
      return this;
    }
    return {log};
  })();
