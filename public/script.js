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
  else dayElement.classList.add('inactive');
  if (i === today) dayElement.classList.add('selected');
  
  dayElement.innerText = i;
  numbersContainer.appendChild(dayElement);
}

const activeNums = Array.from(document.getElementsByClassName('active'));
const inactiveNums = Array.from(document.getElementsByClassName('inactive'));
const allNums = [...activeNums, ...inactiveNums];

// fade out numbers after 5 seconds
const numbers = document.getElementById('numbers')
const about = document.getElementById('about');

setTimeout(() => {  
  allNums.forEach(fadeOut);
  fadeOut(about);

  // fade numbers and logo back in or out on hover
  numbers.addEventListener("mouseenter", () => allNums.forEach(fadeIn));
  numbers.addEventListener("mouseleave", () => allNums.forEach(fadeOut));
  about.addEventListener("mouseenter", () => fadeIn(about));
  about.addEventListener("mouseleave", () => fadeOut(about));
}, 4000);

function fadeIn (element) {
  element.classList.remove('disappear');
}

function fadeOut (element) {
  setTimeout(() => element.classList.add('disappear'), 1000);
}