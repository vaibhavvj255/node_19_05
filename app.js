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
           let  DL01q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL01', SUM(loan.balance) AS 'DL10' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon IS NULL OR loan.beacon = 0)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL02q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL02', SUM(loan.balance)*-1 AS 'DL11' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon > 0 AND loan.beacon < 500)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL03q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL03', SUM(loan.balance)*-1 AS 'DL12' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 500 AND loan.beacon <= 549)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL04q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL04', SUM(loan.balance)*-1 AS 'DL13' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 550 AND loan.beacon <= 599)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL05q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL05', SUM(loan.balance)*-1 AS 'DL14' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 600 AND loan.beacon <= 649)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL06q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL06', SUM(loan.balance)*-1 AS 'DL15' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 650 AND loan.beacon <= 699)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL07q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL07', SUM(loan.balance)*-1 AS 'DL16' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 700 AND loan.beacon <= 749)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL08q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL08', SUM(loan.balance)*-1 AS 'DL17' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 750)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL09q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL09', SUM(loan.balance)*-1 AS 'DL18' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");

           let  DL31q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL31' , SUM(loan.approved) AS 'DL40', SUM(loan.balance)*-1 AS 'DL49' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon IS NULL OR loan.beacon = 0)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL32q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL32' , SUM(loan.approved) AS 'DL41', SUM(loan.balance)*-1 AS 'DL50' FROM cust  INNER JOIN loan  ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon > 0 AND loan.beacon < 500)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL33q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL33' , SUM(loan.approved) AS 'DL42', SUM(loan.balance)*-1 AS 'DL51' FROM cust INNER JOIN loan   ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 500 AND loan.beacon <= 549)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL34q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL34' , SUM(loan.approved) AS 'DL43', SUM(loan.balance)*-1 AS 'DL52' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 550 AND loan.beacon <= 599)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL35q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL35' , SUM(loan.approved) AS 'DL44', SUM(loan.balance)*-1 AS 'DL53' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 600 AND loan.beacon <= 649)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL36q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL36' , SUM(loan.approved) AS 'DL45', SUM(loan.balance)*-1 AS 'DL54' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 650 AND loan.beacon <= 699)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL37q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL37' , SUM(loan.approved) AS 'DL46', SUM(loan.balance)*-1 AS 'DL55' FROM cust INNER JOIN loan  ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 700 AND loan.beacon <= 749)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");
           
           let  DL38q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL38' , SUM(loan.approved) AS 'DL47', SUM(loan.balance)*-1 AS 'DL56' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 750)  AND loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");

           let  DL39q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL39' , SUM(loan.approved) AS 'DL48', SUM(loan.balance)*-1 AS 'DL57' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND (loan.type = 'mrl' OR loan.type = 'prl');");
         
           let  E024q = await pool.request().query("SELECT  COUNT(term.maturity) AS 'E02.4', SUM(term.balance) AS 'E06.4' FROM term  INNER JOIN cust ON term.rowno_custterm_cust = cust.rowno WHERE term.contract <> 0 AND term.status = 'active' AND DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) < 365 ;");

           let  E025q = await pool.request().query("SELECT COUNT(term.maturity) AS 'E02.5', SUM(term.balance) AS 'E06.5' FROM term INNER JOIN cust ON term.rowno_custterm_cust = cust.rowno WHERE term.contract <> 0 AND term.status = 'active' AND DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) BETWEEN 365 AND 1095 ; ");

           let  E026q = await pool.request().query("SELECT COUNT(term.maturity) AS 'E02.6', SUM(term.balance) AS 'E06.6' FROM term INNER JOIN cust ON term.rowno_custterm_cust = cust.rowno WHERE term.contract <> 0 AND term.status = 'active' AND DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) > 1095 ; ");

           let  RM57q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM57', SUM(loan.balance)*-1 AS 'RM66' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon IS NULL OR loan.beacon = 0)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM58q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM58', SUM(loan.balance)*-1 AS 'RM67' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon > 0 AND loan.beacon < 500)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM59q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM59', SUM(loan.balance)*-1 AS 'RM68' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 500 AND loan.beacon <= 549)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM60q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM60', SUM(loan.balance)*-1 AS 'RM69' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 550 AND loan.beacon <= 599)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM61q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM61', SUM(loan.balance)*-1 AS 'RM70' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 600 AND loan.beacon <= 649)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM62q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM62', SUM(loan.balance)*-1 AS 'RM71' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 650 AND loan.beacon <= 699)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM63q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM63', SUM(loan.balance)*-1 AS 'RM72' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 700 AND loan.beacon <= 749)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM64q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM64', SUM(loan.balance)*-1 AS 'RM73' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 750)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");

           let  RM65q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM65', SUM(loan.balance)*-1 AS 'RM74' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");


           // lastRow not removed 
           let  lastRow = await pool.request().query("select benefit AS 'Lastrow'  from cust where rowno=593075214;");

//-------- Converting query data to JSON stringify strings----------
          // first_Row not removed
           var first_row =  JSON.stringify(firstRow.recordset).replace(/]|[[]|[}]/g, '');

          // more fields goes here 
          var DL01 = JSON.stringify(DL01q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL02 = JSON.stringify(DL02q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL03 = JSON.stringify(DL03q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL04 = JSON.stringify(DL04q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL05 = JSON.stringify(DL05q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL06 = JSON.stringify(DL06q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL07 = JSON.stringify(DL07q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL08 = JSON.stringify(DL08q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL09 = JSON.stringify(DL09q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL31 = JSON.stringify(DL31q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL32 = JSON.stringify(DL32q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL33 = JSON.stringify(DL33q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL34 = JSON.stringify(DL34q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL35 = JSON.stringify(DL35q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL36 = JSON.stringify(DL36q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL37 = JSON.stringify(DL37q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL38 = JSON.stringify(DL38q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var DL39 = JSON.stringify(DL39q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var E024 = JSON.stringify(E024q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var E025 = JSON.stringify(E025q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var E026 = JSON.stringify(E026q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM57 = JSON.stringify(RM57q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM58 = JSON.stringify(RM58q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM59 = JSON.stringify(RM59q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM60 = JSON.stringify(RM60q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM61 = JSON.stringify(RM61q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM62 = JSON.stringify(RM62q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM63 = JSON.stringify(RM63q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM64 = JSON.stringify(RM64q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          var RM65 = JSON.stringify(RM65q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
          
      
           // last row never removed 
           var last_row =  JSON.stringify(lastRow.recordset).replace(/]|[[]|[]|[{]/g, '');
           

//-------- Assigning the data strings to finalString to add in the Object------------
           // initialising finalString
           var finalString = first_row;

           // more field goes here
           finalString +=","+DL01+","+DL02+","+DL03+","+DL04+","+DL05+","+DL06+","+DL07+","+DL08+","+DL09+","+DL31+","+DL32+","+DL33+","+DL34+","+DL35+","+DL36+","+DL37+","+DL38+","+DL39+","+E024+","+E025+","+E026+","+RM57+","+RM58+","+RM59+","+RM60+","+RM61+","+RM62+","+RM63+","+RM64+","+RM65;
           



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



