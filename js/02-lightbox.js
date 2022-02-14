import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', onImgClick);

function createImagesMarkup(img) {
    return img.map(item =>
        `<a class="gallery__item" 
        href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}" />
        </a>`
    ).join('');
}

function onImgClick(event) {
    event.preventDefault();

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",  captionDelay: 250});
}