const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');
const model = require('../application/model/expenses');

describe('Getting data from API - EXPENSE', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('POST Expenses', async () => {
    const res = await request.post('/expenses')
      .type('json')
      .send({
        name: "new expense",
        amount: 23,
        recurrent: true,
        destination: "the destination",
        status: "Pago",
        due_date: "2021/05/08",
        pay_date: "2021/08/17",
        value: 200
      });
    expect(res.status).toBe(200);
    expect(res.body).not.toStrictEqual([]);
  });

  it('Calling GET - all expenses', async () => {
    const res = await request.get('/expenses');
    expect(res.status).toBe(200);
    // expect(res.body).toBe([]);
  });

  it('Calling GET - one expense', async () => {
    const test = await request.post('/expenses')
      .type('json')
      .send({
        name: "new expense",
        amount: 23,
        recurrent: true,
        destination: "the destination",
        status: "Pago",
        due_date: "2021/05/08",
        pay_date: "2021/08/17",
        value: 200
      });
    const id = test.text.indexOf('id');
    const res = await request.get(`/expenses/${id}`);
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('PUT expenses', async () => {
    const test = await request.post('/expenses')
      .type('json')
      .send({
        name: "new expense",
        amount: 23,
        recurrent: true,
        destination: "the destination",
        status: "Pago",
        due_date: "2021/05/08",
        pay_date: "2021/08/17",
        value: 200
      });
    const id = test.text.indexOf('id');
    const res = await request.put(`/expenses/${id}`)
      .type('application/json')
      .send({
        name: "new expense",
        amount: 23,
        recurrent: true,
        destination: "the destination",
        status: "Pago",
        due_date: "2021/05/08",
        pay_date: "2021/08/17",
        value: 200
      });
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('PATCH expenses', async () => {
    const test = await request.post('/expenses')
      .type('json')
      .send({
        name: "new expense",
        amount: 23,
        recurrent: true,
        destination: "the destination",
        status: "Pago",
        due_date: "2021/05/08",
        pay_date: "2021/08/17",
        value: 200
      });
    const id = test.text.indexOf('id');
    const res = await request.patch(`/expenses/${id}`)
      .type('json')
      .send({
        amount: 13,
      });
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('DELETE expenses', async () => {
    const test = await request.post('/expenses')
      .type('json')
      .send({
        name: "new expense",
        amount: 23,
        recurrent: true,
        destination: "the destination",
        status: "Pago",
        due_date: "2021/05/08",
        pay_date: "2021/08/17",
        value: 200
      });
    const id = test.text.indexOf('id');
    const res = await request.delete(`/expenses/${id}`);
    expect(res.status).toBe(200);
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
