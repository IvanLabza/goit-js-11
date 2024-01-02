import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


function render(data, index) {
  return `
    <li class="gallery__item">
      <a href="${data.largeImageURL}" target="_blank">
        <img class="gallery__image" data-index="${index}" src="${data.webformatURL}" alt="${data.tags}">
        <ul class="gallery-item__description">
          <li>Likes: ${data.likes}</li>
          <li>Views: ${data.views}</li>
          <li>Downloads: ${data.downloads}</li>
          <li>Comments: ${data.comments}</li>
        </ul>
      </a>
    </li>
  `;
}

export function createEl(data) {
  const gallery = document.getElementById('galary');
  gallery.innerHTML = '';
  for (let index = 0; index < data.length; index++) {
    gallery.insertAdjacentHTML('beforeend', render(data[index], index));
  }
  const imgItems = document.querySelectorAll('.gallery__image');

  imgItems.forEach(item => {
    item.addEventListener('click', event => {
      const index = event.target.dataset.index;
      renderBig(data[index]);
    });
  });
}

function renderBig(obj) {
  var lightbox = new SimpleLightbox('.gallery__item a').refresh();
}
