const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((value) => {
    res.write('This is the list of our students\n');
    res.end(value);
  }).catch((err) => {
    res.write('This is the list of our students\n');
    res.end(`${err.message}`);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}/`);
});

module.exports = app;
