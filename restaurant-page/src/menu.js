import { createHtmlElement } from "./helper";

const MenuPageFactory = (content) => {
  function menuItem(title, ingredients, cost) {
    return { title, ingredients, cost };
  }

  function addMenuItems(menu) {
    const menuContainer = createHtmlElement(
      "div",
      null,
      ["menu-container"],
      null,
      null
    );

    menu.forEach((item) => {
      const menuTitle = createHtmlElement(
        "h3",
        null,
        ["menu-title"],
        item.title,
        null
      );

      const menuIngredients = createHtmlElement(
        "div",
        null,
        ["menu-ingredients"],
        item.ingredients,
        null
      );

      const menuPrice = createHtmlElement(
        "div",
        null,
        ["menu-cost"],
        item.cost,
        null
      );

      const line = createHtmlElement("hr", null, ["menu-line"], null, null);

      const container = createHtmlElement(
        "div",
        null,
        ["menu-sub-container"],
        null,
        [menuIngredients, line, menuPrice]
      );

      const card = createHtmlElement("div", null, ["menu-card"], null, [
        menuTitle,
        container,
      ]);
      menuContainer.appendChild(card);
    });
    content.appendChild(menuContainer);
  }

  function display() {
    content.classList.add("menu");
    let menu = [
      menuItem(
        "benedict",
        "eggs, hollandaise, bacon, ham, smoked cheese",
        "$12.50"
      ),
      menuItem(
        "chicken",
        "chicken, hollandaise, bacon, ham, smoked cheese",
        "$16.95"
      ),
      menuItem(
        "jerk sandwich",
        "jamaican jerk chicken, avocado, grilled pineapple, roasted red pepper, mayo",
        "$16.95"
      ),
      menuItem(
        "salad board",
        "crispy teriyaki aubergine, pickled watermelon, mixed berries, cauliflower",
        "$5.85"
      ),
      menuItem("druggie", "pure cocaine, watermelon, coconut", "$69.85"),
    ];

    addMenuItems(menu);
  }

  function remove() {
    content.classList.remove("menu");
    const menuContainer = document.querySelector(".menu-container");
    menuContainer.remove();
  }

  return {
    display,
    remove,
  };
};

export { MenuPageFactory };
