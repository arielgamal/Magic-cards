import React, { Component } from "react";
import Card from "./Card";

class AllCards extends Component {
  render() {
    const { savedCards, removeCard, filtraTrunfo } = this.props;
    return (
      <>
        <h1> Meu Deck Completo</h1>
        <div>
        <h2>Filtro de busca</h2>
        <label>
        Filtar TRUNFO
        <input 
          type='checkbox'
          onChange={filtraTrunfo}
          />
        </label>
        </div>
        <div className="allCards">
          {
            savedCards.map((element, index) => (
              <>
                <Card
                key={ index }
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
                />
                <button type="button" name={ element.cardName } onClick={ removeCard }>Remover</button>
              </>
            ))
          }
        </div>
      </>
    )
  }
}

export default AllCards;