'use strict';
console.log('hello from caps');

const event = require('./events');

event.on('pick', (package1) => {
  console.log(`hello vendor, this package ${package1} is picked up`);
  event.emit('deliver', package1);
});

event.on('deliver', (package1) => {
  console.log(`hello driver, this ${package1} will be delivered`);
  event.emit('transit', package1);
});

event.on('transit', (package1) => {
  console.log(`hello system, i'm the driver and this ${package1} in the way`);
  event.emit('delivered', package1);
});

event.on('delivered', (package1) => {
  console.log(
    `hello system, i'm the driver and this ${package1} is delivered successfully.`
  );
  console.log(
    `hello vendor, i'm the driver and this ${package1} is delivered successfully.`
  );
});
event.emit('pick', 'test Package');
