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
    savedCards: [],
  }

  // FUNCAO PARA COLOCAR TUDO QUE SE DIGITA NO ESTADO;
  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    })
  }

  // FUNCAO PARA VALIDAR O BOTAO DE ENVIAR;
  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && +cardAttr1 >= 0 && +cardAttr1 <=90
      && +cardAttr2 >= 0 && +cardAttr2 <=90
      && +cardAttr3 >= 0 && +cardAttr3 <=90
      && +cardAttr1 + +cardAttr2 + +cardAttr3 <= 210) {
      return false;
    }
    return true;
  }

  // FUNÇÃO PARA SALVAR A CARTA
  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo  
    };
    this.setState((prev) => ({
      savedCards: [...prev.savedCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '', 
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false, 
    }));
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
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          /> 
        <Card
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={false}
        /> 
    </div>
    );
  }
}

export default App;
