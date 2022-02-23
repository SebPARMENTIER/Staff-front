import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './card.scss';

const Card = ({
  cardsName,
}) => {
  const { id } = useParams();

  const cardName = cardsName.find(element => element.id == id);

  console.log(('cardName', cardName));
  return (
    <div className="card">
      <div className="card-title">
        {cardName.title}
      </div>
      <div className="card-description">
        {cardName.description}
      </div>
      <div className="card-drinks">
        {cardName.drinks_card.map((drink) => (
          <div
            key={drink.id}
            className="card-drinks-drink"
          >
            <div className="card-drinks-drink-title">
              {drink.title}
            </div>
            <div className="card-drinks-drink-description">
              {drink.description}
            </div>
            <div className="card-drinks-drink-price">
              {drink.price}
            </div>
          </div>
        ))}
      </div>
      <div className="card-foods">
        {cardName.foods_card.map((food) => (
          <div
            key={food.id}
            className="card-foods-food"
          >
            <div className="card-foods-food-title">
              {food.title}
            </div>
            <div className="card-foods-food-description">
              {food.description}
            </div>
            <div className="card-foods-food-price">
              {food.price}
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
