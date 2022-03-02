import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Cards from '../../containers/Cards';
import Card from '../../containers/Card';
import Footer from '../Footer/footer';

import './app.scss';

const App = ({
  isLogged
}) => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {isLogged && (
          <>
            <Route exact path='/cards' element={<Cards />} />
            <Route exact path='/card/:id' element={<Card />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

export default App;
