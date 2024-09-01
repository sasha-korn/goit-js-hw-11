// creating layout of cards

export const createImageTemplate = imageEl => {
  return `
  <li class="wraper">
      <a href="${imageEl.largeImageURL}">
        <img
          class="gallery-image"
          src="${imageEl.previewURL}"
  alt="${imageEl.tags}"
title="${imageEl.tags}"
        />
      </a>

      <ul class="info">
        <li class="info-el">
          <span class="title">Likes</span>
          <span class="value">${imageEl.likes}</span>
        </li>
        <li class="info-el">
          <span class="title">Views</span>
          <span class="value">${imageEl.views}</span>
        </li>
        <li class="info-el">
          <span class="title">Comments</span>
          <span class="value">${imageEl.comments}</span>
        </li>
        <li class="info-el">
          <span class="title">Downloads</span>
          <span class="value">${imageEl.downloads}</span>
        </li>
      </ul>

      </li>
  `;
};
