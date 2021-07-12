'use strict';
console.log('hello from caps');

const event = require('./events');
const faker = require('faker');
require('dotenv').config();
require('./driver');
require('./vendor');

//commented setinterval to prevent the infinte loop when testing.

// let counter = 0;
// setInterval(function () {
//   let payload = {
//     store: process.env.STORE_NAME,
//     orderID: faker.datatype.uuid(),
//     customer: faker.name.findName(),
//     address: faker.address.streetAddress(),
//   };
//   event.emit('pick', payload);
//   console.log('counter', counter++);
// }, 5000);

function testingFunction() {
  let payload = {
    store: process.env.STORE_NAME,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  event.emit('pick', payload);
}
testingFunction();
module.exports = testingFunction;
