import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './menus.scss';

const Menus = ({ menusName }) => {
  return (
    <div className="menus">
      <div className="menus-desc">Sélectionnez un menu pour voir le détail.</div>
      {menusName.map((menu) => (
        <div
          className="menus-list"
          key={menu.id}
        >
          <Link
            className='menus-list-link'
            to={`/menu/${menu.id}`}
          >
            {menu.title}
            </Link>
        </div>
      ))}
    </div>
  );
};

Menus.propTypes = {
  menusName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired
};

export default Menus;
