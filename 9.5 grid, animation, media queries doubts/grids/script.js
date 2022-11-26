const buttons = document.getElementsByClassName('button');
const inputField = document.getElementById('number-input');
const infoParagrah = document.getElementById('info');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        infoParagrah.style.display = 'none';
        let inputText = '';
        switch (event.target.innerHTML) {
            case 'C':
                break;
            case '=':
                try {
                    inputText = eval(inputField.value);
                } catch(e) {
                    inputText = '';
                    infoParagrah.style.display = 'block';
                    infoParagrah.innerHTML = 'Invalid Operation';
                }
                break;
            case '←':
                inputText = inputField.value.slice(0, inputField.value.length-1);
                break;
            default:
                inputText = `${inputField.value}${event.target.innerHTML}`;
        }
        inputField.value =  inputText;
    });
}

