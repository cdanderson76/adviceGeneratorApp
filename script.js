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

    if(data.slip.advice.length > 70) {
      quote.style.fontSize = '22px';
    }
    else if( data.slip.advice.length < 70 && quoteCard.getBoundingClientRect().width > '500px') {
      quote.style.fontSize = '24px';
    }
    else if( data.slip.advice.length < 70 && quoteCard.getBoundingClientRect().width > '600px') {
      quote.style.fontSize = '28px'
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