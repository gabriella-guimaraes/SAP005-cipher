
const alphabetSize = 26;
const cod1aAlphabet = 65;

let finalMsgEncoded = "";

//fórmula: ((códigoDaLetraASC - códigoDaLetra + deslocamento)%26 ==> tamanho do alfabeto) + códigoDaLetra
//função de critografar
const cipher = { 
  encode (offsetKey,msgToCod){
    msgToCod = '';
    for (let i=0; i<msgToCod.lenght; i++){
      let encodedMsg = ((msgToCod.charcodeAt(i) - cod1aAlphabet + offsetKey) % alphabetSize) + cod1aAlphabet;
      let final = String.fromCharCode(encodedMsg);
      finalEncodedMsg += final
      return finalEncodedMsg
    }
    

  }
 };
  
 


 
export default cipher;
