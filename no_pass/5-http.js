const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(db)
      .then((result) => {
        res.write(`${result.totalNumber}\n`);
        res.write(`${result.CS}\n`);
        res.write(`${result.SWE}`);
        res.end();
      })
      .catch((error) => {
        console.error('Error processing students data:', error);
        res.write('Cannot load the database');
        res.end();
      });
  }
});

const port = 1245;
module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
