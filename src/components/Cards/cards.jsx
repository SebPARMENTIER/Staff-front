import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImPencil2, ImBin } from 'react-icons/im';

import './cards.scss';

const Cards = ({ cardsName }) => {
  return (
    <div className="cards">
      <div className="cards-desc">Sélectionnez une carte pour voir le détail.</div>
      {cardsName.map((card) => (
        <div className='cards-list'>
          <Link
            key={card.id}
            className='cards-list-link'
            to={`/card/${card.id}`}
          >
            <div className="cards-list-link-header">
              <div className="cards-list-link-header-title">
                {card.title}
              </div>
              <div className="cards-list-link-header-options">
                <div className="cards-list-link-header-options-update">
                  <ImPencil2 onClick={console.log('update')} />
                </div>
                <div className="cards-list-link-header-options-delete">
                  <ImBin onClick={console.log('delete')} />
                </div>
              </div>
            </div>
            <div className="cards-list-link-desc">
              {card.description}
            </div>
          </Link>
        </div>
      ))}
      <div className="cards-add">
        <button
          className="cards-add-button"
          onClick={console.log('coucou')}
        >
          Ajoutez une nouvelle carte.
        </button>
      </div>
      
    </div>
  );
};

Cards.propTypes = {
  cardsName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired
};

export default Cards;
