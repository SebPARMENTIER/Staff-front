import { Route, Routes } from 'react-router';
import Header from '../Header/header';
import Home from '../Home/home';
import Footer from '../Footer/footer';

import './app.scss';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
