const myForm = document.getElementById("Myform");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("unm2");
const result = document.getElementById("result");


myForm.addEventListener("submit",function(e){
    alert("55688");
});

num1Input.addEventListener("change",function(e){
    alert("change");
});


myForm.addEventListener("submit",function(e){
    e.preventDefault();
    calResult = parsInt(num1Input.value) * parsInt(num1Input.value) ; 
    console.log(calResult);
});
// blur---離開時

num1Input.addEventListener("submit",function(e){
    num1Input = parsInt(num1Input.value); 
    num2Input = parsInt(num2Input.value); 
    calResult = num1InputValue * num2InputValue;
    console.log(calResult);
    result.innerText = "Result:"
});