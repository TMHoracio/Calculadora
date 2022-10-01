const botonnumeros=document.getElementsByName("data-numero");
const botonoperacion=document.getElementsByName("data-operacion");
const botonIgual=document.getElementsByName("data-igual")[0];
const botonClear=document.getElementsByName("data-clear")[0];
var resultado = document.getElementById("resultado");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

botonnumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
       agregarNumero(boton.innerText);        
    })
});

botonoperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
       seleccionaroperacion(boton.innerText);        
    })
});

botonIgual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
});

botonClear.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

function seleccionaroperacion(op){
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "X":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
function clear(){
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;   
}

function actualizarDisplay(){
    resultado.value = opeActual;
}

clear();