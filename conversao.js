var conversao = document.getElementById("conversao");
var efeitosButton = document.getElementById("valorFinal");

conversao.addEventListener("click", function () {
  var euroValorInput = document.getElementById("euroValor");
  var euroValor = parseFloat(euroValorInput.value);
  
  var cotacao = 5.35;
  var valorEmReal = euroValor * cotacao;
  
  var OláesseéovalorconvertidoElement = document.getElementById("valorFinal");
 OláesseéovalorconvertidoElement.innerHTML = "Olá esse é o valor convertido<br></br>R$" + valorEmReal.toFixed(2);
   efeitosButton.classList.add("efeitos_botao");
});
