const express = require('express');
const studentList = require("./studentList");
const user = require("./user");


const html=`<html>
<head>
  <title>Student List</title>
</head>
<body>
  <h1> hellow ${user.name}</h1>
  <ul>
  <h2>all the Students:</h2>
    ${studentList}
  </ul>
</body>
</html>`;
const hostname = '127.0.0.1';
const port = 8000;
const server = studentList.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(html);
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});