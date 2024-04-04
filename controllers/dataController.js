const { Pool } = require('pg');

// Configuración de conexión a la base de datos
const pool = new Pool({
  user: 'admin_postgres',
  host: 'database-1.c78gkks6a7a7.us-east-1.rds.amazonaws.com',
  database: 'database-1',
  password: 'admin_database',
  port: 5432,
});



exports.getAllDataClient = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM cliente');
    const data = result.rows;
    client.release();
    res.status(200).json(data);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};
