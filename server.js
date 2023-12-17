const express = require('express');
const mongoose = require('mongoose');
const app = express();

// routes
app.get('/', (req, res) => {
  res.send('Hello, my name is Albert');
});

app.listen(3000, () => {
  console.log('Node API app is running on port 3000');
});

mongoose
  .connect(
    'mongodb+srv://orgin11phile:1806@InTheElevator@cluster0.chw2ieu.mongodb.net/?retryWrites=true&w=majority',
  
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
