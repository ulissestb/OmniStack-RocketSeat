const express = require('express');
const mongoose = require('mongoose');
const path = require('path');   


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://omnistack:1234@cluster0-jyj7u.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(require('./routes'));

server.listen(3333);