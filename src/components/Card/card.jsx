import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './card.scss';

const Card = ({
  cardsName,
}) => {
  const { id } = useParams();

  const cardName = cardsName.find(element => element.id == id);

  return (
    <div className="card">
      <div className="card-title">
        {cardName.title}
      </div>
      <div className="card-description">
        {cardName.description}
      </div>
      <div className="card-drinks">
        <div className="card-drinks-desc">Nos boissons</div>
        {cardName.drinks_card.map((drink) => (
          <div
            key={drink.id}
            className="card-drinks-drink"
          >
            <div className="card-drinks-drink-header">
              <div className="card-drinks-drink-header-title">
                {drink.title}
              </div>
              <div className="card-drinks-drink-header-price">
                {drink.price}
              </div>
            </div>
            <div className="card-drinks-drink-description">
              {drink.description}
            </div>
          </div>
        ))}
      </div>
      <div className="card-foods">
        <div className="card-foods-desc">Nos plats</div>
        {cardName.foods_card.map((food) => (
          <div
            key={food.id}
            className="card-foods-food"
          >
            <div className="card-foods-food-header">
              <div className="card-foods-food-header-title">
                {food.title}
              </div>
              <div className="card-foods-food-header-price">
                {food.price}
              </div>
            </div>
            <div className="card-foods-food-description">
              {food.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  cardsName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired
};

export default Card;
