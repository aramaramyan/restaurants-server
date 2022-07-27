require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/restaurants', require('./routes/restaurants'));
app.use('/reviews', require('./routes/reviews'));
app.use('/rates', require('./routes/rate'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, (error) =>{
    if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
      console.log("Error occurred, server can't start", error);
  }
);