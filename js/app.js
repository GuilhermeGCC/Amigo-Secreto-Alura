let amigos = [];
let btnSortear = document.getElementById('btn-sortear');
let btnAdicionar = document.getElementById('btn-adicionar');
let btnReiniciar = document.getElementById('btn-reiniciar');

btnAdicionar.classList.remove('disabled');
btnReiniciar.classList.remove('form__link-bold');



function adicionar () {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (btnAdicionar.classList.contains('disabled')) {
        return;
    }
    if (amigo.value === '') {
        alert('Insira o nome do amigo!')
        return;
    }
    if (amigos.map(nome => nome.toLowerCase()).includes(amigo.value.toLowerCase())) {
        alert('Esse nome já foi adicionado!')
        return;
    }
    
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';

    if (amigos.length > 1) {
        btnSortear.classList.remove('disabled');
    }
}

function sortear () {
    embaralha(amigos);
    let numeroLinha = 1;
    let linha = document.getElementById(`linha-${numeroLinha}`);

    if(btnSortear.classList.contains('disabled')) {
        return;
    } else if(linha.innerHTML === '') {
        btnSortear.classList.add('disabled')
    }

    btnAdicionar.classList.add('disabled');

    let contagemAmigos = 0;
    for (let i = 0; i < amigos.length; i++) {
        if (contagemAmigos < 7) {    
            if (i == amigos.length - 1) {
                linha.innerHTML = linha.innerHTML + amigos[i] + ' ---> ' + amigos[0] + '<br>'
            } else {
                linha.innerHTML = linha.innerHTML + amigos[i] + ' ---> ' + amigos[i + 1] + '<br>'
            }
            contagemAmigos++;
        } else if (contagemAmigos == 7) {
                numeroLinha++;
                novaLinha(numeroLinha);
                linha = document.getElementById(`linha-${numeroLinha}`);
                contagemAmigos = 0; 
        }
    }
    btnReiniciar.classList.add('form__link-bold');
}


function novaLinha (numeroLinha) {
        document.getElementById('lista-sorteio').innerHTML = document.getElementById('lista-sorteio').innerHTML + `<p id="linha-${numeroLinha}"></p>`
    }
    


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = `<p id="linha-1"></p>`;
    btnSortear.classList.add('disabled');
    btnAdicionar.classList.remove('disabled');
    btnReiniciar.classList.remove('form__link-bold');
    amigos = [];
}
