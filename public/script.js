let width = window.innerWidth;
let height = window.innerHeight;

const [ iframe ] = Array.from(document.getElementsByTagName('iframe'));

iframe.setAttribute('width', width);
iframe.setAttribute('height', height);

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;

  iframe.setAttribute('width', width);
  iframe.setAttribute('height', height);
}