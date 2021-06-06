const plate = 15.678;
const kettle = 123.965;
const cup =90.2345;

let sumgoods = plate + kettle + cup;
let floorplate;
let floorkettle;
 let floorcup;
 const paymoney = 500;
 const quantitygoods = 3 ;

console.log(`Максимальна ціна : ${(Math.max(plate,kettle,cup))}`);
console.log(`Мінімальна ціна : ${(Math.min(plate,kettle,cup))}`);
console.log(`Вартість всіх товарів: ${sumgoods}`);
console.log(floorplate = (Math.floor(plate)));
console.log(floorkettle = (Math.floor(kettle)));
console.log(floorcup = (Math.floor(cup)));
let sumfloorGoods = floorplate+floorkettle+floorcup;
console.log(`Ціла частина  вартості кожного товару між собою  бкз копійок: ${sumfloorGoods}`);
console.log(`Сума товарів округлена до сотень : ${Math.round(sumfloorGoods / 100) *100}`);
const totalPrice = (sumfloorGoods % 2 !== 0);
console.log(`Булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? ${totalPrice}`);
const remainder = paymoney - sumgoods;
console.log(`Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${remainder}`);
const averagevalue = ((sumgoods/quantitygoods).toFixed(2));
console.log(`Середнє значення цін, округлене до другого знаку після коми :${averagevalue}`);


const discount =Math.round(Math.random()*100);
console.log(`Рандомна знижка :${discount}`);
const priceDiscount = (sumfloorGoods-(sumfloorGoods*(discount/100))).toFixed(2);
console.log(`Сума до оплати:${priceDiscount}`);
const netProfit = (priceDiscount-(sumfloorGoods/2)).toFixed(2);
console.log(`Чистий прибуток:${netProfit}`);
