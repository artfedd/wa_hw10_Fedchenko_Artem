export function lighter () {
    const redButtonPosition = document.querySelector('.red_button_position');
    const btnRed = document.querySelector('.red_button');
    const yellowButtonPosition = document.querySelector('.yellow_button_position');
    const btnYellow = document.querySelector('.yellow_button');
    const greenButtonPosition = document.querySelector('.green_button_position');
    const btnGreen = document.querySelector('.green_button');

    function clickHandler() {
        console.log('CLICKED ON');
        redButtonPosition.classList.add('red_button');
        yellowButtonPosition.classList.remove('yellow_button');
        greenButtonPosition.classList.remove('green_button');
    }

    function clickHandlerY() {
        yellowButtonPosition.classList.add('yellow_button');
        redButtonPosition.classList.remove('red_button');
        greenButtonPosition.classList.remove('green_button');
    }

    function clickHandlerG() {
        greenButtonPosition.classList.add('green_button');
        redButtonPosition.classList.remove('red_button');
        yellowButtonPosition.classList.remove('yellow_button');
    }

    redButtonPosition.addEventListener('click', clickHandler);
    yellowButtonPosition.addEventListener('click', clickHandlerY);
    greenButtonPosition.addEventListener('click', clickHandlerG);
}

