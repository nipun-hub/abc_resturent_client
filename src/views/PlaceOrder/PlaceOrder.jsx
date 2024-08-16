import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { StoreContext } from '../../context/StoreContext';
import { AddCircleOutline, DeleteForever, RemoveCircleOutline } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.375rem',
  width: '80%',
  bgcolor: 'background.paper',
};

const PlaceOrder = ({ placeOrderOpen, setplaceOrderclose, handlecouponOpen }) => {

  const { cartItem, food_list, addToCart, removeFromCart, deleteFromCart, getTotlCartAmmount } = React.useContext(StoreContext);

  return (
    <div>
      <Modal
        open={placeOrderOpen}
        onClose={setplaceOrderclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='p-10'>
            <div className=' w-full min-h-[60vh] max-h-[100vh] grid xl:grid-cols-4 grid-cols-3 gap-4 overflow-y-auto'>

              <div className='flex flex-col xl:col-span-1 col-span-3 '>
                <div className='flex gap-1 text-2xl'>
                  <img src="https://www.kfc.lk/images/icons/file.png" width={40} alt="" />
                  <p>Order Summary</p>
                </div>
                <hr />
                <div className='flex flex-col gap-4 pt-5 justify-between'>
                  <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3 ' onClick={handlecouponOpen}>Enter Your Coopen Code</button>

                  <div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Totle</p><p>Rs: {getTotlCartAmmount()}.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Delivery Charge</p><p>Rs: 15.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Packing Charge</p><p>Rs: 350.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Discount amount	</p><p>Rs: 350.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50 text-red-400 text-2xl items-center'>
                      <p className='flex gap-1 items-center'><img src="https://www.kfc.lk/images/icons/stamp.png" alt="" width={50} />Totle</p><p>Rs: {getTotlCartAmmount() + 15}.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 border-b-2 p-3 bg-gray-50'>
                      <p>Review your order before checkout.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className=' flex flex-col col-span-3 justify-between'>
                <div className='flex flex-col gap-1 text-2xl'>
                  <div className='flex gap-1'>
                    <img src="https://www.kfc.lk/images/icons/trolley.png" alt="" />
                    <p>Place Order</p>
                  </div>
                  <hr className='w-full' />
                </div>

                <FormGroup className='mt-5'>
                  <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mx-5'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
                    <TextField id="outlined-basic" label="Mobile" variant="outlined" type="number" />
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                    <TextField id="outlined-basic" label="description" variant="outlined" className='col-span-2' />
                    <FormControlLabel size="small" control={<Checkbox defaultChecked />} label="You Enter Details Is COrrected  ?" />
                  </div>
                </FormGroup>

                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3'>Place Order</button>

              </div>

            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default PlaceOrder



// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceOrder = () => {
//   const {getTotlCartAmmount} = useContext(StoreContext);
//   return (
//     <div>
//       <form action="" className='place-order'>
//         <div className="place-order-left">
//           <p className='title'>Delivary informatioon</p>
//           <div className="mult-fields">
//             <input type="text" placeholder='First Name' />
//             <input type="text" placeholder='Last Name' />
//           </div>
//           <input type="email" placeholder='Email Address' />
//           <input type="text" placeholder='Street' />
//           <div className="mult-fields">
//             <input type="text" placeholder='Cist' />
//             <input type="text" placeholder='State' />
//           </div>
//           <div className="mult-fields">
//             <input type="text" placeholder='Zip Code' />
//             <input type="text" placeholder='Country' />
//           </div>
//           <input type="text" placeholder='Phone' />
//         </div>
//         <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>

//             <div className="cart-total-details">
//               <p>Sub Total</p>
//               <p>${getTotlCartAmmount()}</p>
//             </div>

//             <hr />

//             <div className="cart-total-details">
//               <p>Delivary Free</p>
//               <p>{getTotlCartAmmount()==0?0:2}</p>
//             </div>

//             <hr />

//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${getTotlCartAmmount()==0?0:getTotlCartAmmount()+2}</b>
//             </div>

//           </div>
//           <button onClick={()=>navigate('/order')}>PROEED TO PAYMENT</button>
//         </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default PlaceOrder