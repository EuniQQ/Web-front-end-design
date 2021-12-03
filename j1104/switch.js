const myArr = ['amy','bob','cat','dog'];
// for (let index = 0 ; index < myArr.length ; index++){
// console.log(myArr[index]);
// }

myArr.forEach(myFunc);

function myFunc(item,index){
    console.log(item);
    console.log(index);
}

// for (let i in myArr){
//     console.log("for in ,i="+i);
// }

// myArr.pop();    刪除最後一個元素
// myArr.push('egg');  增加一個
// console.log(myArr);

const iphoneObj = {
    "iphone8" : 1000,
    "iphone9" : 2000,
    "iphone10" : 3000,
    "iphone11" : 4000
}

console.log(iphoneObj);
// iphoneObj.forEach(myFunc);

for (const [key,value]of Object.entries(iphoneObj)){
    console.log(`${key}: ${value}`);
}