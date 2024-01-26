const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const newObj = {};
        const newData = data.split('\n');

        for (let i = 0; i < newData.length; i += 1) {
          newData[i] = newData[i].split(',');
        }
        for (let i = 1; i < newData.length; i += 1) {
          if (newData[i].length > 1) {
            if (!Object.prototype.hasOwnProperty.call(newObj, newData[i][newData[i].length - 1])) {
              newObj[newData[i][newData[i].length - 1]] = [newData[i][0]];
            } else {
              newObj[newData[i][newData[i].length - 1]].push(newData[i][0]);
            }
          }
        }
        resolve(newObj);
      }
    });
  });
}

module.exports = readDatabase;
