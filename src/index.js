import cipher from './cipher.js';

const btn = document.getElementById("encodeButton");
btn.addEventListener("click", encode);
// encode function
function encode (){
    event.preventDefault();
    let userMessage = document.getElementById("userMessage").value.toUpperCase();
    const offset = parseInt(document.getElementById("offset").value);
    let msg = cipher.encode(userMessage, offset);
    const result = document.getElementById("result");
    result.innerHTML = msg;
   }

const btn2 = document.getElementById("decodeButton");
btn2.addEventListener("click",decode);
 //decode function
function decode (){
    event.preventDefault();
    let userMessage = document.getElementById("userMessage").value.toUpperCase();
    const offset = parseInt(document.getElementById("offset").value);
    let msg2 = cipher.decode(userMessage, offset);
    const result2 = document.getElementById("result");
    result2.innerHTML = msg2;
}



console.log(cipher);

