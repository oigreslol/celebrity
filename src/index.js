const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database.js');

const app = express();


// Settings
app.set('port', process.env.PORT);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/requests',require('./routes/requests.routes'));

// Static File
app.use(express.static(path.join(__dirname, 'public')));


// Start Server
app.listen(process.env.PORT,()=>{
    console.log(`The server is running in PORT: ${app.get('port')}`);
});
