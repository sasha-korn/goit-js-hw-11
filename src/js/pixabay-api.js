import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Described in the documentation
import SimpleLightbox from 'simplelightbox';
// Additional import of styles
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createImageTemplate } from './render-functions';

const galleryWrapper = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });

export function searchImg(query) {
  loader.style.display = 'inline';
  fetch(
    `https://pixabay.com/api/?key=45750701-ca468da961c367d7a246db4b7&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        showNotification('something went wrong, bitch, try again');
      }

      return response.json();
    })
    .then(images => {
      console.log(images);
      if (images.total == 0) {
        showNotification(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      const imageTemplate = images.hits
        .map(imageInfo => createImageTemplate(imageInfo))
        .join('');
      galleryWrapper.innerHTML = imageTemplate;
      gallery.refresh();
    })
    .catch(err => {
      console.log(err);
      showNotification('something went wrong, try again');
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}

function showNotification(msg) {
  iziToast.show({
    message: msg,
    position: 'topRight',
    progressBar: false,
    theme: 'dark',
    backgroundColor: 'red',
  });
}
