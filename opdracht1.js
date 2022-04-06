//1a
const tvNames = inventory.map((tv) => {
    return tv.type;
});
console.log(tvNames);

//1b
const emptyStockTvs =  inventory.filter((tv) => {
    return tv.originalStock - tv.sold === 0;
})
console.log(emptyStockTvs);

//1c
const ambiLightTvs = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
});
console.log(ambiLightTvs);

//1d
const sortedTvs = inventory.sort((a, b) => a.price - b.price);
console.log(sortedTvs)