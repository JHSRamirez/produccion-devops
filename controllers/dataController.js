const { Pool } = require('pg');

// Configuración de conexión a la base de datos
const pool = new Pool({
  user: 'admin_postgres',
  host: 'database-1.c78gkks6a7a7.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'admin_database',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
    sslmode: 'require'
  }
});



exports.getAllDataClient = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM cliente');
    const data = result.rows;
    client.release();
    res .json(data);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};



//--------------------------------------------------------------------------


exports.createDataCli = async (req, res) => {
  const { nombre, apellido, correo, telefono } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO cliente (nombre, apellido, correo, telefono) VALUES ($1, $2, $3, $4) RETURNING *', [ nombre, apellido, correo, telefono]);
    const newData = result.rows[0];
    client.release();
    res.status(200).json(newData);
  } catch (err) {
    console.error('Error al crear un nuevo registro:', err);
    res.status(500).send('Error interno del servidor');
  }
};




//--------------------------------------------------------------------------------

exports.updateDataCli = async (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, correo, telefono  } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query('UPDATE cliente SET  nombre = $1, apellido =$2, correo =$3, telefono =$4  WHERE id = $5 RETURNING *', [nombre, apellido, correo, telefono, id ]);
    const updatedData = result.rows[0];
    client.release();
    if (!updatedData) {
      return res.status(404).send('Registro no encontrado');
    }
    res.json(updatedData);
  } catch (err) {
    console.error('Error al actualizar el registro:', err);
    res.status(500).send('Error interno del servidor');
  }
};



//------------------------------------------------------------------


exports.deleteDataCli = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM cliente WHERE id = $1 RETURNING *', [id]);
    const deletedData = result.rows[0];
    client.release();
    if (!deletedData) {
      return res.status(404).send('Registro no encontrado');
    }
    res.status(200).json(deletedData);
  } catch (err) {
    console.error('Error al eliminar el registro:', err);
    res.status(500).send('Error interno del servidor');
  }
};


//--------------------------------------------------------------------



// Endpoint de Health Check
// healthController.js


// Función del controlador de health check
exports.checkHealth = async (req, res) => {
  try {
    await pool.query('SELECT 1'); // Asume que este comando verifica la salud de tu conexión a la base de datos
    res.status(200).json({ status: 'success', message: 'Backend and Database are healthy!' });
  } catch (error) {
    res.status(500).json({ status: 'failure', message: 'Health check failed', error: error.message });
  }
};
