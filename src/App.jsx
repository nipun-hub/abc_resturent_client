import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer2 from './layout/Footer2/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import PlaceOrder from './views/PlaceOrder/PlaceOrder';
import Coupon from './components/Coupon/Coupon';
import Reviews from './components/Reviews/Reviews';
import { StoreContext } from './context/StoreContext';
import MyAccount from './components/MyAccount/MyAccount';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { reviewsOpen, token } = useContext(StoreContext);

  const [showLogin, setShowLogin] = React.useState(false);
  const [cartIsOpen, setCartIsOpen] = React.useState(false);
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [placeOrderOpen, setPlaceOrderOpen] = React.useState(false);
  const [couponOpen, setCouponOpen] = React.useState(false);
  const [isMyAccountOpen, setMyAccountOpen] = React.useState(false);

  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleCheckoutOpen = () => setCheckoutOpen(true);
  const handleCheckoutClose = () => setCheckoutOpen(false);

  const handlePlaceOrderOpen = () => setPlaceOrderOpen(true);
  const handlePlaceOrderClose = () => setPlaceOrderOpen(false);

  const handleCouponOpen = () => setCouponOpen(true);
  const handleCouponClose = () => setCouponOpen(false);


  useEffect(() => {
    setMyAccountOpen(false)
  }, [token])


  return (
    <>
      {<LoginPopup open={showLogin} close={handleLoginClose} />}
      <div className='app'>
        <NavBar
          setShowLogin={handleLoginOpen}
          setCartIsOpen={setCartIsOpen}
          setCheckoutOpen={setCheckoutOpen}
          setMyAccountOpen={setMyAccountOpen}
        />
        <Outlet />
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            zIndex: 99999, // Set your desired z-index value
          },
        }}
        containerStyle={{
          zIndex: 99999, // This affects the entire toast container
        }}

      />
      <Cart
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        setCheckoutOpen={handleCheckoutOpen}
      />
      <Checkout
        checkoutOpen={checkoutOpen}
        setCheckoutClose={handleCheckoutClose}
        setPlaceOrderOpen={handlePlaceOrderOpen}
      />
      <PlaceOrder
        Open={placeOrderOpen}
        Close={handlePlaceOrderClose}
        handleCouponOpen={handleCouponOpen}
      />
      <Coupon
        Open={couponOpen}
        Close={handleCouponClose}
      />
      {reviewsOpen && <Reviews />}
      {token.token && <MyAccount isOpen={isMyAccountOpen} setIsOpen={setMyAccountOpen} />}
      <Footer2 />
    </>
  );
};

export default App;