import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import Footer from './layout/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer2 from './layout/Footer2/Footer';

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} />
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Footer2/>
    </>
  );
};

export default App;