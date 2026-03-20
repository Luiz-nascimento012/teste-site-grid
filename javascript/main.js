/*var botão = document.querySelector('button.dark-mode')

var conteudo = document.querySelector('section.conteudo')

var text = document.querySelector('p')

botão.addEventListener('click', darkmode)

function darkmode() {
    if (conteudo.style.background == 'white' && text.style.color == 'black') {
        conteudo.style.background = 'black' && text.style.color == 'white';
    } else {conteudo.style.background = 'white' && text.style.color == 'black';}
}*/

/*var botao = document.querySelector('button.dark-mode');
var conteudo = document.querySelector('section.conteudo');
var texto = document.querySelector('p');

botao.addEventListener('click', darkmode);

function darkmode() {
    if (conteudo.style.background === 'white' && texto.style.color === 'black') {
        conteudo.style.background = 'black';
        texto.style.color = 'white';
    } else {
        conteudo.style.background = 'white';
        texto.style.color = 'black';
    }
}*/

const botao = document.querySelector('button.dark-mode');
const conteudo = document.querySelector('section.conteudo');
const pe = document.querySelector('footer')

botao.addEventListener('click', () => {
    conteudo.classList.toggle('dark');
    conteudo.classList.toggle('light');
    pe.classList.toggle('dark');
    pe.classList.toggle('light');
});

