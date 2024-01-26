const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2]).then((value) => {
      res.write('This is the list of our students\n');
      res.end(value);
    }).catch((err) => {
      res.write('This is the list of our students\n');
      res.end(`${err.message}`);
    });
  } else {
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log('Welcome!');
});

module.exports = app;
