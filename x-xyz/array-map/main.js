const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log('ola');

const pp = numbers.map(x => x * 2);
console.log(pp);

const prices = numbers.map(x => `$${x.toFixed(2)}`);
console.log(prices);

const upperCased = languages.map(x => x.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(x => x[0]);
console.log(firstLetters);
