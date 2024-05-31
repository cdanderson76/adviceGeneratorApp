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


    // Conditionals that set my font size for the quotes

    if(data.slip.advice.length > 60) {
      quote.style.fontSize = '1.375rem';
    }
    
    else if( data.slip.advice.length < 60  &&  data.slip.advice.length > 35 ) {
      quote.style.fontSize = '1.5rem';
    };
  }
  catch(err) {
    console.error('Error: Unable to reach resource', err)
  }
}

getQuote();