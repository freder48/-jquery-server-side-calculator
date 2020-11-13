console.log('Hello');

$(document).ready(readyNow);

function readyNow(){
    console.log('Hello from JQ');
    
    $('#equalsBtn').on('click', getCalc);
    
}

function getCalc(){
    console.log('clicked equal');
    let value1 = $('#num1').val();
    let value2 = $('#num2').val();

   $.ajax({
        method: 'POST',
        url: '/calc',
        data: {
           number1 : value1,
           number2: value2
        }
    }).then(function(response) { //once you get a response run getCats
        //The is run if you get a good response from the server
        console.log('Added successfully');
       //Get all the cats again, so we can see 
        doMath();
         //empty
       $('#num1').val('');
       $('#num2').val('');
        
    }).catch(function(error){
        //Catch runs if there is a bad response from the server
        //console.log & alert the user
        console.log('Error', error); //I see 
        alert('Something bad happened. Try again later.'); //user sees
    })

   function doMath(){
        //Making a GET request to our server 
        //This returns back a 'Promise' (object within JS)
        $.ajax({
           method: 'GET', 
           url: '/calc' 
        }).then( function(response) { //once you get a response THEN you'll run this function
            console.log('Got response', response);
            // renderCalculationHistory(response); COME BACK TO THIS
        }).catch(function(error){
            //console.log & alert the user
            console.log('Error', error); //I see 
            alert('Something bad happened. Try again later.'); //user sees
        })
    
    }
}

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