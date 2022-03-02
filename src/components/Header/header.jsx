import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logout from '../../containers/Logout';
import './header.scss';

const Header = ({
  firstname,
  isLogged,
  openLogout,
  onClickArrow
}) => {
  // Open logout menu
  const handleOnClickArrow = () => {
    onClickArrow();
  };
  return (
    <div className="header">
      <nav className="header-nav">
        <div className="header-nav-leftside">
          <Link to="/" className='header-nav-leftside-link'>Accueil</Link>
        </div>
        {isLogged && (
          <div className="header-nav-rightside">
            <div className="header-nav-rightside-welcome">
            Bienvenue {firstname}
            </div>
            <button
              className={openLogout ? "header-nav-rightside-logout-open" : "header-nav-rightside-logout"}
              onClick={handleOnClickArrow}
            >
              &lt;
            </button>
          </div>
        )}
      </nav>
      <Logout />
    </div>
  );
};

Header.propTypes = {
  firstname: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  openLogout: PropTypes.bool.isRequired,
  onClickArrow: PropTypes.func.isRequired
};

export default Header;
  