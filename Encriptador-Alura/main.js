var entradaUser = document.getElementById("entrada");
entradaUser.focus()
var salidaUser = document.getElementById("salida");
var texto="";

function borrarEntrada(){
    entradaUser.value=""
}
function guardarTexto(){
  
    var cambio=["enter","imes","ober","ufat","ai"];
    var letras=["e","i","o","u","a"];
    texto = String(entradaUser.value);
    texto = texto.toLowerCase();
    var len=texto.length
    var x = 0;
  
    while(x<=len){
        texto=texto.replaceAll(letras[x],cambio[x])
        x++
      
    }
   
    salidaUser.value=texto;
    desparecerMuneco();
}

function desencriptado(){
   
    var cambio=["ai","enter","imes","ober","ufat"];
    var letras=["a","e","i","o","u"];
    texto = String(entradaUser.value);
    texto = texto.toLowerCase();
    
    var len=texto.length
    var x = 0;
  
    while(x<len){
        texto=texto.replaceAll(cambio[x],letras[x])
        x++
    }
    salidaUser.value=texto;
    desparecerMuneco();
}
function aparecerMuneco(){
    documen.getElementById("muneco").style.dysplay=("none")
}
function desparecerMuneco(){
    document.getElementById("muneco").style.visibility = "hidden";
}
function copy() {
    let copyText = document.getElementById("salida");
    copyText.select();
    document.execCommand("copy");
    alert("Se ha copiado al portapaeles con exito")
    
  }

function aparecerMenu(){
    document.getElementById("mainMenu").style.display = "initial";
    document.getElementById("iconMenu").style.display= "none";

}
function desparecerMenu(){
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("iconMenu").style.display = "initial";
    
}
function Binario(){
    
    var cambio=[".01100001",".01100010",".01100011",".01100100",".01100101",".01100110",".01100111",".01101000",".01101001",".01101010",".01101011",".01101100",".01101101",".01101110",".11110001",".01101111",".01110000",".01110001",".01110010",".01110011",".01110100",".01110101",".01110110",".01110111",".01111000",".01111001",".01111010"]
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    texto = String(entradaUser.value);
    texto = texto.toLowerCase();
    var len=texto.length
    var x = 0;
    console.log(cambio[8])
    while(x<letras.length){
        console.log(letras[x])
        texto=texto.replaceAll(letras[x],cambio[x])
        x++
       
    }
    
    salidaUser.value=texto;
    desparecerMuneco();
    
}

function desencriptadoBinario(){
   
    var cambio=[".01100001",".01100010",".01100011",".01100100",".01100101",".01100110",".01100111",".01101000",".01101001",".01101010",".01101011",".01101100",".01101101",".01101110",".11110001",".01101111",".01110000",".01110001",".01110010",".01110011",".01110100",".01110101",".01110110",".01110111",".01111000",".01111001",".01111010"]
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    texto = String(entradaUser.value);
    texto = texto.toLowerCase();
    
    var len=texto.length
    var x = 0;
  
    while(x<letras.length){
        texto=texto.replaceAll(cambio[x],letras[x])
        x++
    }
    salidaUser.value=texto;
    desparecerMuneco();
}
var encripAlura = document.getElementById("inputAlura");
var encripBinario = document.getElementById("inputBinario");
encripAlura.value=0
encripBinario.value=0
function valoresBotonAlura(){
    if(encripAlura.value=1){
        encripBinario.value=0
    }
    else{encripBinario.value=1}
    
}
function valoresBotonBinario(){
    
    if(encripBinario.value=1){
        encripAlura.value=0
    }
    else{encripAlura.value=1}
}
function selectorEncriptado(){
    console.log(encripAlura.value)
    console.log(encripBinario.value)

    if(encripAlura.value&&encripBinario.value==0){
        salidaUser.value="Primero selecciona un metodo en el MENU por favor"
        desparecerMuneco();
    }
    if(encripAlura.value==1){
        guardarTexto();   
    } 
    if(encripBinario.value==1){
        Binario();   
    }
}
function selectorDesencriptado(){
    
    if(encripAlura.value==1){
        desencriptado()  
    } 
    if(encripBinario.value==1){
        desencriptadoBinario();   
    }
}