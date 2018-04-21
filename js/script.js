// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// See quotes.js to find the data (array of objects called quotes).


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Extra credit for exceeds rating: 
// calls the printQuote function every 30 seconds.
var myTimer = setInterval(printQuote, 30000);

// Returns a random quote object from the array 'quotes' in quotes.js
function getRandomQuote() {
  var quote = Math.floor(Math.random() * quotes.length);
  return quotes[quote];
}

// Extra credit for exceeds rating: 
// Returns a random number between 0 and including 255.
function randonRGBNumber() {
  return Math.floor(Math.random() * 256);
}

// Extra credit for exceeds rating: 
// Builds the rgb-color, changes the color of the body and button elements.
function changeColorPage() {
  // Selecting body and button elements
  var page = document.querySelector('body');
  var button = document.getElementById('loadQuote');

  // building rgb-color using the randomRGBNumber function
  var rgbColor = 'rgb(' + randonRGBNumber();
  rgbColor += ', ' + randonRGBNumber();
  rgbColor += ', ' + randonRGBNumber() + ')';

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
  var quote = getRandomQuote();

  // selecting div element with the id quote-box
  var quoteBox = document.getElementById('quote-box');

  // building html string
  var html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  html += '<span class="citation">' + quote.citation + '</span>';
  html += '<span class="year">' + quote.year + '</span>';
  html += '<span class="tags">' + quote.tags + '</span>';
  html += '</p>';   

  // displays HTML string to the page
  quoteBox.innerHTML = html;
}

// Prints random quote to page and changes background color of page.
printQuote();



























