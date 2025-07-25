import request from 'supertest';
import app from '../server.js'; // Stelle sicher, dass app.js den Express app exportiert
import sequelize from '../database/util/database.js';

describe('GET /api/getImmos', () => {
  afterAll(async () => {
    await sequelize.close();
  })

  it('should return a 200 and a JSON array', async () => {
    const res = await request(app).get('/api/getImmos');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); // je nachdem, was du zurückgibst
  });
});