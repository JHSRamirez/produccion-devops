const express = require('express');
const { specs, swaggerUi } = require('./swaggerConfig');
const dataRoutes = require('./routes/dataRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', dataRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});