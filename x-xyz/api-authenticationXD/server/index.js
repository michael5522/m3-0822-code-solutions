require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }

  /* your code starts here */

  /**
   * Query the database to find the "userId" and "hashedPassword" for the "username".
   * Then, 😉
   *    If no user is found,
   *      throw a 401: 'invalid login' error.
   *    If a user is found,
   *      confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
   *      Then, 😉
   *        If the password does not match,
   *          throw a 401: 'invalid login' error.
   *        If the password does match,
   *          Create a payload object containing the user's "userId" and "username".
   *          Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
   *          Send the client a 200 response containing the payload and the token.
   *      Catch any error.
   * Catch any error.
   */

  const sql = `
  select "userId", "hashedPassword"
  from "users"
  where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      // console.log('111', user);
      if (!user) {
        throw new ClientError(401, 'this user no exist');
      }
      const { userId, hashedPassword } = user;
      // console.log(userId, hashedPassword, password);
      argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          // console.log('does ur pw match', isMatching);
          if (!isMatching) {
            throw new ClientError(401, 'pw no match');
          }
          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.status(200).json({
            user: payload,
            token
          });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
  // const sql = `
  //   select "userId",
  //          "hashedPassword"
  //   from "users"
  //   where "username" = $1
  // `;

  // const params = [username];
  // db.query(sql, params)
  //   .then(result => {
  //     const [user] = result.rows;
  //     console.log('user bro', user);
  //     if (!user) {
  //       throw new ClientError(401, 'no user with this name');
  //     }
  //     argon2
  //       .verify(user.hashedPassword, password)
  //       .then(isMatching => {
  //         console.log('does your password match?', isMatching);
  //         if (!isMatching) {
  //           throw new ClientError(401, 'invalid login wrong pw');
  //         }
  //         const payload = {
  //           userId: user.userId,
  //           username
  //         };
  //         console.log('fuck me', payload);
  //         const token = jwt.sign(payload, process.env.TOKEN_SECRET);
  //         console.log('fukin token', token);
  //         res.status(200).json({
  //           token,
  //           user: payload
  //         });

  //       })
  //       .catch(err => next(err));
  //   })
  //   .catch(err => next(err));

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
