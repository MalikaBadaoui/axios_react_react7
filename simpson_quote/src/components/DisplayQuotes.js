import React from 'react';
  
function DisplayQuotes({ quotes }) {   // <= parametre cherche dans le state
  return (
    <div className="DisplayQuotes">
        <h1>The Simpsons Quotes</h1>
        <p>{quotes.quote}</p>
        <p>{quotes.character}</p>
        <img src={quotes.image} alt="" />

    </div>
  );
};
  
export default DisplayQuotes;