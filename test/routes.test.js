const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/dataRoutes');

const app = express();
app.use(express.json()); // Para soportar JSON-encoded bodies
app.use('/api', userRoutes); 


describe('API Routes', () => {
    test('GET /api/clients', async () => {
      const response = await request(app).get('/api/clients');
      expect(response.statusCode).toBe(200);
      
    });
  
  });

  describe('API Routes', () => {
    test('GET /api/books', async () => {
      const response = await request(app).get('/api/books');
      expect(response.statusCode).toBe(200);
      
    });
  
  });


//---------------------------------------------------

describe('POST /api/createClient', () => {
    test('debería crear un nuevo usuario y responder con un status 200 y el usuario creado', async () => {
      const nuevoClient=     {
        
        "nombre": "Arturo",
        "apellido": "Ramirez",
        "correo": "arturr@example.com",
        "telefono": "30091345566"
      };
  
      const response = await request(app)
        .post('/api/createClient')
        .send(nuevoClient);
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id'); 
    });
  
  });




  describe('POST /api/createBook', () => {
    test('debería crear un nuevo usuario y responder con un status 200 y el libro creado', async () => {
      const nuevoBook=     {
        
        "titulo": "Laleyenda urbana",
        "autor": "Andres Restrepo",
        "año_publicacion": 1996,
        "editorial": "nirvana"
      };
  
      const response = await request(app)
        .post('/api/createBook')
        .send(nuevoBook);
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id'); 
    });
  
  });
