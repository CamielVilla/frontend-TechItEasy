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

//4c
function showScreenSizes (tvScreen) {
    const tvScreenSizes = [];
    for (let i = 0; i < tvScreen.length; i++) {
   tvScreenSizes.push(tvScreen[i] + " inch (" + Math.round(tvScreen[i] * 2.54) + "cm)");
    }
    return tvScreenSizes;
}

console.log(showScreenSizes(inventory[1].availableSizes));
console.log(showScreenSizes(inventory[3].availableSizes));

//4d
const tvSpecs = document.createElement(`p`);
tvSpecs.textContent = tvToString(inventory[0]);
const showTvSpecs = document.getElementById("size-of-one-tv");
showTvSpecs.appendChild(tvSpecs);
