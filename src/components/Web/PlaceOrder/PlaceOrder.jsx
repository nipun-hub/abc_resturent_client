import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, TextField } from '@mui/material';
import { Handshake, Hotel, LunchDining, Money, Payment, Restaurant } from '@mui/icons-material';
import { StoreContext } from '../../../context/StoreContext';
import { getUserId } from '../../../utils/Common/Notification';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.375rem',
  width: '80%',
  bgcolor: 'background.paper',
};

const PlaceOrder = ({ Open, Close, handleCouponOpen }) => {
  const { getTotalCartAmount, cartItem, itemsList } = useContext(StoreContext);
  const subTotal = getTotalCartAmount() + 300 + 50;

  const [step, setStep] = useState(1); // select type ==> pay data ==> or dating ==> address ==>  done 
  const [paymentMethod, setPaymentMethod] = useState('online'); // [ online , cod , visitShop ]

  const [formData, setFormData] = useState({
    orderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const PlaceOrder = () => {
    const cartItemEntries = Object.entries(cartItem);
    const nonEmptyCartItems = cartItemEntries.filter(([_, value]) => value > 0);

    const dataList = {
      "orderDate": formData.orderDate,
      "orderType": paymentMethod,
      "totalAmount": subTotal,
      "user": {
        "id": getUserId(),
      },
      "orderDetails": [
        nonEmptyCartItems.map(([key, value]) => {
          const item = itemsList.find(item => item.id === key);
          return {
            "quantity": value,
            "item": {
              "id": item.id,
            }
          }
        })

      ],
      "payment": {
        "paymentMethod": "ONLINE"
      }
    }
  }

  return (
    <div>
      <Modal
        open={Open}
        onClose={Close}
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
                  <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full p-3 ' onClick={handleCouponOpen}>Enter Your Cooped Code</button>

                  <div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Total</p><p>Rs: {getTotalCartAmount()}.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Delivery Charge</p><p>Rs: 300.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      <p>Packing Charge</p><p>Rs: 50.00</p>
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50'>
                      {/* <p>Discount amount	</p><p>Rs: 350.00</p> */}
                    </div>
                    <div className='flex justify-between border-t-2 p-3 bg-gray-50 text-red-400 text-2xl items-center'>
                      <p className='flex gap-1 items-center'><img src="https://www.kfc.lk/images/icons/stamp.png" alt="" width={50} />Total</p><p>Rs: {subTotal}.00</p>
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

                <FormGroup>

                  {
                    step == 1 &&
                    <div className='flex flex-col items-center gap-5 text-gray-300 text-2xl'>
                      <p>Select Payment Method</p>
                      <div className='flex gap-4'>
                        <FormLabel className={`bg-gray-200 hover:bg-gray-300  w-24 h-24 flex items-center justify-center rounded-full ${paymentMethod == 'online' ? 'bg-red-400 hover:bg-red-500' : ''}`}><Radio style={{ display: 'none' }} checked={paymentMethod == 'online'} onClick={() => setPaymentMethod('online')} /><Payment /></FormLabel>
                        <FormLabel className={`bg-gray-200 hover:bg-gray-300  w-24 h-24 flex items-center justify-center rounded-full ${paymentMethod == 'cod' ? 'bg-red-400 hover:bg-red-500' : ''}`}><Radio style={{ display: 'none' }} checked={paymentMethod == 'cod'} onClick={() => setPaymentMethod('cod')} /><Handshake /></FormLabel>
                        <FormLabel className={`bg-gray-200 hover:bg-gray-300  w-24 h-24 flex items-center justify-center rounded-full ${paymentMethod == 'visitShop' ? 'bg-red-400 hover:bg-red-500' : ''}`}><Radio style={{ display: 'none' }} checked={paymentMethod == 'visitShop'} onClick={() => setPaymentMethod('visitShop')} /><Restaurant /></FormLabel>
                      </div>
                      <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm'
                        onClick={() => { setStep(step + 1) }}
                      >Next</button>
                    </div>
                  }

                  {
                    (paymentMethod == 'online' && step == 2) &&
                    <div className='flex flex-col items-center gap-5 text-gray-300 text-2xl'>
                      <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                        <p className='text-xl font-semibold text-gray-300'>Card Details</p>
                        <div className='flex flex-col gap-5 px-10 my-3 w-full'>
                          <input type="text" placeholder='Card name' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="number" placeholder='Card No' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input type="number" placeholder='Exp date' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                            <input type="number" placeholder='Cvc' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          </div>
                        </div>
                      </div>
                      <div className='flex gap-5 justify-center mb-5'>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm' onClick={() => setStep(step - 1)}>Back</button>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm'
                          onClick={() => { setStep(step + 1) }}>Next</button>
                      </div>
                    </div>
                  }

                  {
                    (step == 2 && paymentMethod == 'visitShop') &&
                    <div className='flex flex-col items-center gap-5 text-gray-300 text-2xl'>
                      <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                        <p className='text-xl font-semibold text-gray-300'>Select dating date</p>
                        <div className='flex flex-col gap-5 px-10 my-3 w-full'>
                          <input type="datetime-local" name='orderDate' placeholder='select date' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' onClick={(e) => orderDate(e)} />
                        </div>
                      </div>
                      <div className='flex gap-5 justify-center mb-5'>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm' onClick={() => setStep(step - 1)}>Back</button>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm'
                          onClick={() => { setStep(step + 2) }}
                        >Next</button>
                      </div>
                    </div>
                  }

                  {(step == 2 && paymentMethod == 'cod') && setStep(step + 1)}

                  {step == 3 &&
                    <div className='flex flex-col items-center gap-5 text-gray-300 text-2xl'>
                      <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                        <p className='text-xl font-semibold text-gray-300'>Delivery details</p>
                        <div className='flex flex-col gap-5 px-10 my-3 w-full'>
                          <input type="text" placeholder='User name' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="email" placeholder='Email' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="tel" placeholder='mobile' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="text" placeholder='Address' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                        </div>
                      </div>
                      <div className='flex gap-5 justify-center'>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm'
                          onClick={() => {
                            paymentMethod == 'cod' ? setStep(step - 2) : setStep(step - 1)
                          }}>Back</button>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm'
                          onClick={() => { setStep(step + 1) }}>Next</button>
                      </div>
                    </div>
                  }

                  {step == 4 &&
                    <div className='flex flex-col items-center gap-5 text-gray-300 text-2xl'>
                      <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                        <p className='text-xl font-semibold text-gray-300'>Done</p>
                        {/* <div className='flex flex-col gap-5 px-10 my-3 w-full'>
                          <input type="text" placeholder='User name' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="email" placeholder='Email' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="tel" placeholder='mobile' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                          <input type="text" placeholder='Address' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                        </div> */}
                      </div>
                      <div className='flex gap-5 justify-center'>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm' onClick={() => {
                          paymentMethod == 'visitShop' ? setStep(step - 2) : setStep(step - 1)
                        }}>Back</button>
                        <button className='bg-red-800 rounded-full text-white hover:bg-red-700 py-2 px-10 text-sm'>Save</button>
                      </div>
                    </div>
                  }

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