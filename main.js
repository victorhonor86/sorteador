function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const frases = [
"Dance uma Música",
"Passe a Vez",
"Beba um Shot",
"Todos Bebem menos Você",
"Beber em Dobro",
"Beba sem usar as mãos",
"Beba e gire mais uma vez",
"Escolha um amigo para beber"
];


function sortear() {
const indice = Math.floor(Math.random() * frases.length);
document.getElementById("resultado").textContent = frases[indice];
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
        tocaSom.currentTime = 0;
        tocaSom.play();setTimeout(() => {
            tocaSom.pause();
            }, 3000);
        sortear();
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
