require('dotenv').config()
const app = require('../server.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert


chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

it('should return 5 random HEX codes', (done) => {
  chai.request(app)
  .get('/random')
  .end((err, res) => {
      if (err) { done(err) }
      expect(res).to.have.status(200);
      expect(Object.keys(res.body).length).to.equal(5);
      done()
  })
})

it('should return a color palette with specified color in center', (done) => {
  chai.request(app)
  .get('/random/7E2F1D')
  .end((err, res) => {
    if (err) { done(err) }
    expect(res).to.have.status(200);
    expect(Object.values(res.body)[2]).to.equal("#7E2F1D");
    done();
  });
});