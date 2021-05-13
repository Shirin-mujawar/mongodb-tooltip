var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

const studentRoute=require('./routes/student');
var app = express();

//connection
mongo.connect('mongodb://127.0.0.1:27017/studentdatabase?readPreference=primary&ssl=false', { useNewUrlParser: true })
  .then(() => { console.log('mongo db connected'); }).catch((e) => {
    console.log('failed to connect mongo db');
    console.log(e);
  });

//cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
  next();
});

//routing
app.use(bodyParser.urlencoded({
  limit: '50mb'
}));
app.use(bodyParser.json({
  limit: '50mb'
}));

app.use('/api/student',studentRoute);

app.set('port',
  process.env.PORT || 5000
);

app.use(express.static(__dirname+'/routes'));
app.get('*/',(req,res,next) => {
  console.log(req),
    next()
});

app.listen(app.get('port'),function(){
console.log('App Is Running On This Port',app.get('port'));
});

