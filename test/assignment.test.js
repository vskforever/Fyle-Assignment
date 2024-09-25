const request = require('supertest');
const chai = require('chai');
const app = require('../src/app');
const expect = chai.expect;

describe('Assignment Endpoints', () => {
  it('should return 200 and confirm assignment endpoint is working', async () => {
    const response = await request(app).get('/assignments');
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('Assignment endpoint working!');
  });
});
