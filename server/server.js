const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//instatiate Server
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());


//routes
app.use('/', require('./routes/home'));


//listen
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Listening on port : ${process.env.PORT || 5000}`);
});