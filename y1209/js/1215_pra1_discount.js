//課堂練習
// 1. input : 1.1總價  1.2折扣  1.3現金折抵(1-100)
// 2.result 

// 1000 * 0.79 - 100
// 790
// 100

// 3.>500才能用1.2(折扣)
// 4.>200


//const是常數不會變
//宣告：
const form = document.getElementById("myForm");
const originPrice = document.getElementById("originPrice");
const discount = document.getElementById("discount");
const cashDiscountPrice = document.getElementById("cashDiscountPrice");
const resultOutput = document.getElementById("resultOutput");


//get form
form.addEventListener("submit", function(e){
    console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();  
    console.log(originPrice.value);
    console.log(discount.value);
    console.log(cashDiscount.value);
    
    //1.1總價
    parseOriginPrice = parseInt(originPrice.value);  
    console.log(parseOriginPrice);
    
    //1.2折扣
    parseDiscount = parseFloat(discount.value / 100);   
    console.log(parseDiscount);

    //1.3現金折抵
    cashDiscountPrice = parseInt(cashDiscount.value);
    console.log(cashDiscountPrice);  


    //全部的折扣=折扣+現金折抵
    let discountAll = 0 ;
    
    //消費>500 79折/88折 =>0.79 / 0.88
    if(parseOriginPrice >= 500){
        discountAll = parseOriginPrice *(1-parseDiscount);
    }
    
    //>200現金折抵
    if(parseOriginPrice * parseDiscount >= 100){
        discountAll = discountAll + cashDiscountPrice;
    }
    
    console.log(discountAll);
    
    alert(discountAll);
    resultOutput.innerText = "Result : 恭喜妳今天賺了" + discountAll;


});



