function montarGame(quantidadeLinhas, quantidadeColunas){
    
    // Correr linhas e colunas para criar a tabela
    let stringTabela = '<table id="table-game">'
    for(l=1;l<=(parseInt(quantidadeLinhas)+1);l++){
        console.log('criando coluna', l)
        stringTabela += '<tr>'
            for(c=1;c<=(parseInt(quantidadeColunas)+1);c++){
                console.log('criando linha', l)
                if(c==1 && l==1){
                    stringTabela += '<td>M</td>'
                } else if(c==1){
                    stringTabela += '<td class="col1"></td>'
                } else if(l==1){
                    stringTabela += '<td class="lin1"></td>'
                } else {
                    stringTabela += '<td class="quadrado-normal"></td>'
                }
            }
        stringTabela += '</tr>'
    }
    stringTabela  += '</table>'
    $('#game').html(stringTabela)

    // Deixar o tamanho das colunas de acordo com os 420px restantes
    let larguraQuadrado = 420 / parseInt(quantidadeColunas)
    $('.quadrado-normal').css('width', larguraQuadrado)

    let alturaQuadrado = (420 / parseInt(quantidadeLinhas)) - 1
    $('.quadrado-normal').css('height', alturaQuadrado)
}