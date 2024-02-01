const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  let content = 'This is the list of our students\n';

  fs.readFile(database, 'utf-8', (err, data) => {
    if (err) {
      content += 'Cannot load the database\n';
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const csStudents = lines.filter((line, index) => index > 0 && line.endsWith('CS')).map((line) => line.split(',')[0]);
      const sweStudents = lines.filter((line, index) => index > 0 && line.endsWith('SWE')).map((line) => line.split(',')[0]);

      content += `Number of students: ${lines.length - 1}\n`;
      content += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
      content += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
    }

    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
