const emitter = require('./emitter');

emitter.on('subtract', (a, b) => {
  console.log(a - b);
});
