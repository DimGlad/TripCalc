let length = document.querySelector('.length');
let amount = document.querySelector('.amount');
let price = document.querySelector('.price'); 
let buttonCalc = document.querySelector('.calc'); 
let buttonClear = document.querySelector('.clear'); 
let inputIn = document.querySelector('input');

buttonCalc.onclick = function(){
    let a = length.value;
    let b = amount.value;
    let c = price.value;
    if (a == '' || b == '' || c == '')
    {
        alert("Введите данные!")
    }
    else
    {
        let trip = (a / 100) * b * c;
    document.getElementById("result").innerHTML ='Поездка обойдется в ' + trip + ' рублей';
    }
}
buttonClear.onclick = function(){
    length.value = '';
    amount.value = '';
    price.value = '';
    document.getElementById("result").innerHTML ='Поездка обойдется в ... рублей';
}