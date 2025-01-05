let amigos = [];
let btnSortear = document.getElementById('btn-sortear');
let btnAdicionar = document.getElementById('btn-adicionar');
let btnReiniciar = document.getElementById('btn-reiniciar');

btnAdicionar.classList.remove('disabled');
btnReiniciar.classList.remove('form__link-bold');



function adicionar () {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo.value === '') {
        alert('Insira o nome do amigo!')
        return;
    }
    
    if (btnAdicionar.classList.contains('disabled')) {
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
    let sorteio = document.getElementById('lista-sorteio');

    if(btnSortear.classList.contains('disabled')) {
        return;
    } else if(sorteio.innerHTML === '') {
        btnSortear.classList.add('disabled')
    }

    btnAdicionar.classList.add('disabled');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' ---> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' ---> ' + amigos[i + 1] + '<br>'
        }
    }

    btnReiniciar.classList.add('form__link-bold');
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
    document.getElementById('lista-sorteio').innerHTML = '';
    btnSortear.classList.add('disabled');
    btnAdicionar.classList.remove('disabled');
    btnReiniciar.classList.remove('form__link-bold');
    amigos = [];

}