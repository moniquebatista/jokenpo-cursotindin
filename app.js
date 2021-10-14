const express = require('express')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const res = require('express/lib/response');

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('www'))

const port = 3000 //porta

const jogadas = ['pedra', 'papel', 'tesoura']

const jogadasPC = () => {
  const ale = parseInt(Math.random() * 3)
  return jogadas [ale]
}
const vencedor = (jogador, pc) =>{
    const contJ = 0
    const contC = 0
    if(jogador === "pedra" && pc === "tesoura"||
    jogador === "papel" && pc === "pedra"||
    jogador === "tesoura" && pc === "papel"){
      contJ++
      return "JOGADOR GANHOU!!"
    }

    else if(jogador === pc){
      return "EMPATOU!!"

    }

    else{
      contC++
      return "O COMPUTADOR GANHOU!!"
    }
   
}


 app.get('/jokenpo', (req, res) => {
    const escolhaJogador = 'pedra'
    const escolhaPC = jogadasPC()
    //res.send(`jogador: ${vencedor.contJ} e Computador ${vencedor.contC}`)
    res.send(`Jogador escolheu ${escolhaJogador} e o Computador escolheu ${escolhaPC}` + vencedor(escolhaJogador, escolhaPC))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
