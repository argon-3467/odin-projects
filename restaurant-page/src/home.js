import bottleImg from "./assets/bottleandglass.gif";
import danceImg from "./assets/dancingwomen.gif";
import pillImg from "./assets/rotatingpill.gif";

import { createHtmlElement, createImgElement } from "./helper";

export const HomePageFactory = (content) => {
  function card(title, src, alt) {
    return { title, src, alt };
  }

  function addlogo() {
    const logo = "Mug shot Pub";
    const heading = createHtmlElement("h1", null, ["neonText"], logo, null);
    const logoContainer = createHtmlElement("div", null, ["logo"], null, [
      heading,
    ]);
    content.appendChild(logoContainer);
  }

  function addInfo() {
    const t1 = createHtmlElement("span", null, null, ` over 18's only`, null);
    const anchor = createHtmlElement("a", null, null, "book here", null);
    anchor.href = "#";
    const heading = createHtmlElement("h3", null, null, null, [anchor, t1]);
    content.appendChild(heading);
  }

  function addCards(Cards) {
    const cardsContainer = createHtmlElement(
      "div",
      null,
      ["card-container"],
      null,
      null
    );

    Cards.forEach((cardObj) => {
      const cardImg = createImgElement(cardObj.src, cardObj.alt, null, null);

      const cardImgContainer = createHtmlElement(
        "div",
        null,
        ["card-image"],
        null,
        [cardImg]
      );

      const cardTitle = createHtmlElement(
        "div",
        null,
        ["card-title"],
        cardObj.title,
        null
      );

      const card = createHtmlElement("div", null, ["card"], null, [
        cardImgContainer,
        cardTitle,
      ]);

      cardsContainer.appendChild(card);
    });

    content.appendChild(cardsContainer);
  }

  function display() {
    content.classList.add("home");
    let Cards = [
      card("drinks", bottleImg, "A gif of a bottle and a glass"),
      card("drugs", pillImg, "A gif of a pill rotating clockwise"),
      card("dance", danceImg, "A gif of 4 lovely women dancing"),
    ];

    addlogo();
    addInfo();
    addCards(Cards);
  }

  function remove() {
    content.classList.remove("home");
    document.querySelector("h3").remove();
    document.querySelector(".logo").remove();
    document.querySelector(".card-container").remove();
  }

  return {
    display,
    remove,
  };
};
