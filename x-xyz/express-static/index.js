const express = require('express');
const app = express();
const path = require('path');

const gg = path.join(__dirname, 'public');
console.log(__dirname);
console.log('123', gg);
app.use(express.static(gg));

app.listen(3000, () => {
  console.log('listening @ 3000');
});
