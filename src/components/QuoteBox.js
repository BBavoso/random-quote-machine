import React, { useState, useEffect } from "react";

function QuoteBox({ getNewQuote }) {
    const [quote, setQuote] = useState(() => getNewQuote());

    const updateQuote = () => {
        setQuote(getNewQuote());
    };

    const getTwitterLink = () => {
        const twitterIntentLink = "https://twitter.com/intent/tweet?text=";
        return twitterIntentLink + encodeURI(quote.text);
    };

    return (
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <p id="author">{quote.author}</p>
            <button id="new-quote" onClick={updateQuote}>
                New Quote
            </button>
            <a id="tweet-quote" href={getTwitterLink()} target="_blank">
                tweet
            </a>
        </div>
    );
}

export default QuoteBox;
