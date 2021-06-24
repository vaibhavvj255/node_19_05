const express = require('express');
const sql = require("mssql");
const config = require("./config/db");
const fs = require('fs');
const PORT = 3000;
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const { json } = require('express');

app.use(bodyParser.urlencoded({extended: false}));

 // var to store file name 
         var d = new Date();
         var dd = d.getDate();
         var mm = d.getMonth();
         var yy = d.getFullYear();
         var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
        const uniqueN = 490649;
        const fileName = "db_"+d.getDate()+uniqueN;


//-------get app------

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// --- post add data -----
app.get("/add", (req,res) => {
 res.sendFile(path.join(__dirname + '/add.html'));
});


//----- post app-------
app.post("/fileCreated",function (req, res)  {


        //--------------------- async method----------------------
  
        (async function () {
          try {
              let pool = await sql.connect(config)
             
  
  //---------SQL Queries Here ----------------
             // firstRow not removed
             let  firstRow = await pool.request().query("select name as 'First_row'  from cust where rowno=593075214;");
            
             // more queries goes here 
             let  DL01q = await pool.request().query("SELECT COUNT(loan.approved) AS 'DL01', SUM(loan.balance)*-1 AS 'DL10' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon IS NULL OR loan.beacon = 0)  AND loan.status = 'active' AND (loan.type = 'loan' OR loan.type = 'rrl' OR loan.type = 'rtl');");
  
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
           
  
             let  RM57q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM57', SUM(loan.balance)*-1 AS 'RM66' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon IS NULL OR loan.beacon = 0)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM58q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM58', SUM(loan.balance)*-1 AS 'RM67' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon > 0 AND loan.beacon < 500)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM59q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM59', SUM(loan.balance)*-1 AS 'RM68' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 500 AND loan.beacon <= 549)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM60q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM60', SUM(loan.balance)*-1 AS 'RM69' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 550 AND loan.beacon <= 599)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM61q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM61', SUM(loan.balance)*-1 AS 'RM70' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 600 AND loan.beacon <= 649)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM62q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM62', SUM(loan.balance)*-1 AS 'RM71' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 650 AND loan.beacon <= 699)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM63q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM63', SUM(loan.balance)*-1 AS 'RM72' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 700 AND loan.beacon <= 749)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM64q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM64', SUM(loan.balance)*-1 AS 'RM73' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  (loan.beacon >= 750)  AND loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM65q = await pool.request().query("SELECT COUNT(loan.approved) AS 'RM65', SUM(loan.balance)*-1 AS 'RM74' FROM cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE  loan.status = 'active' AND (loan.type = 'varmtge' OR loan.type = 'mortgage' OR loan.type = 'commerci');");
  
             let  RM87q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM87', SUM(loan.balance)*-1 as 'RM97' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds = 0;");
  
             let  RM88q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM88', SUM(loan.balance)*-1 as 'RM998' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 0 AND loan.tds <= 30;");
  
             let  RM89q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM89', SUM(loan.balance)*-1 as 'RM99' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 30 AND loan.tds <= 35;");
  
             let  RM90q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM90', SUM(loan.balance)*-1 as 'RM100' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 35 AND loan.tds <= 40;");
  
             let  RM91q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM91', SUM(loan.balance)*-1 as 'RM101' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 40 AND loan.tds <= 45;");
  
             let  RM92q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM92', SUM(loan.balance)*-1 as 'RM102' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 45 AND loan.tds <= 50;");
  
             let  RM93q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM93', SUM(loan.balance)*-1 as 'RM103' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 50 AND loan.tds <= 55;");
  
             let  RM94q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM94', SUM(loan.balance)*-1 as 'RM104' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 55 AND loan.tds <= 60;");
  
             let  RM95q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM95', SUM(loan.balance)*-1 as 'RM105' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.tds > 60;");
  
             let  RM96q = await pool.request().query("SELECT  COUNT(loan.tds) as 'RM96', SUM(loan.balance)*-1 as 'RM106' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge');");
  
             let  RM15q = await pool.request().query("SELECT COUNT(ltv) as 'RM15' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv > 0 AND  loan.ltv <=40;");
  
             let  RM16q = await pool.request().query("SELECT COUNT(ltv) as 'RM16' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv > 40 AND  loan.ltv <=60;");
  
             let  RM17q = await pool.request().query("SELECT COUNT(ltv) as 'RM17' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv > 60 AND  loan.ltv <=70;");
  
             let  RM18q = await pool.request().query("SELECT COUNT(ltv) as 'RM18' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv > 70 AND  loan.ltv <=80;");
  
             let  RM19q = await pool.request().query("SELECT COUNT(ltv) as 'RM19' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv > 80 AND  loan.ltv <=90;");
  
             let  RM20q = await pool.request().query("SELECT COUNT(ltv) as 'RM20' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv >90 AND  loan.ltv <=95;");
  
             let  RM21q = await pool.request().query("SELECT COUNT(ltv) as 'RM21' from loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') and loan.ltv > 95;");
  
             let  RM22q = await pool.request().query("SELECT COUNT(ltv) as 'RM22' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge');");
  
             let  RM23q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM23' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv > 0 AND  loan.ltv <=40;");
  
             let  RM24q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM24' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv > 40 AND  loan.ltv <=60;");
  
             let  RM25q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM25' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv > 60 AND  loan.ltv <=70;");
  
             let  RM26q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM26' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv > 70 AND  loan.ltv <=80;");
  
             let  RM27q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM27' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv > 80 AND  loan.ltv <=90;");
  
             let  RM28q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM28' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv >90 AND  loan.ltv <=95;");
  
             let  RM29q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM29' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80) and loan.ltv > 95;");
  
             let  RM30q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM30' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class IN (8,16,80); ");
  
             let  RM31q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM31' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv > 0 AND  loan.ltv <=40; ");
  
             let  RM32q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM32' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv > 40 AND  loan.ltv <=60;");
  
             let  RM33q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM33' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv > 60 AND  loan.ltv <=70;");
  
             let  RM34q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM34' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv > 70 AND  loan.ltv <=80;");
  
             let  RM35q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM35' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv > 80 AND  loan.ltv <=90;");
  
             let  RM36q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM36' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv >90 AND  loan.ltv <=95;");
  
             let  RM37q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM37' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80) and loan.ltv > 95; ");
  
             let  RM38q = await pool.request().query("SELECT SUM(loan.balance)*-1 as 'RM38' from loan INNER JOIN cust  ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'mortgage' OR loan.type ='mrl' OR loan.type = 'prl' OR loan.type = 'varmtge') AND loan.class NOT IN (8,16,80);");
             
  
             let  A01q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A01' from gl WHERE no_  in (1080201,1080600,10806001,1080800,1080900,1081000,1081050,1081055) AND branch = 'oppa';");
  
             let  A02q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A02' from gl WHERE no_  in (1080201,1080600,10806001,1080800,1080900,1081000,1081050,1081055) AND branch = 'oppa';");
  
             let  A03q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A03' from gl WHERE no_  in (1080300,1080400,2302600) AND branch = 'oppa';");
  
             let  A04q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A04' from gl WHERE no_  in (1080300,1080400,2302600) AND branch = 'oppa';");
  
             let  A10q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A10' from gl WHERE no_  in (1150300,1150302,1150303) AND branch = 'oppa';");
  
             let  A11q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A11' from gl WHERE no_  in (1150300,1150302,1150303) AND branch = 'oppa';");
  
             let  A12q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A12' from gl WHERE no_  in (1150300,1150302,1150303) AND branch = 'oppa';");
  
             let  A13q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A12' from gl WHERE no_  in (1150300,1150302,1150303) AND branch = 'oppa';");
  
             let  A16q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A16' from gl WHERE no_  =  1150400 AND branch = 'oppa';");
  
             let  A26q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A26' from gl WHERE no_  in (1150502,1150503) AND branch = 'oppa';");
  
             let  A83q = await pool.request().query("SELECT sum(gl.balance) as 'A83' from gl WHERE no_  in (1870000,1870001,1870002,1870101,1870103,1870104,1870105,1870106,1870107,1870201,1870203,1870204,1870205,1870207) AND branch = 'oppa';");
  
             let  A84q = await pool.request().query("SELECT sum(gl.balance)*-1 as 'A84' from gl WHERE no_  in (1850100,1860101,1860301,1870206,1870205,1870211,1860201,1860401,1870210,1870212,1870101,1870000,1870201,1870204,1870205,1870207) AND branch = 'oppa';");
  
             let  A91q = await pool.request().query("SELECT sum(gl.balance)*-1 as 'A91' from gl WHERE no_  in (1440305) AND branch = 'oppa';");
  
             let  A93q = await pool.request().query("SELECT sum(gl.balance)*-1 as 'A93' from gl WHERE no_  in (1440305,1730100,1730200,1730400,1730500,1730600,1730700,1730800,1741300,1741400,1741500,1741600,1741700,1741800,1745000,1769900,1770100,1770107,1770300,1770400,1770500,1770600,1440401,1761400,1761500,1761600,1761700,1771600,1150304,1150305) AND branch = 'oppa';");
  
             let  A09q = await pool.request().query("SELECT SUM(gl.balance)*-1 as 'A09' from gl WHERE no_  in (1080201,1080600,10806001,1080800,1080900,1081000,1081050,1081055,1080300,1080400,2302600) AND branch = 'oppa';");
  
             let  T08q = await pool.request().query("SELECT sum(loan.balance)*-1 AS 'T08'  from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust   where cust.no_ IN (123042, 135194, 137299,  137364, 137398, 139154, 141895,  155713,  156216, 171520, 171553,  172395,  187203,  207969, 209239, 209569, 209668, 209767, 209775, 210906, 213603, 214169,  217562,  221887,  222786,  229526, 232777, 233676,  235465,  236521, 239723, 26351, 26351, 41640, 41640, 50096, 66092, 68098, 70003, 77768, 82214, 86397, 88880, 94375, 96420, 96503, 97519, 988022);");
  
             let  DL79q = await pool.request().query("SELECT count(loan.class) as 'DL79', sum(loan.balance)*-1 AS 'DL84'  from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.class IN (8,16,80);");
  
             let  DL80q = await pool.request().query("SELECT count(loan.class) as 'DL80', sum(loan.balance)*-1 AS 'DL85'  from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND cust.branch <> 'oppa';");
  
             let  DL82q = await pool.request().query("SELECT count(loan.class) as 'DL82', sum(loan.balance)*-1 AS 'DL87'  from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.class IN (12,21);");
  
  
             let  RL01q = await pool.request().query("SELECT  sum(loan.balance)*-1 AS 'RL01'  from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE   loan.class IN (1,14,23);");
  
  
             let  RM01q = await pool.request().query("SELECT  COUNT(loan.balance) AS 'RM01', SUM(loan.balance)*-1 AS 'RM08' from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.type IN ('MORTGAGE','VARMTGE') AND (loan.balance < 0 AND loan.balance >= -125000) ;");
  
             let  RM02q = await pool.request().query("SELECT  COUNT(loan.balance) AS 'RM02', SUM(loan.balance)*-1 AS 'RM09' from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.type IN ('MORTGAGE','VARMTGE') AND (loan.balance < -125000 AND loan.balance >= -250000) ;");
             
             let  RM03q = await pool.request().query("SELECT  COUNT(loan.balance) AS 'RM03', SUM(loan.balance)*-1 AS 'RM10' from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.type IN ('MORTGAGE','VARMTGE') AND (loan.balance < -250000 AND loan.balance >= -500000) ;");
  
             let  RM04q = await pool.request().query("SELECT  COUNT(loan.balance) AS 'RM04', SUM(loan.balance)*-1 AS 'RM11' from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.type IN ('MORTGAGE','VARMTGE') AND (loan.balance < -500000 AND loan.balance >= -1000000) ;");
  
             let  RM07q = await pool.request().query("SELECT  COUNT(loan.balance) AS 'RM07', SUM(loan.balance)*-1 AS 'RM14' from cust INNER JOIN loan ON cust.rowno = loan.rowno_custloan_cust WHERE loan.status = 'active' AND loan.type IN ('MORTGAGE','VARMTGE') ;");
  
             let  A92q = await pool.request().query("SELECT sum(gl.balance)  as 'A92' from gl WHERE no_  in (1440305) ;");
  
             let  E11q = await pool.request().query("SELECT sum(gl.balance)  as 'E11' from gl WHERE no_  in (2200100,2200151,2200152) ;");
             
             let  E16q = await pool.request().query("SELECT sum(gl.balance)  as 'E16' from gl WHERE no_ in (2410101,2410104,2410106,2410107,2410108,2410111,2410112,2410113,2410114,2410115,2410116,2410117,2410118,2410150,2410300,2410301,2410302,2410303,2410350,2410400,2410402,2410403,2410404,2410405,2410406,2410500,2410501,2410502,2410503,2411102,2411110,2309909 ) ;");
             
             let  E23q = await pool.request().query("SELECT sum(gl.balance) +34205 as 'E23' from gl WHERE no_  in (3130000 ) ;");
             
  
             let  C01q = await pool.request().query("SELECT sum(gl.balance)  as 'C01' from gl WHERE no_  in (4100400,4101000,4101400,4101700,4101900,4102800,4101300,4101800,4130100,4130200,4130400,4130500,4130600,4130700,4130800,4140100,4140200,4140400,4140500,4141200,4141300,4141400,4141500,4141600,4141700,4141800,4145000) ;");
  
             let  C02q = await pool.request().query("SELECT sum(gl.balance)  as 'C02' from gl WHERE no_  in (4110900,4110901,4110500,4111000,4110500,4110600,4110800,4110850,4112100,4100900);");
  
             let  C03q = await pool.request().query("SELECT sum(gl.balance)  as 'C03' from gl WHERE no_  in (4110100) ;");
  
             let  C07q = await pool.request().query("SELECT sum(gl.balance)  as 'C07' from gl WHERE no_  in (4100400,4101000,4101400,4101700,4101900,4102800,4101300,4101800,4130100,4130200,4130400,4130500,4130600,4130700,4130800,4140100,4140200,4140400,4140500,4141200,4141300,4141400,4141500,4141600,4141700,4141800,4145000,4110100,4110900,4110901,4110500,4111000,4110500,4110600,4110800,4110850,4112100,4100900) ;");
  
             let  C08q = await pool.request().query("SELECT sum(gl.balance)  as 'C08' from gl WHERE no_  in (4040000,4040001,4040400,7040101,7040200,4040100,4040900);");
  
             let  C10q = await pool.request().query("SELECT sum(gl.balance)  as 'C10' from gl WHERE no_  in (7050102,7050104,4100107,4040500,4100300) ;");
  
             let  C11q = await pool.request().query("select (SELECT sum(gl.balance)  as 'C08' from gl WHERE no_  in (4040000,4040001,4040400,7040101,7040200,4040100,4040900))+(SELECT sum(gl.balance)  as 'C10' from gl WHERE no_  in (7050102,7050104,4100107,4040500,4100300)) as 'C11' ;");
  
             let  C12q = await pool.request().query("SELECT sum(gl.balance)  as 'C12' from gl WHERE no_  in (7050102,7050104,4100107,4040500,4100300,4040000,4040001,4040400,7040101,7040200,4040100,4040900,4110600,4110600,4110900,4110901,4110500,4111000,4110500,4110800,4110850,4112100,4100900,4100400,4101000,4101400,4101700,4101900,4102800,4101300,4101800,4130100,4130200,4130400,4130500,4130600,4130700,4130800,4140100,4140200,4140400,4140500,4141200,4141300,4141400,4141500,4141600,4141700,4141800,4145000,4110100) ;");
  
             let  C13q = await pool.request().query("SELECT sum(gl.balance)  as 'C13' from gl WHERE no_  in (7030313,7030350,7030124,7030202,7030307,7030308,7030312,7030314,7030315,7030316,7030317,7030400,7031110,7030123,7030301,7030304,7030306,7551804,7030122) ;");
     
             let  C14q = await pool.request().query("SELECT sum(gl.balance)  as 'C14' from gl WHERE no_  in (7030200,7030250,7030117,7030500,7030115,7030201,7030501) ;");
  
             let  C15q = await pool.request().query("SELECT sum(gl.balance)  as 'C15' from gl WHERE no_  in (7030400,7031110,4110601,7030120,7030121,7030118,7030116,7030502,7030503,7030203,7031102) ;");
  
             let  C17q = await pool.request().query("SELECT sum(gl.balance)  as 'C17' from gl WHERE no_  in (7030313,7030350,7030124,7030202,7030307,7030308,7030312,7030314,7030315,7030316,7030317,7030400,7031110,7030123,7030301,7030304,7030306,7551804,7030122,7030400,7031110,4110601,7030120,7030121,7030118,7030116,7030502,7030503,7030203,7031102,7030200,7030250,7030117,7030500,7030115,7030201,7030501) ;");
  
             let  C18q = await pool.request().query("SELECT sum(gl.balance)  as 'C18' from gl WHERE no_  in (7040100) ;");
  
             let  C181q = await pool.request().query("SELECT sum(gl.balance)  as 'C18.1' from gl WHERE no_  in (7032000,7050103) ;");
  
             let  C23q = await pool.request().query("SELECT sum(gl.balance)  as 'C23' from gl WHERE no_  in (7040100,7032000,7050103) ;");
  
             let  C24q = await pool.request().query("SELECT sum(gl.balance)  as 'C24' from gl WHERE no_  in ( 7030313,7030350,7030124,7030202,7030307,7030308,7030312,7030314,7030315,7030316,7030317,7030400,7031110,7030123,7030301,7030304,7030306,7551804,7030122,7030400,7031110,4110601,7030120,7030121,7030118,7030116,7030502,7030503,7030203,7031102,7030200,7030250,7030117,7030500,7030115,7030201,7030501,7040100,7032000,7050103) ;");
  
             let  C25q = await pool.request().query(" Select   (SELECT sum(gl.balance)  as 'C12' from gl WHERE no_  in (7050102,7050104,4100107,4040500,4100300,4040000,4040001,4040400,7040101,7040200,4040100,4040900,4110600,4110600,4110900,4110901,4110500,4111000,4110500,4110800,4110850,4112100,4100900,4100400,4101000,4101400,4101700,4101900,4102800,4101300,4101800,4130100,4130200,4130400,4130500,4130600,4130700,4130800,4140100,4140200,4140400,4140500,4141200,4141300,4141400,4141500,4141600,4141700,4141800,4145000,4110100) )-(SELECT sum(gl.balance)  as 'C24' from gl WHERE no_  in (7030313,7030350,7030124,7030202,7030307,7030308,7030312,7030314,7030315,7030316,7030317,7030400,7031110,7030123,7030301,7030304,7030306,7551804,7030122,7030400,7031110,4110601,7030120,7030121,7030118,7030116,7030502,7030503,7030203,7031102,7030200,7030250,7030117,7030500,7030115,7030201,7030501,7040100,7032000,7050103) ) as 'C25';");
  
             let  C26q = await pool.request().query("SELECT sum(gl.balance)  as 'C26' from gl WHERE no_  in (7551700) ;");
  
             let  C28q = await pool.request().query("SELECT sum(gl.balance)  as 'C28' from gl WHERE no_  in (7551700) ;");
  
             let  C29q = await pool.request().query("Select   ((SELECT sum(gl.balance)  from gl WHERE no_  in (7050102,7050104,4100107,4040500,4100300,4040000,4040001,4040400,7040101,7040200,4040100,4040900,4110600,4110600,4110900,4110901,4110500,4111000,4110500,4110800,4110850,4112100,4100900,4100400,4101000,4101400,4101700,4101900,4102800,4101300,4101800,4130100,4130200,4130400,4130500,4130600,4130700,4130800,4140100,4140200,4140400,4140500,4141200,4141300,4141400,4141500,4141600,4141700,4141800,4145000,4110100) )-(SELECT sum(gl.balance)  from gl WHERE no_  in ( 7030313,7030350,7030124,7030202,7030307,7030308,7030312,7030314,7030315,7030316,7030317,7030400,7031110,7030123,7030301,7030304,7030306,7551804,7030122,7030400,7031110,4110601,7030120,7030121,7030118,7030116,7030502,7030503,7030203,7031102,7030200,7030250,7030117,7030500,7030115,7030201,7030501,7040100,7032000,7050103) )) - (SELECT sum(gl.balance)   from gl WHERE no_  in (7551700) ) as 'C29';");
  
             let  C36q = await pool.request().query("SELECT sum(gl.balance)  as 'C36' from gl WHERE no_  in (7650300,7650301,7650302,7650303,7650304,7650305,7650306,7650307,7650308,7120100,7120101,7122300,7650201,7120400,7120107,7120500,7122100,7122200,7122504,7121000,7122001,7120200,7120300) ;");
  
             let  C37q = await pool.request().query("SELECT sum(gl.balance)  as 'C37' from gl WHERE no_  in (7122505,7122506,7170201,7170501,7170502,7170503,7170504,7170505,7170506,7170507,7170508,7170509,7170701,7170900,7170301,7171601,7171701) ;");
  
             let  C38q = await pool.request().query("SELECT sum(gl.balance)  as 'C38' from gl WHERE no_  in (750606,750621,7553800,7553803,7553804,7550605,7550600,7550607,7550800,7559901,7559902,7559903,7552905,7552903,7552906,7550400,7550401,7550402,7550403,7550404,7550405,7550406,7550407,7552901,7552902,7552904) ;");
  
             let  C39q = await pool.request().query("SELECT sum(gl.balance)  as 'C39' from gl WHERE no_  in (7551100,7550700,7550701,7550702,7553000,7553001,7553002,7553003,7553004,7550132,7551400,7551401, 751213,7550102,7554700,7550100,7550101,7550102,7550110,7550111,7550112,7550120,75501217550122,7550123,7550124,7550125,7550126,7550127,7550128,7550129,7550130,7550131,7550170,7550171,7550172,7550173,7550174,7550175,7550176,7550177,7550178,7550179,7550134,7551200,7551201,7551202,7551203,7551204,7551205,7551206,7551207,7551208,7551209,7551210,7551211,7551212,7551214,7551215,7551405,7551600,7551300,7551311,755131 ) ;");
  
             let  C40q = await pool.request().query("SELECT sum(gl.balance)  as 'C40' from gl WHERE no_  in (7300301,7300302,7300600,7300601) ;");
  
             let  C41q = await pool.request().query("SELECT sum(gl.balance)  as 'C41' from gl WHERE no_  in (7550200,7553808,7552000,7552001,7553802,7650400,7650401,7650402,7650403,7650404,7650405,7650406,7650407,7551101,7551102,7551103,7551104,7551105,7551106,7551108,7650600,7650601,7551702,7553809,7553810,7553811,7553812,7553815,7553816,7553817,7553818,7553819,7550115,7552400,7552401,7552404,7552800,7551706,7551803,7650410 ) ;");
  
             let  C42q = await pool.request().query("SELECT sum(gl.balance)  as 'C42' from gl WHERE no_  in (7650100,7554600,7554601,7554602,7554603,7554604,7554605,7554606,7552100,7552101,7551800,7551801,7551802,7122400,7122500,7122501,7122502,7122503,7551704,7551902,7551500,7553904,7774501,7554510,7559900,7559904,7559905,7551805,7120700,7551900,7551901,7120900,7551701) ;");
  
             let  C43q = await pool.request().query("SELECT ((SELECT sum(gl.balance)  as 'C36' from gl WHERE no_  in (7650300,7650301,7650302,7650303,7650304,7650305,7650306,7650307,7650308,7120100,7120101,7122300,7650201,7120400,7120107,7120500,7122100,7122200,7122504,7121000,7122001,7120200,7120300) )+( SELECT sum(gl.balance)  as 'C37' from gl WHERE no_  in (7122505,7122506,7170201,7170501,7170502,7170503,7170504,7170505,7170506,7170507,7170508,7170509,7170701,7170900,7170301,7171601,7171701) )+(SELECT sum(gl.balance)  as 'C38' from gl WHERE no_  in (750606,750621,7553800,7553803,7553804,7550605,7550600,7550607,7550800,7559901,7559902,7559903,7552905,7552903,7552906,7550400,7550401,7550402,7550403,7550404,7550405,7550406,7550407,7552901,7552902,7552904) )+(SELECT sum(gl.balance)  as 'C39' from gl WHERE no_  in ( 7551100,7550700,7550701,7550702,7553000,7553001,7553002,7553003,7553004,7550132,7551400,7551401,751213,7550102,7554700,7550100,7550101,7550102,7550110,7550111,7550112,7550120,75501217550122,7550123,7550124,7550125,7550126,7550127,7550128,7550129,7550130,7550131,7550170,7550171,7550172,7550173,7550174,7550175,7550176,7550177,7550178,7550179,7550134,7551200,7551201,7551202,7551203,7551204,7551205,7551206,7551207,7551208,7551209,7551210,7551211,7551212,7551214,7551215,7551405,7551600,7551300,7551311,755131) )+(SELECT sum(gl.balance)  as 'C40' from gl WHERE no_  in (7300301,7300302,7300600,7300601) )+(SELECT sum(gl.balance)  as 'C41' from gl WHERE no_  in (7550200,7553808,7552000,7552001,7553802,7650400,7650401,7650402,7650403,7650404,7650405,7650406,7650407,7551101,7551102,7551103,7551104,7551105,7551106,7551108,7650600,7650601,7551702,7553809,7553810,7553811,7553812,7553815,7553816,7553817,7553818,7553819,7550115,7552400,7552401,7552404,7552800,7551706,7551803,7650410) )+(SELECT sum(gl.balance)  as 'C42' from gl WHERE no_  in (7650100,7554600,7554601,7554602,7554603,7554604,7554605,7554606,7552100,7552101,7551800,7551801,7551802,7122400,7122500,7122501,7122502,7122503,7551704,7551902,7551500,7553904,7774501,7554510,7559900,7559904,7559905,7551805,7120700,7551900,7551901,7120900,7551701) )) AS 'C43';");
  
             let  DL19q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL19', SUM(loan.balance)*-1 as 'DL25' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno  WHERE loan.status = 'active' AND (loan.type = 'loan' OR loan.type ='rrl' OR loan.type = 'rtl') AND month(loan.funddate) = month(DATEADD(month, -1, GETDATE())) AND year(loan.funddate) = year(GETDATE()) AND loan.class IN (5,10,14,15,21,22,23,24,34,47);");
  
             let  DL20q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL20', SUM(loan.balance)*-1 as 'DL26' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type = 'loan' OR loan.type ='rrl' OR loan.type = 'rtl') AND month(loan.funddate) = month(DATEADD(month, -1, GETDATE())) AND year(loan.funddate) = year(GETDATE()) AND loan.class NOT IN (5,10,14,15,21,22,23,24,34,47);");
  
             let  DL65q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL58', SUM(loan.approved) as 'DL65',  SUM(loan.balance)*-1 as 'DL72' FROM  loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl') AND (loan.balance*-1 <= 125000 );");
  
             let  DL66q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL59', SUM(loan.approved) as 'DL66',  SUM(loan.balance)*-1 as 'DL73' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl') AND (loan.balance*-1 >= 125001 AND loan.balance*-1 < 250001);");
  
             let  DL60q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL60', SUM(loan.approved) as 'DL67',  SUM(loan.balance)*-1 as 'DL74' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl') AND (loan.balance*-1 >= 250001 AND loan.balance*-1 < 500001);");
  
             let  DL61q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL61', SUM(loan.approved) as 'DL68',  SUM(loan.balance)*-1 as 'DL75' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno  WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl') AND (loan.balance*-1 >= 500001 AND loan.balance*-1 < 1000001);");
  
             let  DL62q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL62', SUM(loan.approved) as 'DL69',  SUM(loan.balance)*-1 as 'DL76' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl') AND (loan.balance*-1 >= 1000001 AND loan.balance*-1 < 5000001);");
  
             let  DL63q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL63', SUM(loan.approved) as 'DL70',  SUM(loan.balance)*-1 as 'DL77' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl') AND (loan.balance*-1 >= 5000001);");
  
             let  DL64q = await pool.request().query("SELECT  COUNT(loan.balance) as 'DL64', SUM(loan.approved) as 'DL71',  SUM(loan.balance)*-1 as 'DL78' FROM loan INNER JOIN cust ON loan.rowno_custloan_cust = cust.rowno WHERE loan.status = 'active' AND (loan.type ='prl' OR loan.type = 'mrl');");
  
             let  E011q = await pool.request().query("SELECT count(case when dmd.type = 'merit' then dmd.balance when dmd.type = 'prime' then dmd.balance	when dmd.type = 'ttlchq' and dmd.balance <0 then 0 when dmd.type = 'maxi' and dmd.balance <0 then 0 when dmd.type = 'inc' and dmd.balance <0 then 0  when dmd.type = 'basic' and dmd.balance <0 then 0 when dmd.type = 'stumax' and dmd.balance <0 then 0 when dmd.type = 'vaa' and dmd.balance <0 then 0	when dmd.type = 'bbc' and dmd.balance <0 then 0	when dmd.type = 'tax' and dmd.balance <0 then 0 when dmd.type = 'plan24' and dmd.balance <0 then 0 	when dmd.type = 'cuis' and dmd.balance <0 then 0	when dmd.type = 'clip' and dmd.balance <0 then 0	when dmd.type = 'bonus' and dmd.balance <0 then 0 when dmd.type = 'opti' and dmd.balance <0 then 0 	when dmd.type = 'fatcat' and dmd.balance <0 then 0 	 when dmd.type = 'hiyield' and dmd.balance <0 then 0 when dmd.type = 'hssa' and dmd.balance <0 then 0 when dmd.type = 'current' and dmd.balance <0 then 0 when dmd.type = 'pda' and dmd.balance <0 then 0	when dmd.type = 'uschq' and dmd.balance <0 then 0 when dmd.type = 'ussvs' and dmd.balance <0 then 0  when dmd.type = 'premium' and dmd.balance <0 then 0  when dmd.type = 'daily' and dmd.balance <0 then 0 else	dmd.balance	end) as 'E01.1', sum(case when dmd.type = 'merit' then dmd.balance when dmd.type = 'prime' then dmd.balance	when dmd.type = 'ttlchq' and dmd.balance <0 then 0 	when dmd.type = 'maxi' and dmd.balance <0 then 0 	when dmd.type = 'inc' and dmd.balance <0 then 0  when dmd.type = 'basic' and dmd.balance <0 then 0 	when dmd.type = 'stumax' and dmd.balance <0 then 0 	when dmd.type = 'vaa' and dmd.balance <0 then 0 when dmd.type = 'bbc' and dmd.balance <0 then 0	 when dmd.type = 'tax' and dmd.balance <0 then 0  when dmd.type = 'plan24' and dmd.balance <0 then 0 when dmd.type = 'cuis' and dmd.balance <0 then 0		when dmd.type = 'clip' and dmd.balance <0 then 0 	 when dmd.type = 'bonus' and dmd.balance <0 then 0 	when dmd.type = 'opti' and dmd.balance <0 then 0 when dmd.type = 'fatcat' and dmd.balance <0 then 0 when dmd.type = 'hiyield' and dmd.balance <0 then 0 when dmd.type = 'hssa' and dmd.balance <0 then 0 when dmd.type = 'current' and dmd.balance <0 then 0 	when dmd.type = 'pda' and dmd.balance <0 then 0	 when dmd.type = 'uschq' and dmd.balance <0 then 0  when dmd.type = 'ussvs' and dmd.balance <0 then 0  when dmd.type = 'premium' and dmd.balance <0 then 0  when dmd.type = 'daily' and dmd.balance <0 then 0 else	dmd.balance	end ) as 'E05.1' FROM  CUST INNER JOIN DMD ON cust.rowno = dmd.rowno_custdmd_cust  WHERE dmd.type <> 'membshr' AND dmd.status <> 'closed' AND dmd.contract = 0 ;");
  
             let  E021q = await pool.request().query("SELECT count(term.maturity) as 'E02.1' , sum(term.balance)  as 'E06.1' from CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust WHERE term.contract = 0 AND term.status = 'active' and  DATEDIFF(day, DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) < 365;");
  
             let  E022q = await pool.request().query("SELECT count(term.maturity)  as 'E02.2', sum(term.balance)  as 'E06.2' from CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust WHERE term.contract = 0 AND term.status = 'active' and  DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) >= 365 and DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) < 1095;");
  
             let  E023q = await pool.request().query("SELECT count(term.maturity)  as 'E02.3' , sum(term.balance)  as 'E06.3' from  CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust WHERE term.contract = 0 AND term.status = 'active' and  DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) >= 1095;");
  
             let  E052q = await pool.request().query("SELECT  count(case when dmd.type = 'rwhenvar' and dmd.balance <0 then 0 when dmd.type = 'rspvar' and dmd.balance <0 then 0	when dmd.type = 'fsa' and dmd.balance <0 then 0  when dmd.type = 'hssfsa' and dmd.balance <0 then 0 when dmd.type = 'rdxvar' and dmd.balance <0 then 0 when dmd.type = 'sdxvar' and dmd.balance <0 then 0 when dmd.type = 'fdxvar' and dmd.balance <0 then 0 else	dmd.balance end) as 'E01.2', sum(case  when dmd.type = 'rwhenvar' and dmd.balance <0 then 0	 when dmd.type = 'rspvar' and dmd.balance <0 then 0		when dmd.type = 'fsa' and dmd.balance <0 then 0  when dmd.type = 'hssfsa' and dmd.balance <0 then 0  when dmd.type = 'rdxvar' and dmd.balance <0 then 0  when dmd.type = 'sdxvar' and dmd.balance <0 then 0  when dmd.type = 'fdxvar' and dmd.balance <0 then 0 else dmd.balance end) as 'E05.2' FROM  CUST INNER JOIN DMD ON cust.rowno = dmd.rowno_custdmd_cust  WHERE dmd.status <> 'closed' AND dmd.contract <> 0 ;");
  
             let  E024q = await pool.request().query("SELECT count(term.maturity) as 'E02.4' , sum(term.balance)  as 'E06.4' from  CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust WHERE term.contract <> 0 AND term.status = 'active' and  DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) < 365;");
  
             let  E025q = await pool.request().query("SELECT count(term.maturity)  as 'E02.5', sum(term.balance)  as 'E06.5' from  CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust WHERE term.contract <> 0 AND term.status = 'active' and  DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) >= 365 and DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) < 1095;");
  
             let  E026q = await pool.request().query("SELECT count(term.maturity)  as 'E02.6' , sum(term.balance)  as 'E06.6' from CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust WHERE term.contract <> 0 AND term.status = 'active' and  DATEDIFF(day,  DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0), term.maturity) >= 1095;");
  
             let  G0325q = await pool.request().query("select (SELECT case when sum(term.balance) < 0 then sum(term.balance) else sum(term.balance) end FROM  CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust  where term.status = 'active' AND term.code like 'F%' AND term.contract <> 0)+ (SELECT case when sum(dmd.balance) < 0 then sum(dmd.balance) else sum(dmd.balance) end FROM CUST INNER JOIN DMD ON cust.rowno = dmd.rowno_custdmd_cust  where dmd.status <> 'closed' AND dmd.type IN ('rifvar','fdxvar')) as 'G03.25',(SELECT COUNT(term.balance)  FROM  CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust  where term.status = 'active' AND term.code like 'F%' AND term.contract <> 0)+ (SELECT count(dmd.balance) FROM CUST INNER JOIN DMD ON cust.rowno = dmd.rowno_custdmd_cust where dmd.status <> 'closed' AND dmd.type IN ('rifvar','fdxvar')) as 'G03.26'");
  
  
             let  G0329q = await pool.request().query("select (SELECT case when sum(term.balance) < 0 then sum(term.balance) else sum(term.balance) end FROM  CUST INNER JOIN term  ON cust.rowno = term.rowno_custterm_cust  where term.status = 'active' AND term.code like 'S%' AND term.contract <> 0)+(   SELECT case when sum(dmd.balance) < 0 then sum(dmd.balance) else sum(dmd.balance) end FROM   CUST INNER JOIN DMD  ON cust.rowno = dmd.rowno_custdmd_cust  where dmd.status <> 'closed' AND dmd.type IN ('fsa','sdxvar')) as 'G03.29',(SELECT COUNT(term.balance)  FROM  CUST INNER JOIN term ON cust.rowno = term.rowno_custterm_cust where term.status = 'active' AND term.code like 'S%' AND term.contract <> 0)+(SELECT count(dmd.balance) FROM  CUST INNER JOIN DMD ON cust.rowno = dmd.rowno_custdmd_cust where dmd.status <> 'closed' AND dmd.type IN ('fsa','sdxvar')) as 'G03.30'");
  
             let  A94q = await pool.request().query("SELECT sum(gl.balance)  as 'A94' from gl WHERE no_  in (1600000,1600101,1600105,1600106,1600108,1600401,1600502,1600503,1600504,1400100,1400200,1400207,1400208,1400300,1400305,1400401,1400402,1400403,1400404,1400405,1400406,1400407,1400408,1400409,1400410,1400411,1400900,1400901,1401400,1402000,1402001,1402002,1402003,1403000,1409900,1410100,1410101,1410102,1410103,1410104,1410105,1410106,1419901,1419902 ) ;");
  
  
             let  A95q = await pool.request().query("SELECT sum(gl.balance)  as 'A95' from gl WHERE no_  in (1600000,1600101,1600105,1600106,1600108,1600401,1600502,1600503,1600504,1400100,1400200,1400207,1400208,1400300,1400305,1400401,1400402,1400403,1400404,1400405,1400406,1400407,1400408,1400409,1400410,1400411,1400900,1400901,1401400,1402000,1402001,1402002,1402003,1403000,1409900,1410100,1410101,1410102,1410103,1410104,1410105,1410106,1419901,1419902,1440305,1730100,1730200,1730400,1730500,1730600,1730700,1730800,1741300,1741400,1741500,1741600,1741700,1741800,1745000,1769900,1770100,1770107,1770300,1770400,1770500,1770600, 1440401,1761400,1761500,1761600,1761700,1771600,1150304,1150305 ) ;");
  
  
             let  C301q = await pool.request().query("SELECT sum(gl.balance)  as 'C30.1' from gl WHERE no_  in (4500400,4500401,4500402,4500404,4500405,4500406,4500407,4500408,4500412,4500413,4500414,4500415,4500416,4500417,4500418,4500441,4500450,4500498,4500801,4500802,4500804,4500807,7550136) ;");
  
             let  C302q = await pool.request().query("SELECT sum(gl.balance)  as 'C30.2' from gl WHERE no_  in (4500815,4501600,4501601,4501901,4501911) ;");
  
             let  C303q = await pool.request().query("SELECT sum(gl.balance)  as 'C30.3' from gl WHERE no_  in (4503102,7050100,7550133) ;");
  
  
             let  C304q = await pool.request().query("SELECT sum(gl.balance)  as 'C30.4' from gl WHERE no_  in (4502320) ;");
  
  
             let  C306q = await pool.request().query("SELECT sum(gl.balance)  as 'C30.6' from gl WHERE no_  in (4500205,4500206,4909903) ;");
  
             let  C308q = await pool.request().query("SELECT sum(gl.balance)  as 'C30.8' from gl WHERE no_  in (4500202,4500210,4501200,4909920,4909900,4200100,4909902) ;");
             
  
             
  
    
  
             // lastRow not removed 
             let  lastRow = await pool.request().query("select benefit AS 'Lastrow'  from cust where rowno=593075214;");
  
  //-------- Converting query data to JSON stringify strings----------
            // first_Row not removed
             var first_row =  JSON.stringify(firstRow.recordset).replace(/]|[[]|[}]/g, '');
  
            // more fields goes here
            
            //database query fields 
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
            var RM87 = JSON.stringify(RM87q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM88 = JSON.stringify(RM88q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM89 = JSON.stringify(RM89q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM90 = JSON.stringify(RM90q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM91 = JSON.stringify(RM91q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM92 = JSON.stringify(RM92q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM93 = JSON.stringify(RM93q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM94 = JSON.stringify(RM94q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM95 = JSON.stringify(RM95q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM96 = JSON.stringify(RM96q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM15 = JSON.stringify(RM15q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM16 = JSON.stringify(RM16q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM17 = JSON.stringify(RM17q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM18 = JSON.stringify(RM18q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM19 = JSON.stringify(RM19q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM20 = JSON.stringify(RM20q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM21 = JSON.stringify(RM21q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM22 = JSON.stringify(RM22q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM23 = JSON.stringify(RM23q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM24 = JSON.stringify(RM24q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM25 = JSON.stringify(RM25q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM26 = JSON.stringify(RM26q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM27 = JSON.stringify(RM27q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM28 = JSON.stringify(RM28q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM29 = JSON.stringify(RM29q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM30 = JSON.stringify(RM30q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM31 = JSON.stringify(RM31q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM32 = JSON.stringify(RM32q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM33 = JSON.stringify(RM33q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM34 = JSON.stringify(RM34q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM35 = JSON.stringify(RM35q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM36 = JSON.stringify(RM36q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM37 = JSON.stringify(RM37q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM38 = JSON.stringify(RM38q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A01 = JSON.stringify(A01q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A02 = JSON.stringify(A02q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A03 = JSON.stringify(A03q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A04 = JSON.stringify(A04q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A09 = JSON.stringify(A09q.recordset).replace(/]|[[]|[]|[{]|[}]/g, ''); 
            var A10 = JSON.stringify(A10q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A11 = JSON.stringify(A11q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A12 = JSON.stringify(A12q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A13 = JSON.stringify(A13q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A16 = JSON.stringify(A16q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A26 = JSON.stringify(A26q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A83 = JSON.stringify(A83q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A84 = JSON.stringify(A84q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A91 = JSON.stringify(A91q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A93 = JSON.stringify(A93q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A94 = JSON.stringify(A94q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var A95 = JSON.stringify(A95q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var T08 = JSON.stringify(T08q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL79 = JSON.stringify(DL79q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL80 = JSON.stringify(DL80q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL82 = JSON.stringify(DL82q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RL01 = JSON.stringify(RL01q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM01 = JSON.stringify(RM01q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM02 = JSON.stringify(RM02q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM03 = JSON.stringify(RM03q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM04 = JSON.stringify(RM04q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var RM07 = JSON.stringify(RM07q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
  
          
  
            var A92 = JSON.stringify(A92q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E11 = JSON.stringify(E11q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E16 = JSON.stringify(E16q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E23 = JSON.stringify(E23q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C01 = JSON.stringify(C01q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C02 = JSON.stringify(C02q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C03 = JSON.stringify(C03q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C07 = JSON.stringify(C07q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C08 = JSON.stringify(C08q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C10 = JSON.stringify(C10q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C11 = JSON.stringify(C11q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C12 = JSON.stringify(C12q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C13 = JSON.stringify(C13q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C14 = JSON.stringify(C14q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C15 = JSON.stringify(C15q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C17 = JSON.stringify(C17q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C18 = JSON.stringify(C18q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C181 = JSON.stringify(C181q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C23 = JSON.stringify(C23q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C24 = JSON.stringify(C24q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C25 = JSON.stringify(C25q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C26 = JSON.stringify(C26q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C28 = JSON.stringify(C28q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C29 = JSON.stringify(C29q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C36 = JSON.stringify(C36q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C37 = JSON.stringify(C37q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C38 = JSON.stringify(C38q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C39 = JSON.stringify(C39q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C40 = JSON.stringify(C40q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C41 = JSON.stringify(C41q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C42 = JSON.stringify(C42q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C43 = JSON.stringify(C43q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
  
  
            var DL19 = JSON.stringify(DL19q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL20 = JSON.stringify(DL20q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL65 = JSON.stringify(DL65q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL60 = JSON.stringify(DL60q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL61 = JSON.stringify(DL61q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL62 = JSON.stringify(DL62q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL63 = JSON.stringify(DL63q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL64 = JSON.stringify(DL64q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var DL66 = JSON.stringify(DL66q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E011 = JSON.stringify(E011q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E021 = JSON.stringify(E021q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E022 = JSON.stringify(E022q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E023 = JSON.stringify(E023q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var E052 = JSON.stringify(E052q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var G0325 = JSON.stringify(G0325q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var G0329= JSON.stringify(G0329q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C301= JSON.stringify(C301q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C302= JSON.stringify(C302q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C303= JSON.stringify(C303q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C304= JSON.stringify(C304q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C306= JSON.stringify(C306q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
            var C308= JSON.stringify(C308q.recordset).replace(/]|[[]|[]|[{]|[}]/g, '');
  
  
            // manual fields 
            var Z07 = '"Z07": "Anita Plewes"';
            var Z08 = '"Z08": "Accounting Supervisor"';
            var Z09 = '"Z09": ""';
            var Z10 = `"Z10": "${monthNames[mm]},${dd} ${yy}"`;
            var Z11 = '"Z11": "Andrew Shannon"';
            var Z12 = '"Z12": "Manager"';
            var Z13 = '"Z13": "andrew@oppacu.com"';
            var Z14 = `"Z14": "${monthNames[mm]},${dd} ${yy}"`;
            var A36 = '"A36": 0';
            var A42 = '"A42": 0';
            var A48 = '"A48": 0';  
            var A60 = '"A60": 0';
            var A66 = '"A66": 0';
            var A72 = '"A72": 0';      
            var A77 = '"A77": "No"';
            var T072 = '"T07.2": "Yes"';
            var T073 = '"T07.3": "Yes"';
            var L2311 = '"L231.1": "No"';
            var L2321 = '"L232.1": "No"';
            var L208 = '"L208": "No"';
            var L218 = '"L218": "No"';
            var L213 = '"L213": "No"';
            var L223 = '"L223": "No"';
            var L228 = '"L228": "No"';
            var D11 = '"D11": "No"';
            var L201 = '"L201": 0';
            var D12 = '"D12": 0';
            var D14 = '"D12": 0';
            var E221 = '"E22.1": 0';
            var RW052 = '"RW05.2": 0';
            var NF01 = '"NF01": "No"';
            var NF02 = '"NF02": "No"';
            var NF03 = '"NF03": "No"';
            var NF032 = '"NF03.2": "BDO"';
            var NF04 = '"NF04": "No"';
            var NF05 = '"NF05": "No"';
            var NF06 = '"NF06": "No"';
            var NF09 = '"NF09": 0';
            var NF095 = '"NF09.5": 0';
            var NF10 = '"NF10": "No"';
            var NF11 = '"NF11": "No"';
            var K01 = '"K01": "No"';
            var K02 = '"K02": "No"';
            var K03 = '"K03": "No"';
            var K04 = '"K04": "No"';
            var K05 = '"K05": "No"';
            var K06 = '"K06": "No"';
            var CL400 = '"CL400": 0';
            var CL402 = '"CL402": 0';
            var CL404 = '"CL404": 0';
            var CL406 = '"CL406": 0';
            var CL408 = '"CL408": 0';
  
  
            
  
            
        
             // last row never removed 
             var last_row =  JSON.stringify(lastRow.recordset).replace(/]|[[]|[]|[{]/g, '');
             
  
  //-------- Assigning the data strings to finalString to add in the Object------------
  
             // initialising finalString
             var finalString = first_row;
  
             // more field goes here
             finalString +=","+DL01+","+DL02+","+DL03+","+DL04+","+DL05+","+DL06+","+DL07+","+DL08+","+DL09+","+DL31+","+DL32+","+DL33+","+DL34+","+DL35+","+DL36+","+DL37+","+DL38+","+DL39+","+E024+","+E025+","+E026+","+RM57+","+RM58+","+RM59+","+RM60+","+RM61+","+RM62+","+RM63+","+RM64+","+RM65+","+RM87+","+RM88+","+RM89+","+RM90+","+RM91+","+RM92+","+RM93+","+RM94+","+RM95+","+RM96+","+RM15+","+RM16+","+RM17+","+RM18+","+RM19+","+RM20+","+RM21+","+RM22+","+RM23+","+RM24+","+RM25+","+RM26+","+RM27+","+RM28+","+RM29+","+RM30+","+RM31+","+RM32+","+RM33+","+RM34+","+RM35+","+RM36+","+RM37+","+RM38+","+Z07+","+Z08+","+Z09+","+Z10+","+Z11+","+Z12+","+Z13+","+Z14+","+A01+","+A02+","+A03+","+A04+","+A10+","+A11+","+A12+","+A16+","+A26+","+A83+","+A84+","+A91+","+A93+","+A09+","+A13+","+A36+","+A42+","+A48+","+A60+","+A66+","+A72+","+A77+","+T072+","+T073+","+L2311+","+L2321+","+L208+","+L218+","+L213+","+L223+","+L228+","+D11+","+L201+","+D12+","+E221+","+RW052+","+D14+","+NF01+","+NF02+","+NF03+","+NF032+","+NF04+","+NF05+","+NF06+","+NF09+","+NF095+","+NF10+","+NF11+","+K01+","+K02+","+K03+","+K04+","+K05+","+K06+","+T08+","+DL79+","+DL80+","+DL82+","+RL01+","+RM01+","+RM02+","+RM03+","+RM04+","+RM07  +","+A92+","+E11+","+E16+","+E23+","+C01+","+C02+","+C03+","+C07+","+C08+","+C10+","+C11+","+C12+","+C13+","+C14+","+C15+","+C17+","+C18+","+C181+","+C23+","+C24+","+C25+","+C26+","+C28+","+C29+","+C36+","+C37+","+C38+","+C39+","+C40+","+C41+","+C42+","+C43+","+DL19+","+DL20+","+DL65+","+DL60+","+DL61+","+DL62+","+DL63+","+DL64+","+DL66+","+E011+","+E021+","+E022+","+E023+","+E052+","+G0325+","+G0329+","+A94+","+A95+","+C301+","+C302+","+C304+","+C306+","+C303+","+C308+","+CL400+","+CL402+","+CL404+","+CL406+","+CL408;
             
  
           
             // last-row never removed 
             finalString +=","+last_row;
            finalString = finalString.replace(/-/g, '');
  //-------- Creating the object to store string sql data in the json format-------------- 
            var mainObject = new Object();
            //parsing the finalString to add it in the mainObject
            mainObject = JSON.parse(finalString);
            //Converting the object to JSON format, storing in the var jsonData
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
   
    
      res.sendFile(path.join(__dirname, './public', 'filecreated.html'));
          
        //  res.send("<html lang='en'> <head>  <meta charset='UTF-8'>  <meta http-equiv='X-UA-Compatible' content='IE=edge'> <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'> <title>Document</title></head> <body>  <nav class='navbar navbar-dark bg-dark'>   <a class='navbar-brand' href='#'>OPPA Credit Union FSRA Data </a> </nav><div class='container'> <div class='row mx-auto mt-5'>   <h2 class='text-success'> Your file is created and saved as "+fileName+".json</h2>  </div> </div></body>    </html>");

        
      });
  
  // for live server
app.get('/download', function(req, res){
        res.download(path.join(__dirname, './json_files', 'FSRA_may2021.json')); // Set disposition and send it.
      });

  // for localhost server
  /*app.get('/download', function(req, res){
    res.download(path.join(__dirname, './json_files', fileName)); // Set disposition and send it.
  });*/


  
///-----------for show only -----------
app.post("/show", (req,res) => {
 var dir =  path.join(__dirname + '/fileCreated.html');
      var dir = __dirname;
  res.send("Wallah! dir is "+dir)
})


app.listen(process.env.PORT || PORT,() => { 
  console.log('Server started on port 3000');
  var fs = require('fs');


});



