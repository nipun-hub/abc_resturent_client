import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import Footer from './layout/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer2 from './layout/Footer2/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import PlaceOrder from './views/PlaceOrder/PlaceOrder';
import Coupon from './components/Coupon/Coupon';
import Reviews from './components/Reviews/Reviews';
import { StoreContext } from './context/StoreContext';
import MyAccount from './components/MyAccount/MyAccount';

const App = () => {

  const { reviewsOpen, token } = useContext(StoreContext);

  const [showLogin, setShowLogin] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [checkoutOpen, setcheckoutOpen] = React.useState(false);
  const handlecheckoutOpen = () => setcheckoutOpen(true);
  const handlecheckoutClose = () => setcheckoutOpen(false);

  const [placeOrderOpen, setplaceOrderOpen] = React.useState(false);
  const handleplaceOrderOpen = () => setplaceOrderOpen(true);
  const handleplaceOrderClose = () => setplaceOrderOpen(false);

  const [couponOpen, setcouponOpen] = React.useState(false);
  const handlecouponOpen = () => setcouponOpen(true);
  const handlecouponClose = () => setcouponOpen(false);

  const [isMyAccountOpen, setisMyAccountOpen] = React.useState(false);

  useEffect(() => {
    setisMyAccountOpen(false)
  }, [token])


  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} setIsOpen={setIsOpen} setcheckoutOpen={setcheckoutOpen} setisOpenMyAccount={setisMyAccountOpen} />
        <Outlet />

      </div>
      {/* <Footer /> */}
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} setcheckoutOpen={handlecheckoutOpen} />
      <Checkout checkoutOpen={checkoutOpen} setcheckoutClose={handlecheckoutClose} setplaceOrderOpen={handleplaceOrderOpen} setcouponOpen={setcouponOpen} />
      <PlaceOrder placeOrderOpen={placeOrderOpen} setplaceOrderclose={handleplaceOrderClose} handlecouponOpen={handlecouponOpen} />
      <Coupon couponOpen={couponOpen} handlecouponClose={handlecouponClose} />
      {reviewsOpen && <Reviews />}
      {token.token && <MyAccount isOpen={isMyAccountOpen} setIsOpen={setisMyAccountOpen} />}
      <Footer2 />
    </>
  );
};

export default App;