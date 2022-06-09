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
  if (item === true) {
    return `<p class="spicy"></p>`;
  }
  return "";
};

// function spicyChoice(Option) {
//   let spicyChildrenNode = document.querySelectorAll(`${Option}`)
//   console.log(spicyChildrenNode);
//   for(let i = 0; i < spicyChildrenNode.length; i++) {
//     spicyChildrenNode.parentNode.style.textDecoration = "line-through"
//   }
//   //spicyChildrenNode.style.textDecoration = "line-through";
// }
function menuRender(section, items) {
  let sectionTag = document.getElementById(`${section}`);
  let list = document.createElement("ul");

  sectionTag.appendChild(list);

  items.map((item) => {
    let listElement = document.createElement("li");
    list.appendChild(listElement);
    return (listElement.innerHTML = `
      <div class ="${section}-list">
        <h2>${item.name} ${spicyRender(item.spicy)}</h2>
        <h3>$${item.price.toFixed(2)}</h3>
        <p>${item.description}</p>
      </div>
    `);
  });
}

/*Spicy Toggle Event Listener and Checkbox */
// let spicyOption = document.createElement("input");
// spicyOption.id = "spicyOption";
// spicyOption.type = "checkbox";
// spicyOption.name = "spicy";
// spicyOption.value = "Spicy";
// spicyOption.checked = true;

// let spicyTitle = document.createElement("label");
// spicyTitle.for = "spicy";
// spicyTitle.innerHTML = "Spicy Option";
// const header = document.querySelector("header");
// header.appendChild(spicyOption);
// header.appendChild(spicyTitle);

// let toggleSpicy = document.getElementById("spicyOption");
// toggleSpicy.addEventListener("toggle", spicyChoice("spicy"));

const starterItems = menuFilter(menuItems, "starters");
const pastaItems = menuFilter(menuItems, "pasta");
const pizzaItems = menuFilter(menuItems, "pizza");

menuRender("starters", starterItems);
menuRender("pasta", pastaItems);
menuRender("pizza", pizzaItems);

//console.log(menuItems);
//console.log(spicyChoice(menuItems));
