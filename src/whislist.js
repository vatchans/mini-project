let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let likeditems= JSON.parse(localStorage.getItem("d")) || [];
let generateCartItems = () => {
  if (likeditems.length !== 0) {
    return (ShoppingCart.innerHTML = likeditems
      .map((x) => {
        let { id } = x;
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
           <p>${search.desc}
          </p>
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
    <img src="/1062309-removebg-preview.png">
    <div>
    `;
  }
};

generateCartItems();





