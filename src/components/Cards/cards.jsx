import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './cards.scss';

const Cards = ({ cardsName }) => {
  return (
    <div className="cards">
      <div className="cards-desc">Sélectionnez une carte pour voir le détail.</div>
      {cardsName.map((card) => (
        <div
          className="cards-list"
          key={card.id}
        >
          <Link
            className='cards-list-link'
            to={`/card/${card.id}`}
          >
            {card.title}
            </Link>
        </div>
      ))}
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
