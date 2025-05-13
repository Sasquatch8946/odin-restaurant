import pancakes from "./pancakes.jpeg";
import bacon from "./bacon.jpeg";

function createMenuItem(name, description, image) {
    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("menu-item");
    const title = document.createElement("div");
    title.innerText = name;
    const itemDescription = document.createElement("div");
    itemDescription.innerText = description;
    const itemImg = document.createElement("img");
    itemImg.src = image;
    menuItem1.appendChild(title);
    menuItem1.appendChild(itemDescription);
    menuItem1.appendChild(itemImg);
    return menuItem1;
}

export const loadMenu = () => {
    const menu = document.querySelector("nav>button:nth-child(2)");
    menu.addEventListener("click", () => {
        console.log("hello from the menu button!");
        const contentDiv = document.querySelector("div#content");
        contentDiv.removeChild(contentDiv.firstChild);
        const subContentDiv = document.createElement("div");
        subContentDiv.classList.add("sub-content");
        const item1 = createMenuItem("Pancakes", "Fluffy, crisp, and delightful!", pancakes);
        const item2 = createMenuItem("Bacon", "Meaty, greasy, will clog your arteries!", bacon);
        subContentDiv.appendChild(item1);
        subContentDiv.appendChild(item2);
        contentDiv.appendChild(subContentDiv);
        
    });
}