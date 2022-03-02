import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './logout.scss';

const Logout = ({
  openLogout,
  onClickLogout
}) => {
  // Turn user logout and return to initial state
  const handleLogout = () => {
    onClickLogout();
  };
  return (
    <div className={openLogout ? 'logout logout-open' : 'logout'}>
      <div className="logout-link">
        <Link
          className='logout-link-title'
          to="/"
          onClick={handleLogout}
        >
          Déconnexion
        </Link>
      </div>
    </div>
  );
};

Logout.propTypes = {
  openLogout: PropTypes.bool.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Logout;
