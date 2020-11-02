import cipher from './cipher.js';

console.log(cipher);
const msgToCod = document.getElementById("msgToCod").value;
const offsetKey =document.getElementById("offsetkey").value;
const btn = document.getElementById("button1");
console.log(msgToCod);
console.log(offsetKey);
//document.getElementById("encode").addEventListener("click", function(){encode(offsetKey, msgToCod)});

//btn.onclick = ev => {} ---> teste do botão
btn.addEventListener("click", encode);
function encode (){
 let msg = cipher.encode(Number(offsetKey.value),)
 document.getElementsByClassName("finalMsg1")[0].innerHTML = msg;
}
    
    

//const msgToCod = document.getElementById(msgToCod).value;
//const offsetkey = Number(document.getElementById('offsetkey').value)



