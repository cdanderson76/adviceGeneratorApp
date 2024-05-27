const advice = document.getElementById('advice');
const quote = document.getElementById('quote');
const diceBtn = document.getElementById('dice-container');


async function getQuote() {

  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();

    advice.textContent = `Advice #${data.slip.id}`;
    quote.textContent = `"${data.slip.advice}"`;

    if(data.slip.advice.length >= 20 ) {
      quote.style.fontSize = '20px';
    }

    diceBtn.addEventListener('click', function() {

      location.reload;

      advice.textContent = `Advice #${data.slip.id}`;
      quote.textContent = `"${data.slip.advice}"`;

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