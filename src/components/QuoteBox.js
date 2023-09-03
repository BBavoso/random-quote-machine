import React, { Component } from "react";

function QuoteBox() {
    const quoteText =
        "Example Quote Text long quote long quote long quote long quote long quote long quote";

    const getTwitterLink = (textToTweet) => {
        const twitterIntentLink = "https://twitter.com/intent/tweet?text=";
        return twitterIntentLink + encodeURI(quoteText);
    };

    return (
        <div id="quote-box">
            <p id="text">{quoteText}</p>
            <p id="author">-example author</p>
            <button id="new-quote">New Quote</button>
            <a id="tweet-quote" href={getTwitterLink()} target="_blank">
                tweet
            </a>
        </div>
    );
}

export default QuoteBox;
