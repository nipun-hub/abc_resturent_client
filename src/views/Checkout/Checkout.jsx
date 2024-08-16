import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { StoreContext } from '../../context/StoreContext';
import { AddCircleOutline, DeleteForever, RemoveCircleOutline } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.375rem',
  width: '80%',
  bgcolor: 'background.paper',
};

const Checkout = ({ checkoutOpen, setcheckoutClose , setplaceOrderOpen ,  }) => {

  const { cartItem, food_list, addToCart, removeFromCart, deleteFromCart, getTotlCartAmmount } = React.useContext(StoreContext);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={checkoutOpen}
        onClose={setcheckoutClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='p-10'>
            <div className=' w-full min-h-[70vh] max-h-[100vh] grid xl:grid-cols-4 grid-cols-3 gap-4 overflow-y-auto'>
              <div className='h-10 justify-between flex flex-col col-span-3'>
                <div className='flex gap-1 text-2xl'>
                  <img src="https://www.kfc.lk/images/icons/trolley.png" alt="" />
                  <p>Your Cart</p>
                </div>
                <hr />

                <div className='mt-5'>
                  <div className='grid grid-cols-2 gap-5'>
                    {
                      Object.keys(cartItem).filter(key => cartItem[key] !== 0).length > 0
                        ?
                        (
                          Object.entries(cartItem).map(([key, value], index) => {
                            if (value > 0) {
                              const item = food_list.find(item => item._id === key);
                              return item ? (
                                <>
                                  <div key={key} className='flex gap-3 justify-between border-dashed border-4 p-2'>
                                    <img src={item.image} width={100} alt="" className='rounded' />
                                    <div>
                                      <p>{item.name}</p>
                                      <p>Rs: {item.price}.00</p>
                                    </div>
                                    <div className='flex gap-3 text-xs items-center'>
                                      <span className='text-gray-400' onClick={() => removeFromCart(key)}><RemoveCircleOutline /></span>
                                      <span>{value}</span>
                                      <span className='text-green-400' onClick={() => addToCart(key)}><AddCircleOutline /></span>
                                    </div>
                                    <div className='flex items-center'>
                                      <span className='text-red-500' onClick={() => deleteFromCart(key)}><DeleteForever /></span>
                                    </div>
                                  </div>
                                  {/* <hr /> */}
                                </>
                              ) : null;
                            }
                          })
                        )

                        :
                        <div className='flex flex-col h-full w-full gap-3 text-gray-400'>
                          <p>No items in your cart.</p>
                          <span className='text-sm'>Your cart looks little empty. Why not checkout some of our unbeatable deals.</span>
                        </div>
                    }
                  </div>
                </div>

              </div>
              <div className='h-10 justify-between flex flex-col xl:col-span-1 col-span-3 '>
                <div className='flex gap-1 text-2xl'>
                  <img src="https://www.kfc.lk/images/icons/file.png" width={40} alt="" />
                  <p>Order Summary</p>
                </div>
                <hr />
                <div className='flex flex-col gap-4 pt-5 justify-between'>
                  <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3 '>Enter Your Coopen Code</button>

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
                      <p className='flex gap-3 items-center'><img src="https://www.kfc.lk/images/icons/stamp.png" alt="" width={50} />Totle</p><p>Rs: {getTotlCartAmmount() + 15}.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 border-b-2 p-3 bg-gray-50'>
                      <p>Review your order before checkout.</p>
                    </div>
                  </div>

                  <button
                    className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3 '
                    onClick={()=>{
                      setcheckoutClose()
                      setplaceOrderOpen()
                    }}
                  >Place Order</button>

                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

// const Checkout = () => {

//   const { cartItem, food_list, removeFromCart, getTotlCartAmmount } = useContext(StoreContext);

//   const navigate = useNavigate();

//   return (
//     <div className='cart'>

//       <div className="cartItem">
//         <div className="card-item-title">
//           <p>Items</p>
//           <p>title</p>
//           <p>price</p>
//           <p>Quantity</p>
//           <p>Title</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItem[item._id] > 0) {
//             return (
//               <>
//                 <div className="card-item-title card-item-item">
//                   <img src={item.image} alt="" srcset="" />
//                   <p>{item.name}</p>
//                   <p>$ {item.price}</p>
//                   <p>{cartItem[item._id]}</p>
//                   <p>$ {item.price * cartItem[item._id]}</p>
//                   <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
//                 </div>
//                 <hr />
//               </>
//             )
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
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
//               <p>{getTotlCartAmmount() == 0 ? 0 : 2}</p>
//             </div>

//             <hr />

//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${getTotlCartAmmount() == 0 ? 0 : getTotlCartAmmount() + 2}</b>
//             </div>

//           </div>
//           <button onClick={() => navigate('/order')}>PROEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you are a promo code, Enter it here</p>
//             <div className="cart-promocode-input">
//               <input type="text" placeholder='promo code' />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Checkout
