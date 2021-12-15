//form submit---->當submit鍵按下時，
//get num1
//get num2
//get option
//option +
//option -
//option *
//option /


//const是常數不會變
//宣告：
const form = document.getElementById("myForm");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const option = document.getElementById("option");
const result = document.getElementById("resultOutput");
const result = document.getElementById("discount");



//get form
form.addEventListener("submit", function (e) {
    console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    console.log(option.value);
    parseIntNum1 = parseInt(num1.value);
    parseIntNum2 = parseInt(num2.value);
    alert(parseIntNum1 + parseIntNum2);

    //switch
console.log(typeof(option.value));
let total="";
switch(option.value){
    case "+":
        total=parseIntNum1 + parseIntNum2;
        break;

    case "-":
        let tempNum;
            if (parseIntNum2 > parseIntNum1){
            tempNum = parseIntNum1;
            parseIntNum1 = parseIntNum2;
            parseIntNum2 = tempNum;
            }
            total = parseIntNum1 - parseIntNum2;
            break;

    case "*":
        let discount;
        if(parseIntNum1>500){
            parseIntNum2 = parseIntNum1 * 0.79;
            
        }else if(parseIntNum1>200){
            option = -100; 
        }

        total = parseIntNum1 + parseIntNum2 + option
        break;

    default:
        alert("default");
        break;

}


    alert(parseIntNum1 + parseIntNum2);
    discount.innerText="result:" + total;
    //switch end

});






//get num1
//num1 input ?
console.log(typeof (num1));
console.log(num1);
console.log(num1.value);
//get num2
console.log(typeof (num2));
//get option
console.log(typeof (option));
     //option +
     //option -
     //option *
     //option /



    //  homework:
    //  1.show bs alert / p / Text
    //  2.num2 >num1 時，兩值交換 

  
//課堂練習
// 1. input : 1.1總價  1.2折扣  1.3現金折抵(1-100)
// 2.result 

// 1000 * 0.79 - 100
// 790
// 100

// 3.>500才能用1.2(折扣)
// 4.>200

