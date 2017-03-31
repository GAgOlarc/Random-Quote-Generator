// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);

const quotesDefault = [
    {
        quote: 'You can do anything but not everything',
        source: 'David Allen',
        citation: 'Making It All Work',
        year: '2009'
    },
    {
        quote: "The only thing to fear is fear itself.",
        source: "Franklin Delano Roosevelt",
        citation: "First Inaugural Address",
        year: '1932'
    },
    {
        quote: "That's one small step for man, one giant leap for mankind.",
        source: "Neil Armstrong",
        citation: "The moon",
        year: '1969'
    },
    {
        quote: "It always seems impossible until it is done.",
        source: "Nelson Mandela",
        citation: "",
        year: "1918 - 2013"
    }
];

let quotes = quotesDefault.slice(0);
quotes.splice(0, 1);

const body = document.querySelector('body');
const quoteBox = document.getElementById('quote-box');
const loadQuote = document.getElementById('loadQuote');   

//Random Number Generator
function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

//Change Quote
function printQuote() {
    quoteBox.removeChild(quoteBox.firstElementChild);
    quoteBox.removeChild(quoteBox.lastElementChild);

    const randomQuote = randomNumber(quotes.length); 
    // const randomQuote = getRandomQuote();
    const buildQuote =  '<p class="quote">' + quotes[randomQuote].quote + '</p>'
                        + '<p class="source">' + quotes[randomQuote].source 
                        + '<span class="citation">' + quotes[randomQuote].citation + '</span>'
                        + '<span class="year">' + quotes[randomQuote].year + '</span>'
                        + '</p>';

    quoteBox.innerHTML = buildQuote;
    console.log(randomQuote);
    quotes.splice(randomQuote, 1);

    if(quotes.length < 1) {
        quotes = quotesDefault.slice(0);
        console.log('Array is empty');
    }
}

//Change Background Color
function changeBackground() {
    body.style.backgroundColor = "rgb(" + randomNumber(256) + "," + randomNumber(256) + "," + randomNumber(256) + ")";
}

// Event listener to respond to "Show another quote" button clicks 
loadQuote.addEventListener('click', () => {
    changeBackground();
    printQuote();
});

//Refresh The Code Automaticly
// var intervalID = setInterval(() => {
//     changeBackground();
//     printQuote();
// }, 3000);













