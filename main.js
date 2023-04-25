import header from "./modules/header.js";
import footer from "./modules/footer.js";
import home from "./modules/pages/home.js";
import shop from "./modules/pages/shop.js";

const body = document.querySelector('body');
const main = document.createElement('main');

main.append(
  ...home(),
);

body.append(
  header(),
  main,
  footer(),
);

// temporal function for testing
main.replaceChildren(...shop());