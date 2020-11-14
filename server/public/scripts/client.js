let expression = {
           number1 : null,
           number2: null,
           operator: null
}

console.log('Hello');

$(document).ready(readyNow);

function readyNow(){
    console.log('Hello from JQ');
    //plus button it clicked, runs function, stores operator clicked in expression
    $('#plusBtn').on('click', function() {expression.operator = '/plus'});
    $('#subBtn').on('click', function() {expression.operator = '/subtract'});
    $('#multiplyBtn').on('click', function() {expression.operator = '/multiply'});
    $('#divideBtn').on('click', function() {expression.operator = '/divide'});
    $('#equalsBtn').on('click', getCalc);
    $('#clearBtn').on('click', clearInput);
    getMath();
}

//runs on equals button click, sending expression to server side
function getCalc(){
    console.log('clicked equal');
    expression.number1 = $('#num1').val();
    expression.number2 = $('#num2').val();

   $.ajax({
        method: 'POST',
        url: '/calc',
        data: expression
    }).then(function(response) { //once you get a response it will run getMath function
        //The is run if you get a good response from the server 200 message
        console.log('Added successfully');
        getMath();
        
    }).catch(function(error){
        //Catch runs if there is a bad response from the server
        //console.log & alert the user
        console.log('Error', error); //I see 
        alert('Something bad happened. Try again later.'); //user sees
    })

    
      
}

   function getMath(){
       //getMath is accessing the result from the server side - then can run renderCalculationHistory
        //Making a GET request to our server 
        //This returns back a 'Promise' (object within JS)
        $.ajax({
           method: 'GET', 
           url: '/calc' 
        }).then( function(response) { //once you get a response THEN you'll run this function
            console.log('Got response', response);
            renderCalculationHistory(response); //only has to be response here (taco)
        }).catch(function(error){
            //console.log & alert the user
            console.log('Error', error); //I see 
            alert('Something bad happened. Try again later.'); //user sees
        })
    
    }

//start renderCalculationHistory
function renderCalculationHistory(historyAllCalculations){
    console.log('CalculatorArray is', historyAllCalculations);
    //empty 
    $('#calculationHistory').empty();

    for (let item of historyAllCalculations){
        if (item.operator == '/plus'){
            item.operator = '+';
        } else if (item.operator == '/subtract'){
            item.operator = '-';
        } else if (item.operator == '/multiply'){
            item.operator = '*';
        } else if (item.operator == '/divide'){
            item.operator = '/';
        }
        $('#calculationHistory').append(`<li>${item.number1} ${item.operator} ${item.number2} = ${item.result}</li>`);
        $("#total").empty();
        $("#total").append(`${item.result}`)
    }//end for loop

}//end renderCalculationHistory

function clearInput(){
    $('#num1').val('');
    $('#num2').val('');
}