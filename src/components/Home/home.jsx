import PropTypes from 'prop-types';

import Field from '../Field/field';

import './home.scss';

const Home = ({
  email,
  password,
  changeField,
  handleLogin,
  isError
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  return (
    <div className="home">
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
          <button
            className="home-connexion-form-button"
            type='submit'
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

Home.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
};
  
export default Home;
  