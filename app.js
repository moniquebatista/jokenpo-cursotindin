const express = require('express')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('www'))

const port = 3000 //porta

const jogo = []

app.get('/jokenpo', (req, res) => {
  res.json(jogo)
})

app.post('/jokenpo', (req, res) => {
    pontosComputador = req.body.pontosComputador
    pontosJogador = req.body.pontosJogador
    jogadasJogador = req.body.jogadasJogador
    const jogadasComputador = Math.round(Math.random() * 2) + 1
    
    if ((jogadasJogador == 1) && (jogadasComputador == 1) ||
      (jogadasJogador == 2) && (jogadasComputador == 2)||
      (jogadasJogador == 3) && (jogadasComputador == 3)){
        vencedor = 0;
    }

    else if ((jogadasJogador == 1) && (jogadasComputador == 2)||
      (jogadasJogador == 2) && (jogadasComputador == 3)||
      (jogadasJogador == 3) && (jogadasComputador == 1) ) {
        vencedor = 2
    }

    else{
      vencedor = 1
    }
  
    res.json(
      {vencedor,
      jogadasComputador
    })
    
    jogo.push({
      vencedor,
      jogadasComputador
        
    })
 
})  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
