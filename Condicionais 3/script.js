// Cria um novo objeto Date para obter a data e hora atual
var agora = new Date();

// Obtém a hora atual (0-23)
var hora = Number(agora.getHours());

// Obtém os minutos atuais (0-59)
var minutos = Number(agora.getMinutes());

// Seleciona o elemento de mensagem pelo ID 'msg'
var msg = window.document.getElementById('msg');

// Seleciona o elemento de imagem pelo ID 'imagem'
var imagem = document.getElementById('imagem');

// Seleciona o elemento body
var fundo = document.body;

// Adiciona um zero à esquerda aos minutos se forem menores que 10
if (minutos < 10) {
    minutos = '0' + minutos; // Formata minutos
}

// Adiciona um zero à esquerda à hora se for menor que 10
if (hora < 10) {
    hora = '0' + hora; // Formata hora
}

// Verifica se a hora está entre 6 e 12 para exibir mensagem e imagem de "Bom dia"
if (hora >= 6 && hora < 12) {
    msg.innerHTML = `Agora são ${hora}:${minutos}. <br> Tenha um ótimo dia!`;
    imagem.src = 'midia/manha.jpg'; // Imagem da manhã
    fundo.style.background = 'rgb(78, 142, 216)'; // Cor de fundo da manhã

// Verifica se a hora está entre 12 e 17 para exibir mensagem e imagem de "Boa tarde"
} else if (hora >= 12 && hora < 17) {
    msg.innerHTML = `Agora são ${hora}:${minutos}. <br> Tenha uma ótima tarde!`;
    imagem.src = 'midia/tarde.jpg'; // Imagem da tarde
    fundo.style.background = '#FFA07A'; // Cor de fundo da tarde

// Verifica se a hora está entre 17 e 19 para exibir mensagem e imagem de "Fim de tarde"
} else if (hora >= 17 && hora < 19) {
    msg.innerHTML = `Agora são ${hora}:${minutos}. <br> Tenha um ótimo fim de tarde!`;
    imagem.src = 'midia/tarde.jpg'; // Imagem do fim de tarde
    fundo.style.background = '#FFA07A'; // Cor de fundo do fim de tarde

// Verifica se a hora está entre 19 e 23 para exibir mensagem e imagem de "Boa noite"
} else if (hora >= 19 && hora <= 23) {
    msg.innerHTML = `Agora são ${hora}:${minutos}. <br> Tenha uma ótima noite!`;
    imagem.src = 'midia/noite.jpg'; // Imagem da noite
    fundo.style.background = '#1F2739'; // Cor de fundo da noite

// Para horas menores que 6 para exibir mensagem e imagem de "Madrugada"
} else {
    msg.innerHTML = `Agora são ${hora}:${minutos}. <br> Tenha uma ótima madrugada!`;
    imagem.src = 'midia/noite.jpg'; // Imagem da madrugada
    fundo.style.background = '#1F2739'; // Cor de fundo da madrugada
}
