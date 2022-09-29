import React, { Component } from "react";

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return(
      <div className="card">
        <h2>
          {cardName}
        </h2>
        <img src={ cardImage } alt={ cardName }/>
        <p>{cardDescription}</p>
        <p>Ataque: {cardAttr1}</p>
        <p>Mana: {cardAttr2}</p>
        <p>Defesa: {cardAttr3}</p>
        <h3>Tipo: {cardRare}</h3>
        {cardTrunfo === true && <p>SUPER TRUNFO</p>}
      </div>
    )
  }
}

export default Card;