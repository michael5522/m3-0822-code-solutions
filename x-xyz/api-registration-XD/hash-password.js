const argon2 = require('argon2');

const password = process.argv[2];
console.log('111', password);

argon2
  .hash(password)
  .then(hashedPassword => {
    console.log(hashedPassword);
  })
  .catch(err => {
    console.error(err);
  });
