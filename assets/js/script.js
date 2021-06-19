
/*
Como acessar o DOM
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
if (nome.value.length < 3) {
txt.innerHTML = 'Nome inválido'
txt.style.color = 'red'
} else {
    txt.innerHTML = "Nome válido"
    txt.style.color = 'green'
}

}