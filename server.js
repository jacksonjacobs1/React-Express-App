///////////////////////////////// connect to mysql database
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FracturedL2}',
    database: 'MySQL80'
})

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected');
});
/////////////////////////////////


const express = require('express');
var request = require('request');
const app = express();
const port = 5000;

// creates a route
app.get("/api/getArtOutput", (req, res) => {        
    let sql = '';                                       // pass query into here. if possible, form this query in the front end?
    let query = db.query(sql, (err, results) => {       // grab onto results and pass it into the app
        if(err) throw err;
        console.log(results);
        res.send('');
    });
});


app.listen(port, () => console.log(`Server started on port ${port}`));
