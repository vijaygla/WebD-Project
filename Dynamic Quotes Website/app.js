let realData = [];
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
let quotesData = "";
const tweet = document.getElementById("tweet");


const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes.innerText + ' - ' + author.innerText)}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * realData.length);
    quotesData = realData[rnum];
    quotes.innerText = quotesData.text;
    author.innerText = quotesData.author ? quotesData.author : "unknown";
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
};

tweet.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();

