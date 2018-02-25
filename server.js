var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=rerquire('pg').Pool;
config={
    user: 'bhawanasoni111',
    host: 'db.imad.hasura-app.io',
    database: 'bhawanasoni111',
    port: '5432',
  password: 'process.emv.DB_PASSWORD'
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config);
app.get('/test-db', function (req, res) {
  pool.query('SELECT * FROM test',function(err,reult){
     if(err){
         res.status(500).send(err.toString());
     } else{
         res.send(JSON.stringify(result));
     }
  });
});
app.get('/article-one', function (req, res) {
  //res.send('article one is requested and will be served here');
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
