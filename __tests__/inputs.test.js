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
    const res = await request.post('/input')
      .type('json')
      .send({
        name: 'Nescau',
        type: 'Perecível',
        expiration_date: '20/05/2022',
        quantity: 5,
        unit: 'KG',
      });
    expect(res.status).toBe(200);
    expect(res.body).not.toStrictEqual([]);
  });

  it('Should be able to get one product', async () => {
    const product = await request.post('/input').type('json').send({
      name: 'Nescau',
      type: 'Perecível',
      expiration_date: '20/05/2022',
      quantity: 5,
      unit: 'KG',
    });
    const { id } = product.body;
    const res = await request.get(`/input/${id}`);
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('Should be able to update all product information', async () => {
    const test = await request.post('/input')
      .type('json')
      .send({
        name: 'Nescau',
        type: 'Perecível',
        expiration_date: '20/05/2022',
        quantity: 5,
        unit: 'KG',
      });
    const { id } = test.body;
    const res = await request.put(`/input/${id}`)
      .send({
        name: 'Abobora',
        type: 'Perecível',
        expiration_date: '30/04/2022',
        quantity: 3,
        unit: 'KG',
      });
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('Should be able to update one information', async () => {
    const product = await request.post('/input').type('json').send({
      name: 'Nescau',
      type: 'Perecível',
      expiration_date: '20/05/2022',
      quantity: 5,
      unit: 'KG',
    });
    const { id } = product.body;
    const res = await request.patch(`/input/${id}`)
      .type('application/json')
      .send({
        quantity: 10,
      });
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('Should be able to delete a product', async () => {
    const res = await request.post('/input').send({
      name: 'Nescau',
      type: 'Perecível',
      expiration_date: '20/05/2022',
      quantity: 5,
      unit: 'KG',
    });
    const { id } = res.body;
    const del = await request.delete(`/input/${id}`);
    expect(del.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
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
