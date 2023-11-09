const Value = document.getElementById('value')
const PlusButton = document.getElementById('plus')
const MinusButton = document.getElementById('minus')
const ResetButton = document.getElementById('reset')


const updateValue = () => {
    Value.innerHTML = count;
}
let count = 0;
let intervalId = 0;

PlusButton.addEventListener('mousedown' , () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue()
    },100);
});



MinusButton.addEventListener('mousedown' , () => {
    intervalId = setInterval(() =>{
        count -= 1;
        updateValue()
    },100);
});


ResetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));