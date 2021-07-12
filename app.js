
//npm i nodemon
//npm i express --save
//npm i mysql
//npm i body-parser


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const port = process.env.port || 3000;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'TU BASE DE DATOS'
});

//routes
app.get('/', (req, res) =>  {
res.send('Welcome Api')
});

app.get('/Resultados', (req, res) => {
  
  const sql = 'SELECT * FROM  TU_TABLA';
  
  connection.query(sql, (error, result) => {
   res.json(result); 
  });

});

connection.connect(error => {
  if (error)  throw error;
    console.log('Mysql Running');
    
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});