import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    })
  }
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    return (
    <div className="App">
        <header className="App-header">
          <h1>Magic Cards</h1>
        </header>
          <Form 
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={false}
            hasTrunfo={false}
            isSaveButtonDisabled={false}
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ () => {} }
          /> 
        <Card
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={true}
        /> 
    </div>
    );
  }
}

export default App;
