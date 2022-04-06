//3a

const allTvBrands = inventory.map((tv) => {
   return tv.brand;
})

for (let i = 0; i < allTvBrands.length; i++) {
   const tvElement = document.createElement('li');
   tvElement.textContent = allTvBrands[i];
   const tvBrandList = document.getElementById("list-of-tvs");
   tvBrandList.appendChild(tvElement);
}





//<3b>
function brandNames (tvs) {
   for (let i = 0; i < tvs.length; i++) {
      const tvElement = document.createElement('li');
      tvElement.textContent = tvs[i].brand;
      const tvBrandlist = document.getElementById("list-of-tvs")
      tvBrandlist.appendChild(tvElement);
   }
}

brandNames(inventory);