var display = document.getElementById('display');
var buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        var value = button.textContent;

        if(value === 'C'){
            display.value = '';
        } else if(value === 'DEL'){
            display.value = display.value.slice(0,-1);
        }else if(value === '='){
            try{
                display.value = eval(display.value)
            } catch {
                display.value = 'Error'
            }
        }else {
            display.value += value
        }
    })
});