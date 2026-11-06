const emitter = require('./emitter');

emitter.on('multiply', (a, b) => {
  console.log(a * b);
});
