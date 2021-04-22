const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - Persons', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    const res = await request.get('/persons');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([]);
  });

  afterAll(async (done) => {
    await sequelize.close();
    done();
  });
});
