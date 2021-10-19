function montarGame(quantidadeLinhas, quantidadeColunas){
    
    // Correr linhas e colunas para criar a tabela
    let stringTabela = '<table id="table-game">'

    for(c=1;c<=(parseInt(quantidadeColunas)+1);c++){
        console.log('criando coluna', c)
        stringTabela += '<tr>'
            for(l=1;l<=(parseInt(quantidadeLinhas)+1);l++){
                console.log('criando linha', l)
                stringTabela += '<td>alo</td>'
            }
        stringTabela += '</tr>'
    }

    stringTabela  += '</table>'
    
    $('#game').html(stringTabela)
}