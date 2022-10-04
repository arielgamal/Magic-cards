import React, { Component } from "react";
import Card from "./Card";

class AllCards extends Component {
  render() {
    const { savedCards, cardTrunfo } = this.props;

    return (
      <>
      <h1> Meu Deck Completo</h1>
      <div className="allCards">
      {
        savedCards.map((element) => (
          <Card
          cardName={element.cardName}
          cardDescription={element.cardDescription}
          cardAttr1={element.cardAttr1}
          cardAttr2={element.cardAttr2}
          cardAttr3={element.cardAttr3}
          cardImage={element.cardImage}
          cardRare={element.cardRare}
          cardTrunfo={cardTrunfo}
          />
          ))
        }
        </div>
        </>
    )
  }
}

export default AllCards;