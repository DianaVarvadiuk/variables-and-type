const plate = 15.678;
const kettle = 123.965;
const cup = 90.2345;

const sumgoods = plate + kettle + cup;
const paymoney = 500;
const quantitygoods = 3 ;
const maxPrice = Math.max(plate,kettle,cup);
console.log(`maxPrice: ${maxPrice}`);
const minPrice = Math.min(plate,kettle,cup);
console.log(`minPrice : ${minPrice}`);
console.log(`sumgoods : ${sumgoods}`);
const floorplate = Math.floor(plate);
console.log(floorplate);
const floorkettle = Math.floor(kettle);
console.log(floorkettle);
const floorcup = Math.floor(cup);
console.log(floorcup);
const sumfloorGoods = floorplate + floorkettle + floorcup;
console.log(`sumfloorGoods : ${sumfloorGoods}`);
console.log(`sumfloorGoods rounded to hundreds : ${Math.round(sumfloorGoods / 100) *100}`);
const isEvent = (sumfloorGoods % 2 !== 0);
console.log(`isEvent : ${isEvent}`);
const remainder = paymoney - sumgoods;
console.log(`remainder : ${remainder}`);
const averagevalue = +((sumgoods / quantitygoods).toFixed(2));
console.log(`averagevalue : ${averagevalue}`);


const discount = Math.round(Math.random() *  100);
console.log(`discount : ${discount}`);
const priceDiscount = +(sumfloorGoods - (sumfloorGoods*(discount / 100))).toFixed(2);
console.log(`priceDiscount : ${priceDiscount}`);
const netProfit = +(priceDiscount - (sumfloorGoods / 2)).toFixed(2);
console.log(`netProfit : ${netProfit}`);
