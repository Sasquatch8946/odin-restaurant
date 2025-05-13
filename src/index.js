import "./styles.css";
import { loadInitialContent } from "./loadInitial";
import { loadMenu } from "./loadMenu.js";
import { loadHome } from "./loadHome.js";
import { loadContact } from "./loadContact.js";

loadInitialContent();
loadMenu();
loadHome();
loadContact();
console.log("Hello, world!");