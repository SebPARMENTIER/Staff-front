import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './logout.scss';

// == Component
const Logout = ({
  openLogout,
  onClickLogout
}) => {
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

// == Export
export default Logout;