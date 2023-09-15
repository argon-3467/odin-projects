/**
 * Creates and returns an HTML element.
 * @param {string} type HTML type : div, nav, ul, ...
 * @param {string} id HTML ID
 * @param {[string]} Classes
 * @param {string} txt
 * @param {[HTMLElement]} Childrens HTML elements which must be appended to newly created element
 * @returns {HTMLElement} HTML element
 */
export function createHtmlElement(type, id, Classes, txt, Childrens) {
  const element = document.createElement(type);

  if (id) element.id = id;

  if (Classes) Classes.forEach((className) => element.classList.add(className));

  if (txt) element.textContent = txt;

  if (Childrens) {
    Childrens.forEach((child) => element.appendChild(child));
  }

  return element;
}

/** Returns `<img></img>` with some optional parameters.
 *
 * @param {string} src source path
 * @param {string} alt alternative text
 * @param {[string]} Classes array of classes
 * @param {[HTMLElement]} Childrens array of HTML children
 * @returns Image element
 */
export function createImgElement(src, alt, Classes, Childrens) {
  const Img = new Image();
  if (src) Img.src = src;
  if (alt) Img.alt = alt;

  if (Classes) Classes.forEach((className) => Img.classList.add(className));

  if (Childrens) {
    Childrens.forEach((child) => Img.appendChild(child));
  }

  return Img;
}
