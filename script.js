
AOS.init({
    duration: 1200, 
  });

const texts = [
    "WELCOME TO FREEPAD",
    // "SIMPLIFYING DECENTRALIZED FUNDRAISING",
    // "REVOLUTIONIZING DECENTRALIZED FUNDRAISING"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check for saved user preferences in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

// Event listener for the toggle button
themeToggleButton.addEventListener('click', () => {
  // Toggle the theme classes on the body
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
