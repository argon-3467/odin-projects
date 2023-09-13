//import images from gallery folder
import dancers_img from "./assets/gallery/dancers.png";
import dj_img from "./assets/gallery/dj.png";
import food1_img from "./assets/gallery/food1.png";
import food2_img from "./assets/gallery/food2.png";
import peopleEating_img from "./assets/gallery/people-eating.png";
import randomGuy_img from "./assets/gallery/random-guy.png";
import resto_img from "./assets/gallery/resto.png";
import womanWhite_img from "./assets/gallery/woman-in-white.png";

import { createHtmlElement, createImgElement } from "./helper";

const GalleryPageFactory = (content) => {
  const gallery = createHtmlElement(
    "div",
    null,
    ["gallery-container"],
    null,
    null
  );

  let startIndex = 0;
  let Images = [];

  function getImgWithContainer(src, alt) {
    const cardImg = createImgElement(src, alt, null, null);
    const imgContainer = createHtmlElement(
      "div",
      null,
      ["img-container"],
      null,
      [cardImg]
    );
    return imgContainer;
  }

  function addImages(imageCount) {
    let FixedImages = [
      getImgWithContainer(
        resto_img,
        "A chinese restaurant with a neon sign outside"
      ),
      getImgWithContainer(
        dancers_img,
        "A group of dancers in poorly lit night club"
      ),
      getImgWithContainer(
        womanWhite_img,
        "A woman in white posing seductively in a night club"
      ),
      getImgWithContainer(
        randomGuy_img,
        "Portrait of a black guy in a night club"
      ),
      getImgWithContainer(food1_img, "A plate with eggs"),
      getImgWithContainer(dj_img, "A DJ in a nightclub"),
      getImgWithContainer(food2_img, "A plate filled with veggies"),
      getImgWithContainer(
        peopleEating_img,
        "People sitting in a calm environment"
      ),
    ];

    Images = Images.concat(FixedImages);
    addMoreImages(imageCount - Images.length);
    addToGallery();
    content.appendChild(gallery);
  }

  function addMoreImages(toAdd) {
    let currentCount = Images.length;
    while (Images.length < currentCount + toAdd) {
      Images.push(
        getImgWithContainer(
          `https://source.unsplash.com/random/?nightclub&${Math.random()}`,
          "A random image from Unsplash with keyword nightclub"
        )
      );
    }
  }

  function addToGallery() {
    for (let i = startIndex; i < Images.length; ++i) {
      gallery.appendChild(Images[i]);
    }
  }

  function addMoreImagesBtn() {
    const btn = createHtmlElement(
      "button",
      null,
      ["more-img-btn"],
      "More",
      null
    );
    btn.addEventListener("click", () => {
      addMoreImages(5);
      addToGallery();
    });
    content.appendChild(btn);
  }

  function display() {
    content.classList.add("GALLERY");
    //add images
    addImages(8);
    addMoreImagesBtn();
  }

  function remove() {
    content.classList.remove("GALLERY");
    const gallery = document.querySelector(".gallery-container");
    const btn = document.querySelector(".more-img-btn");
    gallery.remove();
    btn.remove();
  }

  return {
    display,
    remove,
  };
};

export { GalleryPageFactory };
