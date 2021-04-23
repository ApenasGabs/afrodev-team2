const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');
const model = require('../application/model/medicines')

describe('Getting data from API - MEDICINE', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('POST Medicines', async () => {
    const res = await request.post('/medicines')
    .type('json')
    .send({
        name: "rivotril",
        manufacturer: "F.A",
        prescription: false,
        amount: 17,
        expiration_date: "2022/09/18",
        batch: "blabla"      
    });
    expect(res.status).toBe(200);
  });

  it('Calling GET - all medicines', async () => {
    const res = await request.get('/medicines');
    expect(res.status).toBe(200);
    //expect(res.body).toStrictEqual([]);
  });

  it('Calling GET - one medicine', async () => {
    const test = await request.post('/medicines')
    .type('json')
    .send({
        name: "rivotril",
        manufacturer: "F.A",
        prescription: false,
        amount: 17,
        expiration_date: "2022/09/18",
        batch: "blabla"      
    });
    const id = test.text.indexOf('id')
    const res = await request.get(`/medicines/${id}`);
    expect(res.status).toBe(200);
  });

  it('PUT medicines', async() => {
    const test = await request.post('/medicines')
    .type('json')
    .send({
        name: "rivotril",
        manufacturer: "F.A",
        prescription: false,
        amount: 17,
        expiration_date: "2022/09/18",
        batch: "blabla"      
    });
    const id = test.text.indexOf('id')
    const res = await request.put(`/medicines/${id}`)
    .type('application/json')
    .send({
      name: "rivotril",
      manufacturer: "F.A",
      prescription: true,
      amount: 22,
      batch: "blabla",
      expiration_date: "2022/02/13"
    })
    expect(res.status).toBe(200)
  });

  it('PATCH medicines', async () => {
    const test = await request.post('/medicines')
    .type('json')
    .send({
        name: "rivotril",
        manufacturer: "F.A",
        prescription: false,
        amount: 17,
        expiration_date: "2022/09/18",
        batch: "blabla"      
    });
    const id = test.text.indexOf('id')
    const res = await request.patch(`/medicines/${id}`)
    .type('json')
    .send({
      amount: 13
    })
    expect(res.status).toBe(200)
  });

  it('DELETE medicines', async () => {
    const test = await request.post('/medicines')
    .type('json')
    .send({
        name: "rivotril",
        manufacturer: "F.A",
        prescription: false,
        amount: 17,
        expiration_date: "2022/09/18",
        batch: "blabla"      
    });
    const id = test.text.indexOf('id')
    const res = await request.delete(`/medicines/${id}`)
    expect(res.status).toBe(200)
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