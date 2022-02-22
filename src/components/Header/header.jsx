import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({
  firstname,
  isLogged
}) => {

  return (
    <div className="header">
      <nav className="header-nav">
        <div className="header-nav-leftside">
          <Link to="/" className='header-nav-leftside-link'>Accueil</Link>
        </div>
        {isLogged && (
          <div className="header-nav-rightside">
            Bienvenue {firstname}
          </div>
        )}
      </nav>
    </div>
  );
};

Header.propTypes = {
  firstname: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired
};

export default Header;
  