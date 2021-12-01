const item1 = {
    name : "拿鐵",
    price : 150,
    count : 0 ,
    total : 0 
}

const item2 = {
    name : "美日咖啡",
    price : 100,
    count : 0 ,
    totoal : 0 
}

const user1 = {
    name : "kai",
    level : 2,        
}

// const myArr = [1,2,3,4];
// console.log(myArr);
// console.log(typeof(myArr));

const drinks = {
   arr1 : [1,2,3],
   arr2 : [5,7]
}

console.log(drinks);

const form = document.getElementById("myForm");

const itemName1 = document.getElementById("itemName1");
const itemPrice1 = document.getElementById("itemPrice1");
const itemCount1 = document.getElementById("itemCount1");
const itemTotal1 = document.getElementById("itemTotal1");

const itemName2 = document.getElementById("itemName2");
const itemPrice2 = document.getElementById("itemPrice2");
const itemCount2 = document.getElementById("itemCount2");
const itemTotal2 = document.getElementById("itemTotal2");

const itemName3 = document.getElementById("itemName3");
const itemPrice3 = document.getElementById("itemPrice3");
const itemCount3 = document.getElementById("itemCount3");
const itemTotal3 = document.getElementById("itemTotal3");

const resultBtn = document.getElementById("resultBtn");
const pResult = document.getElementById("pResult");
console.log(itemName1);
console.log(typeof(itemName1));


console.log(pResult);

//form input text 放入 item1 obj data
// itemName1.value = "55688";
itemName1.value = item1.name;
itemPrice1.value = item1.price;
itemCount1.value = item1.count;
itemTotal1.value = item1.total;

form.addEventListener("submit",function(e){
    // console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();
    calResult = parseInt(itemPrice1.value) * parseInt(itemCount1.value);
    itemTotal1.value = calResult;
    calResult = parseInt(itemPrice2.value) * parseInt(itemCount2.value);
    itemTotal2.value = calResult;
    calResult = parseInt(itemPrice3.value) * parseInt(itemCount3.value);
    itemTotal3.value = calResult;
    total = parseInt(itemTotal1.value) + parseInt(itemTotal2.value)  + parseInt(itemTotal3.value)  ;

    pResult.innerText = "Result : " + total;
    }
)


