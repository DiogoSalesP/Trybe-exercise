import React, { Component } from 'react'
import Form from "./components/Form";
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import SavedCards from './components/SavedCards';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cvc: '',
      number: '',
      expiry: '',
      focus: '',
      savedCards: [],
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  };

  handleInputFocus = (e) => {
    const { name } = e.target;
    this.setState({ focus: name })
  };

  validateForm = () => {
    const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    const { cvc, expiry, name, number } = this.state;
    const isNumberValidate = number.length === 16;
    const isNameValidate = nameRegex.test(name);
    const isCvcValidate = cvc.length === 3;
    const isExpiry = expiry.length === 5;
    return isCvcValidate && isNumberValidate && isNameValidate && isExpiry;
  };

  handleSaveCards = (e) => {
    e.preventDefault()
    const { cvc, expiry, name, number } = this.state;
    const newCard = { cvc, expiry, name, number };
    this.setState((presState) => ({
      savedCards: [...presState.savedCards, newCard],
      cvc: '',
      expiry: '',
      name: '',
      number: '',
    }))
  };

  render() {
    const { cvc, expiry, name, number, focus, savedCards } = this.state;
    return (
      <div>
        <Card
          cvc={cvc}
          expiry={expiry}
          name={name}
          number={number}
          focused={focus}
        />
        <Form
          state={this.state}
          handleInputChange={ this.handleInputChange }
          handleInputFocus= { this.handleInputFocus }
          validateForm= { this.validateForm }
          handleSaveCards = { this.handleSaveCards }
        />
        <SavedCards
          savedCards={savedCards}
        />
      </div>
    );
  }
};
