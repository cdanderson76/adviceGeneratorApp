const advice = document.getElementById('advice');
const quote = document.getElementById('quote');
const diceBtn = document.getElementById('dice-container');
const quoteCard = document.getElementById('quote-card');

diceBtn.addEventListener('click', function() {

  location.reload;

  advice.textContent = '';
  quote.innerHTML = 
      '<img src="images/ripple.svg" alt="ripple loading effect" id="ripple">';
  
  setTimeout(getQuote, 2500)
});

// Async function to grab the data from the API

async function getQuote() {

  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();

    advice.textContent = `Advice #${data.slip.id}`;
    quote.textContent = `"${data.slip.advice}"`;
    
    console.log(quote.textContent.length)
  }
  catch(err) {
    console.error('Error: Unable to reach resource', err)
  }

  // Conditionals that set my font size for the quotes

  if(quote.textContent.length > 90) {
    quote.style.fontSize = '1.25rem';
  }

  else if(quote.textContent.length > 50 ) {
    quote.style.fontSize = '1.375rem';
  }
  else {
    quote.style.fontSize = '1.5rem';
  }
}

getQuote();