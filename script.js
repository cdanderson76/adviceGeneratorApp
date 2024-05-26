
async function getQuote() {

  const test = document.getElementById(`test`);

  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();
    test.innerHTML = data.slip.advice
  }
  catch(err) {
    console.error('Error: Unable to reach resource', err)
  }
}

getQuote()