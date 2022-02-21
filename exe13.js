function calcular(){
    let numero = Number (document.getElementById("numero").value) 
    //calculo
    
    let tabuada = numero + " * 0 = " + numero * 0
    for(let contador = 1; contador <=10 ; contador++){
        tabuada = tabuada + "<br/>" + numero + " x " + contador + " = " + (numero * contador) 
    }
    //saida
    document.getElementById("total").innerHTML = tabuada 
    


}