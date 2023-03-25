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

const sum = numbers.reduce((acc, cv) => {
  const answer = acc + cv;
  return answer;
});
console.log(sum);

const product = numbers.reduce((acc, cv) => {
  const answer = acc * cv;
  return answer;
});
console.log(product);

const initialValue = 0;
const balance = account.reduce((x, y, initialValue) => {
  // console.log(y);
  if (y.type === 'deposit') {
    // console.log('111', y.amount);
    return x + y.amount;
  } else {
    // console.log('222', y.amount);
    return x - y.amount;
    // console.log('222', transaction.amount);
  }

}, initialValue);

// console.log(balance);

const pp = traits.reduce((acc, cV) => {
  const gg = Object.assign(acc, cV);
  return gg;
});
console.log(pp);
