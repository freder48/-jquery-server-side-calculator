const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; 
app.use( express.static('server/public') );
app.use( bodyParser.urlencoded( {extended:true} ) );

const calculatorArray = [];

app.get('/calc', (req, res) => {
    console.log('Sending calculator data');
    res.send(calculatorArray);
})

app.post('/calc', (req, res) => {
    let calcData = req.body
    console.log('Getting calculator data...', calcData);
    calculatorArray.push(calcData);
    res.sendStatus(200); //200 is an OK status
})

//--------------------------end of our routes------------------------

//Tell our server to start listening for message requests on our port
app.listen( port, () => {
    console.log(`Server is listening on port ${port}...`);
})
