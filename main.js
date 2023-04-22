import header from "./modules/header.js";
import home from "./modules/home.js";

const body = document.querySelector('body');
const main = document.createElement('main');

main.append(
  ...home(),
);

body.append(
  header(),
  main,
);
