//課堂練習
//將英寸(1英吋)轉換成公分(2.54cm)


//宣告：
const cmInput = document.getElementById("cm");
const inchInput = document.getElementById("inch");
const meterInput = document.getElementById("meter");
const pingInput = document.getElementById('ping');
const pingInput = document.getElementById('cmErr');
const pingInput = document.getElementById('inchErr');
const pingInput = document.getElementById('meterErr');
const pingInput = document.getElementById('pingErr');


cmInput.addEventListener("change", function(e){
    console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();  
    
    // 公分
    const cm = parseFloat(cm.value);  //Float=浮點數  //.value是將字串轉為數值
    console.log(cm);
    let inch = cm / 2.54;
    console.log(inch);
    inch = Math.round(inch * 100)/100;  
    //若是直接四捨五入(round)，小數就會被捨為0，所以要先*100再除以100，設定位數是小數點兩位
    console.log(inch);
    inchInput.value = inch;
    //錯誤提示
    if(isNaN(cm)){
        cmErr.innerText = "請輸入數字";
    }
    
});

//英吋
inchInput.addEventListener("change", function(e){
const inch = parseFloat(inchInput.value);
console.log(inch);
let cm = inch * 2.54;
cm = Math.round(cm * 100)/100
console.log(cm);
cmInput.value = cm;
//錯誤提示
if(isNaN(inch)){
    inchErr.innerText = "請輸入數字";
}


});
//NAN=Not A Number
    
    
meterInput.addEventListener("change", function(e){
    console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();  
    
    // 公尺平方
    const meter = parseFloat(meter.value);  
    console.log(meter);
    let ping = meter / 3.306;
    console.log(ping);
    ping = Math.round(ping * 100)/100;  
    //若是直接四捨五入(round)，小數就會被捨為0，所以要先*100再除以100，設定位數是小數點兩位
    console.log(ping);
    inchInput.value = inch;
    //錯誤提示
    if(isNaN(ping)){
        Err.innerText = "請輸入數字";
    }
    
    
});
    






