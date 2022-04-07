//1 + 2
function sortTvsOnPrice (tvArray) {
    const sortedTvs = inventory.sort((a, b) => a.price - b.price);
    console.log(sortedTvs);

    const tv = document.createElement('p');
    tv.textContent = showAllTvs(sortedTvs);
    const tvsOnPage = document.getElementById('sort-tvs-on-price');
    tvsOnPage.appendChild(tv);
};

function showAllAmbilightTvs(tvArray) {
    const ambilightTvs = tvArray.filter((tv) => {
        return tv.options.ambiLight === true;
    })
    console.log(ambilightTvs)

    for (let i = 0; i < ambilightTvs.length; i++) {
        const ambiTvs = document.createElement('p');
        ambiTvs.textContent = ambilightTvs[i].name;
        const ambiOnPage = document.getElementById('show-ambilight-tvs');
        ambiOnPage.appendChild(ambiTvs);
    }

}

function showSoldTvs(tvArray) {
    const emptyStockTvs =  tvArray.filter((tv) => {
        return tv.originalStock - tv.sold === 0;
    })
    console.log(emptyStockTvs);

    for (let i = 0; i < emptyStockTvs.length; i++) {
        const emptyStockTv = document.createElement('p');
        emptyStockTv.textContent = emptyStockTvs[i].name;
        const emptyStockOnPage = document.getElementById('show-empty-stock-tvs');
        emptyStockOnPage.appendChild(emptyStockTv);
    }
}

function Buttons(tvArray){
    const sortButton = document.createElement('button');
    sortButton.setAttribute('onclick', 'sortTvsOnPrice(inventory)');
    sortButton.textContent = "Sort";

    const ambilightButton = document.createElement('button');
    ambilightButton.setAttribute('onclick', 'showAllAmbilightTvs(inventory)');
    ambilightButton.textContent = "Show ambilight tv's"

    const soldTvsButton = document.createElement('button');
    soldTvsButton.setAttribute('onclick', 'showSoldTvs(inventory)');
    soldTvsButton.textContent = "Show Sold tv's"


    const buttonOnPage = document.getElementById('buttons');
    buttonOnPage.appendChild(sortButton);
    buttonOnPage.appendChild(ambilightButton);
    buttonOnPage.appendChild(soldTvsButton);
}

Buttons(inventory);



