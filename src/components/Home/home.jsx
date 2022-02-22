import Field from '../Field/field';

import './home.scss';

const Home = () => {

  return (
    <div className="home">
      <div className="home-desc">Bonjour, veuillez saisir vos identifiants pour vous connecter.</div>
      <div className="home-connexion">
        <form
          className="home-connexion-form"
          //onSubmit={}
        >
          <div className="home-connexion-form-field">
            <Field
              className='home-connexion-form-field-email'
              name="email"
              type='email'
              placeholder='Email...'
            />
            <Field
              className='home-connexion-form-field-password'
              name='password'
              type='password'
              placeholder='Mot de passe...'
            />
          </div>
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
  
  export default Home;
  