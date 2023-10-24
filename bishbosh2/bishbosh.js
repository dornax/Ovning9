const input = document.querySelector('#input');
const output = document.querySelector('#output');



input['number1'].addEventListener('change', (e) => {

    if (!validate(e.target.value)) {
        document.getElementById('number1').value = "";
    }
});

input['number2'].addEventListener('change', (e) => {
    if (!validate(e.target.value)) {
        document.getElementById('number2').value = "";
    }


});
input['range'].addEventListener('change', (e) => {
    if (!validate(e.target.value)) {
        document.getElementById('range').value = "";
    }

});

input.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((e.target[0].value !== "") && (e.target[1].value !== "") && (e.target[2].value !== "")) {
        output.innerHTML = bishBosh(parseInt(e.target[0].value), parseInt(e.target[1].value), parseInt(e.target[2].value));
    }
});

function bishBosh(number1, number2, range) {

    let text = '';

    for (let i = 1; i < range + 1; i++) {
        if (i % number1 === 0 && i % number2 === 0) text += 'Bish-Bosh' + '<br>'
        else if (i % number1 === 0) text += 'Bish' + '<br>';
        else if (i % number2 === 0) text += 'Bosh' + '<br>';
        else
            text += i + '<br>';
    }

    return text;

}

function validate(input) {
    if (isNaN(input)) {
        console.log("validate NaN")
        return false;
    }
    else {
        let num = parseInt(input)
        console.log(`num: ${num}`);
        if (num > 0 && num <= 100) return true;
        else return false;
    }
}




