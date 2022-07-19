let turnOn = document.querySelector('.turnOn');
let turnOff = document.querySelector('.turnOff');
let lamp = document.querySelector('.lamp');

let turnOnOff = document.querySelector('.turnOnOff');

// função pra ver se a lampada está quebrada
function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
};

function lampOn() {
    if( !isLampBroken() ) { // "!" = não
        lamp.src = './images/ligada.jpg';
    }
};
function lampOff() {
    if( !isLampBroken() ) {
         lamp.src = './images/desligada.jpg';
    }
};
// Lâmpada quebrada 
function lampBroken() {
    lamp.src = './images/quebrada.jpg';
};

// Liga e Desliga
function lampOnOff() {
    if(turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
};

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff); 
lamp.addEventListener('mouseover', lampOn); // quando passar o mouse
lamp.addEventListener('mouseleave', lampOff); // quando tirar o mouse
lamp.addEventListener('dblclick', lampBroken); // duplo click

