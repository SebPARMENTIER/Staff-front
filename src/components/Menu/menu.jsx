import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './menu.scss';

const Menu = ({
  menusName,
}) => {
  const { id } = useParams();

  const menuName = menusName.find(element => element.id == id);

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="menu-header-title">
          {menuName.title}
        </div>
        <div className="menu-header-price">
          {menuName.price}
        </div>
      </div>
      <div className="menu-description">
        {menuName.description}
      </div>
      <div className="menu-drinks">
        <div className="menu-drinks-desc">Nos boissons</div>
        {menuName.drinks_menu.map((drink) => (
          <div
            key={drink.id}
            className="menu-drinks-drink"
          >
            <div className="menu-drinks-drink-header">
              <div className="menu-drinks-drink-header-title">
                {drink.title}
              </div>
              <div className="menu-drinks-drink-header-price">
                {drink.price}
              </div>
            </div>
            <div className="menu-drinks-drink-description">
              {drink.description}
            </div>
          </div>
        ))}
      </div>
      <div className="menu-foods">
        <div className="menu-foods-desc">Nos plats</div>
        {menuName.foods_menu.map((food) => (
          <div
            key={food.id}
            className="menu-foods-food"
          >
            <div className="menu-foods-food-header">
              <div className="menu-foods-food-header-title">
                {food.title}
              </div>
              <div className="menu-foods-food-header-price">
                {food.price}
              </div>
            </div>
            <div className="menu-foods-food-description">
              {food.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  menusName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired
};

export default Menu;
