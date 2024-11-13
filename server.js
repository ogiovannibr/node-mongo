const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/AC2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado ao MongoDB");
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((err) => console.log(err));