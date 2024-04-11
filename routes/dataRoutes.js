const express = require('express');
const router = express.Router();
const dataControllers = require('../controllers/dataController');


/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Obtiene todos los elementos de la entidad clientes
 *     responses:
 *       200:
 *         description: Lista de elementos obtenida correctamente
 *       500:
 *         description: Error interno del servidor
 */

router.get('/clients', dataControllers.getAllDataClient);





/**
 * @swagger
 * /createClient:
 *   post:
 *     summary: Crea un nuevo elemento de la entidad cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               correo:
 *                 type: string 
 *               telefono:
 *                  type: string 
 *     responses:
 *       200:
 *         description: Elemento creado correctamente
 *       400:
 *         description: Datos no válidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/createClient', dataControllers.createDataCli );




/**
 * @swagger
 * /updateClient/{id}:
 *   put:
 *     summary: Actualiza un elemento de la entidad cliente por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del elemento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               correo:
 *                 type: string 
 *               telefono:
 *                  type: string 
 *     responses:
 *       200:
 *         description: Elemento actualizado correctamente
 *       400:
 *         description: Datos no válidos
 *       404:
 *         description: Elemento no encontrado
 *       500:
 *         description: Error interno del servidor
 */


router.put('/updateClient/:id', dataControllers.updateDataCli);

/**



/**
 * @swagger
 * /deleteClient/{id}:
 *   delete:
 *     summary: Elimina un elemento de la entidad cliente por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del elemento
 *     responses:
 *       200:
 *         description: Elemento eliminado correctamente
 *       404:
 *         description: Elemento no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.delete('/deleteClient/:id', dataControllers.deleteDataCli);



//---------------------------------

/**
 * @swagger
 * /health:
 *   get:
 *     summary:  Verifica la conexión a la base de datos RDS.
 *     responses:
 *       200:
 *         description: Backend and Database are healthy!
 *       500:
 *         description: Health check failed
 */


router.get('/health', dataControllers.checkHealth);


module.exports = router;