import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { name, genre, rating, imagem, personagens, release } = this.props;
    return (
      <div className="Card">
        <div className="Card__thumbnail">
          <img src={ imagem } alt={ name } />
        </div>
        <div className="Card__body">
          <h1>{ name }</h1>
          <p>
            <small>{ release }</small>
            <small>{ genre }</small>
          </p>
          <p className="stars">
            {'⭐️ '.repeat(rating)}
            { rating }
            /10
          </p>

          <h2>Personagens</h2>
          <ul>
            {personagens.map((person, index) => <li key={ index }>{ person }</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  personagens: PropTypes.arrayOf(PropTypes.string).isRequired,
  release: PropTypes.number.isRequired,
};

export default Card;