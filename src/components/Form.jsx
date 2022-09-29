import React, { Component } from "react";

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="form">
        <label>
          <input type="text" name="cardName"  value={ cardName }  onChange={ onInputChange } placeholder="digite o nome da carta" />
        </label>

        <label>
          <textarea name="cardDescription" value={ cardDescription } onChange={ onInputChange } placeholder="digite uma descrição" />
        </label>

        <label>
          <input type="number" name="cardAttr1" value={ cardAttr1 }  onChange={ onInputChange } placeholder="Ataque" />
        </label>

        <label>
          <input type="number" name="cardAttr2" value={ cardAttr2 }  onChange={ onInputChange } placeholder="Mana" />
        </label>

        <label>
          <input type="number" name="cardAttr3" value={ cardAttr3 }  onChange={ onInputChange } placeholder="Defesa" />
        </label>

        <label>
          <input type="text" name="cardImage" value={ cardImage }  onChange={ onInputChange } placeholder="insira uma imagem" />
        </label>

        <label> Raridade
          <select name="cardRare" value={ cardRare }  onChange={ onInputChange }> 
            <option>Selecione</option>
            <option>Normal</option>
            <option>Raro</option>
            <option>Super Raro</option>
          </select>
        </label>

        <label> Trunfo
          <input type="checkbox" name="cardTrunfo" checked={ cardTrunfo }  onChange={ onInputChange } />
        </label>

        <button disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick }>Salvar</button>

      </form>
    )
  }
}

export default Form;