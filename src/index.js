import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

function menuFilter(menu, type) {
  return menu
    .filter((item) => item.type === type)
    .sort(
      (firstItem, secondItem) => firstItem.menuOrder - secondItem.menuOrder
    );
}

// const itemRender = (item) => {
//   const listElement = document.createElement("li")
//   listElement.innerHTML = item
//   return listElement
// }

function menuRender(section, items) {
  let sectionTag = document.getElementById(`${section}`);
  let list = document.createElement("ul");

  sectionTag.appendChild(list);

  items.map(item => {
    let listElement = document.createElement("li");
    list.appendChild(listElement);
    return listElement.innerHTML = `
      <div id ="${section}-list">
        <h2>${item.name}</h2>
        <h3>${item.price.toFixed(2)}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });
}

const starterItems = menuFilter(menuItems, "starters");
const pastaItems = menuFilter(menuItems, "pasta");
const pizzaItems = menuFilter(menuItems, "pizza");

menuRender("starters", starterItems);
menuRender("pasta", pastaItems)
menuRender("pizza", pizzaItems)

console.log(starterItems);
console.log(pastaItems);
console.log(pizzaItems);
