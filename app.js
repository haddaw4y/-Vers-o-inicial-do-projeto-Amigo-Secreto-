// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obter o valor do campo de entrada
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();
    
    // Verificar se o campo está vazio
    if (nome === '') {
        alert('Preencha o espaço com um nome.');
        return;
    }
    
    // Adicionar o nome ao array
    amigos.push(nome);
    
    // Limpar o campo de entrada
    inputNome.value = '';
    
    // Atualizar a lista visual
    atualizarListaAmigos();
    
    // Limpar o resultado anterior quando um novo amigo é adicionado
    document.getElementById('resultado').innerHTML = '';
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verificar se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obter o amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibir o resultado na lista de resultados
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = '';
    const itemEl = document.createElement('li');
    itemEl.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    resultadoEl.appendChild(itemEl);
    
    // Adicionar botão para limpar a lista
    const limparBtn = document.createElement('button');
    limparBtn.textContent = 'Limpar Lista';
    limparBtn.className = 'button-clear';
    limparBtn.onclick = limparLista;
    resultadoEl.appendChild(limparBtn);
}

// Função para limpar a lista de amigos
function limparLista() {
    // Limpar o array de amigos
    amigos = [];
    
    // Limpar a lista visual
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Limpar o resultado
    document.getElementById('resultado').innerHTML = '';
    
    // Feedback ao usuário
    alert('Lista de amigos foi limpa!');
}

// Função para atualizar a lista visual de amigos
function atualizarListaAmigos() {
    const listaEl = document.getElementById('listaAmigos');
    listaEl.innerHTML = '';
    
    amigos.forEach(amigo => {
        const itemEl = document.createElement('li');
        itemEl.textContent = amigo;
        listaEl.appendChild(itemEl);
    });
}

// Adicionar event listener para o campo de entrada permitir adicionar com Enter
document.addEventListener('DOMContentLoaded', () => {
    const inputNome = document.getElementById('amigo');
    if (inputNome) {
        inputNome.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                adicionarAmigo();
            }
        });
    }
});