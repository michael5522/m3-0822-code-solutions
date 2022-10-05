const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */
  /**
   * Try to get the 'X-Access-Token' from the request headers.
   * If no token is provided,
   *   throw a 401 error with the message 'authentication required'
   * Use jwt.verify() to verify the authenticity of the token and extract its payload
   * Assign the extracted payload to the user property of the req object.
   * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
   */
  // console.log('ola auth middleware');
  let gg = null;
  if (!req.get('X-Access-Token')) {
    throw new ClientError(401, 'authentication is required FDAFSFDS');
  } else {
    gg = req.get('X-Access-Token');
  }
  const payload = jwt.verify(gg, process.env.TOKEN_SECRET);
  // console.log('111', payload);
  req.user = payload;
  next();
  /**
    * References:
    * https://expressjs.com/en/4x/api.html#req.get
    * https://nodejs.org/api/http.html#http_message_headers
    * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    */
}

module.exports = authorizationMiddleware;
