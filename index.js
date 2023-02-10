window.onload = function() {

// let displayRandomNum = 
let buttonGenerateRandNum = document.getElementById('buttonClick');
let clearButton = document.getElementById('buttonReset');
let modeButton = document.getElementById('darkMode');

buttonGenerateRandNum.onclick = function() {randomNum(1, 100)};

    function randomNum(min, max) {       
        document.getElementById('randomNum').innerHTML = (Math.random() * (max - min) + min).toFixed(0);
    }


clearButton.onclick = function() {clearP()};

    function clearP() {
        document.getElementById('randomNum').innerHTML = '';
    }


modeButton.onclick = function() {darkMode()};

    function darkMode() {
        let elementBody = document.body;
        elementBody.classList.toggle("dark-mode");

        let elementButtonClick = document.getElementById('buttonClick');
        elementButtonClick.classList.toggle("button-dark-mode-click");

        let elementButtonReset = document.getElementById('buttonReset');
        elementButtonReset.classList.toggle("button-dark-mode-reset");

        let elementButtonDarkMode = document.getElementById('darkMode');
        elementButtonDarkMode.classList.toggle("button-dark-mode-dark");
    }

}

