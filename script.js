let quoteText = document.querySelector("#text"),
  author = document.querySelector("#author"),
  tweetBtn = document.querySelector("#tweet-quote");
document.addEventListener("DOMContentLoaded", () => {
  async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random"),
      data = await response.json();
    if (response.ok) {
      let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)}`;
      quoteText.textContent = data.content;
      author.textContent = data.author;
      author.style.color = color;
      quoteText.style.color = color;
      document.querySelector(".fa-solid").style.color = color;
      document.body.style.backgroundColor = color;
      document.querySelector("button").style.backgroundColor = color;
      tweetBtn.style.backgroundColor = color;
      let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
      tweetBtn.href = tweetUrl;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
  document.querySelector("#new-quote").addEventListener("click", updateQuote);
  updateQuote();
});
