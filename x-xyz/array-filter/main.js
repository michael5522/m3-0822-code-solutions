const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
  'don'
];

console.log('ola');

const evenNumber = numbers.filter(x => x % 2 === 0);
console.log(evenNumber);

const overFive = numbers.filter(x => x > 5);
console.log(overFive);

const startWithE = names.filter(x => x[0] === 'E');
console.log(startWithE);

const haveD = names.filter(x => x.includes('D') || x.includes('d'));
console.log(haveD);
