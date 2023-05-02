export const storedData = (() => {
  if (!localStorage.getItem('cart')) localStorage.setItem('cart',JSON.stringify({}));
  if (!localStorage.getItem('favs')) localStorage.setItem('favs',JSON.stringify([]));

  const storedCart = JSON.parse(localStorage.cart);
  const storedFavs = JSON.parse(localStorage.favs);

  function getData() {
    return {
      storedCart,
      storedFavs,
    };
  }

  function getCounts() {
    let cartCount = 0;
    let favsCount = 0;

    for (const item in storedCart) {
      cartCount += storedCart[item];
    }

    favsCount = storedFavs.length > 0 ? storedFavs.reduce((curr, next) => curr + next) : 0;

    return {
      cartCount,
      favsCount,
    }
  }

  function isFav(item) {
    return storedFavs.includes(item);
  }
  
  function addFav(item) {
    if (!storedFavs.includes(item)) storedFavs.push(item);
    
    localStorage.setItem('favs', JSON.stringify(storedFavs));
  }
  
  function removeFav(item) {
    const itemIndex = storedFavs.indexOf(item);
    storedFavs.splice(itemIndex, 1);

    localStorage.setItem('favs', JSON.stringify(storedFavs));
  }

  function amountInCart(item) {
    return storedCart[item] || 0;
  }

  function addToCart(item) {
    if (!storedCart[item]) storedCart[item] = 0;
    storedCart[item] += 1;
    
    localStorage.setItem('cart', JSON.stringify(storedCart));
  }
  
  function removeFromCart(item) {
    storedCart[item] -= 1;
    if (storedCart[item] === 0) delete storedCart[item];

    localStorage.setItem('cart', JSON.stringify(storedCart));
  }


  
  return {
    getData,
    getCounts,
    isFav,
    addFav,
    removeFav,
    amountInCart,
    addToCart,
    removeFromCart,
  }
})();
