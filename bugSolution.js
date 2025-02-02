const express = require('express');
const app = express();
const port = 3001; // Changed port number

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});