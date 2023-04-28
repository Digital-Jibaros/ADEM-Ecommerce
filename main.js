import header from "./modules/header.js";
import footer from "./modules/footer.js";
import { goToPage } from "./modules/functions.js";

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const main = document.createElement('main');

wrapper.setAttribute('id', 'wrapper');

wrapper.append(
  header(),
  main,
  footer(),
);
body.append(wrapper);

goToPage("home");
