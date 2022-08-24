const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const answer = 0;
const sum = numbers.reduce((x, y) => x + y, answer);
console.log('sum', sum);

const product = numbers.reduce((x, y) => x * y);
console.log('product', product);

const initialValue = 0;
const balance = account.reduce((total, transaction, initialValue) => {
  // console.log('111', total);
  // console.log('222', transaction);
  if (transaction.type === 'deposit') {
    return total + transaction.amount;
  } else {
    return total - transaction.amount;
  }
}, initialValue);
console.log('balance', balance);

const composite = traits.reduce((target, source) => Object.assign(target, source));
console.log('composite', composite);
