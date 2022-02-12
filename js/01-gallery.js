import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createImgMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', onImgContainerClick);

function createImgMarkup(imgs) {
    return imgs.map(item => 
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
    </a>
    </div>`)
        .join('');
}

function onImgContainerClick(event) {
    event.preventDefault();

    const isImageEl = event.target.classList.contains('gallery__image');
    if (!isImageEl) {
        return;
    }

    const imgBigUrl = event.target.dataset.source;
    const img = basicLightbox.create(`<img src=${imgBigUrl} width="800" height="600">`);
    img.show();

    document.addEventListener('keydown', onModalClose);
    function onModalClose (evt) { 
        if (evt.code === 'Escape' ) {
            img.close();
    }
};
}

