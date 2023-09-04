import React, { Component } from "react";
import QuoteBox from "./QuoteBox";
import "../styles/App.css";
import quoteData from "../quotes.json";

function App() {
    const getNewQuote = () => {
        const amountOfQuotes = quoteData.length;
        const randomQuoteNumber = Math.floor(Math.random() * amountOfQuotes);
        const randomQuote = quoteData[randomQuoteNumber];
        const text = randomQuote.text;
        const author = randomQuote.author;
        return { text, author };
    };

    return (
        <div>
            <div id="quote-box-container">
                <QuoteBox getNewQuote={getNewQuote} />
            </div>
        </div>
    );
}

export default App;
