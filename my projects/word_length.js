let input = document.getElementById('input');
let counterButton = document.getElementById('count-button');
let strLength =  document.getElementById('strLength');

function lengthCounter(){
    let length = input.value.length;
    strLength.textContent = length;
}

