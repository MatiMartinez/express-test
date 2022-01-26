'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.defaultPort ? process.env.defaultPort : 3003;
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('body-parser').json());
app.use('/', require('./routes/api'));
app.use('/routes', require('./routes/routes'));
app.listen(port, () => {
    console.log('ADS API http://localhost:' + port);
});
