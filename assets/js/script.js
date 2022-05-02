let h1 = document.getElementById('display-mode');
let btn = document.getElementById('change-mode');
let body = document.getElementsByTagName('body')[0];
let footer = document.getElementsByTagName('footer')[0];

btn.addEventListener('click', changeMode);

function changeMode() {
  changeClass();
  changeStyle();
}

function changeClass() {
  h1.classList.toggle('dark-mode');
  btn.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}

function changeStyle() {
  if (btn.classList.contains('dark-mode')) {
    h1.innerHTML = 'Dark Mode';
    btn.innerHTML = 'Light Mode';
  } else {
    h1.innerHTML = 'Light Mode';
    btn.innerHTML = 'Dark Mode';
  }
}