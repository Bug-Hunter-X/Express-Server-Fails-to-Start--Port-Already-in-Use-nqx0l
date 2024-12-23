const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a common error where the port is already in use by another process.
//The solution is to change port number or kill the process that is using the port.