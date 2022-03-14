import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../Field/field';
import Loading from '../Loading/loading';

import './home.scss';

const Home = ({
  email,
  password,
  restaurant,
  changeField,
  handleLogin,
  isError,
  isLogged,
  getAllCards,
  isLoading
}) => {
  // Submit login form
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  // Retrieve all cards
  const handleGetAllCards = () => {
    getAllCards();
  };
  return (
    <div className="home">
      {/* If user is not logged, dipslay login form */}
      {!isLogged && (
        <>
          <div className="home-header">staff</div>
          <div className="home-desc">Bonjour, veuillez saisir vos identifiants pour vous connecter.</div>
          <div className="home-connexion">
            <form
              className="home-connexion-form"
              onSubmit={handleSubmit}
            >
              <div className="home-connexion-form-field">
                <Field
                  className='home-connexion-form-field-email'
                  name="email"
                  type='email'
                  placeholder='Email...'
                  onChange={changeField}
                  value={email}
                />
                <Field
                  className='home-connexion-form-field-password'
                  name='password'
                  type='password'
                  placeholder='Mot de passe...'
                  onChange={changeField}
                  value={password}
                />
              </div>
              {isError && (
                <div className="home-connexion-form-error">
                  Vérifiez vos identifiants de connexion.
                </div>
              )}
              {isLoading && (
                <div className="home-connexion-loading">
                  <Loading />
                </div>
              )}
              {!isLoading && (
                <button
                  className="home-connexion-form-button"
                  type='submit'
                >
                  Valider
                </button>
              )}
            </form>
          </div>
        </>
      )}
      {/* If user is logged, display restaurant informations */}
      {isLogged && (
        <>
          {isError && (
            <div className="home-access-error">
              Une erreur s'est produite, veuillez vous reconnecter.
            </div>
          )}
          {!isError && (
            <>
            <div className="home-access">
              <div className="home-access-restaurant">
                <div className="home-access-restaurant-name">{restaurant.name}</div>
                <div className="home-access-restaurant-adress">{restaurant.adress}</div>
                <div className="home-access-restaurant-location">
                  <div className="home-access-restaurant-location-zip_code">{restaurant.zip_code}</div>
                  <div className="home-access-restaurant-location-city">{restaurant.city}</div>
                </div>
                <div className="home-access-restaurant-phone">{restaurant.phone}</div>
                <div className="home-access-restaurant-email">{restaurant.email}</div>
              </div>
              <div className="home-access-card">
                  <Link
                    className='home-access-card-link'
                    to='/cards'
                    onClick={handleGetAllCards}
                  >
                    Accéder aux cartes du restaurant
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

Home.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    adress: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }).isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  getAllCards: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};
  
export default Home;
  