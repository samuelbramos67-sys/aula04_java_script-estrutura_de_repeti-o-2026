'use strict'

const botaoCriar = document.getElementById('criar')

function criarCaixa (numero) {
    const caixaContainer = document.createElement('div')
    caixaContainer.className = 'caixa-container'

    const caixaNumero = document.createElement('div')
    caixaNumero.className = 'caixa-numero'
    caixaNumero.textContent = numero

    const caixaNome = document.createElement('div')
    caixaNome.className = 'caixa-nome'
    caixaNome.textContent = 'Aluno - ' + numero

    caixaContainer.append(caixaNumero,caixaNome)
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