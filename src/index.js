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

const spicyRender = (item) => {
  if(item === true) {
      return `<p class="spicy"></p>`
  }
  return ""
}

function menuRender(section, items) {
  let sectionTag = document.getElementById(`${section}`);
  let list = document.createElement("ul");

  sectionTag.appendChild(list);

  items.map(item => {
    let listElement = document.createElement("li");
    list.appendChild(listElement);
    return listElement.innerHTML = `
      <div class ="${section}-list">
        <h2>${item.name} ${spicyRender(item.spicy)}</h2>
        <h3>${item.price.toFixed(2)}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });
}

let spicyOption = document.createElement("input")
spicyOption.type = "checkbox"
spicyOption.id = "spicy" 
spicyOption.value = "Spicy"

let main = document.getElementsByTagName("main")


const starterItems = menuFilter(menuItems, "starters");
const pastaItems = menuFilter(menuItems, "pasta");
const pizzaItems = menuFilter(menuItems, "pizza");

menuRender("starters", starterItems);
menuRender("pasta", pastaItems)
menuRender("pizza", pizzaItems)


