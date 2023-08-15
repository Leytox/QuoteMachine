let quoteBtn = document.querySelector("#new-quote");
let btn = document.querySelector("button");
let quoteText = document.querySelector("#text");
let author = document.querySelector("#author");
let body = document.querySelector("body");
let quoteSign = document.querySelector(".fa-solid");
let tweetBtn = document.querySelector("#tweet-quote");
document.addEventListener("DOMContentLoaded", GenRandomQuote);
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    quote: "To succeed in life, you need two things: ignorance and confidence.",
    author: "Mark Twain",
  },
  {
    quote:
      "It is not our abilities that show what we truly are... it is our choices.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain.",
    author: "Vivian Greene",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    quote:
      "The only author you should try to be better than is the author you were yesterday.",
    author: "Unknown",
  },
  {
    quote: "Do not wait for leaders; do it alone, author to author.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

function GenRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)}`;
  quoteText.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
  author.style.color = color;
  quoteText.style.color = color;
  quoteSign.style.color = color;
  body.style.backgroundColor = color;
  btn.style.backgroundColor = color;
  tweetBtn.style.backgroundColor = color;
  let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
  tweetBtn.href = tweetUrl;
}

quoteBtn.addEventListener("click", GenRandomQuote);
