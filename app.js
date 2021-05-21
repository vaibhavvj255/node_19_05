const express = require('express')
const mssql = require('mssql');
const fs = require('fs');

const app = express();
const bodyParser = require("body-parser");
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));



//---------------------==

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});



/*
var mysqlConnection = mysql.createConnection({
host : 'localhost',
user : 'root',
password: '',
database: 'nodemysql'
});

//connect 

mysqlConnection.connect((err)=>  {
  if(err){
    throw err;
  }
console.log("Mysql Connect..");
});


*/


/*
var Connection = require('tedious').Connection;  
var config = {  
    server: 'OPPACU-HOST',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'Vaibhav', //update me
            password: 'Lvk77351',  //update me
           
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        database: 'DPON151_ME',  //update me
        trustServerCertificate: true
    }
}; 
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    executeStatement();
     
});  
// connection to sql 
connection.connect();


// request data from databasse 
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement() {  
    request = new Request("select * from dbo.cust where name like 'a_s%';", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value;  
          }  
        });  
    
        console.log(result); 
        result =""; 
     
    });  
    
    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    connection.execSql(request);  
    
}  
//fs.writeFile('winin.json', JSON.stringify(result), err => err && console.log(err));
// starting the app





  // mysqlConnection.query('Select * from db.cust',(err,rows,fields)=>{
  //   if(!err) { console.log(rows);
  //   res.send(rows);
  //   fs.writeFile('today.json', JSON.stringify(rows), err => err && console.log(err));
  // }
  //   else 
  //   console.log(err);
   
  // });







// Select posts
/*
app.get('/getposts', (req, res) => {
  mysqlConnection.query('Select * from db.cust',(err,rows,fields)=>{
    if(!err) { console.log(rows);
    res.send(rows);
    fs.writeFile('today.json', JSON.stringify(rows), err => err && console.log(err));
  }
    else 
    console.log(err);
   
  });
});

*/






    app.post("/Employees",function (req, res)  {
       const sql = require("mssql");

       const config = {
      
        server: 'OPPACU-HOST',  //update me
        user: 'Vaibhav', //update me
        password: 'Lvk77351',  //update me
        database: 'DPON151_ME',
        trustServerCertificate: true
       }

       // var to store file name 
       var d = new Date();
         var fileName = "db_"+d.getDate()+"_"+d.getMonth()+"_"+d.getTime();
       sql.connect(config, function(err, data) {
        
         if(err) console.log(err);
           let sqlRequest = new sql.Request();

           let sqlQuery = "select * from dbo.cust where name like 'aa%' AND surname like 'a%' AND branch='bsmtr';";
           sqlRequest.query(sqlQuery, function (err, data) {
             if(err) console.log(err) 
             console.log(data);
         
             fs.writeFile(`json_files/${fileName}.json`, JSON.stringify(data.recordset), err => err && console.log(err));
             sql.close();
           });
       });
      
       res.send("The JSON file is downloaded please find it in the Json directory by the name "+fileName+".JSON");
    });





app.listen('3000',() => { 
  console.log('Server started on port 3000');
  var fs = require('fs');


});



