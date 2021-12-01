const myForm = document.getElementById("yearBar");
<script>
function myFunction("yearBar") {
  var body = document.body; // For Safari
  var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
  body.scrollLeft += 30;
  body.scrollTop += 10;
  html.scrollLeft += 30;
  html.scrollTop += 10;
}
</script>


// myForm.addEventListener("submit",function(e){
//     alert("55688");
// });

// num1Input.addEventListener("change",function(e){
//     alert("change");
// });


// myForm.addEventListener("submit",function(e){
//     e.preventDefault();
//     calResult = parsInt(num1Input.value) * parsInt(num1Input.value) ; 
//     console.log(calResult);
// });
// // blur---離開時

// num1Input.addEventListener("submit",function(e){
//     num1Input = parsInt(num1Input.value); 
//     num2Input = parsInt(num2Input.value); 
//     calResult = num1InputValue * num2InputValue;
//     console.log(calResult);
//     result.innerText = "Result:"
// });