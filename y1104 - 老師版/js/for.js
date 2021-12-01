// array  0  1  3  4 ....
const myArr = ['amy', 'bob', 'cat', 'dog'];

const iphoneObj = {
    "iphone8": 1000,
    "iphone9": 2000,
    "iphone10": 3000,
    "iphone11": 4000
}
console.log(iphoneObj);

for (const [key, value] of Object.entries(iphoneObj)) {
    console.log(`${key}: ${value}`);
  }

// js foreach
// myArr.forEach(myFunc);

// function myFunc(value, key) {
//     console.log(value);
//     console.log(key);

// }

// console.log(myArr[0]);
// console.log(myArr[1]);


// for (let i in myArr) {
//     console.log("for in , i = " + i);
// }

// myArr.pop(); //刪除最後一個元素
// myArr.push('egg'); //增加一個
// console.log(myArr);
// console.log(myArr.length);

// for (let index = 0; index < myArr.length; index++) {
//     console.log(myArr[index]);

// }

for (let i = 1 ; i <=10 ; i++){
    console.log ("i = " + i);   
}

// 練習一
// 練習 9 * 9 乘法表

// 練習二
// input number 8
// input number 7
// submit 
// show 8 * 7 乘法表
