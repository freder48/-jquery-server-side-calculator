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
}

//runs on equals button click, gets info 
function getCalc(){
    console.log('clicked equal');
    expression.number1 = $('#num1').val();
    expression.number2 = $('#num2').val();

   $.ajax({
        method: 'POST',
        url: '/calc',
        data: expression
    }).then(function(response) { //once you get a response run doMath
        //The is run if you get a good response from the server
        console.log('Added successfully');
       //Get all the numbers again, so we can see 
         //empty
       $('#num1').val('');
       $('#num2').val('');
        
    }).catch(function(error){
        //Catch runs if there is a bad response from the server
        //console.log & alert the user
        console.log('Error', error); //I see 
        alert('Something bad happened. Try again later.'); //user sees
    })
}

//    function getMath(){
//         //Making a GET request to our server 
//         //This returns back a 'Promise' (object within JS)
//         $.ajax({
//            method: 'GET', 
//            url: '/calc' 
//         }).then( function(response) { //once you get a response THEN you'll run this function
//             console.log('Got response', response);
//             // renderCalculationHistory(response); COME BACK TO THIS
//         }).catch(function(error){
//             //console.log & alert the user
//             console.log('Error', error); //I see 
//             alert('Something bad happened. Try again later.'); //user sees
//         })
    
//     }


// //start renderCalculationHistory
// function renderCalculationHistory(calculatorArray){
//     console.log('CalculatorArray is', calculatorArray;
//     //empty (not important now, but will be later)
//     $('#cat-list').empty();
//     //put the cats into the ul
//     for (let item of catArray){
//         $('#cat-list').append(`<li>${item}</li>`);
//     }//end for loop
  
// }//end renderCats

function clearInput(){
    $('#num1').val('');
    $('#num2').val('');
}