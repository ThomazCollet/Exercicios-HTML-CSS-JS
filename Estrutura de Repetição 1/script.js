var res = window.document.getElementById('res'); // Obtém o elemento com id "res"

function contar() {
    var inicio = Number(document.getElementById('inicio').value); // Obtém o valor de início
    var fim = Number(document.getElementById('fim').value); // Obtém o valor de fim
    var passo = Number(document.getElementById('passo').value); // Obtém o valor do passo
    
    // Verifica se o passo é igual a 0
    if (passo == 0) {
        alert('ERRO: Seu passo não pode ser igual a "0"'); // Alerta se o passo for 0
        return; // Interrompe a função
    } else if (passo < 0) {
        alert('ERRO: Seu passo não pode ser um número negativo'); // Alerta se o passo for negativo
        return; // Interrompe a função
    }

    res.innerHTML = ''; // Limpa o conteúdo anterior na div de resultados
    
    // Se o início for menor ou igual ao fim
    if (inicio <= fim) {
        for (let c = inicio; c <= fim; c += passo) { // Loop para contagem crescente
            res.innerHTML += `${c} 👉 `; // Adiciona o número e um emoji de mão apontando
        }
        res.innerHTML += '🏁'; // Adiciona emoji de bandeira no final
    } else {
        // Se o início for maior que o fim
        for (let c = inicio; c >= fim; c -= passo) { // Loop para contagem decrescente
            res.innerHTML += `${c} 👉 `; // Adiciona o número e um emoji de mão apontando
        }
        res.innerHTML += '🏁'; // Adiciona emoji de bandeira no final
    }
}
