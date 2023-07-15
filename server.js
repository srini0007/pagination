const express = require('express');
const cors=require('cors');
const app = express();
app.use(cors());
app.get('/api/page/:id', (req, res) => {

  res.json(`this is the mock data sent from server and the value of the page chosen is ${req.params.id}`);
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});