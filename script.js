const advice = document.getElementById('advice');
const quote = document.getElementById('quote');
const diceBtn = document.getElementById('dice-container');
const quoteCard = document.getElementById('quote-card');

async function getQuote() {

  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();

    advice.textContent = `Advice #${data.slip.id}`;
    quote.textContent = `"${data.slip.advice}"`;

    // advice.textContent;
    // quote.textContent;

    console.log(data.slip.advice.length);
    console.log(quoteCard.getBoundingClientRect().width);

    // GET YOUR DAMN CONDITIONALS TOGETHER!!!

    if(data.slip.advice.length > 60) {
      quote.style.fontSize = '1.375rem';
    }
    
    else if( data.slip.advice.length < 60  &&  data.slip.advice.length > 35 ) {
      quote.style.fontSize = '1.5rem';
    }

    else if( data.slip.advice.length < 35 ) {
      quote.style.fontSize = '1.75rem';
    }
    
    diceBtn.addEventListener('click', function() {

      location.reload;

      advice.textContent = '';
      quote.innerHTML = 
          '<img src="images/ripple.svg" alt="ripple loading effect" id="ripple">';
      
      setTimeout(getQuote, 2500)

    });
  }
  catch(err) {
    console.error('Error: Unable to reach resource', err)
  }
}

getQuote();