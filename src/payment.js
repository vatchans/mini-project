let price= document.getElementById("price");
let pay= document.getElementById("pay");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let TotalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { item, id } = x;
          let search = shopItemsData.find((y) => y.id === id) || [];
  
          return item * search.price;
        })
        .reduce((x, y) => x + y, 0);
      // console.log(amount);
      price.innerHTML = `
      <p><i class="fa-solid fa-indian-rupee-sign">&nbsp;${amount}<p>`
    } else return;
  };
  
  TotalAmount();
  
  function price_button() {

    if (basket.length !== 0) {
        let amount = basket
          .map((x) => {
            let { item, id } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
    
            return item * search.price;
          })
          .reduce((x, y) => x + y, 0);
        // console.log(amount);
        pay.innerHTML = `
        <p>&nbsp;${amount}`
      } else return;
}

price_button();


