let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let result = document.querySelector("#resultado");

let somar = document.querySelector("#somar");
let subtrair = document.querySelector("#subtrair");
let multiplicar = document.querySelector("#multiplicar");
let dividir = document.querySelector("#dividir");

somar.addEventListener('click', function(){
    calcular("somar")
})

subtrair.addEventListener('click', function(){
    calcular("subtrair")
})

multiplicar.addEventListener('click', function(){ 
    calcular("multiplicar")
})

dividir.addEventListener('click', function(){
    calcular("dividir")
})

function calcular(operacao){
    let valor1 = Number(n1.value)
    let valor2 = Number(n2.value)
    let res
    if(operacao === "somar"){
        res = valor1 + valor2
    }else if (operacao === "subtrair"){
        res = valor1 - valor2
    }else if(operacao === "dividir"){
       res = valor1 / valor2
    }else if(operacao === "multiplicar"){
        res = valor1 * valor2
    }
    result.textContent = (`O resultado é:${res}`)
}