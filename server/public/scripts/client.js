console.log('Hello');

$(document).ready(readyNow);

function readyNow(){
    console.log('Hello from JQ');
    
    $('#equalsBtn').on('click', getCalc);
    
}

function getCalc(){
    console.log('clicked equal');
    let number1 = $('#num1').val();
    let number2 = $('#num1').val();

    $.ajax({
        

    })
}