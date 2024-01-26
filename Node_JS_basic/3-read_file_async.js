const fs = require('fs');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let counter = 0;
        const newObj = {};
        const newData = data.split('\n');

        for (let i = 0; i < newData.length; i += 1) {
          newData[i] = newData[i].split(',');
        }

        for (let i = 1; i < newData.length; i += 1) {
          if (newData[i].length > 1) {
            counter += 1;
            if (!Object.prototype.hasOwnProperty.call(newObj, newData[i][newData[i].length - 1])) {
              newObj[newData[i][newData[i].length - 1]] = {
                count: 1,
                names: [newData[i][0]],
              };
            } else {
              newObj[newData[i][newData[i].length - 1]].count += 1;
              newObj[newData[i][newData[i].length - 1]].names.push(newData[i][0]);
            }
          }
        }

        const keys = Object.keys(newObj);
        let str = `Number of students: ${counter}\n`;
        console.log(`Number of students: ${counter}`);

        for (let i = 0; i < keys.length; i += 1) {
          str += `Number of students in ${keys[i]}: ${newObj[keys[i]].count}. List: ${newObj[keys[i]].names.join(', ')}\n`;
          console.log(`Number of students in ${keys[i]}: ${newObj[keys[i]].count}. List: ${newObj[keys[i]].names.join(', ')}`);
        }
        resolve(str.substring(0, str.length - 1));
      }
    });
  });
}

module.exports = countStudents;
