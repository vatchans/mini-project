let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let {id,} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="200px" src=${search.img} alt="" />
        <div class="details">

          <div class="title-price-x">
              <h4 id="wl" class="title-price">
                <p>${search.name}
                <p class="fa-solid fa-indian-rupee-sign">&nbsp;${search.price}</p>
                </h4>
          </div>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>There is no item on Wishlist</h2>
    </a>
    <div>
    <img src="https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami7-35-512.png">
    <div>
    `;
  }
};

generateCartItems();




