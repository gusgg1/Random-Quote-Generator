// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// See quotes.js to find the data (array of objects called quotes).


// Extra credit for exceeds rating: 
  // calls the printQuote function every 30 seconds.
let myTimer = setInterval(printQuote, 30000);
let quotesToDisplay = [];

// Returns a random quote object from the array 'quotes' in quotes.js
function getRandomQuote() {
  if (quotesToDisplay.length === 0) {
    quotesToDisplay = [...quotes];
  }
  const randomIndex = randonNumber(quotesToDisplay.length);
  const quote = quotesToDisplay[randomIndex];
  if (quotesToDisplay.length !== 0) {
    const quoteRemoved = quotesToDisplay.splice(randomIndex, 1);
    console.log(quoteRemoved[0]);
  }
  return quote;
}

// Extra credit for exceeds rating: 
  // Returns a random number between 0 and including 255.
function randonNumber(number) {
  return Math.floor(Math.random() * number);
}

// Extra credit for exceeds rating: 
  // Builds the rgb-color, changes the color of the body and button elements.
function changeColorPage() {
  // Selecting body and button elements
  const page = document.querySelector('body');
  const button = document.getElementById('loadQuote');

  // building rgb-color using the randomNumber function
  const rgbColor = `rgb(${randonNumber(256)}, ${randonNumber(256)}, ${randonNumber(256)})`;

  // changing background color of body and button accordingly
  page.style.backgroundColor = rgbColor;
  button.style.backgroundColor = rgbColor;
}

// Prints a random quote when clicked on button or when called by setInterval, and also calls the changeColorPage function to change the background color of the page.
function printQuote() {
  clearInterval(myTimer);
  myTimer = setInterval(printQuote, 30000);

  // changing color of page and button
  changeColorPage();

  // getting random quote
  const quote = getRandomQuote();

  // selecting div element with the id quote-box
  const quoteBox = document.getElementById('quote-box');

  // building html string
  const html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span><span class="tags">${quote.tags}</span></p>
  `;

  // displays HTML string to the page
  quoteBox.innerHTML = html;
}

// Prints random quote to page and changes background color of page.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
