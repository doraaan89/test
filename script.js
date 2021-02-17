const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';




function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener('click', handleClick);
}
init();

function greed() {
  const titleWidth = title.style.width;
  if (titleWidth !== '200px') {
    title.style.width = '200px';

  } else {
    title.style.width = '100px';
  }
}

title.addEventListener('mouseenter', greed)

console.dir(title.style)