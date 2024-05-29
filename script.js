const advice = document.getElementById('advice');
const quote = document.getElementById('quote');
const diceBtn = document.getElementById('dice-container');
const quoteCard = document.getElementById('quote-card');


console.log(quoteCard.getBoundingClientRect().width);

async function getQuote() {

  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();

    advice.textContent = `Advice #${data.slip.id}`;
    quote.textContent = `"${data.slip.advice}"`;

    if(data.slip.advice.length >= 80) {
      quote.style.fontSize = '22px';
    }
    // else if( data.slip.advice.length < 80 ) {
    //   quote.style.fontSize = '28px';
    // }

    // && quoteCard.getBoundingClientRect().width === '540px'
    

    diceBtn.addEventListener('click', function() {

      location.reload;

      advice.textContent;
      quote.textContent;

      advice.textContent = '';
      quote.innerHTML = 
          '<img src="images/ripple.svg" alt="ripple loading effect" class="ripple">';
      
      setTimeout(getQuote, 2500)

    });

    
  }
  catch(err) {
    console.error('Error: Unable to reach resource', err)
  }
}

getQuote()