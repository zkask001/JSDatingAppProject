const request = require('supertest');
const app = require('../server');

test('GET / should return "Hello from the server!"', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello from the server!');
});