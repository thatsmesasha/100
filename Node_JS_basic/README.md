# 0x12. NodeJS Basics

## Resources:books:

* [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
* [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
* [Child process](https://nodejs.org/api/child_process.html)
* [Express getting started](https://expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://mochajs.org/)
* [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

---
## Learning Objectives:bulb:

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use `process` to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster

---

## Provided files

### database.csv
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### package.json
```

{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}

```

### babel.config.js
```

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};


```

### .eslintrc.js
```

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```
---

### [0. Executing basic javascript with Node JS](./0-console.js)
In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

### [1. Using Process stdin](./1-stdin.js)
Create a program named `1-stdin.js` that will be executed through command line:

* It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
* The user should be able to input their name on a new line
* The program should display `Your name is: INPUT`
* When the user ends the program, it should display `This important software is now closing` (followed by a new line)

### [2. Reading a file synchronously with Node JS](./2-read_file.js)
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

* Create a function named `countStudents`. It should accept a path in argument
* The script should attempt to read the database file synchronously
* If the database is not available, it should throw an error with the text `Cannot load the database`
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
* CSV file can contain empty lines (at the end) - and they are not a valid student!

### [3. Reading a file asynchronously with Node JS](./3-read_file_async.js)
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

* Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
* The script should attempt to read the database file asynchronously
* The function should return a Promise
* If the database is not available, it should throw an error with the text `Cannot load the database`
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6.List: LIST_OF_FIRSTNAMES`
* CSV file can contain empty lines (at the end) - and they are not a valid student!

### [4. Create a small HTTP server using Node's HTTP module](./4-http.js)
In a file named `4-http.js, create a small HTTP server using the `http` module:
* It should be assigned to the variable `app` and this one must be exported
* HTTP server should listen on port 1245
* Displays `Hello Holberton School!` in the page body for any endpoint as plain text

### [5. Create a more complex HTTP server using Node's HTTP module](./5-http.js)
In a file named 5-http.js, create a small HTTP server using the http module:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is `/`, it should display `Hello Holberton School!` in the page body
* When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
* CSV file can contain empty lines (at the end) - and they are not a valid student!

### [6. Create a small HTTP server using Express](./6-http_express.js)
Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

* It should be assigned to the variable `app` and this one must be exported
* HTTP server should listen on port 1245
* Displays Hello `Holberton School!` in the page body for the endpoint `/`

### [7. Create a more complex HTTP server using Express](./7-http_express.js)
In a file named `7-http_express.js`, recreate the small HTTP server using `Express`:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is `/`, it should display `Hello Holberton School!` in the page body
* When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
* CSV file can contain empty lines (at the end) - and they are not a valid student!

### [8. Organize a complex HTTP server using Express](./8-clean_set.js)
Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.
Since you have used ES6 and Babel in the past projects, let’s use `babel-node` to allow to use ES6 functions like `import` or `export`.

---

## Author
**Nicolas Zarate** - [Nicolanz](https://github.com/Nicolanz)
