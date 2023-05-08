import React from 'react';
import data from '../data';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    })
  };
  
  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <section className='Search__input'>
          <input type="text" id='search' name='search' onChange={ this.handleSearch } />
        </section>
        <div className="Series__container">
          { data
            .filter((serie) => serie.name.toLowerCase().startsWith(searchValue))
            .map((serie) => (<Card
            key={ serie.id }
            name={ serie.name }
            genre={ serie.genre }
            rating={ serie.nota }
            personagens={ serie.characters }
            imagem={ serie.image }
            release={ serie.release }
          />)) }
        </div>
      </div>

    );
  }
}

export default CardList;