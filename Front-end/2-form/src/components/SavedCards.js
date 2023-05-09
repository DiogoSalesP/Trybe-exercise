import React, { Component } from 'react'
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default class SavvedCars extends Component {
  render() {
    const { savedCards } = this.props;
    return (
      <div>
        {savedCards
          .map((card, index) => (
          <Card
            key={ index }
            cvc={card.cvc}
            expiry={card.expiry}
            name={card.name}
            number={card.number}
            focused={card.focus}
          />
        ))}
      </div>
    )
  }
}
