require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/restaurants', require('./routes/restaurants'));
app.use('/reviews', require('./routes/reviews'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, (error) =>{
    if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else
      console.log("Error occurred, server can't start", error);
  }
);