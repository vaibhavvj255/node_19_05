const express = require('express')
const mssql = require('mssql');
const fs = require('fs');

const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const { json } = require('express');

app.use(bodyParser.urlencoded({extended: false}));



//-------get app------

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//----- post app-------
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
      
      //--------------------- async method----------------------

      (async function () {
        try {
            let pool = await sql.connect(config)
           

//---------SQL Queries Here ----------------
           let  data = await pool.request().query("select name as 'A10', rowno  from cust where rowno=593075214;");
           let  data2 = await pool.request().query("select surname  from cust where rowno=593075214;");
           let  data3 = await pool.request().query("select benefit  from cust where rowno=593075214;");

//-------- Converting query data to JSON stringify strings----------
           var first_row =  JSON.stringify(data.recordset).replace(/]|[[]|[}]/g, '');
           var last_row =  JSON.stringify(data2.recordset).replace(/]|[[]|[]|[{]/g, '');
           var A01 = JSON.stringify(data3.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');

//-------- Assigning the data strings to finalString to add in the Object------------
           var finalString = first_row;
           finalString += ","+A01;
           finalString +=","+last_row;

//-------- Creating the object to store string sql data in the json format-------------- 
          var mainObject = new Object();
          //parsing the finalString to add it in the mainObject
          mainObject = JSON.parse(finalString);
          //Converting the object to JSONp format, storing in the var jsonData
          var jsonData = JSON.stringify(mainObject);


          //Console log the final results 
           console.log("Final String:"+finalString);
           console.log(mainObject);
           console.log("Stringify Wallah:"+jsonData);

//---------Creating the JSON file and exporting to the folder named json_files-----
        fs.writeFile(`json_files/${fileName}.json`, jsonData, err => err && console.log(err));
        
        //catching the errors
      } catch (err) {
           console.log(err);
        }
    })()


    
    sql.on('error', err => {
        console.log(err);
    })


       res.send("The JSON file is downloaded please find it in the Json directory by the name "+fileName+".JSON");
    });





app.listen('3000',() => { 
  console.log('Server started on port 3000');
  var fs = require('fs');


});



