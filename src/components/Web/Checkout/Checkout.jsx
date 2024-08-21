import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddCircleOutline, DeleteForever, RemoveCircleOutline } from '@mui/icons-material';
import { StoreContext } from '../../../context/StoreContext';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.375rem',
  width: '80%',
  bgcolor: 'background.paper',
};

const Checkout = ({ checkoutOpen, setCheckoutClose, setPlaceOrderOpen }) => {
  const { cartItem, food_list, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(StoreContext);

  const renderCartItems = () => {
    const cartItemEntries = Object.entries(cartItem);
    const nonEmptyCartItems = cartItemEntries.filter(([_, value]) => value > 0);

    if (nonEmptyCartItems.length === 0) {
      return (
        <div className='flex flex-col h-full w-full gap-3 text-gray-400'>
          <p>No items in your cart.</p>
          <span className='text-sm'>Your cart looks a little empty. Why not check out some of our unbeatable deals?</span>
        </div>
      );
    }

    return nonEmptyCartItems.map(([key, value]) => {
      const item = food_list.find(item => item._id === key);
      if (!item) return null;

      return (
        <div key={key} className='flex gap-3 justify-between border-dashed border-4 p-2'>
          <img src={item.image} width={100} alt={item.name} className='rounded' />
          <div>
            <p>{item.name}</p>
            <p>Rs: {item.price}.00</p>
          </div>
          <div className='flex gap-3 text-xs items-center'>
            <button className='text-gray-400' onClick={() => removeFromCart(key)}><RemoveCircleOutline /></button>
            <span>{value}</span>
            <button className='text-green-400' onClick={() => addToCart(key)}><AddCircleOutline /></button>
          </div>
          <div className='flex items-center'>
            <button className='text-red-500' onClick={() => deleteFromCart(key)}><DeleteForever /></button>
          </div>
        </div>
      );
    });
  };

  return (
    <Modal
      open={checkoutOpen}
      onClose={setCheckoutClose}
      aria-labelledby="checkout-modal"
      aria-describedby="checkout-description"
    >
      <Box sx={modalStyle}>
        <div className='p-10'>
          <div className='w-full min-h-[60vh] max-h-[100vh] grid xl:grid-cols-4 grid-cols-3 gap-4 overflow-y-auto'>
            <div className='h-10 justify-between flex flex-col col-span-3'>
              <div className='flex gap-1 text-2xl'>
                <img src="https://www.kfc.lk/images/icons/trolley.png" alt="Cart" />
                <p>Your Cart</p>
              </div>
              <hr />
              <div className='mt-5'>
                <div className='grid grid-cols-2 gap-5'>
                  {renderCartItems()}
                </div>
              </div>
            </div>
            <div className='h-10 justify-between flex flex-col xl:col-span-1 col-span-3'>
              <div className='flex gap-1 text-2xl'>
                <img src="https://www.kfc.lk/images/icons/file.png" width={40} alt="Order Summary" />
                <p>Order Summary</p>
              </div>
              <hr />
              <div className='flex flex-col gap-4 pt-5 justify-between'>
                <div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Total</p><p>Rs: {getTotalCartAmount()}.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Delivery Charge</p><p>Rs: 15.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Packing Charge</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                    <p>Discount amount</p><p>Rs: 350.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 p-3 bg-gray-50 text-red-400 text-2xl items-center'>
                    <p className='flex gap-3 items-center'>
                      <img src="https://www.kfc.lk/images/icons/stamp.png" alt="Total" width={50} />Total
                    </p>
                    <p>Rs: {getTotalCartAmount() + 15}.00</p>
                  </div>
                  <div className='flex justify-between border-t-2 border-b-2 p-3 bg-gray-50'>
                    <p>Review your order before checkout.</p>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => {
                    setCheckoutClose();
                    setPlaceOrderOpen();
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Checkout;