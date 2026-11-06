const emitter = require('./emitter');

emitter.on('add', (a, b) => {
  console.log(a + b);
});
