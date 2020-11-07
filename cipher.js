const cipher = { 
 
    encode: function(userMessage, offset){
        
        const codeASC = 65;
        const alphabetSize = 26;
        let finalMsgEncoded = "";

        if(offset == "" || offset == null){
          throw new TypeError ("o usuário deve preencher o campo corretamente")  
        } else{
          for (let i=0; i<userMessage.length; i++){
              if(userMessage.charCodeAt(i) == ""){
                  finalMsgEncoded +=""
              } else {
                 let encodedMsg = ((userMessage.charCodeAt(i) - codeASC) + offset) %alphabetSize + codeASC;
                 let final = String.fromCharCode(encodedMsg);
                 finalMsgEncoded += final
                }
          } return finalMsgEncoded;
         }
    },
    
    decode: function (userMessage, offset){
        const codeASC2 = 90;
        const alphabetSize = 26;
        let finalMsgDecoded = "";

        if(offset == "" || offset == null){
            throw new TypeError ("o usuário deve preencher o campo corretamente")  
       } else {
        for(let i=0; i<userMessage.length; i++){
          if(userMessage.charCodeAt(i) == ""){
                finalMsgDecoded +=""
            } else {
               let decodedMsg = ((userMessage.charCodeAt(i) - codeASC2) - offset)%alphabetSize + codeASC2;
               let final2 = String.fromCharCode(decodedMsg);
               finalMsgDecoded +=final2
            }
        } return finalMsgDecoded;
    }
    }
    };
    
export default cipher;