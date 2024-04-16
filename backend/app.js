const express = require('express');
const cors = require('cors');
const app = express();
const pokemonRoutes = require('./src/routes/pokemonRoutes');

app.use(express.static('build'));
app.use(cors());
app.use('/api/pokemon', pokemonRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
});
