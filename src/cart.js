let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let likeditems=JSON.parse(localStorage.getItem("d")) || [];
function generateShop() {
  return (shop.innerHTML =shopItemsData
    .map((x) => {
      let { id, name, desc, img, price } = x;
      let search = basket.find((y) => y.id === id) || [];
      return `
      <div class="products">
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <i onclick="wishlist(${id})" class="fa-solid fa-heart"></i>
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2  id="amt" class="fa-solid fa-indian-rupee-sign">&nbsp;${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
            <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}
             
      </div>
            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
  </div>
  </div>`;
    })
    .join(""));
}
generateShop();



let wishlist = (id) => {
  let selectedItem = id;
  let search = likeditems.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    likeditems.push({
      id: selectedItem.id,
      item: 1,
    });
  }

  console.log(likeditems);
  addwishlist(selectedItem.id);
  localStorage.setItem("d", JSON.stringify(likeditems));
};

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item+=1;
  }

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};



function update(id) {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
}
function addwishlist(id){
  let search = likeditems.find((x) => x.id === id);
  // document.getElementById(id).innerHTML = search.item;
}



function calculation() {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation();

function search_products() {
  const searchbar = document.getElementById("searchbar").value.toUpperCase();
  var storeitems = document.getElementById("shop");
  var product = document.querySelectorAll(".products");
  var pname = storeitems.getElementsByTagName("h3");
  for (i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h3')[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbar) > -1) {
        product[i].style.display = "";
      }
      else {
        product[i].style.display = "none";
      }
    }

  }
}
