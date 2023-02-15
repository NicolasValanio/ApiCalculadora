
const express= require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
res.send("Que hace");
})

app.get('/sumar/:a/:b', (req, res) => {
  const resultado = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.send({ resultado });
});
app.get('/restar/:a/:b', (req, res) => {
  const resultado = parseFloat(req.params.a) - parseFloat(req.params.b);
  res.send({ resultado });
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const resultado = parseFloat(req.params.a) * parseFloat(req.params.b);
  res.send({ resultado });
});
app.get('/dividir/:a/:b', (req, res) => {
  const resultado = parseFloat(req.params.a) / parseFloat(req.params.b);
  res.send({ resultado });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});