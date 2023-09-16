import { createHtmlElement } from "./helper";

export default function themeFactory() {
  let root = document.querySelector(":root");
  let currentTheme = "system";

  let prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  function createRadio(theme) {
    const radio = createHtmlElement("input", null, null, null, null);
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "theme");
    radio.setAttribute("value", theme);
    const label = createHtmlElement("label", null, null, theme, [radio]);
    return label;
  }

  function addThemesCard() {
    let themeOptions = [
      createRadio("system"),
      createRadio("dark"),
      createRadio("light"),
      createRadio("red"),
    ];
    // themeOptions[0].innerHTML = `<input type="radio" name="theme" value="system"> sysssstem `;
    let header = createHtmlElement("h2", null, null, "Select Theme", null);
    let options = createHtmlElement("div", null, null, null, null);
    themeOptions.forEach((theme) => {
      options.appendChild(theme);
    });
    let selectTheme = createHtmlElement("div", null, ["select-theme"], null, [
      header,
      options,
    ]);
    // selectTheme.toggleAttribute("data-open");
    let themeBtn = document.querySelector(".svg-colorPallete").parentElement;
    themeBtn.appendChild(selectTheme);
  }

  function toggleThemeCard() {
    let select = document.querySelector(".select-theme");
    select.toggleAttribute("data-open");
  }

  function updateTheme(theme) {
    document
      .querySelector(`[value="${currentTheme}"]`)
      .parentElement.classList.remove("active");
    root.className = theme;
    currentTheme = theme;
    document
      .querySelector(`[value="${currentTheme}"]`)
      .parentElement.classList.add("active");
  }
  return {
    updateTheme,
    addThemesCard,
    toggleThemeCard,
  };
}
