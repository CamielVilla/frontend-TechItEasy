//4a
function tvToString(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}

console.log(tvToString(inventory[0]));
console.log(tvToString(inventory[1]));

//4b
function formatPrice(tvPrice) {
   return "€" + tvPrice;
}

console.log(formatPrice(inventory[0].price));

//4b
function showScreenSizes (tvScreen) {
    for (let i = 0; i < tvScreen.availableSizes.length; i++) {

    }
}
