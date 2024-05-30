<h1>This is my solution for the Frontend Mentor Advice Generator App</h1>

This is an HTML, CSS, and JavaScript challenge in which I practiced the basics (Flexbox, responsiveness, and JavaScript with light DOM manipulation.  With this project, simply click on the dice button,
and there will be a random quote generated from the Advice Slip JSON API.

![Advice Generator App](https://github.com/cdanderson76/adviceGeneratorApp/assets/138369806/336127f8-0b93-4fb7-92e5-014d62dcecec)


<h2>What are you most proud of, and what would you do differently next time?</h2>

Well, I am proud that I was able to grab the API fairly easy.  Completing this project lets me know that I have a decent level of understanding in reference to getting the data that I was looking for.

I'm not sure that I would do anything different next time.  I made sure that I 'console.logged' my way to the data, and ensured that it was randomly generating what I needed before trying to do anything with it.

<h2>What challenges did you encounter, and how did you overcome them?</h2>

Oh the challenges... 

The first one that I had come across was getting my conditionals in order.  The font was not rendering the way that I wanted at first.  Whenever the quote was lengthy, I wanted the font to be smaller, and when the quote WASN'T lengthy, I wanted it to be bigger.  
I think I made it more complex when I threw width in as a comparison, but I ended up just getting rid of width as part of the conditional, and just went with the length of the quote.  That seemed to work out better and the words are rendering like I wanted them to.

The second challenge that I had come across was the graphic design above the button.  Whenever I converted the height of the quote to ems, the graphic design got completely out of wack, and things went wonky with the UI.  I just stuck with pixels for the sake of 
keeping the content in place, just where I wanted it to be.  Not sure if that was bad practice or not, but, I wasn't sure if there was another way to make that happen.

Also, I hope that I solved the problem of the app generating multiple quotes at once.  I Googled the issue, and a lot of the resolutions pointed to the possibility of Chrome extensions causing some issues.  I did disable them, but that didn't work.  I took a closer look, 
and I had my event listener inside of my function that got the quote from.  I moved it out of the function and set it above it (had a setTimeout feature that called the function, so there may have been an issue with it being INSIDE the function).

<h2>What specific areas of your project would you like help with?</h2>

Not really, but if anyone would like to add anything to the short story that I have above, feel free.  Trying to become as knowledgeable as I can in reference to putting these projects together.  Thanks...
