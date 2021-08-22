// Selecting elements

const text = document.querySelector(".text");
const author = document.querySelector(".author");

document.querySelector("#quotes-btn").addEventListener("click", getQuotes);

// Functions

async function getQuotes() {
  const response = await fetch("https://type.fit/api/quotes");
  const AllQuotes = await response.json();
  //console.log(AllQuotes);

  const index = Math.floor(Math.random() * AllQuotes.length);

  const quote = AllQuotes[index].text;
  const creator = AllQuotes[index].author;

  text.innerHTML = `${quote}`;
  author.innerHTML = `- ${creator}`;
}

getQuotes();
