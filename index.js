window.onload = function() {

// let displayRandomNum = 
let buttonGenerateRandNum = document.getElementById('buttonClick');
let buttonReset = document.getElementById('buttonReset');

buttonGenerateRandNum.onclick = function() {randomNum(1, 100)};

    function randomNum(min, max) {       
        document.getElementById('randomNum').innerHTML = (Math.random() * (max - min) + min).toFixed(0);
    }
};

buttonReset.onclick = function() {clearP()};

    function clearP() {
        document.getElementById('randomNum').innerHTML = '';
    }