import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import Footer from './layout/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer2 from './layout/Footer2/Footer';
import Cart from './components/Cart/Cart';

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} setIsOpen={setIsOpen}/>
        <Outlet />

      </div>
      {/* <Footer /> */}
      <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer2 />
    </>
  );
};

export default App;