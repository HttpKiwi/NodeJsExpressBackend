const express = require('express');
const app = express();
const routes = require('./routes/index')
const cors = require('cors')


// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes 

app.use('/', routes);

app.listen(3001);
console.log('Server listening on 3001')
