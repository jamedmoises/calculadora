let display= document.getElementById("display")
let valorInicial="";
function escribir(value){
    valorInicial += value;
    display.value = valorInicial;
}
function borrar (){
    valorInicial="";
    display.value="";
}
function calcular(){
    
        valorInicial= eval(valorInicial);
        display.value=valorInicial;
    

}
