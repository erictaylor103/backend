const server = require('../../api/server.js');
const db = require('../../database/dbConfig');
const request = require('supertest');
let token;

beforeAll(async () => {
  const user = {
    firstname: 'eric',
    lastname: 'taylor',
    username: 'etaylor',
    email: 'eric@example.com',
    password: '1234',
    confirmPassword: '1234'
  };
  return request(server)
    .post('/api/auth/register')
    .send(user);
});

describe('Recipes', () => {
  beforeAll(async () => {
    await db('recipes').truncate();
  });

  it('should get token', () => {
    return request(server)
      .post('/api/auth/login')
      .send({
        username: 'etaylor',
        password: '1234'
      })
      .then(res => {
        token = res.body.token;
      });
  });

  describe('Get Recipes', () => {
    it('returns a 404 if there is no recipe', async () => {
      return request(server)
        .get('/api/recipes')
        .set('authorization', token)
        .expect(404)
        .then(res => {
          expect(res.status).toEqual(404);
          expect(res.body).toEqual('No recipe has been created yet');
        });
    });
  });

  describe('Add Recipes', () => {
    it('it adds a recipe to the database', () => {
      const recipe = {
        title: 'chicken nuggets',
        description: 'nuggets',
        ingredients: 'nuggets',
        directions: 'wash the nuggets'
      };
      return request(server)
        .post('/api/recipes')
        .send(recipe)
        .set('authorization', token)
        .expect(201)
        .then(res => {
          expect(res.status).toEqual(201);
          expect(res.body).toHaveProperty('message');
          expect(res.body).toHaveProperty('recipe');          
        });
    });
  });

  describe('Get recipes', () => {
    it('returns an array of recipes', () => {
      return request(server)
        .get('/api/recipes')
        .set('authorization', token)
        .expect(200)
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.data).toBeInstanceOf(Array);
        });
    });
  });


});
