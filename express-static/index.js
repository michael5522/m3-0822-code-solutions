const express = require('express');
const app = express();
const path = require('path');

const dirArea = __dirname;
const answer = path.join(dirArea, 'public');
console.log(answer);

app.use(express.static(answer));
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
