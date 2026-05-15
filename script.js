// Boolean variable to track mode
let DarkMode = false;

/* NEW FUNCTION: document.querySelector
   Lets you select any html element using its tag, class, or id.
   Use const (instead of let) because were storing a REFERENCE to part of the HTML page. 
*/

const body = document.querySelector('body'); 
const toggleBtn = document.querySelector('#toggle');
const heading = document.querySelector('#main-heading');
const description = document.querySelector
('#description');
const image = document.querySelector('#image');
const emoji = document.querySelector('#emoji');

//now we can change styles & attributes for these elements 
heading.style.color = "darkblue"; //JS wrote CSS code...
heading.textContent = "Light MOde & Dark Mode Website"

// Define what happens when the button is clicked
function toggleMode() {
   console.log("function triggered");
   // 1. flip the boolean value
   DarkMode = !DarkMode; //if it was false, it becomes true. If it was true, it becomes false.
   console.log(DarkMode);

      // 2. conditionally apply stules based on mode
      if (DarkMode == true) {
         console.log("applu dark mode styles");
         body.style.backgroundColor = "black";
         heading.style.color = "lightgrey";
         description.style.color = "white";
         description.textContent = "Dark mode is on ";
         toggleBtn.textContent = "Switch to Light Mode";
         toggleBtn.style.background = "purple";
         image.src = "BWL.jpeg";
         body.style.fontFamily = "arial";
         heading.style.fontFamily = "comic sans ms";
         image.style.filter = "brightness(25%)";
         toggleBtn.style.color = "grey";
         heading.style.textShadow = "2px 2px 5px red";

      }
      else {
         console.log("apply light mode styles");
         body.style.backgroundColor = "white";
         heading.style.color = "darkblue";
         description.style.color = "black";
         description.textContent = "Light mode is on";
         toggleBtn.textContent = "Switch to Dark Mode";
         toggleBtn.style.backgroundColor = "lightblue";
         image.src = "BWLlion.jpg";
         body.style.fontFamily = "comic sans ms";
         heading.style.fontFamily = "arial";
         image.style.filter = "brightness(100%)";
         toggleBtn.style.color = "black";
         heading.style.textShadow = "2px 2px 5px teal";
      }
}
// Attach the function to the button's click event 
toggleBtn.addEventListener('click', toggleMode);


//REVIEW
//1. select the new elemnt on the page (by id)
const hackerBtn = document.querySelector('#hacker');
//2. Attach click to event listener to the button
hackerBtn.addEventListener('click', setHacker);
//3. Difine the function that triggers when clicked 
function setHacker() {
   console.log("hacker mode activated");
   body.style.background = "black";
   body.style.color = "green";
   body.style.fontFamily = "monospace";
   description.textContent = "Hacker mode is on";
   body.style.backgroundImage = "url('https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2025/06/image-168.jpg')";
   emoji.classList.add("animated");
}


//Extra button to remoce the site 
const removeBtn = document.querySelector('#removeSite');
removeBtn.addEventListener('click', removeSite);
function removeSite() {
   console.log("removing site");
   document.body.innerHTML = "<h1>;)</h1>";
}