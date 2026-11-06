const emitter = require('./emitter');

// ⚡ КРИТИЧНО: импортируем модули операций,
// чтобы они успели ПОДПИСАТЬСЯ на события ДО того, как мы emit'им.
require('./add');
require('./subtract');
require('./multiply');
require('./divide');

const VALID_OPERATIONS = ['add', 'subtract', 'multiply', 'divide'];

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Использование: node index.js <число1> <число2> <операция>');
    console.error('Доступные операции: ' + VALID_OPERATIONS.join(', '));
    process.exit(1);
  }

  const [aStr, bStr, op] = args;
  const a = Number(aStr);
  const b = Number(bStr);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error(`Ошибка: "${aStr}" или "${bStr}" не является числом`);
    process.exit(1);
  }

  if (!VALID_OPERATIONS.includes(op)) {
    console.error(`Ошибка: неизвестная операция "${op}"`);
    console.error('Доступные операции: ' + VALID_OPERATIONS.join(', '));
    process.exit(1);
  }

  // Никакой бизнес-логики — просто публикуем событие.
  // Если подписчиков нет, emit вернёт false — можно это использовать как проверку.
  const hasListeners = emitter.emit(op, a, b);
  if (!hasListeners) {
    console.error(`Ошибка: обработчик для "${op}" не найден`);
    process.exit(1);
  }
}

main();
