import "./styles.css";
import { loadInitialContent } from "./loadInitial";
import { loadMenu } from "./loadMenu.js";
import { loadHome } from "./loadHome.js";

loadInitialContent();
loadMenu();
loadHome();
console.log("Hello, world!");