function renderGame(){

    // Get Size
    rows = arrayGame.length
    cols = arrayGame[0].length
    
    // Correr linhas e colunas para criar a tabela
    let stringTable = '<table id="table-game">'
    for(l=0;l<(parseInt(rows)+1);l++){
        stringTable += '<tr>'
            for(c=0;c<(parseInt(cols)+1);c++){
                if(c==0 && l==0){
                    stringTable += '<td>M</td>'
                } else if(c==0){
                    stringTable += '<td class="col1"></td>'
                } else if(l==0){
                    stringTable += '<td class="lin1"></td>'
                } else {
                    let status = arrayGame[(l-1)][(c-1)]
                    switch(status){
                        case -1:
                            stringTable += '<td class="square square-n"></td>'
                            break;
                        case 1:
                            stringTable += '<td class="square square-y"></td>'
                            break;
                        default:
                            stringTable += '<td class="square square-u"></td>'
                            break;
                    }
                }
            }
        stringTable += '</tr>'
    }
    stringTable  += '</table>'
    $('#game').html(stringTable)

    // Deixar o tamanho das colunas de acordo com os 420px restantes
    let widthSquare = 420 / parseInt(cols)
    $('.square').css('width', widthSquare)

    let heightSquare = (420 / parseInt(rows)) - 1
    $('.square').css('height', heightSquare)
}


function createGame(rows, cols){
    // Reset Game
    arrayGame = []

    // Create Game Data
    for(r=0;r<rows;r++){
        let arrayRow = []
        for(c=0;c<cols;c++){
            arrayRow.push(0)
        }
        arrayGame.push(arrayRow)
    }

    // Check
    console.log(arrayGame)

    renderGame()
}