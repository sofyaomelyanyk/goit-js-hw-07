import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imagesMarkUp = createItemsGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", imagesMarkUp);

new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

function createItemsGallery(images) {
  return images
    .map(
      (image) =>
        `
        <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
 `
    )
    .join("");
}
