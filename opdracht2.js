//2a + 2b
const soldTvsText = document.getElementById("amount-sold-tvs");
let soldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    soldTvs += (inventory[i].sold)
};
console.log(soldTvs);
soldTvsText.textContent = soldTvs;

//2c + 2d
const purchasedTvsText = document.getElementById("amount-purchased-tvs");
let purchasedTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    purchasedTvs+= (inventory[i].originalStock)
};
console.log(purchasedTvs);
purchasedTvsText.textContent = purchasedTvs;

//2e
const tvsLeftText = document.getElementById("amount-of-tvs-left");
let tvsLeft = purchasedTvs - soldTvs;
tvsLeftText.textContent = tvsLeft;



