import React, { Component } from 'react';
import './App.css';
import AllCards from './components/AllCards';
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
    filtro: 'todas'
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
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

    //FUNCAO PARA REMOVER UMA CARTA DO ESTADO (INCOMPLETO)
    // ESTA FUNÇÃO é uma HOF que filtra o elementos que ao clicar no botao excluir(que possui o cardName) retorna um array sem o elemento com aquele nome.
  removeCard = ({target}) => {
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((element) => (target.name !== element.cardName)),
    }));
  }

  // FUNÇÃO QUE FILTRA POR NOME (INCOMPLETO)
  filtraNome = ({target}) => {
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((element) => {
        const letraGrande = (element.name).toUpperCase();
        const letraGrande2 = (target.value).toUpperCase();
        return (letraGrande).includes(letraGrande2);
      })
    }));
  }

    // FUNÇÃO QUE FILTRA POR RARIDADE (INCOMPLETO)
    filtraRaridade = ({ target }) => {
      this.setState(() => ({
        filtro: target.value,
      }), () => {
        const { filtro } = this.state;
        this.setState((prev) => ({
          cardList: filtro !== 'todas'
            ? prev.savedCards.filter((carta) => target.value === carta.rare) : prev.cardList,
        }));
      });
    }

  // FUNÇÃO QUE FILTRA SE A CARTA É UM TRUNFO
  filtraTrunfo = () => {
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((element) => element.cardTrunfo === true)
    }))
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
    cardTrunfo, hasTrunfo, savedCards } = this.state;
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
            cardTrunfo={cardTrunfo}
            hasTrunfo={hasTrunfo}
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
        cardTrunfo={cardTrunfo}
        />

        <AllCards 
        savedCards={savedCards}
        removeCard={ this.removeCard }
        filtraNome={ this.filtraNome }
        filtraRaridade={ this.filtraRaridade }
        filtraTrunfo={this.filtraTrunfo}
        />
    </div>
    );
  }
}

export default App;
