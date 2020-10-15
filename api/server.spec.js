const supertest = require('supertest');
const { intersect } = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server.js', () => {
  describe('GET /', () => {
    it('should return 200', () => {
      supertest(server).get('/')
        .then(res => {
          expect(res,status).toBe(500);
        })
    });
  });
});