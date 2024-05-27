const advice = document.getElementById('advice');
const quote = document.getElementById('quote');
const diceBtn = document.getElementById('dice-container');


async function getQuote() {

  const test = document.getElementById(`test`);

  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();

    advice.textContent = `Advice #${data.slip.id}`;
    quote.textContent = `" ${data.slip.advice}"`;

    diceBtn.addEventListener('click', function() {
      location.reload();
    });

  }
  catch(err) {
    console.error('Error: Unable to reach resource', err)
  }
}

getQuote()