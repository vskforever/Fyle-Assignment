const request = require('supertest');
const chai = require('chai');
const app = require('../src/app');
const expect = chai.expect;

describe('User Endpoints', () => {
  it('should return 200 and confirm user endpoint is working', async () => {
    const response = await request(app).get('/users');
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('User endpoint working!');
  });
});
