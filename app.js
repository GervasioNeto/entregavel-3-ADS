const express = require("express"); 
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000;

// Inícial
app.get("/", function (req, res) {
  res.send(`
      <html>
          <head>
              <title>Bem-vindo</title>
          </head>
          <body>
              <h1>Bem-vindo ao meu site!</h1>
              <p>Esta é a página inicial.</p>
          </body>
      </html>
  `);
});



app.listen(port, ()=> {
    console.log(`Servidor express rodando na porta http://localhost:${port}/`)
})

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    
    res.send(`O resultado da soma de ${body.a} + ${body.b} é ${resultado}`);
  });

app.post('/subtracao', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    
    res.send(`O resultado da Subtração de ${body.a} - ${body.b} é ${resultado}`);
});

app.post('/divisao', function (req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);
    
    res.send(`O resultado da Divisão de ${body.a} / ${body.b} é ${resultado}`);
});
  
app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);
    
    res.send(`O resultado da Multiplicação de ${body.a} * ${body.b} é ${resultado}`);
});

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
