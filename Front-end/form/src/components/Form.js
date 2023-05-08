import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  render() {
    const { 
      state: { number, name, expiry, cvc }, 
      handleSaveCards, 
      handleInputChange, 
      handleInputFocus, 
      validateForm 
    } = this.props;
    return (
      <div className='Form'>
        <h1>
          { '<Componente Form />'}
        </h1>
        <form>
          <label htmlFor='cardNumber'>
            <input 
              id='cardNumber' 
              name='number'
              type='tel'
              value={ number}
              placeholder='Card Number'
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
            />
          </label>
          <label htmlFor='name'>
            <input 
              id='name' 
              name='name' 
              type='text'
              value={ name }
              placeholder='Name'
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
            />
          </label>
          <label htmlFor='expiry'>
            <input 
              id='expiry' 
              name='expiry' 
              type='text'
              value={expiry}
              placeholder='MM/YY'
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
            />
          </label>
          <label htmlFor='cvc'>
            <input 
              id='cvc' 
              name='cvc' 
              type='tel' 
              placeholder='cvc'
              value={ cvc }
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
            />
          </label>
          <button 
            type='submit' 
            disabled={ !validateForm() } 
            onClick={ handleSaveCards}>Cadastrar Cartão</button>
        </form>
      </div>
    )
  }
}
