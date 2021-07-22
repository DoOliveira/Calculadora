function insert(numero) {
  var numeros = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numeros + numero

}
function clean() {
  document.getElementById('resultado').innerHTML = ''
}
function back() {
  var resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  } else {
    alert('Nada para calcular')
  }
}
function teclado() {
  var x = event.keyCode
  
  if (x = 48) {
    event.preventDefault()
  }

}
function teclado() {
  var tecla = event.keyCode

  if (tecla > 42) {
    event.preventDefault
  }

  document.getElementById('resultado') /*vou precisar colocar um input porque o paragrafo não reconhece as teclas, só o input, mudar no css e html*/
} 
