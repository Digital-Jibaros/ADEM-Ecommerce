import header from "./modules/header.js";
import footer from "./modules/footer.js";
import { goToPage } from "./modules/functions.js";

const body = document.querySelector('body');
const main = document.createElement('main');

body.append(
  header(),
  main,
  footer(),
  );
  
  goToPage("home");
