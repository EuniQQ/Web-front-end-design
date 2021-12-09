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
switch(option.value){
    case "+":
        alert(parseIntNum1 + parseIntNum2);
        break;

    case "-":
            alert(parseIntNum1 - parseIntNum2);
            break;

    case "*":
            alert(parseIntNum1 * parseIntNum2);
            break;

    case "/":
            alert(parseIntNum1 / parseIntNum2);
            break;

    default:
        alert("default");
        break;

}
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
