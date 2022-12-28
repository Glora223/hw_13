const firstNum = document.getElementById('first_value');
const secondNum = document.getElementById('second_value');
const operatorSelect = document.getElementById('operator');
const resCalc = document.getElementById('res_calc');

function getNumber(x) {
    if (x === ' ') {
        return undefined;
    }
    const numX = +x;
    if (isNaN(numX)) {
        return undefined;
    } else {
        return numX;
    }
}

function calc() {
    const val1 = firstNum.value;
    const val2 = secondNum.value;
    const num1 = getNumber(val1);
    const num2 = getNumber(val2);
    if (num1 === undefined) {
        alert("Wrong num1");
        return;
    }
    if (num2 === undefined) {
        alert("Wrong num2");
        return;
    }
    const operator = operatorSelect.value;
    switch (operator) {
        case"+":
            resCalc.innerHTML = (num1 + num2);
            break;
        case"-":
            resCalc.innerHTML = (num1 - num2);
            break;
        case"*":
            resCalc.innerHTML = (num1 * num2);
            break;
        case"/":
            resCalc.innerHTML = (num1 + num2);
            break;
    }
}


const itemInput = document.getElementById('item_input');
const sumItemSpan = document.getElementById('sum_item');
const arrayResultSpan = document.getElementById('array_result');

const array_database = [];
let sum = 0;

function addItem() {
    const van1 = itemInput.value;//string
    const valNum = getNumber(van1);//number
    if (valNum !== undefined) {
        array_database.push(valNum);
        sum = sum + valNum;
    }
    sumItemSpan.textContent = sum;
    arrayResultSpan.textContent = JSON.stringify(array_database);
    itemInput.value = '';
}



const numberInput=document.getElementById('number_input');
const reverseResultSpan=document.getElementById('reverse_result');



function reverseNumber() {
const numberStr=numberInput.value;
const num=getNumber(numberStr);
if(num === undefined){
    alert('Wrong number');
    return;
}
let res=0;
while(num){
    const digit= num%10 ;
    console.log(digit);
    num=Math.trunc(num/10);
    // num =Math.trunc(num/10);
res=res*10 +digit;
}
reverseResultSpan.textContent=res;
}


