const express = require('express');
const bodyParser = require('body-parser');


const connect = require('./dbConfig/dbConfig');
const apiRoutes = require('./routes/index');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);


app.listen(3000, async () => {
    console.log('Server started at 3000');
    await connect();
    console.log('Db connected');
})
