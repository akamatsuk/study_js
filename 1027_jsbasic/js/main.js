'use strict';

// 定数 const
// 変数 let var

// let price = 150;

// console.log(price * 140);
// console.log(price * 160);


// price = 170;

// console.log(price * 140);
// console.log(price * 160);

// type
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);


// console.log(parseInt('5', 10) + 3);
// console.log(parseInt('hello', 10));

// const price = 1200;
// console.log(price > 1000);
// console.log(price < 1000);
// console.log(price >= 1000);
// console.log(price <= 1000);
// console.log(price === 1000);
// console.log(price !== 1000);

// false <- 0, null, undefined, '', false
// true <- それ以外

// console.log(Boolean(0));
// console.log(Boolean('hello'));

// const score = 85;

// if(score >= 80) {
//     console.log('Greate!');
// } else {
//     console.log('OK....');
// }

// score >= 80 ? console.log('great!') : console.log('OK...');

// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//     if (name === 'taguchi') {
//         console.log('good job!');
//     }
// }

// && なおかつ（AND）
// || もしくは （OR)
// !  ~ではない （NOT)

// if (score >= 50 && name === 'taguchi') {
//     console.log('good jpb!');
// }


// const signal = "pink";

// if (signal === "red") {
//     console.log("stop!");
// } else if (signal === "yellow") {
//     console.log("Caution!");
// } else if ()signal === "blue"{
//     console.log("Go!");
// }

// switch (signal) {
//     case "red":
//         console.log('stop!');
//         break;
//     case "yellow":
//         console.log('Caution!');
//         break;
//     case "blue":
//     case "green":
//         console.log('Stop!');
//         break;
//     default:
//         console.log('wrong signal');
//         break;
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log('hello');
//     // console.log('hello' + i);
//     console.log(`hello ${i}`);
// }

// let hp = 100;

// while (hp > 0) {
//     console.log(`${hp} HP left!`);
//     hp -= 15;
// }
// let hp = -50;

// do {
//     console.log(`${hp} HP left!`);
//     hp -= 15;
// } while (hp > 0);

// for (let i = 1; i <= 10; i++) {
//     if (i === 4) {
//     if (i % 3 === 0) {
//         continue;
//     if ( i === 4) {
//         break;
//     }
//     console.log(i);
// }

// function showAd(message = 'Ad') {// 仮引数
//     console.log('----------');
//     console.log(`---${message}---`);
//     console.log('----------');
// };


// showAd('Header Ad');  //実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('Ad');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');


// function sum(a, b, c) {
    // console.log(a + b + c);
    // return a + b + c;
    // console.log(a + b + c);     リターンするとそれ以降は使えなくなる
// };

// sum(1, 2, 3);
// sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const sum =  function(a, b, c) { //無名関数
//     return a + b + c;
// };

// const sum = (a, b, c) => a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = function(a) {
//     return a * 2;
// };

// const double = a => a * 2;

// console.log(double(12));

// const x = 2;  //グローバルすこーーーーーーーーーーーーーーーープ

// function f(){
//     // const x = 1;
//     console.log(x);
// }

// f();
// console.log(x);

{
    const x = 100;
    console.log(x);

}