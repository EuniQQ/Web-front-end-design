function hellowFun() {
    // console.log('helloFun test');
    // windows.document.body.innerHTML="hello world";
let spanObj = windows.document.getElementById("spanID");
spanObj.innerHTML = "Hello";
spanObj.style.color = "lightpink";

let spanEndObj = windows.document.getElementById("spanEndID");
spanObj.style.color = "red";
}

function toggleMenu() {
    console.log('toggleMenu');

    let menuObj = document.getElementById("menu");
    if(menuObj).style.display=="none"
}