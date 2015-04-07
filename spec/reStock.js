var path = require('path');
var expect = require('chai').expect;

var reStock = require(path.join(__dirname, '..', './reStock.js'));

describe('reStock()', function () {
  'use strict';

  it('exists', function () {
    expect(reStock).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
