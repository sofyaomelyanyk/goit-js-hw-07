import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const imagesMarkUp = createItemsGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", imagesMarkUp);

gallery.addEventListener("click", onImageClick);

gallery.addEventListener("click", onOpenModalWindow);

// gallery.addEventListener("keydown", onCloseModalWindow);

// function onCloseModalWindow(e) {
//   if (e.key === "Escape") {

//   }
// }

function onImageClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
}

function onOpenModalWindow(e) {
  e.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

function createItemsGallery(images) {
  return images
    .map(
      (image) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
    )
    .join("");
}
