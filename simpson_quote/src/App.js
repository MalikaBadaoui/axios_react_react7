import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuotes from './components/DisplayQuotes.js';


const quotess = {quote:'In theory, Communism works! In theory.', 
character:'Homer Simpson',
image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
characterDirection:'Right'};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotess 
    };
    this.fetchquotesJSON = this.fetchquotesJSON.bind(this); 
  }

  fetchquotesJSON() {   
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes') 
      .then(response => response.data)  
      .then(data => {       
        this.setState({
          quotes: data[0],   
        });
    });
  }
  
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.fetchquotesJSON}>Get quote</button>
        <DisplayQuotes quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
