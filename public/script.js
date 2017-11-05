// get the date
const today = (new Date()).getDate();
let selected = today;

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
numbersContainer.onclick = changeVideoCallback;

function changeVideoCallback (event) {
  const number = event.target.innerText;
  if (number > today) return;
  
  const dayElement = document.getElementById(number);
  const prevSelectedElement = document.getElementById(selected);

  prevSelectedElement.classList.remove('selected');
  selected = number;
  dayElement.classList.add('selected');

  const url = videos[number] + '?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  iframe.setAttribute('src', url);
}

for (let i = 1; i <= 25; i++) {
  const dayElement = document.createElement('span');
  dayElement.id = i;
  if (i <= today) dayElement.classList.add('active');
  if (i === today) dayElement.classList.add('selected');
  dayElement.innerText = i;
  numbersContainer.appendChild(dayElement);
}