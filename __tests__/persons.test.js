const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');
const model = require('../application/model/persons');

describe('Getting data from API - Persons', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    const res = await request.get('/persons');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([]);
  });

  it('Calling POST endpoint inserting DATA', async () => {
    const res = await request.post('/persons').type('json').send({
      name: 'Thales Cândido Santana',
      document: '000.000.000-00',
      birth_date: '25/07/2020',
      status: 'active',
    });
    expect(res.status).toBe(200);
    expect(res.body).not.toBe([]);
  });

  it('Calling GET BY ID endpoint DATA', async () => {
    const people = await request.post('/persons').type('json').send({
      name: 'Thales Cândido Santana',
      document: '000.000.000-00',
      birth_date: '25/07/2020',
      status: 'active',
    });

    const { id } = people.body;
    const res = await request.get(`/persons/${id}`);
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('Calling PUT endpoint changing DATA', async () => {
    const people = await request.post('/persons').type('json').send({
      name: 'Thales Cândido Santana',
      document: '000.000.000-00',
      birth_date: '25/07/2020',
      status: 'active',
    });
    const { id } = people.body;
    const res = await request.put(`/persons/${id}`).type('json').send({
      name: 'Thales Santana',
      document: '000.000.000-00',
      birth_date: '25/07/2018',
      status: 'inactive',
    });
    expect(res.status).toBe(200);
    expect(res.status).not.toStrictEqual([]);
  });

  it('Calling PATCH endpoint changing DATA', async () => {
    const people = await request.post('/persons').type('json').send({
      name: 'Thales Cândido Santana',
      document: '000.000.000-00',
      birth_date: '25/07/2020',
      status: 'inactive',
    });
    const { id } = people.body;
    const res = await request.patch(`/persons/${id}`).type('json').send({
      status: 'active',
    });
    expect(res.statusCode).toBe(200);
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
