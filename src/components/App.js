import React, { Component } from "react";
import QuoteBox from "./QuoteBox";

class App extends Component {
    render() {
        return (
            <div>
                <div id="quote-box-container">
                    <QuoteBox />
                </div>
            </div>
        );
    }
}

export default App;
