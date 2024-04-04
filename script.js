let result = document.getElementById("result");
let expresion = '';

function number(numero){
    expresion += numero;
    result.value = expresion;
}

function operator(op){
    expresion += op;
    result.value = expresion;
}

function clearDisplay(){
    expresion = "";
    result.value = "0";
}

function calculate(){
    try{
   let resultado = eval(expresion);
   result.value = resultado;
   expresion = '';
   } catch(error){
    result.value = "Error";
    expresion = '';
   }
}