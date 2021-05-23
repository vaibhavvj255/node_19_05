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
           // firstRow not removed
           let  firstRow = await pool.request().query("select name as 'First_row'  from cust where rowno=593075214;");
          
           // more queries goes here 
           let  DL31q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL31' , SUM(loan.approved) AS 'DL40', SUM(loan.balance) AS 'DL49' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon IS NULL OR loan.beacon = 0)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL32q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL32' , SUM(loan.approved) AS 'DL41', SUM(loan.balance) AS 'DL50' FROM cust  INNER JOIN loan  ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon > 0 AND loan.beacon < 500)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL33q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL33' , SUM(loan.approved) AS 'DL42', SUM(loan.balance) AS 'DL51' FROM cust INNER JOIN loan   ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 500 AND loan.beacon <= 549)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL34q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL34' , SUM(loan.approved) AS 'DL43', SUM(loan.balance) AS 'DL52' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 550 AND loan.beacon <= 599)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL35q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL35' , SUM(loan.approved) AS 'DL44', SUM(loan.balance) AS 'DL53' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 600 AND loan.beacon <= 649)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL36q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL36' , SUM(loan.approved) AS 'DL45', SUM(loan.balance) AS 'DL54' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 650 AND loan.beacon <= 699)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL37q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL37' , SUM(loan.approved) AS 'DL46', SUM(loan.balance) AS 'DL55' FROM cust INNER JOIN loan  ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 700 AND loan.beacon <= 749)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");
           
           let  DL38q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL38' , SUM(loan.approved) AS 'DL47', SUM(loan.balance) AS 'DL56' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 750)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL39q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL39' , SUM(loan.approved) AS 'DL48', SUM(loan.balance) AS 'DL57' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           



           // lastRow not removed 
           let  lastRow = await pool.request().query("select benefit AS 'Lastrow'  from cust where rowno=593075214;");

//-------- Converting query data to JSON stringify strings----------
          // first_Row not removed
           var first_row =  JSON.stringify(firstRow.recordset).replace(/]|[[]|[}]/g, '');

          // more fields goes here 
           var DL31 = JSON.stringify(DL31q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL32 = JSON.stringify(DL32q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL33 = JSON.stringify(DL33q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL34 = JSON.stringify(DL34q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL35 = JSON.stringify(DL35q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL36 = JSON.stringify(DL36q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL37 = JSON.stringify(DL37q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL38 = JSON.stringify(DL38q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
           var DL39 = JSON.stringify(DL39q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
      
           // last row never removed 
           var last_row =  JSON.stringify(lastRow.recordset).replace(/]|[[]|[]|[{]/g, '');
           

//-------- Assigning the data strings to finalString to add in the Object------------
           // initialising finalString
           var finalString = first_row;

           // more field goes here
           finalString +=","+DL31+","+DL32+","+DL33+","+DL34+","+DL35+","+DL36+","+DL37+","+DL38+","+DL39;
           



           // last-row never removed 
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
           console.log("Stringify:"+jsonData);

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



