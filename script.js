const quoteText = document.querySelector("#text");
const author = document.querySelector("#author");
const tweetBtn = document.querySelector("#tweet-quote");
document.addEventListener("DOMContentLoaded", async () => {
  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) throw new Error("Failed to fetch quote");
      const data = await response.json();
      const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      quoteText.textContent = data.content;
      author.textContent = data.author;
      author.style.color = quoteText.style.color = document.querySelector(".fa-solid").style.color = document.body.style.backgroundColor = document.querySelector("button").style.backgroundColor = tweetBtn.style.backgroundColor = color;
      tweetBtn.href = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
    } catch (error) {
      console.error("An error occurred:", error.message);
      quoteText.textContent = "An error occurred";
      author.textContent = "";
    }
  }
  document.querySelector("#new-quote").addEventListener("click", updateQuote);
  await updateQuote();
});
