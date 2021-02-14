import images from './gallery-items.js';

// const galleryRef = document.querySelector('ul');
// const modalRef = document.querySelector('div.lightbox')
// const overlayRef = modalRef.querySelector('div.lightbox__overlay')
// const modalContentRef = modalRef.querySelector('img.lightbox__image')
// const modalCloseBtnRef = modalRef.querySelector('button')

const refs = {
    gallery: document.querySelector('ul'),
    modal: document.querySelector('div.js-lightbox'),
    overlay: document.querySelector('div.lightbox__overlay'),
    modalContent: document.querySelector('img.lightbox__image'),
    modalCloseBtn: document.querySelector('button'),
}

// створюємо розмітку галереї (динамічно)
const createGallery = images.map(item => {
    const liRef = document.createElement('li');
    liRef.classList.add('gallery__item');

    const linkRef = document.createElement('a');
    linkRef.classList.add('gallery__link');
    linkRef.href = item.original;

    const imgRef = document.createElement('img');
    imgRef.classList.add('gallery__image');
    imgRef.src = item.preview;
    imgRef.dataset.source = item.original;
    imgRef.alt = item.description;

    linkRef.append(imgRef);
    liRef.append(linkRef);
    return liRef
});

refs.gallery.append(...createGallery);

// робимо колбек функції для кліків

function clickOnGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') { return };
    
    refs.modalContent.src = event.target.dataset.source;
    refs.modalContent.alt = event.target.alt;

    refs.modal.classList.add('is-open');
}

function closeModal(event) {
    refs.modalContent.src = '';
    refs.modalContent.alt = '';

    refs.modal.classList.remove('is-open');
}

// додаєм EventListener 
refs.gallery.addEventListener('click', clickOnGallery);
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.overlay.addEventListener('click', closeModal);