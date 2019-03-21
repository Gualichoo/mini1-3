var express = require ('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const f1 = require('./api/routes/f1');
const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://Senese:riverplate@cluster0-6fbyr.mongodb.net/test?retryWrites=true' ,
  { useNewUrlParser: true }
)
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/f1', f1);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status= 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})





module.exports = app