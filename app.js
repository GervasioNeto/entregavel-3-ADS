const express = require("express"); 
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Servidor express rodando na porta ${port}`)
})

function soma(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function divisao(a, b) {
  return a/b;
}
function multiplicacao(a, b) {
  return a * b;
}
