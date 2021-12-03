const item1 = {
    name:"義式咖啡",
    price:120,
    amount:0,
    total:0,
    
}

const item2 = {
    name:"拿鐵咖啡",
    price:150,
    amount:0,
    total:0,
}

const item3 = {
    name:"美式咖啡",
    price:90,
    amount:0,
    total:0,
}

const user1 = {
    name:"Eunice",
    level:2,
}

const myArr = [1,2,3,4];
console.log(myArr);
console.log(typeof(myArr));

const drinks = {
    arr1 : [1,2,3],
    arr2 : [4,5,6]
    }

    console.log(drinks);

// console.log("item1",item1);
// console.log(item1.price);
      
const form = document.getElementById ("cafe");


const name_1 = document.getElementById ("name_1");
const price_1 = document.getElementById ("price_1");
const amount_1 = document.getElementById ("amount_1"); 
const total_1 = document.getElementById ("total_1");

const name_2 = document.getElementById ("name_2");
const price_2 = document.getElementById ("price_2");
const amount_2 = document.getElementById ("amount_2"); 
const total_2 = document.getElementById ("total_2");

const name_3 = document.getElementById ("name_3");
const price_3 = document.getElementById ("price_3");
const amount_3 = document.getElementById ("amount_3"); 
const total_3 = document.getElementById ("total_3");

const resultBtn = document.getElementById ("result"); 
const pResult = document.getElementById ("pResult"); 

// form input 放入item1 obj data
// name_1.value = "12345";(先test)
name_1.value = item1.name;
price_1.value = item1.price;
amount_1.value = item1.amount; 
total_1.value = item1.total; 

name_2.value = item2.name;
price_2.value = item2.price;
amount_2.value = item2.amount; 
total_2.value = item2.total;

name_3.value = item3.name;
price_3.value = item3.price;
amount_3.value = item3.amount; 
total_3.value = item1.total;




form.addEventListener("submit",function(e){
    // console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();
    calResult = parseInt(price_1.value) * parseInt(amount_1.value);
    total_1.value = calResult;
    calResult = parseInt(price_2.value) * parseInt(amount_2.value);
    total_2.value = calResult;
    calResult = parseInt(price_3.value) * parseInt(amount_3.value);
    total_3.value = calResult;
    total = parseInt(total_1.value) + parseInt(total_2.value) + parseInt(total_3.value);


    pResult . innerText = "Result：" + total;


}
)

