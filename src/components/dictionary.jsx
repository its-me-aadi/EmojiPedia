import React from "react";
import Term from "./terms";
import emojis from "../emojis";
import "../App.css";
function terms(term){
    return <Term
                        key={term.key}
                        emoji={term.emoji}
                        name={term.name}
                        meaning={term.meaning}
    />
  }
  
function dictionary(){
    return <div className="dictionary">
                {emojis.map(terms)}
            </div>
}

export default dictionary;