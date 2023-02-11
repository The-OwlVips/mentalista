var numSecreto = parseInt(Math.random() * 101);
console.log(numSecreto)
var tentativas = 3; 

function chutar() {
  var resultado = document.getElementById("resultado")
  var chute = document.getElementById("chute").value
  
  if(tentativas > 0) {
    if(chute == numSecreto) {
      resultado.innerHTML = 'Acertou!!'
    document.getElementById('btnchute').disabled = true
    }
    
    else if(chute > 100 || chute < 0) {
      resultado.innerHTML = 'Por favor, escolha um numero entre 0 e 100'
    }

    else if(chute > numSecreto) {
      resultado.innerHTML = 'Errou... o numero secreto é menor'
      tentativas--
    }

    else{
      resultado.innerHTML = 'Errou... o numero secreto é maior'
      tentativas--
    }
  }

  if(tentativas == 0) {
    resultado.innerHTML = 'Suas tentativas acabaram :(' + '<br>' + 'O numero secreto era: ' + numSecreto 
    document.getElementById('btnchute').disabled = true
  }
  
}