// get the date
var today = (new Date()).getDate();
var selected = today;

// create video
var width = window.innerWidth;
var height = window.innerHeight;

var iframe = document.getElementsByTagName('iframe')[0];

iframe.setAttribute('width', width);
iframe.setAttribute('height', height);

var url = 'https://www.youtube.com/embed/' + videos[today] + '?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';

iframe.setAttribute('src', url);

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;

  iframe.setAttribute('width', width);
  iframe.setAttribute('height', height);
}

// create numbers
var numbersContainer = document.getElementById('numbers');
numbersContainer.onclick = changeVideoCallback;

function changeVideoCallback (event) {
  var number = event.target.innerText;
  if (number > today) return;

  var dayElement = document.getElementById(number);
  var prevSelectedElement = document.getElementById(selected);

  prevSelectedElement.classList.remove('selected');
  selected = number;
  dayElement.classList.add('selected');

  var url = 'https://www.youtube.com/embed/' + videos[number] + '?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  iframe.setAttribute('src', url);
}

for (var i = 1; i <= 25; i++) {
  var dayElement = document.createElement('span');
  dayElement.id = i;

  if (i <= today) dayElement.classList.add('active');
  else dayElement.classList.add('inactive');
  if (i === today) dayElement.classList.add('selected');

  dayElement.innerText = i;
  numbersContainer.appendChild(dayElement);
}

// fade out numbers and buttons when mouse is out of window
var bodyElement = document.getElementById('body');
var numbersElement = document.getElementById('numbers')
var aboutElement = document.getElementById('about-container');

bodyElement.addEventListener("mouseenter", function () { fadeIn(numbersElement); fadeIn(aboutElement); });
bodyElement.addEventListener("mouseleave", function () { fadeOut(numbersElement); fadeOut(aboutElement) });

function fadeIn (element) {
  element.classList.remove('disappear');
  element.classList.add('appear');
}

function fadeOut (element) {
  setTimeout(function () {
    element.classList.add('disappear');
    element.classList.remove('appear')},
  1000);
}

// show and hide the about modal
var modalEl = document.getElementById('modal');
var closeBtnEl = document.getElementById('modal-close');

aboutElement.onclick = openModal;
closeBtnEl.onclick = closeModal;

function openModal () {
  modalEl.classList.add('opened');
  modalEl.classList.remove('closed');
}

function closeModal () {
  modalEl.classList.remove('opened');
  modalEl.classList.add('closed');
}
