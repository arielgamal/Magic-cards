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
    cardList: [],
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

    //FUNCAO PARA REMOVER UMA CARTA DO ESTADO
    // ESTA FUNÇÃO é uma HOF que filtra o elementos que ao clicar no botao excluir(que possui o cardName) retorna um array sem o elemento com aquele nome.
  removeCard = ({target}) => {
    const {savedCards} = this.state;
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((element) => (target.name !== element.cardName)),
    }), () => {
      if (savedCards.some((element) => element.cardTrunfo)) {
        this.setState({
          hasTrunfo: false,
        })
      }
    });
  }

  // FUNÇÃO QUE FILTRA POR NOME
  filtraNome = ({target}) => {
    console.log(target.value)
    const letraGrande2 = (target.value).toLowerCase();
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((element) => (element.cardName).toLowerCase().includes(letraGrande2))
    }));
  }

    // FUNÇÃO QUE FILTRA POR RARIDADE
    filtraRaridade = ({ target }) => {
      this.setState(() => ({
        filtro: target.value,
      }), () => {
        const { filtro, savedCards } = this.state;
        this.setState((prev) => ({
          cardList: filtro !== 'todas'
            ? savedCards.filter((carta) => filtro === carta.cardRare.toLowerCase()) : prev.cardList,
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
    cardTrunfo, hasTrunfo, savedCards, cardList } = this.state;
    return (
    <div className="App">
        <header className="App-header">
          <h1>Magic Cards</h1>
        </header>

        <section className='nav'>
        <h2>Monte a sua carta:</h2>
        <h2>Preview da sua carta:</h2>
        </section>
        
        <div className='nav1'>
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
        </div>

        <AllCards 
        savedCards={savedCards}
        removeCard={ this.removeCard }
        filtraNome={ this.filtraNome }
        filtraRaridade={ this.filtraRaridade }
        filtraTrunfo={this.filtraTrunfo}
        cardList={ cardList }
        />
    </div>
    );
  }
}

export default App;
