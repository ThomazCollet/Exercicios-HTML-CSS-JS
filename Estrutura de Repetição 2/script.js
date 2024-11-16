function gerar(){
    var numero = Number(document.getElementById('numero').value)
    var resultado = window.document.getElementById('resultado')
    resultado.innerHTML = ''
    for(var n = 1; n <= 10; n++){
        var res = numero * n
        resultado.innerHTML += `${numero} X ${n} = ${res} <br>`     
    }
}