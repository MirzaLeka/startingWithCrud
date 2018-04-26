const express = require('express');
const http = require('http');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
//const ejsLint = require('ejs-lint');

const dateFormat = require('dateformat');
let now = new Date();

// Forms
app.use(bodyParser.urlencoded({
extended: true
 }));

 app.set("view engine", "ejs");

 /*
 app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
 app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
 app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/js'));
 app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); */

 // Connection to mysql
const con = mysql.createConnection({
host: "localhost",
user: "root", //defualt
password: "", //defualt
database: "mydb" //name of the database
 });

 // Global site title and base url
const siteTitle = "Simple application";
const baseURL = "http://localhost:3000/";

app.get('/', (req, res) => {


    con.query("SELECT * FROM simpletable ORDER BY name ASC", (err, res)=>{   
  
console.log(res);
    });

    res.render('pages/index', {
        siteTitle,
        pageTitle : "Event list",
        items :''
    });

});




 let port = process.env.PORT || 3000;

 app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });