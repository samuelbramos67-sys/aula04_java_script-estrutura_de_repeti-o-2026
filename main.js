'use strict'

const botaoCriar = document.getElementById('criar')

function criarCaixa (numero) {
    const caixaContainer = document.getElement('div')
    const caixaNumero = document.createElement('div')

    caixaNumero.className = 'caixa'
    caixaNumero.textContent = numero

    caixaContainer.append(caixaNumero)
    return caixaContainer
}

function adicionarCaixa () {
    const container = document.getElementById('container')

    for ( let i=1; i<=1000; i++){
    const caixa = criarCaixa(i)
    container.append(caixa)
    }

}

botaoCriar.addEventListener('click',adicionarCaixa)