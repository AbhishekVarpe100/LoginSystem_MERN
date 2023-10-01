const express = require('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
const mysql2 = require('mysql')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

const myconnection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'abhishek'
});

myconnection.connect((err) => {
    if (err) {
        console.log("Error in server")
    }
    else {
        console.log("Connected successfully");
    }
})


// create user
app.post('/create', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        myconnection.query('insert into demo(name,email,password) values(?,?,?)', [name, email, password], (err, result) => {
            if (err) {
                res.json("failure")
            }
            else {
                res.json("success")
            }
        })
    }
    catch (err) {
        console.log(err)
    }
})


//authorize user
app.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        myconnection.query('select * from demo where name=? and password=?', [name, password], (err, result) => {
            if (err) {
                res.json('fail')
            }
            else if (result.length > 0) {
                res.json('success')
            }
            else {
                res.json('fail')

            }
        })
    }
    catch (err) {
        console.log(err)
    }

})

app.listen(3000, (req, res) => {
    console.log("Started server")
})
