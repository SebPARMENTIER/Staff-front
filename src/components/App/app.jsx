import { Route, Routes } from 'react-router';
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Cards from '../../containers/Cards';
import Card from '../../containers/Card';
import Footer from '../Footer/footer';

import './app.scss';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cards' element={<Cards />} />
        <Route exact path='/card/:id' element={<Card />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
