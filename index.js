//caracteres criptografadas
var charsNormais =["a","e","i","o","u"];
var charsCripto =["ai","enter","imes","ober","ufat"];




function cripto(){
    var input = document.querySelector(".input-texto").value;

    var output= [];

    var x = 0;
    
    while(x<input.length){ 
        var y = 0;
       
        while(y<5){
            if(input[x] == charsNormais[y]){
                output[x] = charsCripto[y];
                break;

            }else{
                output[x] = input[x];
            }
            y++           
        }
        x++;
        
    }

    
    var mandaOutput = document.querySelector(".input-resposta")
    var divVazia = document.querySelector(".vazia")
    var btCopiar = document.querySelector(".copiar")
    divVazia.hidden = true;
    btCopiar.hidden = false;
    mandaOutput.hidden = false;

    return mandaOutput.value = output.join('');
     


}



function descripto(){
    var texto = document.querySelector(".input-texto").value;
    var textoLimpo=[];
    var i = 0;
    while(i<texto.length){
        switch (texto[i]) {
            case 'e':
            textoLimpo[i] = "e";
            i=i+5;
            break;

            case 'i':
            textoLimpo[i] = "i";
            i=i+4;
            break;

            case 'a':
            textoLimpo[i] = "a";  
            i=i+2;
 
            break;
            case 'o':
            textoLimpo[i] = "o";
            i=i+4;
            break;

            case 'u':
            textoLimpo[i] = "u";
            i=i+4;
            break;

            default:
            textoLimpo[i] = texto[i];
            i++;
 
         }
 
     }
     
 
 
    var mandaOutput = document.querySelector(".input-resposta")
    var divVazia = document.querySelector(".vazia")
    var btCopiar = document.querySelector(".copiar")
    divVazia.hidden = true;
    btCopiar.hidden = false;
    mandaOutput.hidden = false;

    return mandaOutput.value = textoLimpo.join('');
     
 
 }

 function copiar(){
    var mandaOutput = document.querySelector(".input-resposta").value;
    navigator.clipboard.writeText(mandaOutput);

    alert(mandaOutput+" copiado para área de transferencia")
       


 }

