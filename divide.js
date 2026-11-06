const emitter = require('./emitter');

emitter.on('divide', (a, b) => {
  if (b === 0) {
    console.error('Ошибка: деление на ноль невозможно');
    process.exitCode = 1;
    return;
  }
  console.log(a / b);
});
