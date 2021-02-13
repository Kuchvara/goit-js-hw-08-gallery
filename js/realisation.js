import images from './gallery-items.js';

// const galleryRef = document.querySelector('ul');
// const modalRef = document.querySelector('div.lightbox')
// const overlayRef = modalRef.querySelector('div.lightbox__overlay')
// const modalContentRef = modalRef.querySelector('img.lightbox__image')
// const modalCloseBtnRef = modalRef.querySelector('button')

const refs = {
    gallery: document.querySelector('ul'),
    modal: document.querySelector('div.lightbox'),
    overlay: document.querySelector('div.lightbox__overlay'),
    modalContent: document.querySelector('img.lightbox__image'),
    modalCloseBtn: document.querySelector('button'),
}

const createGallery = images.map(item => {
    const liRef = document.createElement('li');
    liRef.classList.add('gallery__item');
    const linkRef = document.createElement('a');
    linkRef.classList.add('gallery__link');
    linkRef.setAttribute('href', item.original);
    const imgRef = document.createElement('img');
    imgRef.classList.add('gallery__image');
    imgRef.setAttribute('src', item.preview);
    imgRef.setAttribute('data-source', item.original);
    imgRef.setAttribute('alt', item.description);
    return (liRef, linkRef, imgRef)
});

refs.gallery.append(...createGallery);


