// For random number generation

// button that generates random number when clicked
  const randomBtn = document.getElementById('random-btn');

  randomBtn.onclick = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-p').innerHTML = randomNum;
  }

// button that clears the random number div
  const clearBtn = document.getElementById('clear-btn');

  clearBtn.onclick = () => {
    document.getElementById('random-p').innerHTML = " ";
  }

  
// For theme selector

// changes the html and body theme and btn theme
const select = document.getElementById('switch-theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';

let isDarkMode = false;


function updateTheme() {
  const bgColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  randomBtn.style.backgroundColor = bgColor;
  randomBtn.style.color = textColor;
  clearBtn.style.backgroundColor = bgColor;
  clearBtn.style.color = textColor;
}

select.addEventListener('change', () => {
  isDarkMode = !isDarkMode;
  if (select.checked) {
    updateTheme();
  } else {
    updateTheme();
  }
});
