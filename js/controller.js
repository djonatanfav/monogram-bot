$(function(){
    
})

function salvarConfiguracoes(){
    let quantidadeColunas = $('#qtd-colunas').val()
    let quantidadeLinhas  = $('#qtd-linhas').val()

    montarGame(quantidadeLinhas, quantidadeColunas)
}