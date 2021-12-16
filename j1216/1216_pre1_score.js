//課堂練習
//國英數分數，平均分數
//90分↑ -> A
//80分↑ -> B
//70分↑ -> C
//60分↑ -> D
//60分↓ -> E


const ChineseInput = document.getElementById("Chinese");   //Element=元素，DOM=文件物件模型（Document Object Model)
const EnglishInput = document.getElementById("English");
const MathInput = document.getElementById("Math");
const submitInput = document.getElementById("submitBtn");
const form = document.getElementById("myForm");
const resetBtnInput = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");


resetBtnInput.addEventListener("click",function(e) {  
    ChineseInput.value = 0;
    EnglishInput.value = 0;
    MathInput.value = 0;
    resultDiv.innertext = "";
});

//input的方法()
submitInput.addEventListener("click",function(e) {  
    //送出件是用button，所以第一個參數是click,不是submit,form才有submit
    //confirm("是否確定送出表單？");   
    //送出時會跳出確認提示
    
    if(!confirm("submit?")){
        //意思是不要submit就取消
        return false; 
    }

    e.preventDefault();
    console.log("submitInput is clicked");  
    typeof(ChineseInput.value);
    console.log(ChineseInput.value);
    
//平均分數
const Chinese = parseInt(ChineseInput.value);
const English = parseInt(EnglishInput.value);
const Math = parseInt(MathInput.value);

//防呆措施:若輸入100以上的數字，欄位返0
if(Chinese > 100 || English > 100 || Math>100){
    ChineseInput.value = 0;
    EnglishInput.value = 0;
    MathInput.value = 0;
}

//四種寫法:
// let sum = Chinese + English + Math;
// console.log(typeof(sum));   ---看得出資料型態(顏色區分) sum=總和
// console.log("sum is" + sum);  ---同一行省空間，但只看出來是string(都黑色)
// console.log("sum is" , sum);  ---同一行省空間，也可看出型態
// console.log("sum is" );  ---(含下一行)兩行，但看得出型態
// console.log(sum);

let sum = Chinese + English + Math;
let Average = sum/3;
console.log("avg",Average);




//level
let level;
let color;
if(Average>=90){
    level="A"
    color="success";
}else if(Average>=80){
    level="B"
}else if(Average>=70){
    level="C"    
}else if(Average>=60){
    level="D" 
}else{
    level = "E"
    color = "danger";
}
   

    console.log("level",level);
    console.log("color",color);

    const result =
    `<div class="alert alert-warning" role="alert">
    國文：${Chinese} <br>
    英文：${English} <br>
    數學：${Math} <br>
    總分：${sum} <br>
    平均：${Average} <br>
    成績判定： ${level}
    </div>`;

    
    resultDiv.innerHTML = result;
    
});