// get the date
let today = new Date(); // 
today = today.getDate();

// create video
let width = window.innerWidth;
let height = window.innerHeight;

const [ iframe ] = document.getElementsByTagName('iframe');

iframe.setAttribute('width', width);
iframe.setAttribute('height', height);

const url = videos[today] + '?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';

iframe.setAttribute('src', url);

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;

  iframe.setAttribute('width', width);
  iframe.setAttribute('height', height);
}

// create numbers
const numbersContainer = document.getElementById('numbers');

function changeVideoCallbackMaker (number) {
  return () => {
    const url = videos[number] + '?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
    iframe.setAttribute('src', url)
  }
}

for (let i = 1; i <= 25; i++) {
  const dayElement = document.createElement('span');
  if (i <= today) dayElement.className = 'active';
  dayElement.innerHTML = i;
  dayElement.onclick = changeVideoCallbackMaker(i);
  numbersContainer.appendChild(dayElement);
}