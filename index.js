const setBodyStyle = () => {
    const $body = document.querySelector('body');
    $body.style.display = 'flex';
    $body.style.background = 'green';
    $body.style.justifyContent = 'center';
}

const createLabel = (text) => {
    const $inputContainer = document.createElement('div');
    $inputContainer.style.display = 'flex';
    $inputContainer.style.marginTop = '0.5em';

    const $label = document.createElement('label');
    $label.textContent = text
    const $input = document.createElement('input');
    $input.style.marginLeft = '1rem';

    $inputContainer.insertAdjacentElement('afterbegin', $input);
    $inputContainer.insertAdjacentElement('afterbegin', $label);
    
    return $inputContainer;
}

const createButton = (text, callback) => {
    const $button = document.createElement('button');
    $button.textContent = text;
    $button.style.height = '2em';
    $button.style.width = '8em';
    $button.style.borderRadius = '0.4em';
    $button.style.backgroundColor = 'green'
    
    callback($button);
    
    return $button;
}

const createButtonDiv = () => {
    const $buttonDiv = document.createElement('div');
    $buttonDiv.style.display = 'flex';
    $buttonDiv.style.marginTop = '1rem';

    $buttonDiv.insertAdjacentElement('beforeend', createButton('Login', (button) => {
        button.style.border = 'none';
    }));

    $buttonDiv.insertAdjacentElement('beforeend', createButton('Signup', (button) => {
        button.style.backgroundColor = 'gray';
        button.style.border = 'none';
        button.style.marginLeft = '1rem';
    }));

    return $buttonDiv;
}

const createLoginViewContainer = () => {
    const $body = document.querySelector('body');
    const $div = document.createElement('div');
    
    $div.style.alignItems = 'center'
    $div.style.justifyContent = 'center'
    $div.style.display = 'flex';
    $div.style.background = 'white';
    $div.style.border = 'solid 1px';
    $div.style.flexDirection = 'column';
    $div.style.height = '10em';
    $div.style.padding = '2rem';
    $div.style.width = '20em';
    
    $body.insertAdjacentElement('afterbegin', $div);
    
    return $div;
}

const $loginContainer = createLoginViewContainer();
const $inputContainerPass = createLabel('Password');
const $inputContainerLogin = createLabel('Login');

setBodyStyle();
$loginContainer.insertAdjacentElement('beforeend', $inputContainerLogin);
$loginContainer.insertAdjacentElement('beforeend', $inputContainerPass);
$loginContainer.insertAdjacentElement('beforeend', createButtonDiv());
