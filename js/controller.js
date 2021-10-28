$(function(){
    
})

function safeConf(){
    let cols = $('#qtd-colunas').val()
    let rows  = $('#qtd-linhas').val()

    createGame(rows, cols)
}