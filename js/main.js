let digit1 = '';
let digit2 = '';
let operator = '';
let result = '';

function handleDigits(d) {
    if(digit1 === '') {
        digit1 = d;
    } else {
        digit2 = d;
    }
    displayButton(d);
}

function handleOperator(o) {
    if(operator === ''){
        operator = o;
    } else {
        handleResult();
        operator = o;
    }
   
}

function handleResult () {
    switch (operator) {
        case '+':
            result = parseInt(digit1) + parseInt(digit2);
            displayButton(result);
            break;
        case '-':
            result = parseInt(digit1) - parseInt(digit2);
            displayButton(result);
            break;
        case '*':
            result = parseInt(digit1) * parseInt(digit2);
            displayButton(result);
            break;
        case '/':
            result = parseInt(digit1) / parseInt(digit2);
            displayButton(result);
            break;
    }
    updateDigits();
}

function displayButton(btn) {
    $('.screen').text(btn);
}

function updateDigits(){
    digit1 = result;
    digit2 = '';
}
$('#clear').on('click', () =>{
    digit1 = '';
    digit2 = '';
    operator = '';
    result = '';
    displayButton(0);
    
})

$(document).ready(() => {
   const $button = $('.row');
    $button.on('click', (e) =>{
    let btn = e.target.innerHTML;
    if(btn >= 0 && btn <= 9){
        handleDigits(btn);
    } else if(btn !== 'C'){ 
        handleOperator(btn);
    }
    
    });     
        
 });