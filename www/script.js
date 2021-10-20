placarJogador = 0
placarComputador = 0
var jogadasPC

function play(jogada){
    $.ajax({
        type: 'post',
        url: '/jokenpo',
        data: JSON.stringify({jogadasJogador: jogada}),
        contentType: "application/json; charset=utf-8",
        
        success: function (jogo) {
            //Define a imagem de acordo com a jogada do computador
            if(jogo.jogadasComputador === 1){
                document.querySelector('#imgPc').setAttribute('src', 'assets/pedra.png')
            }
            else if (jogo.jogadasComputador===2){
                document.querySelector('#imgPc').setAttribute('src', 'assets/papel.png')
            }
            else if(jogo.jogadasComputador===3){
                document.querySelector('#imgPc').setAttribute('src', 'assets/tesoura.png')
            }
            //verifica quem venceu e calcula o placar
            if(jogo.vencedor === 1){
                document.querySelector('#winner').innerHTML="PARABÉNS! Você ganhou a partida. &#127881"
                placarJogador++
                document.getElementById("placar-jogador").value = placarJogador
            }
            else if(jogo.vencedor === 2){
                document.querySelector('#winner').innerHTML="QUE PENA &#128532, o computador ganhou a partida!"
                placarComputador++
                document.getElementById("placar-computador").value = placarComputador
            }
            else if(jogo.vencedor === 0){
                document.querySelector('#winner').innerHTML="Empatou! &#128541"
            }
            
            if(placarJogador === 3){
                document.querySelector('#winner').innerHTML="Você ganhou!!"
            }
            else if(placarComputador === 3){
                document.querySelector('#winner').innerHTML="O computador ganhou!!"
            }
        },

      
    });
}