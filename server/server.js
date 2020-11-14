const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; 
app.use( express.static('server/public') );
app.use( bodyParser.urlencoded( {extended:true} ) );

const calculatorArray = [];


//once you get calculation result you can send the result back to client side
app.get('/calc', (req, res) => {
    let historyAllCalculations = [];
    console.log('Sending calculator data');
    for (objects of calculatorArray){
        let result = 0;
        if (objects.operator == '/plus'){
            result = Number(objects.number1) + Number(objects.number2);
        } else if (objects.operator == '/subtract'){
            result = Number(objects.number1) - Number(objects.number2);
        } else if (objects.operator == '/multiply'){
            result = Number(objects.number1) * Number(objects.number2);
        } else if (objects.operator == '/divide'){
            result = Number(objects.number1) / Number(objects.number2);
        }
        historyAllCalculations.push({
            number1: objects.number1,
            number2: objects.number2,
            operator: objects.operator,
            result: result
        })
    } 
    res.send(historyAllCalculations);
})



app.post('/calc', (req, res) => {
    let calcData = req.body; //this is expression, taking req body and pushing into 
    console.log('Getting calculator data...', calcData);
    calculatorArray.push(calcData);
    res.sendStatus(200); //200 is an OK status
})

//--------------------------end of our routes------------------------

//Tell our server to start listening for message requests on our port
app.listen( port, () => {
    console.log(`Server is listening on port ${port}...`);
})
