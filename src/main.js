import { searchImg } from './js/pixabay-api';

let btn = document.querySelector('[type="submit"]');
let inp = document.querySelector('[type="text"]');

inp.addEventListener('keyup', onKeyUp);

function onKeyUp(event) {
  const searchInput = event.target.value;
  if (searchInput == '' || searchInput == ' ') {
    btn.disabled = true;
    return;
  }
  btn.disabled = false;
}

btn.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  searchImg(inp.value);
}
