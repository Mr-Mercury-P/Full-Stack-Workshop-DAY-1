const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});