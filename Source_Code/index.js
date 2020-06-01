const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.connect(config.database, {useNewUrlParser:true, useUnifiedTopology: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to Database ${config.database}`);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error  ${err}`);
});


const app = express();

const users = require('./routes/user');

// Port Number
const port = process.env.PORT || process.env.VCAP_APP_PORT || 8080;


// Set Static Folder
app.use(express.static(path.join(__dirname + '/public')));

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// set passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);




// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});



app.enable('trust proxy');

// invalid routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname +'/public/index.html'));
})

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});