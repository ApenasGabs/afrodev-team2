const supertest = require('supertest');
const app = require('../index');
const model = require('../application/model/inputs');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - Inputs', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    // Sends GET Request to /test endpoint

    const res = await request.get('/input');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([]);
  });

  it('Should be able to create a new product', async () => {
    const res = await request.post('/input').send({
      name: 'Nescau',
      type: 'Perecível',
      expiration_date: '20/05/2022',
      quantity: 5,
      unit: 'KG',
    });
    expect(res.status).toBe(200);
  });

  afterAll(async (done) => {
    await model.destroy({
      truncate: true,
      force: true,
    });
    await sequelize.close();
    done();
  });
});
